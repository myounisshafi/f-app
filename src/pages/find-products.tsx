import React, { useEffect, useMemo, useRef } from "react";
import Sidebar from "../components/FindProducts/FilterSideBarComponent";
import _ from "lodash";
import { useAppDispatch, useAppSelector } from "../app/hooks";

import { filtersState } from "../redux/filtersSlice";
import { getFeaturedProducts } from "../components/api/api";
import FeaturedProductsComponent from "../components/FindProducts/FeaturedProductsComponent";
import FilterProductsComponent from "../components/FindProducts/FilterProductsComponent";
import { ucs2 } from "punycode";

export async function getServerSideProps({ req, res }) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=59, stale-while-revalidate=180"
  );

  try {
    let featured = await getFeaturedProducts();
    // console.log("ex", JSON.stringify(featured.data));
    return {
      props: { featured: featured.data },
    };
  } catch (ex) {
    console.log("ex", ex);

    return {
      props: {},
    };
  }
}

function FindProducts({ featured }) {
  const dispatch = useAppDispatch();
  const filters = useAppSelector(filtersState);

  const hasSelectedFilters = useMemo(() => {
   

    if (
      (filters.skinTypeFilter != null && filters.skinTypeFilter != "all") ||
      filters.concernTypeFilter != null ||
      filters.acneProneFilter?.dbTag != "" ||
      filters.mainProductCategory != null ||
      filters.keyword != "" ||
      filters.subProductCategory != null ||
      filters.priceRangeSelected != null
    ) {
      return 1;
    } else {
      return 0;
    }
  }, [
    filters.skinTypeFilter,
    filters.concernTypeFilter,
    filters.acneProneFilter?.dbTag,
    filters.mainProductCategory,
    filters.keyword,
    filters.priceRangeSelected,
    filters.subProductCategory,
  ]);
  return (
    <div className="d-flex flex-row">
      <div className="side_bar_filter_div ">
        <Sidebar />
      </div>
      <div className="flex-grow-1 mx-2">
        {hasSelectedFilters ? (
          <FilterProductsComponent />
        ) : (
          <FeaturedProductsComponent featured={featured} />
        )}
      </div>
    </div>
  );
}

export default FindProducts;
