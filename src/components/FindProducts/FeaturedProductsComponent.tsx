import React, { useEffect, useMemo, useRef } from "react";

import Grid from "@mui/material/Grid";
import Product from "./Product";
import _ from "lodash";
import {
  FilterAcneProneTypes,
  FilterConcernTypes,
  FilterSkinTypes,
} from "../../shared/mocks/consts";
import { useAppDispatch } from "../../app/hooks";
import {
  setAcnetypeFilter,
  setConcernTypeFilter,
  setSkinTypeFilter,
} from "../../redux/filtersSlice";

export default ({ featured }) => {
  const dispatch = useAppDispatch();
  const handleViewAllClick = (categoryArrayItem) => {
    if (categoryArrayItem?.length > 0) {
      categoryArrayItem[0].filtered_labels?.map((labelItem) => {
        let label = labelItem.label;

        let skinTypelabelFound = FilterSkinTypes.find(
          (item) => item.dbTag == label
        );

        if (skinTypelabelFound) {
          dispatch(setSkinTypeFilter(label));
          return;
        }
        let acneProneFilterFound = FilterAcneProneTypes.find(
          (item) => item.dbTag == label
        );

        if (acneProneFilterFound) {
          dispatch(setAcnetypeFilter(acneProneFilterFound));
          return;
        }

        let concernTypeFound = FilterConcernTypes.find((item) =>
          item.labels?.find((labelItem) => labelItem == label)
        );

        if (concernTypeFound) {
          dispatch(setConcernTypeFilter(concernTypeFound));
          return;
        }
      });
    }
  };

  const ratings = useMemo(() => {
    return featured?.ratings?.reduce(
      (obj, currentItem) => ({ ...obj, [currentItem.k]: currentItem }),
      {}
    );
  }, []);

  return (
    <div className=" mx-4 ">
      <h3 className="font-size-16 mt-5 mx-2">
        Featured products based on reviews
      </h3>
      {Object.values(featured?.products?.[0] ?? {})?.map(
        (categoryArrayItem: Array<any>, index) => {
          let title =
            categoryArrayItem?.length > 0
              ? categoryArrayItem[0].feature_title
              : "";
          return (
            <div key={title}>
              <h5 className={`mx-2 my-5`}>
                {title}
                <a
                  className="font-size-12 mx-2 float-end"
                  onClick={() => handleViewAllClick(categoryArrayItem)}
                >
                  View all
                </a>
              </h5>

              <Grid container className="mt-5 py-4">
                {categoryArrayItem?.map((item, index) => {
                  return (
                    <Product
                      key={title + index}
                      item={item}
                      index={index}
                      rating={ratings?.[item.id]}
                    />
                  );
                })}
              </Grid>
            </div>
          );
        }
      )}
    </div>
  );
};
