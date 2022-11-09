import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./home.module.css";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import FormControl from "@mui/material/FormControl";
import { pink } from "@mui/material/colors";
import StarIcon from "@mui/icons-material/Star";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Form from "react-bootstrap/Form";
import { ProgressBar } from "react-bootstrap";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function SectionFour() {
  const [selectedValue, setSelectedValue] = useState("a");
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };
  const settings = {
    customPaging: function (i) {
      return <a>{1 + i++}</a>;
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    fade: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    autoplay: true,
    arrows: false,
    slidesToScroll: 1,
  };
  console.log(Slider);

  const controlProps = (item: string) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  return (
    <Box
      sx={{ flexGrow: 1 }}
      className={`${styles.section__four} position-relative`}
    >
      <div className={`${styles.background_div}`}></div>
      <Grid container>
        <Grid md={5} lg={4} xs={9} style={{ margin: "auto" }}>
          <Grid container>
            <Grid item xs={12}>
              <Typography
                variant="h3"
                className={`text-white fw-bold text-center ${styles.skin_care_summaries}`}
                gutterBottom
              >
                Skincare Summaries
              </Typography>
              <div className="position-relative">
                <div className={`${styles.slider_wrapper} mt-4`}>
                  <Slider {...settings} className="digit_wrapper">
                    <div>
                      <Typography
                        variant="body1"
                        className={`text-white text-center mt-3 ${styles.sec_four_slider_p}`}
                        gutterBottom
                      >
                        Quickly gain clarity by reading a summary of the main
                        pros and cons of a product based on it's reviews.
                      </Typography>
                      <div
                        className={`container-fluid mt-5 ${styles.card_wrapper}`}
                      >
                        <div className={`${styles.img_text_sec}`}>
                          <div className="row mt-4">
                            <div className="col-md-4 col-4">
                              <img
                                src="power.jpg"
                                alt=""
                                srcSet=""
                                className={`${styles.img_power}`}
                              />
                            </div>
                            <div className="col-md-8 col-8">
                              <h3>The Power Couple</h3>
                              <span className={`${styles.drunk}`}>
                                Drunk Elephant
                              </span>
                              <div
                                className={`${styles.star_icon} mt-2 pr-5 d-flex align-items-center align-self-center `}
                              >
                                <StarIcon
                                  className={`${styles.mobile_star_icon}`}
                                />{" "}
                                &nbsp;{" "}
                                <span className={`${styles.abc}`}>
                                  4.5 &#x2022; 461 reviews
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className={`mt-4 ${styles.pros_card}`}>
                            <div className="">
                              <h4>Pros &nbsp;</h4>
                            </div>
                            <span className={`${styles.drunk}`}>
                              Based on 461 positive reviews
                            </span>
                            <ul className="mt-2">
                              <li>
                                Most reviews say the product{" "}
                                <b>
                                  smooths, brightens, and helps with breakouts
                                </b>
                                .
                              </li>
                              <li>
                                Reviewers that have used the product for{" "}
                                <b>months</b> mention <b>reduced wrinkles.</b>
                              </li>
                              <li>
                                {" "}
                                A smaller proportion of reviews say it{" "}
                                <b>helped with pigmentation.</b>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Typography
                        variant="body1"
                        className={`text-white text-center mt-3 ${styles.sec_four_slider_p}`}
                        gutterBottom
                      >
                        Filter review summaries based on age, skin type,
                        duration of use and more to uncover insights relevant to
                        you.
                      </Typography>
                      <div
                        className={`container-fluid mt-5 ${styles.card_wrapper}`}
                      >
                        <div className={`${styles.img_text_sec}`}>
                          <div className="row mt-4">
                            <div className="col-md-4 col-4">
                              <img
                                src="product.png"
                                alt=""
                                srcSet=""
                                className={`${styles.img_power}`}
                              />
                            </div>
                            <div className="col-md-8 col-8">
                              <h3>A-Passioni™ Retinol Cream</h3>
                              <span className={`${styles.drunk}`}>
                                Drunk Elephant
                              </span>
                              <div
                                className={`${styles.star_icon} mt-2 pr-5 d-flex align-items-center align-self-center`}
                              >
                                <StarIcon
                                  className={`${styles.mobile_star_icon}`}
                                />{" "}
                                &nbsp;{" "}
                                <span className={`${styles.abc}`}>
                                  4.5 &#x2022; 461 reviews
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className={`mt-4 ${styles.pros_card_two} `}>
                            <div className="">
                              <h4>Summary &nbsp;</h4>
                            </div>
                            <span
                              className={`${styles.drunk} `}
                              style={{
                                color: "#949393",
                              }}
                            >
                              Based on 461 positive reviews
                            </span>
                            <div className={`${styles.slider_p} mb-2 `}>
                              <p>
                                85 reviewers that have{" "}
                                <span className={`${styles.black_color}`}>
                                  <b>sensitive skin </b>
                                </span>
                                said the product{" "}
                                <span className={`${styles.black_color}`}>
                                  <b>smoothed, brightened,</b>
                                </span>{" "}
                                and{" "}
                                <span className={`${styles.black_color}`}>
                                  <b>reduced wrinkles...</b>
                                </span>
                              </p>
                            </div>
                            <div className={`${styles.tables_slider}`}>
                              <div
                                className={`${styles.span_space} d-flex justify-content-between border-bottom border-top pb-2`}
                              >
                                <span>Age</span>
                                <span>
                                  <AddIcon />
                                </span>
                              </div>
                            </div>
                            <div className={`${styles.tables_slider}`}>
                              <div
                                className={`${styles.span_space} d-flex justify-content-between border-bottom pb-2 pt-2`}
                              >
                                <span>Skin type</span>
                                <span>
                                  <RemoveIcon />
                                </span>
                              </div>
                              <div
                                className={`${styles.span_space} d-flex justify-content-between align-items-center border-bottom pb-2 pt-2`}
                              >
                                <span className={`${styles.sp}`}>
                                  <Form.Check
                                    className={`${styles.cstm_space}`}
                                    type="radio"
                                    label={`Sensitive`}
                                    id={`disabled-default`}
                                  />
                                </span>
                                <span>
                                  {" "}
                                  <RemoveIcon />
                                </span>
                              </div>
                              <div
                                className={`${styles.span_space} d-flex justify-content-between pb-4 pt-2`}
                              >
                                <span>Duration of use</span>
                                <span>
                                  <RemoveIcon />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Typography
                        variant="body1"
                        className={`text-white text-center mt-3 ${styles.sec_four_slider_p}`}
                        gutterBottom
                      >
                        Quickly understand what people think about other aspects
                        of the product - like texture, fragrance and packaging
                      </Typography>
                      <div
                        className={`container-fluid mt-5 ${styles.card_wrapper}`}
                      >
                        <div className={`${styles.img_text_sec}`}>
                          <div className="row mt-4">
                            <div className="col-md-4 col-4">
                              <img
                                src="veo.jpg"
                                alt=""
                                srcSet=""
                                className={`${styles.img_power}`}
                              />
                            </div>
                            <div className="col-md-8 col-8">
                              <h3>C.E.O. Vitamin C Rich Hydration Cream</h3>
                              <span className={`${styles.drunk}`}>
                                Sunday Riley
                              </span>
                              <div
                                className={`${styles.star_icon} mt-2 pr-5 d-flex align-items-center align-self-center`}
                              >
                                <StarIcon
                                  className={`${styles.mobile_star_icon}`}
                                />{" "}
                                &nbsp;{" "}
                                <span className={`${styles.abc}`}>
                                  4.6 &#x2022; 464 reviews
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className={`mt-4 ${styles.pros_card_one}`}>
                            <div className="">
                              <h4>Texture &nbsp;</h4>
                            </div>
                            <span className={`${styles.drunk}`}>
                              55 reviews that mention texture
                            </span>
                            <div
                              className={`${styles.progrss_bar_spacing_top} d-flex justify-content-between align-items-center mt-4 `}
                            >
                              <span className={`${styles.span_cstm}`}>
                                <span className={`${styles.black_span}`}>
                                  Creamy
                                </span>
                              </span>
                              <div>
                                <div className="d-flex align-items-center">
                                  <div className={`${styles.progress_width}`}>
                                    <ProgressBar
                                      now={19}
                                      className={styles.progress__bar}
                                    />{" "}
                                  </div>
                                  <div
                                    className={`${styles.span_cstm} d-flex align-items-center`}
                                  >
                                    {" "}
                                    &nbsp; &nbsp; 19 &nbsp;
                                    <ChevronRightIcon
                                      className={`${styles.right_icon}`}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className={`${styles.progrss_bar_spacing} d-flex justify-content-between align-items-center mt-2`}
                            >
                              <span className={`${styles.span_cstm}`}>
                                <span className={`${styles.black_span}`}>
                                  {" "}
                                  Light
                                </span>
                              </span>
                              <div>
                                <div className="d-flex align-items-center">
                                  <div className={`${styles.progress_width}`}>
                                    <ProgressBar
                                      now={19}
                                      className={styles.progress__bar}
                                    />{" "}
                                  </div>
                                  <div
                                    className={`${styles.span_cstm} d-flex align-items-center`}
                                  >
                                    {" "}
                                    &nbsp; &nbsp; 19 &nbsp;
                                    <ChevronRightIcon
                                      className={`${styles.right_icon}`}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className={`${styles.progrss_bar_spacing} d-flex justify-content-between align-items-center mt-2`}
                            >
                              <span className={`${styles.span_cstm}`}>
                                <span className={`${styles.black_span}`}>
                                  Soft
                                </span>
                              </span>
                              <div>
                                <div className="d-flex align-items-center">
                                  <div className={`${styles.progress_width}`}>
                                    <ProgressBar
                                      now={17}
                                      className={styles.progress__bar}
                                    />{" "}
                                  </div>
                                  <div
                                    className={`${styles.span_cstm} d-flex align-items-center`}
                                  >
                                    {" "}
                                    &nbsp; &nbsp; 17 &nbsp;
                                    <ChevronRightIcon
                                      className={`${styles.right_icon}`}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className={`${styles.progrss_bar_spacing} d-flex justify-content-between align-items-center mt-2`}
                            >
                              <span className={`${styles.span_cstm}`}>
                                <span className={`${styles.black_span}`}>
                                  Not sticky
                                </span>
                              </span>
                              <div>
                                <div className="d-flex align-items-center">
                                  <div className={`${styles.progress_width}`}>
                                    <ProgressBar
                                      now={5}
                                      className={styles.progress__bar}
                                    />{" "}
                                  </div>
                                  <div
                                    className={`${styles.span_cstm} d-flex align-items-center`}
                                  >
                                    {" "}
                                    &nbsp; &nbsp; 05 &nbsp;{" "}
                                    <ChevronRightIcon
                                      className={`${styles.right_icon}`}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className={`${styles.pros_card_three} mt-3 mb-3`}
                          >
                            <h4>Fragrance</h4>
                          </div>
                          <div className={`${styles.card_bottom_drunk}`}>
                            <span className={`${styles.drunk}`}>
                              35 reviews that mention texture
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SectionFour;
