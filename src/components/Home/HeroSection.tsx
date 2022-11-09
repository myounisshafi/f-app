import React from "react";
import { ProgressBar } from "react-bootstrap";
import styles from "./home.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import StarIcon from "@mui/icons-material/Star";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function HeroSection(props: { state: { state: { setState: (arg0: boolean) => void; }; }; }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };
  return (
    <div className={`${styles.con_fluid} container-fluid pb-5 `}>
      <div className={styles.banner}>
        <div className={`${styles.cstm_row} row d-flex`}>
          <div className={`${styles.banner_margin_remove} col-lg-6 col-md-5`}>
            <div className={`${styles.banner_left_wrapper}`}>
              <div className={`${styles.banner__left__heading} fw-bold`}>
                <h1>
                  Your place for more<br></br>skincare product<br></br>
                  <span className="trans">transparency</span>{" "}
                </h1>
              </div>
              <div className={styles.banner__left__paragraph}>
                <p>
                  We're building the largest community of authentic skincare
                  reviews and summaries in the Southern Hemisphere.
                </p>
              </div>
              <form className={`d-flex ${styles.banner__joinUs}`}>
                <button
                  className={`btn ${styles.pink__btn}`}
                  type="button"
                  onClick={() => props.state.state.setState(true)}
                >
                  Join us
                </button>
                <div className={styles.Learn__more}>
                  {" "}
                  <a href="#section-two">Learn more</a>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-6 col-md-7 col-xm-12 align-items-center align-self-center">
            <div className={`${styles.banner_right_side}`}>
              <Slider {...settings}>
                <div className="row d-flex">
                  <div className="col-md-5 col-xm-5 align-self-center">
                    <img
                      src="./product.png"
                      alt=""
                      srcSet=""
                      className="img-fluid banner-iamge"
                    />
                  </div>
                  <div className={`col-md-6 ${styles.product__info__sec}`}>
                    <h1 className={`${styles.passioni_width}`}>
                      A-Passioni™ Retinol Cream
                    </h1>
                    <span className={styles.drunk}>Drunk Elephant</span>
                    <div
                      className={`${styles.text_star_center} d-flex align-items-center align-self-center mt-3 pr-5`}
                    >
                      <StarIcon className={`${styles.mobile_star_icon}`} />{" "}
                      &nbsp;{" "}
                      <span className={`${styles.abc}`}>
                        4.5 &#x2022; 461 reviews
                      </span>
                    </div>
                    <div
                      className={`${styles.desktop_progress} progress-wrapper mt-3 `}
                    >
                      <div className="d-flex justify-content-between mb-2">
                        <span>Smoother skin</span>
                        <span>
                          64 &nbsp;{" "}
                          <ChevronRightIcon
                            className={`${styles.banner_arrow}`}
                          />
                        </span>
                      </div>
                      <ProgressBar now={73} className={styles.progress__bar} />
                    </div>
                    <div
                      className={`${styles.desktop_progress} progress-wrapper mt-3`}
                    >
                      <div className="d-flex justify-content-between mb-2">
                        <span>Brighter skin</span>
                        <span>
                          21 &nbsp;{" "}
                          <ChevronRightIcon
                            className={`${styles.banner_arrow}`}
                          />
                        </span>
                      </div>
                      <ProgressBar now={23} className={styles.progress__bar} />
                    </div>
                    <div className={`${styles.show_progress_text_mobile} `}>
                      <div
                        className={`${styles.progrss_bar_spacing_top} d-flex justify-content-between align-items-center mt-4 `}
                      >
                        <span className={`${styles.span_cstm}`}>
                          <span className={`${styles.black_span}`}>
                            Smoother skin
                          </span>
                        </span>
                        <div>
                          <div className="d-flex align-items-center">
                            <div className={`${styles.progress_width}`}>
                              <ProgressBar
                                now={73}
                                className={styles.progress__bar}
                              />{" "}
                            </div>
                            <div
                              className={`${styles.span_cstm} d-flex align-items-center`}
                            >
                              {" "}
                              &nbsp; &nbsp; 64 &nbsp;
                              <ChevronRightIcon
                                className={`${styles.right_icon}`}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={`${styles.show_progress_text_mobile} `}>
                      <div
                        className={`${styles.progrss_bar_spacing_top} d-flex justify-content-between align-items-center mt-4 `}
                      >
                        <span className={`${styles.span_cstm}`}>
                          <span className={`${styles.black_span}`}>
                            Brighter skin
                          </span>
                        </span>
                        <div>
                          <div className="d-flex align-items-center">
                            <div className={`${styles.progress_width}`}>
                              <ProgressBar
                                now={73}
                                className={styles.progress__bar}
                              />{" "}
                            </div>
                            <div
                              className={`${styles.span_cstm} d-flex align-items-center`}
                            >
                              {" "}
                              &nbsp; &nbsp; 21 &nbsp;
                              <ChevronRightIcon
                                className={`${styles.right_icon}`}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={`${styles.review_summary} mt-4`}>
                      <b> Review summary</b>
                    </div>
                    <div className={`${styles.first_text_width}`}>
                      <div className={`${styles.positive_reviews} mt-3`}>
                        Positive reviews mainly mention{" "}
                        <b>smoother, brighter, softer, moisturised </b>and{" "}
                        <b>clearer skin</b>.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row d-flex">
                  <div className="col-md-5 align-self-center">
                    <img
                      src="./go.jpg"
                      alt=""
                      srcSet=""
                      className="img-fluid banner-iamge"
                    />
                  </div>
                  <div
                    className={`col-md-7 ${styles.product__info__sec} ${styles.product_go_to}`}
                  >
                    <h1
                      style={{
                        height: "76px",
                        paddingTop: "35px",
                      }}
                      className={``}
                    >
                      Go-To
                    </h1>
                    <span className={styles.drunk}>Face Hero</span>
                    <div
                      className={`${styles.text_star_center} d-flex align-items-center align-self-center rating-reviews mt-3 pr-5`}
                    >
                      <StarIcon className={`${styles.mobile_star_icon}`} />{" "}
                      &nbsp;{" "}
                      <span className={`${styles.abc}`}>
                        4.7 &#x2022; 2450 reviews
                      </span>
                    </div>
                    <div
                      className={`${styles.desktop_progress} progress-wrapper mt-3 `}
                    >
                      <div className="d-flex justify-content-between mb-2">
                        <span>Hydrating</span>
                        <span>
                          759 &nbsp;{" "}
                          <ChevronRightIcon
                            className={`${styles.banner_arrow}`}
                          />
                        </span>
                      </div>
                      <ProgressBar now={73} className={styles.progress__bar} />
                    </div>
                    <div
                      className={`${styles.desktop_progress} progress-wrapper mt-3`}
                    >
                      <div className="d-flex justify-content-between mb-2">
                        <span>Brighter skin</span>
                        <span>
                          528 &nbsp;{" "}
                          <ChevronRightIcon
                            className={`${styles.banner_arrow}`}
                          />
                        </span>
                      </div>
                      <ProgressBar now={23} className={styles.progress__bar} />
                    </div>
                    <div className={`${styles.show_progress_text_mobile} `}>
                      <div
                        className={`${styles.progrss_bar_spacing_top} d-flex justify-content-between align-items-center mt-4 `}
                      >
                        <span className={`${styles.span_cstm}`}>
                          <span className={`${styles.black_span}`}>
                            Smoother skin
                          </span>
                        </span>
                        <div>
                          <div className="d-flex align-items-center">
                            <div className={`${styles.progress_width}`}>
                              <ProgressBar
                                now={73}
                                className={styles.progress__bar}
                              />{" "}
                            </div>
                            <div
                              className={`${styles.span_cstm} d-flex align-items-center`}
                            >
                              {" "}
                              &nbsp; &nbsp; 64 &nbsp;
                              <ChevronRightIcon
                                className={`${styles.right_icon}`}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={`${styles.show_progress_text_mobile} `}>
                      <div
                        className={`${styles.progrss_bar_spacing_top} d-flex justify-content-between align-items-center mt-4 `}
                      >
                        <span className={`${styles.span_cstm}`}>
                          <span className={`${styles.black_span}`}>
                            Brighter skin
                          </span>
                        </span>
                        <div>
                          <div className="d-flex align-items-center">
                            <div className={`${styles.progress_width}`}>
                              <ProgressBar
                                now={73}
                                className={styles.progress__bar}
                              />{" "}
                            </div>
                            <div
                              className={`${styles.span_cstm} d-flex align-items-center`}
                            >
                              {" "}
                              &nbsp; &nbsp; 21 &nbsp;
                              <ChevronRightIcon
                                className={`${styles.right_icon}`}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={`${styles.review_summary} mt-4 `}>
                      <b> Review summary</b>
                    </div>
                    <div className={`${styles.positive_reviews} mt-3 `}>
                      <span>
                        Positive reviews mainly mention hydrated and brighter
                        skin, nice fragrance, that it's good for dry skin, and
                        there's no oily finish or residue.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="row d-flex">
                  <div className="col-md-5 align-self-center">
                    <img
                      src="./glow.jpg"
                      alt=""
                      srcSet=""
                      className="img-fluid banner-iamge"
                    />
                  </div>
                  <div className={`col-md-7 ${styles.product__info__sec}`}>
                    <h1>Watermelon Glow PHA+BHA Pore-Tight Toner</h1>
                    <span className={styles.drunk}>Glow Recipe</span>
                    <div
                      className={`${styles.text_star_center} d-flex align-items-center align-self-center rating-reviews mt-3 pr-5`}
                    >
                      <StarIcon className={`${styles.mobile_star_icon}`} />{" "}
                      &nbsp;{" "}
                      <span className={`${styles.abc}`}>
                        4.6 &#x2022; 360 reviews
                      </span>
                    </div>
                    <div
                      className={`${styles.desktop_progress} progress-wrapper mt-3 `}
                    >
                      <div className="d-flex justify-content-between mb-2">
                        <span>Nice scent & fragrance</span>
                        <span>
                          95 &nbsp;{" "}
                          <ChevronRightIcon
                            className={`${styles.banner_arrow}`}
                          />
                        </span>
                      </div>
                      <ProgressBar now={73} className={styles.progress__bar} />
                    </div>
                    <div
                      className={`${styles.desktop_progress} progress-wrapper mt-3`}
                    >
                      <div className="d-flex justify-content-between mb-2">
                        <span>Hydrating</span>
                        <span>
                          58 &nbsp;{" "}
                          <ChevronRightIcon
                            className={`${styles.banner_arrow}`}
                          />
                        </span>
                      </div>
                      <ProgressBar now={23} className={styles.progress__bar} />
                    </div>
                    <div className={`${styles.show_progress_text_mobile} `}>
                      <div
                        className={`${styles.progrss_bar_spacing_top} d-flex justify-content-between align-items-center mt-4 `}
                      >
                        <span className={`${styles.span_cstm}`}>
                          <span className={`${styles.black_span}`}>
                            Smoother skin
                          </span>
                        </span>
                        <div>
                          <div className="d-flex align-items-center">
                            <div className={`${styles.progress_width}`}>
                              <ProgressBar
                                now={73}
                                className={styles.progress__bar}
                              />{" "}
                            </div>
                            <div
                              className={`${styles.span_cstm} d-flex align-items-center`}
                            >
                              {" "}
                              &nbsp; &nbsp; 64 &nbsp;
                              <ChevronRightIcon
                                className={`${styles.right_icon}`}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={`${styles.show_progress_text_mobile} `}>
                      <div
                        className={`${styles.progrss_bar_spacing_top} d-flex justify-content-between align-items-center mt-4 `}
                      >
                        <span className={`${styles.span_cstm}`}>
                          <span className={`${styles.black_span}`}>
                            Brighter skin
                          </span>
                        </span>
                        <div>
                          <div className="d-flex align-items-center">
                            <div className={`${styles.progress_width}`}>
                              <ProgressBar
                                now={73}
                                className={styles.progress__bar}
                              />{" "}
                            </div>
                            <div
                              className={`${styles.span_cstm} d-flex align-items-center`}
                            >
                              {" "}
                              &nbsp; &nbsp; 21 &nbsp;
                              <ChevronRightIcon
                                className={`${styles.right_icon}`}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={`${styles.review_summary} mt-4`}>
                      <b> Review summary</b>
                    </div>
                    <div className={`${styles.positive_reviews} mt-3`}>
                      <span>
                        Positive reviewers like the scent of the product, say
                        that it hydrates, brightens skin, refines pores, and
                        smooths skin.
                      </span>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
