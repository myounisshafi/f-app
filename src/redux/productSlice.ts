/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import { createSlice } from "@reduxjs/toolkit";

import type { AppState } from "./store";
import { searchProductsApi } from "../components/api/api";
import { reviewsMock } from "../shared/mocks/reviewsmock";
import { PRODUCTS_PAGE_LIMIT } from "../shared/mocks/consts";

export type Reviews = typeof reviewsMock;
export type ProductReviews = {
  id: string;
  reviews: Reviews;
};

interface ProductState {
  idProductsSaved: string[];
  products: any[];
  productsList: any[];
  idReviewsSaved: string[];
  reviews: ProductReviews[];
  filterReview: {
    filter: boolean;
    filterTags: PayloadFilterReview[];
  };
  isLoadingProducts: boolean;
  productsTotalCounts: number;
  ratings: any[];
}

export type PayloadFilterReview = {
  filterTag: string;
  mood: string;
};

export const initialState: ProductState = {
  idProductsSaved: [],
  products: [],
  productsList: [],
  idReviewsSaved: [],
  reviews: [],
  filterReview: { filter: false, filterTags: [] },
  isLoadingProducts: false,
  productsTotalCounts: 0,
  ratings: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action: { type: ""; payload: any }) {
      if (!state.idProductsSaved.includes(action.payload._id)) {
        state.idProductsSaved.push(action.payload._id);
        state.products.push(action.payload);
      }
    },
    setProductsListData(state, action: { type: ""; payload: any }) {
      if (action.payload) {
        return {
          ...state,
          productsList: action.payload?.products,
          productsTotalCounts:
            action.payload?.count?.length > 0
              ? action.payload?.count[0].count
              : 0,
          isLoadingProducts: false,
          ratings: action.payload?.ratings?.reduce(
            (obj, currentItem) => ({ ...obj, [currentItem.k]: currentItem }),
            {}
          ),
        };
      } else {
        return {
          ...state,
          productsList: null,
          productsTotalCounts: 0,
          isLoadingProducts: false,
          ratings: null,
        };
      }
    },
    setProductsLoading(state, action: { type: ""; payload: any }) {
      state.isLoadingProducts = action.payload;
    },
    setReviews(
      state,
      action: { type: ""; payload: { id: string; reviews: any[] } }
    ) {
      if (state.idReviewsSaved.includes(action.payload.id)) return;

      state.idReviewsSaved.push(action.payload.id);
      state.reviews.push(action.payload);
    },

    setFilterReview: (
      state,
      action: { type: ""; payload: PayloadFilterReview }
    ) => {
      const index = state.filterReview.filterTags.findIndex(
        (element) => element.filterTag === action.payload.filterTag
      );
      if (index !== -1) {
        state.filterReview.filterTags.splice(index, 1);
      } else {
        state.filterReview.filterTags.push(action.payload);
      }
      !state.filterReview.filterTags.length
        ? (state.filterReview.filter = false)
        : (state.filterReview.filter = true);
    },
    resetFilterReview: (state) => {
      state.filterReview.filter = false;
      state.filterReview.filterTags = [];
    },
  },
});

export const { setProducts, setReviews, setFilterReview, resetFilterReview } =
  productSlice.actions;

export const productsState = (state: AppState) => state.products.products;
export const isLoadingProducts = (state: AppState) =>
  state.products.isLoadingProducts;
export const productsListState = (state: AppState) =>
  state.products.productsList;
export const productsTotalCountsState = (state: AppState) =>
  state.products.productsTotalCounts;
export const ratingsState = (state: AppState) => state.products.ratings;
export const reviewsState = (state: AppState) => state.products.reviews;
export const filterReviewState = (state: AppState) =>
  state.products.filterReview;
// later
export const searchProducts = (abortControler) => {
  return async (dispatch, getState) => {
    let stateFilters = getState().filters;

    // if (stateFilters.priceRangeSelected == null) return;

    const requestPayLoad: any = {};
    requestPayLoad.limit = PRODUCTS_PAGE_LIMIT; //LIMIT 50
    requestPayLoad.offset = stateFilters.currentPage * PRODUCTS_PAGE_LIMIT; //LIMIT 50
    requestPayLoad.keyword = stateFilters.keyword ?? "";
    requestPayLoad.minPrice = stateFilters.priceRangeSelected?.[0] ?? 0;
    requestPayLoad.maxPrice = stateFilters.priceRangeSelected?.[1] ?? 10000;

    requestPayLoad.lables = [];
    requestPayLoad.tags = [];

    if (stateFilters.skinTypeFilter)
      requestPayLoad.lables.push(stateFilters.skinTypeFilter);

    if (stateFilters.concernTypeBenefitFilter) {
      requestPayLoad.lables.push(stateFilters.concernTypeBenefitFilter.label);
    } else if (stateFilters.concernTypeFilter?.labels) {
      requestPayLoad.lables.push(...stateFilters.concernTypeFilter.labels);
    }
    if (stateFilters.acneProneFilter?.key == "yes")
      requestPayLoad.lables.push(stateFilters.acneProneFilter.dbTag);

      if (stateFilters.subProductCategory) {
        stateFilters.subProductCategory?.map((item) => {
          if (item.tag) {
            requestPayLoad.tags.push(item.tag);
          }
        });
      }
      else if(stateFilters.mainProductCategory){
        stateFilters.mainProductCategory.subCategory?.map((item) => {
          if (item.tag) {
            requestPayLoad.tags.push(item.tag);
          }
        });
       
      }
    dispatch(productSlice.actions.setProductsLoading(true));

    searchProductsApi(requestPayLoad, abortControler)
      .then((responce) => {
        if (responce.data)
          dispatch(productSlice.actions.setProductsListData(responce.data));
        else dispatch(productSlice.actions.setProductsListData(null));
      })
      .catch((error) => {
        if (error?.code != "ERR_CANCELED")
          dispatch(productSlice.actions.setProductsListData(null));
      });
  };
};
export default productSlice.reducer;
