import React, {
  forwardRef,
  LegacyRef,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Accordion from "@mui/material/Accordion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import Slider from "@mui/material/Slider";
import styles from "./FindProducts.module.css";
import CloseIcon from "@mui/icons-material/Close";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import _ from "lodash";
import {
  FilterAcneProneTypes,
  FilterConcernTypes,
  FilterLabelBenefitsTitles,
  FilterProductCategory,
  FilterSkinTypes,
} from "../../shared/mocks/consts";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  updateAcneTypeFilter,
  filtersState,
  updateConcernTypeBenefitFilter,
  updateConcernTypeFilter,
  updateSkinTypeFilter,
  getFiltersStats,
  setSelectedPriceRange,
  updateMainCategoryFilter,
  setSubCategoryFilter,
} from "../../redux/filtersSlice";
import { searchProducts } from "../../redux/productSlice";
import { Spinner } from "react-bootstrap";

function Sidebar() {
  const dispatch = useAppDispatch();
  const filters = useAppSelector(filtersState);
  const [state, setState] = useState({
    isSkinConcernExpended: false,
    isSkinTypeExpended: false,
    isPriceExpended: false,
    isSourceExpended: false,
    isCategoryExpended: false,
  });
  const abortcontrolerRef = useRef(new AbortController());
  const abortControlerFilterRef = useRef(new AbortController());
  const handlePriceRangeChange = (
    event: Event,
    newValue: number | number[]
  ) => {
    dispatch(setSelectedPriceRange(newValue as number[]));
  };

  const skinTypeFliterChanged = (e) => {
  
    // if(e.target.value == "all")
    // dispatch(updateSkinTypeFilter(null));
    // else
    dispatch(updateSkinTypeFilter(e.target.value));
  };

  const concernTypeFliterChanged = (index) => {
    if (FilterConcernTypes[index].dbTag == "")
      dispatch(updateConcernTypeFilter(null));
    else dispatch(updateConcernTypeFilter(FilterConcernTypes[index]));
  };
  const concernTypeSelectedBenefitFliterChanged = (benefitIndex) => {
    if (benefitIndex >= 0) {
      dispatch(
        updateConcernTypeBenefitFilter(
          filters.concernTypeFilter?.benefits[benefitIndex]
        )
      );
    } else {
      dispatch(updateConcernTypeBenefitFilter(null));
    }
  };
  const acneProneFolterSelectionListener = (index) => {
    dispatch(updateAcneTypeFilter(FilterAcneProneTypes[index]));
  };
  const mainCategorySelectionListener = (index) => {
    if (index == "all_category") {
      dispatch(updateMainCategoryFilter(null));
    } else {
      dispatch(updateMainCategoryFilter(FilterProductCategory[index]));
    }
  };
  const subCategorySelectionListener = (index) => {
    dispatch(
      setSubCategoryFilter(filters.mainProductCategory?.subCategory?.[index])
    );
  };

  const debouncedFilterStats = useRef(() => {
    abortControlerFilterRef.current?.abort();
    abortControlerFilterRef.current = new AbortController();
    dispatch(getFiltersStats(abortControlerFilterRef.current));
  }).current;

  useEffect(debouncedFilterStats, [
    filters.skinTypeFilter,
    filters.concernTypeFilter,
    filters.acneProneFilter,
    filters.concernTypeBenefitFilter,
    filters.subProductCategory,
    filters.mainProductCategory,
  ]);

  const debouncedSearch = useRef(
    _.debounce(() => {
      abortcontrolerRef.current?.abort();
      abortcontrolerRef.current = new AbortController();
      dispatch(searchProducts(abortcontrolerRef.current));
    }, 500)
  ).current;

  useEffect(debouncedSearch, [
    filters.skinTypeFilter,
    filters.concernTypeFilter,
    filters.concernTypeBenefitFilter,
    filters.subProductCategory,
    filters.acneProneFilter,
    filters.keyword,
    filters.priceRangeSelected,
    filters.currentPage,
    filters.mainProductCategory,
  ]);

  useEffect(() => {
    if (
      (filters.skinTypeFilter != null ||
        filters.acneProneFilter?.key != "no") &&
      !state.isSkinTypeExpended
    ) {
      setState((state) => ({
        ...state,
        isSkinTypeExpended: true,
      }));
    }

    if (filters.concernTypeFilter != null && !state.isSkinConcernExpended) {
      setState((state) => ({
        ...state,
        isSkinConcernExpended: true,
      }));
    }

    if (filters.mainProductCategory != null && !state.isCategoryExpended) {
      setState((state) => ({
        ...state,
        isCategoryExpended: true,
      }));
    }
    if (filters.priceRangeSelected != null && !state.isPriceExpended) {
      setState((state) => ({
        ...state,
        isPriceExpended: true,
      }));
    }
  }, [
    filters.skinTypeFilter,
    filters.concernTypeFilter,
    filters.concernTypeBenefitFilter,
  ]);

  let [minPrice, maxPrice] = useMemo(() => {
    if (filters.filtersStats?.price_range?.length > 0) {
      return [
        filters.filtersStats?.price_range[0].min_price?.price,
        filters.filtersStats?.price_range[0].max_price?.price,
      ];
    } else {
      return [0, 10000];
    }
  }, [filters.filtersStats?.price_range]);

  const handleAccordianExpendClick = (stateKey) => {
    return () => {
      setState((state) => ({
        ...state,
        [stateKey]: !state[stateKey],
      }));
    };
  };

  const handleRemoveFitlerClick = (tagType, tag) => {
    return () => {
      if (filters.isLodingFiltersStatics) return;
      if (tagType == "tag") {
        // let subCategoryFoundToRemove = filters.subProductCategory?.find((item)=>item.tag == tag)

        // if (subCategoryFoundToRemove) {
        //   let subCategores = [ ...filters.subProductCategory ];
        //   subCategores.remove(subCategoryFoundToRemove);

        //   dispatch(setSubCategoryFilter(subCategores));
        // }
        // else{
        dispatch(updateMainCategoryFilter(null));
        // }
      } else if (tagType == "label") {
        if (filters.skinTypeFilter === tag) {
          dispatch(updateSkinTypeFilter(""));
        } else if (filters.acneProneFilter?.dbTag === tag) {
          dispatch(updateAcneTypeFilter(FilterAcneProneTypes[0]));
        } else if (filters.concernTypeBenefitFilter?.length>0) {
          let concernTypeFilter = filters.concernTypeBenefitFilter?.filter(
            (item) => item.label !== tag
          );
          if (concernTypeFilter?.length == 0){
            dispatch(updateConcernTypeFilter(null));
          }
            
          else dispatch(updateConcernTypeBenefitFilter(concernTypeFilter));
        }
      }
    };
  };
  return (
    <div className={`${styles.side_bar}`}>
      <Typography variant="h5" className={`${styles.filter_by} fw-bold `}>
        Filter By
      </Typography>
      <Accordion
        sx={{
          borderTop: 1,
          borderColor: "#eee",
          boxShadow: 0,
        }}
        expanded={state.isSkinConcernExpended}
        onChange={handleAccordianExpendClick("isSkinConcernExpended")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          className={`${styles.sidebar_accordian} p-0`}
        >
          <Typography className={`${styles.sidebar_accordian_header} `}>
            Skin Concerns
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="p-0">
          <Row>
            <Col xs={12}>
              <Typography variant="body1" className={`mt-2`} gutterBottom>
                Concern
              </Typography>
              <DropdownButton
                id="dropdown-concerns"
                className={`${styles.concern_dropdown}`}
                title={filters.concernTypeFilter?.title ?? "All"}
                onSelect={concernTypeFliterChanged}
              >
                {FilterConcernTypes.map((item, index) => (
                  <Dropdown.Item
                    key={item.key}
                    eventKey={index}
                    className="overflow-ellipsis text-wrap text-wrap border-bottom pt-2"
                  >
                    {item.title}
                  </Dropdown.Item>
                ))}
              </DropdownButton>
            </Col>
            <Col xs={12}>
              <Typography variant="body1" className={`mt-2`} gutterBottom>
                Skin benefits
              </Typography>
              <DropdownButton
                id="dropdown-benefits"
                className={`${styles.skin_benefit_dropdown} mb-3 `}
                title={filters.concernTypeBenefitFilter?.length == 1 ? filters.concernTypeBenefitFilter[0].title : "All"}
                disabled={!filters.concernTypeFilter}
                onSelect={concernTypeSelectedBenefitFliterChanged}
              >
                <Dropdown.Item
                  key={"all_benefits"}
                  eventKey={-1}
                  className="text-wrap "
                >
                  All
                </Dropdown.Item>
                {filters.concernTypeFilter?.benefits?.map((item, index) => (
                  <Dropdown.Item
                    key={item.label}
                    eventKey={index}
                    className="overflow-ellipsis text-wrap border-bottom pt-2"
                  >
                    {item.title}
                  </Dropdown.Item>
                ))}
              </DropdownButton>
            </Col>
          </Row>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          borderTop: 1,
          borderColor: "#eee",
          boxShadow: 0,
        }}
        expanded={state.isSkinTypeExpended}
        onChange={handleAccordianExpendClick("isSkinTypeExpended")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          className={`${styles.sidebar_accordian} p-0`}
        >
          <Typography className={`${styles.sidebar_accordian_header} p-0`}>
            Skin Type
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="p-0">
          <Form>
            {FilterSkinTypes.map((item) => (
              <Form.Check
                label={item.title}
                className={`${styles.skin_type} ${styles.skin_type_text}`}
                name="filter_type_group"
                type="radio"
                key={item.key}
                id={item.key}
                value={item.dbTag}
                onChange={skinTypeFliterChanged}
                checked={(item.dbTag == filters.skinTypeFilter )}
              />
            ))}
          </Form>
          <Typography variant="body1" className={`mb-2 mt-4`} gutterBottom>
            Are you acne prone?
          </Typography>
          <DropdownButton
            id="dropdown-basic-button"
            title={filters.acneProneFilter?.title ?? "No"}
            className={`${styles.concern_dropdown}`}
            onSelect={acneProneFolterSelectionListener}
          >
            <Dropdown.Item eventKey={0}>
              {FilterAcneProneTypes[0].title}
            </Dropdown.Item>
            <Dropdown.Item eventKey={1}>
              {FilterAcneProneTypes[1].title}
            </Dropdown.Item>
          </DropdownButton>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          borderTop: 1,
          borderColor: "#eee",
          boxShadow: 0,
        }}
        expanded={state.isCategoryExpended}
        onChange={handleAccordianExpendClick("isCategoryExpended")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          className={`${styles.sidebar_accordian} p-0`}
        >
          <Typography className={`${styles.sidebar_accordian_header}`}>
            Product Category
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="p-0">
          <Typography variant="body1">Main Category</Typography>
          <DropdownButton
            id="dropdown-basic-button"
            title={filters.mainProductCategory?.mainCategory ?? "All"}
            className={`${styles.concern_dropdown} mb-3 mt-2`}
            onSelect={mainCategorySelectionListener}
          >
            <Dropdown.Item
              key={"all_category"}
              eventKey={"all_category"}
              className="overflow-ellipsis"
            >
              All
            </Dropdown.Item>
            {FilterProductCategory?.map((item, index) => (
              <Dropdown.Item
                key={item.mainCategoryTag}
                eventKey={index}
                className="overflow-ellipsis"
              >
                {item.mainCategory}
              </Dropdown.Item>
            ))}
          </DropdownButton>
          <Typography variant="body1">Subcategory</Typography>
          <DropdownButton
            id="dropdown-basic-button"
            title={filters.subProductCategory?.[0]?.label ?? "All"}
            className={`${styles.concern_dropdown} mt-2 mb-3`}
            onSelect={subCategorySelectionListener}
            disabled={!filters.mainProductCategory}
          >
            {filters.mainProductCategory?.subCategory?.map((item, index) => (
              <Dropdown.Item
                key={item.tag}
                eventKey={index}
                className="text-wrap border-bottom pt-2"
              >
                {item.tag ?? item.label}
              </Dropdown.Item>
            ))}
          </DropdownButton>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          borderTop: 1,
          borderColor: "#eee",
          boxShadow: 0,
        }}
        expanded={state.isPriceExpended}
        onChange={handleAccordianExpendClick("isPriceExpended")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          className={`${styles.sidebar_accordian} p-0`}
        >
          <Typography className={`${styles.sidebar_accordian_header} p-0`}>
            Price
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Slider
            className={`${styles.product_price_range}`}
            getAriaLabel={() => "Price range"}
            value={filters.priceRangeSelected ?? [minPrice, maxPrice]}
            onChange={handlePriceRangeChange}
            valueLabelDisplay="auto"
            // getAriaValueText={valuetext}
            marks={[
              {
                value: minPrice,
                label: `$${minPrice}`,
              },
              {
                value: maxPrice,
                label: `$${maxPrice}`,
              },
            ]}
            min={minPrice}
            max={maxPrice}
          />
          <Form className={`d-flex w-100`}>
            <Form.Group
              className="mb-3 col-5 col-sm-5"
              controlId="formBasicEmail"
            >
              <Form.Control
                type="text"
                placeholder={`$${filters.priceRangeSelected?.[0] ?? minPrice}`}
              />
            </Form.Group>

            <div className={`${styles.divider} col-2 col-sm-2`}></div>

            <Form.Group
              className="mb-3 col-5 col-sm-5"
              controlId="formBasicPassword"
            >
              <Form.Control
                type="text"
                placeholder={`$${filters.priceRangeSelected?.[1] ?? maxPrice}`}
              />
            </Form.Group>
          </Form>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          borderTop: 1,
          borderColor: "#eee",
          boxShadow: 0,
        }}
        expanded={state.isSourceExpended}
        onChange={handleAccordianExpendClick("isSourceExpended")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          className={`${styles.sidebar_accordian} p-0`}
        >
          <Typography className={`${styles.sidebar_accordian_header} p-0`}>
            Source
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="p-0">
          <Form>
            <Form.Check
              className={`${styles.skin_type} ${styles.skin_type_text} mb-3`}
              label="Mecca"
              name="group1"
              type="radio"
              defaultChecked={true}
              id={`inline-radio-2`}
            />

            <Form.Check
              className={`${styles.skin_type} ${styles.skin_type_text} mb-3`}
              label="Sephore (in progress)"
              name="group1"
              type="radio"
              disabled={true}
              id={`inline-radio-1`}
            />
            <Form.Check
              className={`${styles.skin_type} ${styles.skin_type_text} mb-3`}
              label="Adorebeauty (in progress)"
              name="group1"
              type="radio"
              disabled={true}
              id={`inline-radio-2`}
            />
            <Form.Check
              className={`${styles.skin_type} ${styles.skin_type_text} mb-3`}
              label="hikoco (soon)"
              name="group1"
              type="radio"
              disabled={true}
              id={`inline-radio-1`}
            />
            <Form.Check
              className={`${styles.skin_type} ${styles.skin_type_text} mb-3`}
              label="Paula's Choice (soon)"
              name="group1"
              type="radio"
              disabled={true}
              id={`inline-radio-2`}
            />
          </Form>
        </AccordionDetails>
      </Accordion>
      <hr />
      <Typography
        variant="subtitle1"
        className={`${styles.sidebar_accordian} mb-3`}
      >
        Active Filters{" "}
        <Spinner
          size="sm"
          animation="grow"
          className={
            filters.isLodingFiltersStatics
              ? "text-danger mx-4"
              : "text-danger invisible mx-4"
          }
        />
      </Typography>

      <ul className={`${styles.active_filters_list}`}>
        {filters.filtersStats?.tagStat?.map((item, index) => {
          return (
            <li
              key={item.tag}
              className={`${styles.pink_rounded_bg} mx-2 mt-2`}
            >
              <span className="mx-2">
                {FilterLabelBenefitsTitles[item?.tag] ?? item?.tag}
              </span>
              <span
                className={` fw-bold cursor-pointer`}
                onClick={handleRemoveFitlerClick("tag", item?.tag)}
              >
                ({item.count})
                <CloseIcon
                  className={`${styles.product_card_feature_review_arrow} mx-2`}
                />
              </span>
            </li>
          );
        })}
        {filters.filtersStats?.labelsStats?.map((item, index) => {
          return (
            <li
              key={item.tag}
              className={`${styles.pink_rounded_bg} mx-2 mt-2`}
            >
              <span className="mx-2">
                {FilterLabelBenefitsTitles[item?.label] ?? item?.label}
              </span>
              <span
                className={` fw-bold cursor-pointer`}
                onClick={handleRemoveFitlerClick("label", item?.label)}
              >
                ({item.count})
                <CloseIcon
                  className={`${styles.product_card_feature_review_arrow} mx-2`}
                />
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
