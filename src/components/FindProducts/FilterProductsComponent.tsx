import React, { useEffect, useRef, useState } from "react";

import Grid from "@mui/material/Grid";
import Product from "./Product";
import _ from "lodash";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  isLoadingProducts,
  productsListState,
  productsTotalCountsState,
  ratingsState,
} from "../../redux/productSlice";

import ProductLoadingShimmer from "./ProductLoadingShimmer";
import { filtersState, setCurrentPage } from "../../redux/filtersSlice";
import {
  FilterLabelBenefitsTitles,
  PRODUCTS_PAGE_LIMIT,
} from "../../shared/mocks/consts";
import Pagination from "react-bootstrap/Pagination";

export default () => {
  const dispatch = useAppDispatch();
  const productsList = useAppSelector(productsListState);
  const productsTotalCounts = useAppSelector(productsTotalCountsState);
  const isLoadingProductsStatus = useAppSelector(isLoadingProducts);

  const ratings = useAppSelector(ratingsState);

  const filters = useAppSelector(filtersState);
  const [state, setState] = useState({});

  const getCategoryTtitle = () => {
    if (filters.subProductCategory?.tag != null)
      return filters.subProductCategory?.label;
    else if (filters.mainProductCategory?.mainCategoryTag)
      return filters.mainProductCategory?.mainCategoryTag;
    else {
      return "products";
    }
    // return (filters.subProductCategory?.tag ? filters.subProductCategory?.label: null) ?? filters.subProductCategory?.mainCategoryTag ?? ""
  };
  const getBenefitsLables = () => {
    if (filters.concernTypeBenefitFilter) {
      return (
        <span className="text-danger font-weight-bold">
          {filters.concernTypeBenefitFilter.title}
        </span>
      );
    }
    return filters.concernTypeFilter.benefits?.map((benefit, index) => {
      return filters.concernTypeFilter.benefits.length == 1 ? (
        <span className="text-danger font-weight-bold"> {benefit.title}</span>
      ) : index == filters.concernTypeFilter.benefits.length - 1 ? (
        <>
          <span className="text-dark font-weight-bold"> and</span>&nbsp;
          <span className="text-danger font-weight-bold">{benefit.title}</span>
        </>
      ) : (
        <span className="text-danger font-weight-bold">
          {benefit.title}
          {index == filters.concernTypeFilter.benefits.length - 2 ? "" : ", "}
        </span>
      );
    });
  };
  const getHeaderText = () => {
    if (
      isLoadingProductsStatus == false &&
      (productsList == null || productsList.length == 0)
    ) {
      return (
        <h4 className="font-size-16 mt-5 mx-3">
          Sorry, &nbsp;
          <span className="text-danger font-weight-bold">
            no products&nbsp;
          </span>
          found for current selected filters.
        </h4>
      );
    } else if (filters.concernTypeFilter && filters.skinTypeFilter) {
      return (
        <h4 className="font-size-16 mt-5 mx-3">
          Concerned about&nbsp;
          <span className="text-danger font-weight-bold">
            {` ${filters.concernTypeFilter.title}`}
          </span>
          ? Hi, these {getCategoryTtitle()} have the most reviews that mention
          good for&nbsp;
          <span className="text-danger font-weight-bold">
            {FilterLabelBenefitsTitles[filters.skinTypeFilter]}
          </span>
          , {getBenefitsLables()}.
        </h4>
      );
    } else if (filters.concernTypeFilter) {
      return (
        <h4 className="font-size-16 mt-5 mx-3">
          Concerned about
          <span className="text-danger font-weight-bold">
            {` ${filters.concernTypeFilter.title}`}
          </span>
          ? Hi, these {getCategoryTtitle()} have the most reviews that
          mention&nbsp;
          {getBenefitsLables()}.
        </h4>
      );
    }else if (filters.skinTypeFilter) {
      return (
        <h4 className="font-size-16 mt-5 mx-3">
          Hi, these {getCategoryTtitle()} have the most reviews that mention
          good for&nbsp;
          <span className="text-danger font-weight-bold">
            {FilterLabelBenefitsTitles[filters.skinTypeFilter]}
          </span>.
        </h4>
      );
    }
    return "";
  };

  const handlePaginationChange = (index) => {
    return (e) => {
      dispatch(setCurrentPage(index));
    };
  };

  return (
    <>
      <span className="pt-5">{getHeaderText()}</span>
      <Grid container className="mt-5 py-4">
        {isLoadingProductsStatus
          ? Array(21)
              .fill(0)
              .map((item, index) => {
                return <ProductLoadingShimmer key={index} index={index} />;
              })
          : productsList?.map((item, index) => {
              return (
                <Product
                  key={index}
                  item={item}
                  index={index}
                  rating={ratings?.[item.id]}
                />
              );
            })}
      </Grid>
      <div className="d-flex justify-content-center w-100 m-4">
        <Pagination className="overflow-scroll d-flex flex-wrap m-4">
          <Pagination.First
            onClick={handlePaginationChange(0)}
            className="my-2"
          />
          {[...Array(Math.ceil(productsTotalCounts / PRODUCTS_PAGE_LIMIT))].map(
            (_, index) => {
              return (
                <Pagination.Item
                  key={index}
                  active={index === filters.currentPage}
                  onClick={handlePaginationChange(index)}
                  id={index}
                  value={index}
                  className="my-2"
                >
                  {index}
                </Pagination.Item>
              );
            }
          )}
          <Pagination.Last
            onClick={handlePaginationChange(
              Math.floor(productsTotalCounts / PRODUCTS_PAGE_LIMIT)
            )}
            className="my-2"
          />
        </Pagination>
      </div>
    </>
  );
};
