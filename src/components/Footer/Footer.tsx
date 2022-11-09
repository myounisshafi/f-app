import React from "react";
import Typography from "@mui/material/Typography";
import style from "./Footer.module.css";
import Grid from "@mui/material/Grid";

function Footer() {
  return (
    <div className={`${style.footer_mobile} mt-5`}>
      <footer className={`${style.footer_center} bg-white text-muted pb-5`}>
        <section className="">
          <Grid container spacing={5} className={`${style.mx_space} mx-5`}>
            <Grid item lg={4} xs={6} className={`${style.ms_space} ms-3`}>
              <div className={`${style.footer__left}`}>
                <Typography
                  variant="h6"
                  className={`text-uppercase fw-bold text-black ${style.footer_logo}`}
                >
                  <img src="logo.png" alt="" className={`${style.img_log}`} />
                </Typography>
                <div className={`${style.footer_icons} mt-3`}>
                  <ul className={` ${style.social__links} d-flex`}>
                    <li>
                      <a href="#!">
                        <img src="facebook.svg" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <img src="instagram.svg" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <img src="tiktok.svg" alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Grid>
            <Grid item lg={2} xs={12} className={`${style.mobile_link}`}>
              <h6 className={`  fw-bold text-black ${style.footer_heading}`}>
                Fluffie Tools
              </h6>
              <div className={`${style.footer_line_img}`}>
                <img src="./line-footer.png" alt="" srcSet="" />
              </div>

              <a href="#!" className="text-reset text-decoration-none d-block">
                Dupes
              </a>

              <a href="#!" className="text-reset text-decoration-none d-block">
                Community
              </a>

              <a href="#!" className="text-reset text-decoration-none d-block">
                Summariser
              </a>

              <a href="#!" className="text-reset text-decoration-none d-block">
                Reviews
              </a>
            </Grid>
            <Grid item lg={2} xs={12} className={`${style.mobile_link}`}>
              <h6 className={`   fw-bold text-black ${style.footer_heading}`}>
                About us
              </h6>
              <div className={`${style.footer_line_img}`}>
                <img src="./line-footer.png" alt="" srcSet="" />
              </div>

              <a href="#!" className="text-reset text-decoration-none d-block">
                About
              </a>

              <a href="#!" className="text-reset text-decoration-none d-block">
                Contact us
              </a>

              <a href="#!" className="text-reset text-decoration-none d-block">
                FAQ
              </a>
            </Grid>
            <Grid item lg={2} xs={12} className={`${style.mobile_link}`}>
              <h6 className={` fw-bold text-black ${style.footer_heading}`}>
                Policies
              </h6>

              <div className={`${style.footer_line_img}`}>
                <img src="./line-footer.png" alt="" srcSet="" />
              </div>
              <a href="#!" className="text-reset text-decoration-none d-block">
                Affiliate Disclosure
              </a>

              <a href="#!" className="text-reset text-decoration-none d-block">
                Privacy Policy
              </a>

              <a href="#!" className="text-reset text-decoration-none d-block">
                Term of User
              </a>
            </Grid>
          </Grid>

          <div className={`${style.footer_icons_mobile} my-4`}>
            <ul className={` ${style.social__links} d-flex`}>
              <li>
                <a href="#!">
                  <img src="facebook.svg" alt="" />
                </a>
              </li>
              <li>
                <a href="#!">
                  <img src="instagram.svg" alt="" />
                </a>
              </li>
              <li>
                <a href="#!">
                  <img src="tiktok.svg" alt="" />
                </a>
              </li>
            </ul>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default Footer;
