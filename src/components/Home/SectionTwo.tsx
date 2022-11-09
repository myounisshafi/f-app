import React from "react";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import styles from "./home.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SectionTwo() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };
  return (
    <Box sx={{ flexGrow: 1 }} className={styles.section__two} id="section-two">
      <Grid container>
        <Grid xs={11} style={{ margin: "auto" }}>
          <Grid container>
            <Grid item xs={12} md={5} lg={6}>
              <img
                src="review-image.svg"
                className={`${styles.sec_two_image_desc}`}
                alt=""
              />
            </Grid>
            <Grid item xs={12} md={7} lg={6} className={styles.right__side}>
              <Typography variant="h2" className="fw-bold ">
                Real People{" "}
                <img
                  src="verified.svg"
                  className={`${styles.real_img}`}
                  alt=""
                />
              </Typography>
              <Typography variant="h2" className="fw-bold" gutterBottom>
                <Grid container>
                  <Grid item lg={2} xs={1}>
                    <Typography variant="h2" className="fw-bold" gutterBottom>
                      {" "}
                      Real
                    </Typography>
                  </Grid>
                  <Grid item lg={3} xs={6}>
                    <Slider {...settings} className={`${styles.ms_two} `}>
                      <span className={styles.pink}>photo</span>
                      <span className={styles.pink}>audio</span>
                      <span className={styles.pink}>video</span>
                    </Slider>
                  </Grid>
                  <Grid item lg={2} xs={1}>
                    <Typography
                      variant="h2"
                      className={`${styles.reviews_spacing} fw-bold`}
                      gutterBottom
                    >
                      reviews
                    </Typography>
                  </Grid>
                </Grid>
              </Typography>
              <Typography
                variant="body2"
                gutterBottom
                className={styles.small__text}
              >
                Contribute a photo, audio or video reviews. None of our review
                are #gifted or #promoted.
              </Typography>
              <Stack
                spacing={2}
                direction="row"
                className={`${styles.center_post}`}
              >
                <Button variant="contained" className={styles.review__button}>
                  Post a review
                </Button>
                <Link href="/explore-reviews">
                  <span className={styles.explore__review}>
                    {" "}
                    Explore reviews
                  </span>
                </Link>
              </Stack>
              <img
                src="review-image.svg"
                className={`${styles.sec_two_image_mobile} mt-3`}
                alt=""
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SectionTwo;
