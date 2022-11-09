import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import styles from "./home.module.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from "next/link";

function SectionSix() {
  const settings = {
    dots: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    arrows: true,
  };
  return (
    <Box sx={{ flexGrow: 1 }} className={styles.section__six}>
      <Slider {...settings} className="sliderArrowRight">
        <Grid container>
          <Grid md={9} lg={11} xs={12}>
            <Grid container spacing={5}>
              <Grid item md={5} lg={5} xs={12}>
                <img
                  src="filter-slider.svg"
                  width="440px"
                  alt=""
                  className={`img-fluid ms-auto ${styles.sec_six_img_desktop}`}
                />
              </Grid>
              <Grid
                item
                md={6}
                lg={6}
                xs={12}
                className={styles.claim__section}
              >
                <div className={styles.claim__text}>
                  <Typography variant="h2" gutterBottom className="fw-bold">
                    Stop listening to claims!
                  </Typography>

                  <Typography variant="body1" gutterBottom>
                    Skincare retailers use product information to drive their
                    "filter by" toolbar - that means you're shown products based
                    solely on advertising claims.
                  </Typography>
                  <Stack spacing={2} direction="row">
                    <Link href="/find-products">
                      <Button
                        variant="contained"
                        className={`${styles.review__button} findPro`}
                      >
                        Find a product
                      </Button>
                    </Link>
                  </Stack>
                  <img
                    src="filter-slider.svg"
                    alt=""
                    className={`img-fluid my-4 ms-auto mt-4 ${styles.sec_six_img_mobile}`}
                  />
                </div>
              </Grid>
              <Grid item xs={1}>
                <ArrowForwardIosIcon className={styles.claim__arrow} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container>
          <Grid md={9} lg={11} xs={12}>
            <Grid container spacing={5}>
              <Grid item md={5} lg={5} xs={12}>
                <img
                  src="reviews-panel.svg"
                  width="420px"
                  alt=""
                  className={`img-fluid ms-auto ${styles.sec_six_img_desktop}`}
                />
              </Grid>
              <Grid
                item
                md={6}
                lg={6}
                xs={12}
                className={styles.claim__section}
              >
                <div
                  className={`${styles.claim__text} ${styles.claim_text_mobile}`}
                >
                  <Typography variant="h2" gutterBottom className="fw-bold">
                    Start finding with Fluffee
                  </Typography>

                  <Typography variant="body1" gutterBottom>
                    We sort products based on consumer reviews. That means it's
                    easier to find a product that actually does what it claims
                    to do.
                  </Typography>
                  <Stack spacing={2} direction="row">
                    <Link href="/find-products">
                      <Button
                        variant="contained"
                        className={`${styles.review__button} findPro`}
                      >
                        Find a product
                      </Button>
                    </Link>
                  </Stack>
                  <img
                    src="reviews-panel.svg"
                    style={{ marginTop: "20px" }}
                    alt=""
                    className={`img-fluid ms-auto ${styles.sec_six_img_mobile}`}
                  />
                </div>
              </Grid>
              <Grid item xs={1}>
                <ArrowForwardIosIcon className={styles.claim__arrow} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Slider>
    </Box>
  );
}

export default SectionSix;
