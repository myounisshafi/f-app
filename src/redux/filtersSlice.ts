/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

import type { AppState } from "./store";
import { FilterAcneProneTypes } from "../shared/mocks/consts";
import { filterStatsApi, loadUSerPreference } from "../components/api/api";

export interface FiltersState {
  skinTypeFilter: any;
  concernTypeFilter: any;
  isLodingFiltersStatics: boolean;
  concernTypeBenefitFilter: any;
  acneProneFilter: any;
  keyword: string;
  filtersStats: any;
  priceRangeSelected: number[];
  mainProductCategory: any;
  subProductCategory: any;
  userPrefernce: any;

  currentPage: number;
}

const initialState: FiltersState = {
  isLodingFiltersStatics: false,
  skinTypeFilter: null,
  concernTypeFilter: null,
  concernTypeBenefitFilter: null,
  acneProneFilter: FilterAcneProneTypes[0],
  keyword: "",
  filtersStats: null,
  priceRangeSelected: null,
  mainProductCategory: null,
  subProductCategory: null,
  userPrefernce: null,

  currentPage: 0,
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLodingFiltersStatics = action.payload;
    },
    setSkinTypeFilter: (state, action) => {
      return {
        ...state,
        skinTypeFilter: action.payload,
        currentPage: 0,
      };
    },
    setConcernTypeFilter: (state, action) => {
      return {
        ...state,
        concernTypeFilter: action.payload,
        concernTypeBenefitFilter: action.payload?.benefits ?? null,
        currentPage: 0,
      };
    },
    setConcernTypeBenifitFilter: (state, action) => {
      return {
        ...state,
        concernTypeBenefitFilter: Array.isArray(action.payload)
          ? action.payload
          : [action.payload],
        currentPage: 0,
      };
    },
    setAcnetypeFilter: (state, action) => {
      return {
        ...state,
        acneProneFilter: action.payload,
        currentPage: 0,
      };
    },

    setSearchKeyword: (state, action) => {
      return {
        ...state,
        keyword: action.payload.keyword,
        currentPage: 0,
      };
    },
    setUserPrefernce: (state, action) => {
      state.userPrefernce = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setFiltersStats: (state, action) => {
      // let priceData = [0, 1000];
      // if (action.payload?.price?.length > 0) {
      //   priceData = [
      //     action.payload?.price[0].min_price?.price ?? 0,
      //     action.payload?.price[0].max_price?.price ?? 1000,
      //   ];
      // }

      return {
        ...state,
        filtersStats: action.payload,
        // priceRangeSelected: priceData,
        isLodingFiltersStatics: false,
      };
    },

    setMainCategoryFilter: (state, action) => {
      return {
        ...state,
        mainProductCategory: action.payload.mainCategory,
        subProductCategory: null,
        currentPage: 0,
      };
    },
    setSubCategoryFilter: (state, action) => {
      return {
        ...state,
        subProductCategory: Array.isArray(action.payload)
          ? action.payload
          : [action.payload],
        currentPage: 0,
      };
    },
    setSelectedPriceRange: (state, action) => {
      return {
        ...state,
        priceRangeSelected: action.payload,
        currentPage: 0,
      };
    },
  },
});

export const { setSkinTypeFilter, setSearchKeyword, setConcernTypeFilter } =
  filtersSlice.actions;

export const getFiltersStats = (abortControler) => {
  return async (dispatch, getState) => {
    let stateFilters = getState().filters;
    const requestPayLoad: any = {};

    requestPayLoad.keyword = stateFilters.keyword ?? "";
    requestPayLoad.lables = [];
    requestPayLoad.tags = [];
    if (stateFilters.skinTypeFilter)
      requestPayLoad.lables.push(stateFilters.skinTypeFilter);

   if (stateFilters.concernTypeBenefitFilter?.length > 0) {
      stateFilters.concernTypeBenefitFilter.map((item) => {
        requestPayLoad.lables.push(item.label);
      });
    } else if (stateFilters.concernTypeFilter?.benefits) {
      stateFilters.concernTypeFilter.benefits.map((item) => {
        requestPayLoad.lables.push(item.label);
      });
    }

    if (stateFilters.acneProneFilter?.key == "yes")
      requestPayLoad.lables.push(stateFilters.acneProneFilter.dbTag);

    if (stateFilters.subProductCategory) {
      stateFilters.subProductCategory?.map((item) => {
        if (item.tag) {
          requestPayLoad.tags.push(item.tag);
        }
      });
    } else if (stateFilters.mainProductCategory) {
      stateFilters.mainProductCategory.subCategory?.map((item) => {
        if (item.tag) {
          requestPayLoad.tags.push(item.tag);
        }
      });
    }

    dispatch(filtersSlice.actions.setIsLoading(true));
    filterStatsApi(requestPayLoad, abortControler)
      .then((filters) => {
        if (filters?.data?.length > 0) {
          dispatch(filtersSlice.actions.setFiltersStats(filters.data[0]));
        } else {
          dispatch(filtersSlice.actions.setFiltersStats(null));
        }

        // console.log("1dispatch(getUserPreference());")
        dispatch(getUserPreference());
      })
      .catch((error) => {
        dispatch(filtersSlice.actions.setFiltersStats(null));
      });
  };
};

export const getUserPreference = () => {
  return async (dispatch, getState) => {
    let userState = getState().user;

    // console.log("2dispatch(getUserPreference());",userState)
    if (userState?.userToken) {
      const requestPayLoad: any = {};

      requestPayLoad._t = userState.userToken ?? "";

      loadUSerPreference(requestPayLoad)
        .then((response) => {
          dispatch(filtersSlice.actions.setUserPrefernce(response?.data));
        })
        .catch((error) => {
          dispatch(filtersSlice.actions.setUserPrefernce(null));
        });
    }
  };
};

export const updateSkinTypeFilter = (skinTypeFilter) => {
  return async (dispatch, getState) => {
    dispatch(filtersSlice.actions.setSkinTypeFilter(skinTypeFilter));
  };
};

export const updateConcernTypeFilter = (concernTypeFilter) => {
  return async (dispatch, getState) => {
    dispatch(filtersSlice.actions.setConcernTypeFilter(concernTypeFilter));
  };
};
export const updateConcernTypeBenefitFilter = (benefit) => {
  return async (dispatch, getState) => {
    dispatch(filtersSlice.actions.setConcernTypeBenifitFilter(benefit));
  };
};

export const updateAcneTypeFilter = (acneTypeFilter) => {
  return async (dispatch, getState) => {
    dispatch(filtersSlice.actions.setAcnetypeFilter(acneTypeFilter));
  };
};
export const updateMainCategoryFilter = (mainCategory) => {
  return async (dispatch, getState) => {
    dispatch(
      filtersSlice.actions.setMainCategoryFilter({
        mainCategory: mainCategory ?? null,
      })
    );
  };
};

export const {
  setSelectedPriceRange,
  setSubCategoryFilter,
  setAcnetypeFilter,
  setCurrentPage,
} = filtersSlice.actions;

export const filtersState = (state: AppState) => state.filters;

export default filtersSlice.reducer;
