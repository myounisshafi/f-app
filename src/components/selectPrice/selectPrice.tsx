import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal, { ModalProps } from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Row, Col, Container } from "react-bootstrap";
import Grid from "@mui/material/Grid";
import styles from "./selectPrice.module.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Omit, BsPrefixProps } from "react-bootstrap/esm/helpers";

function SelectPrice(props: JSX.IntrinsicAttributes & Omit<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & { ref?: React.Ref<HTMLDivElement>; }, BsPrefixProps<"div"> & ModalProps> & BsPrefixProps<"div"> & ModalProps & { children?: React.ReactNode; }) {
  const [priceRange, setPriceRange] = useState("");
  const [skinColor, setSkinColor] = useState("");
  const [showNext, setNext] = useState(false);
  const [showSkinColor, setShowSkinColor] = useState(false);

  const skinTone = (e: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    setSkinColor((e.target as HTMLInputElement).value);
  };

  const range = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriceRange((e.target as HTMLInputElement).value);
  };

  useEffect(() => {
    if (priceRange !== "") {
      setShowSkinColor(true);
    }
    if (skinColor !== "") {
      setNext(true);
    }
    if (priceRange !== "" || skinColor !== "") {
      props.skinRangeColor(priceRange, skinColor);
    }
  }, [priceRange, skinColor]);

  useEffect(() => {
    if (props.emptyForm) {
      setPriceRange("");
      setSkinColor("");
      setShowSkinColor(false);
      setNext(false);
    }
  }, [props.emptyForm]);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={`${styles.modal_width_cstm_wrap}`}
    >
      <Modal.Body>
        <div
          className={`${
            (styles.modal_body_sec, styles.modal_width_cstm)
          } pt-2 pb-5`}
        >
          <Grid container>
            <Grid item xs={12}>
              <p className={`${styles.number_modal_mobile}  text-center `}>
                2 of 3
              </p>
            </Grid>
            <Grid item xs={9}>
              <h2 className="mt-5">
                Ray, let's find skincare products based on what other consumers
                say.
              </h2>
            </Grid>
            <Grid item xs={3}>
              <p className={`${styles.number_modal} mt-5 text-end me-4`}>
                2 of 3
              </p>
            </Grid>
          </Grid>
          <p className={`${styles.p_p} mb-0 mt-3`}>What's your price range?</p>
          <div className="form_wrapper pt-3">
            <Form>
              <div className={`${styles.mobile_price_block} d-flex `}>
                <label
                  className={`${styles.cstm_label} ${
                    priceRange == "$0-$50" ? "cstm_label_selected" : ""
                  } form-check-label ${styles.width_50}`}
                >
                  <input
                    className={`${styles.cstm_radio} form-check-input`}
                    value="$0-$50"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    onChange={(e) => range(e)}
                  />
                  💵 $0-$50
                </label>
                <label
                  className={`${styles.cstm_label} ${
                    priceRange == "$50-$100" ? "cstm_label_selected" : ""
                  } form-check-label ${styles.width_100}`}
                >
                  <input
                    className={`${styles.cstm_radio} form-check-input`}
                    value="$50-$100"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    onChange={(e) => range(e)}
                  />
                  💰 $50-$100
                </label>
                <label
                  className={`${styles.cstm_label} ${
                    priceRange == "$100+" ? "cstm_label_selected" : ""
                  } form-check-label ${styles.width_96}`}
                >
                  <input
                    className={`${styles.cstm_radio} form-check-input`}
                    value="$100+"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    onChange={(e) => range(e)}
                  />
                  💸 $100+
                </label>
              </div>
            </Form>
            {showSkinColor ? (
              <>
                <p className={`${styles.p_p} mb-0 mt-3`}>
                  What shade best matches your skin tone?
                </p>
                <Container fluid>
                  {" "}
                  <div className={`${styles.desktop_colors}`}>
                    <Row className="mt-3" noGutters={true}>
                      <Col className={`${styles.spacing_cstm}`}>
                        <div
                          className={`${styles.skin_color} ${
                            skinColor == "very_fair_one"
                              ? "cstm_color_selected"
                              : ""
                          }`}
                        >
                          <input
                            className={`${styles.cstm_checkbox} form-check-input`}
                            onChange={(e) => skinTone(e)}
                            type="checkbox"
                            value="very_fair_one"
                            name="very_fair_one"
                            id="flexRadioDefault1"
                          />
                        </div>
                      </Col>
                      <Col className={`${styles.spacing_cstm}`}>
                        <div
                          className={`${styles.skin_color1} ${
                            skinColor == "very_fair_two"
                              ? "cstm_color_selected"
                              : ""
                          }`}
                        >
                          <input
                            className={`${styles.cstm_checkbox} form-check-input`}
                            value="very_fair_two"
                            name="very_fair_two"
                            type="checkbox"
                            id=""
                            onClick={(e) => skinTone(e)}
                          />
                        </div>
                      </Col>
                      <Col className={`${styles.spacing_cstm}`}>
                        <div
                          className={`${styles.skin_color2} ${
                            skinColor == "very_fair"
                              ? "cstm_color_selected"
                              : ""
                          }`}
                        >
                          <input
                            className={`${styles.cstm_checkbox} form-check-input`}
                            value="very_fair"
                            name="very_fair"
                            type="checkbox"
                            id=""
                            onClick={(e) => skinTone(e)}
                          />
                        </div>
                      </Col>
                      <Col className={`${styles.spacing_cstm}`}>
                        <div
                          className={`${styles.skin_color3} ${
                            skinColor == "medium_one"
                              ? "cstm_color_selected"
                              : ""
                          }`}
                        >
                          <input
                            className={`${styles.cstm_checkbox} form-check-input`}
                            type="checkbox"
                            value="medium_one"
                            name="medium_one"
                            id=""
                            onClick={(e) => skinTone(e)}
                          />
                        </div>
                      </Col>
                      <Col className={`${styles.spacing_cstm}`}>
                        <div
                          className={`${styles.skin_color4} ${
                            skinColor == "medium_two"
                              ? "cstm_color_selected"
                              : ""
                          }`}
                        >
                          <input
                            className={`${styles.cstm_checkbox} form-check-input`}
                            type="checkbox"
                            value="medium_two"
                            name="medium_two"
                            id=""
                            onClick={(e) => skinTone(e)}
                          />
                        </div>
                      </Col>
                      <Col className={`${styles.spacing_cstm}`}>
                        <div
                          className={`${styles.skin_color5} ${
                            skinColor == "olive_one"
                              ? "cstm_color_selected"
                              : ""
                          }`}
                        >
                          <input
                            className={`${styles.cstm_checkbox} form-check-input`}
                            type="checkbox"
                            value="olive_one"
                            name="olive_one"
                            id=""
                            onClick={(e) => skinTone(e)}
                          />
                        </div>
                      </Col>
                      <Col className={`${styles.spacing_cstm}`}>
                        <div
                          className={`${styles.skin_color6} ${
                            skinColor == "olive_two"
                              ? "cstm_color_selected"
                              : ""
                          }`}
                        >
                          <input
                            className={`${styles.cstm_checkbox} form-check-input`}
                            type="checkbox"
                            value="olive_two"
                            name="olive_two"
                            id=""
                            onClick={(e) => skinTone(e)}
                          />
                        </div>
                      </Col>
                      <Col className={`${styles.spacing_cstm}`}>
                        <div
                          className={`${styles.skin_color7} ${
                            skinColor == "brown" ? "cstm_color_selected" : ""
                          }`}
                        >
                          <input
                            className={`${styles.cstm_checkbox} form-check-input`}
                            type="checkbox"
                            value="brown"
                            name="brown"
                            id=""
                            onClick={(e) => skinTone(e)}
                          />
                        </div>
                      </Col>
                      <Col className={`${styles.spacing_cstm}`}>
                        <div
                          className={`${styles.skin_color8} ${
                            skinColor == "dark_one" ? "cstm_color_selected" : ""
                          }`}
                        >
                          <input
                            className={`${styles.cstm_checkbox} form-check-input`}
                            type="checkbox"
                            value="dark_one"
                            name="dark_one"
                            id=""
                            onClick={(e) => skinTone(e)}
                          />
                        </div>
                      </Col>
                      <Col className={`${styles.spacing_cstm}`}>
                        <div
                          className={`${styles.skin_color9} ${
                            skinColor == "dark_two" ? "cstm_color_selected" : ""
                          }`}
                        >
                          <input
                            className={`${styles.cstm_checkbox} form-check-input`}
                            type="checkbox"
                            value="dark_two"
                            name="dark_two"
                            id=""
                            onClick={(e) => skinTone(e)}
                          />
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div className={`${styles.mobile_colors}`}>
                    <Row className="mt-3" noGutters={true}>
                      <Col className={`${styles.spacing_cstm}`} xs={12} md={1}>
                        <div
                          className={`${styles.skin_color} ${
                            skinColor == "very_fair_one"
                              ? "cstm_color_selected"
                              : ""
                          }`}
                        >
                          <input
                            className={`${styles.cstm_checkbox} form-check-input`}
                            onChange={(e) => skinTone(e)}
                            type="checkbox"
                            value="very_fair_one"
                            name="very_fair_one"
                            id="flexRadioDefault1"
                          />
                        </div>
                      </Col>
                      <Col className={`${styles.spacing_cstm}`} xs={12} md={1}>
                        <div
                          className={`${styles.skin_color1} ${
                            skinColor == "very_fair_two"
                              ? "cstm_color_selected"
                              : ""
                          }`}
                        >
                          <input
                            className={`${styles.cstm_checkbox} form-check-input`}
                            value="very_fair_two"
                            name="very_fair_two"
                            type="checkbox"
                            id=""
                            onClick={(e) => skinTone(e)}
                          />
                        </div>
                      </Col>
                      <Col className={`${styles.spacing_cstm}`} xs={12} md={1}>
                        <div
                          className={`${styles.skin_color2} ${
                            skinColor == "very_fair"
                              ? "cstm_color_selected"
                              : ""
                          }`}
                        >
                          <input
                            className={`${styles.cstm_checkbox} form-check-input`}
                            value="very_fair"
                            name="very_fair"
                            type="checkbox"
                            id=""
                            onClick={(e) => skinTone(e)}
                          />
                        </div>
                      </Col>
                      <Col className={`${styles.spacing_cstm}`} xs={12} md={1}>
                        <div
                          className={`${styles.skin_color3} ${
                            skinColor == "medium_one"
                              ? "cstm_color_selected"
                              : ""
                          }`}
                        >
                          <input
                            className={`${styles.cstm_checkbox} form-check-input`}
                            type="checkbox"
                            value="medium_one"
                            name="medium_one"
                            id=""
                            onClick={(e) => skinTone(e)}
                          />
                        </div>
                      </Col>
                      <Col className={`${styles.spacing_cstm}`} xs={12} md={1}>
                        <div
                          className={`${styles.skin_color4} ${
                            skinColor == "medium_two"
                              ? "cstm_color_selected"
                              : ""
                          }`}
                        >
                          <input
                            className={`${styles.cstm_checkbox} form-check-input`}
                            type="checkbox"
                            value="medium_two"
                            name="medium_two"
                            id=""
                            onClick={(e) => skinTone(e)}
                          />
                        </div>
                      </Col>
                      <Col className={`${styles.spacing_cstm}`} xs={12} md={1}>
                        <div
                          className={`${styles.skin_color5} ${
                            skinColor == "olive_one"
                              ? "cstm_color_selected"
                              : ""
                          }`}
                        >
                          <input
                            className={`${styles.cstm_checkbox} form-check-input`}
                            type="checkbox"
                            value="olive_one"
                            name="olive_one"
                            id=""
                            onClick={(e) => skinTone(e)}
                          />
                        </div>
                      </Col>
                      <Col className={`${styles.spacing_cstm}`} xs={12} md={1}>
                        <div
                          className={`${styles.skin_color6} ${
                            skinColor == "olive_two"
                              ? "cstm_color_selected"
                              : ""
                          }`}
                        >
                          <input
                            className={`${styles.cstm_checkbox} form-check-input`}
                            type="checkbox"
                            value="olive_two"
                            name="olive_two"
                            id=""
                            onClick={(e) => skinTone(e)}
                          />
                        </div>
                      </Col>
                      <Col className={`${styles.spacing_cstm}`} xs={12} md={1}>
                        <div
                          className={`${styles.skin_color7} ${
                            skinColor == "brown" ? "cstm_color_selected" : ""
                          }`}
                        >
                          <input
                            className={`${styles.cstm_checkbox} form-check-input`}
                            type="checkbox"
                            value="brown"
                            name="brown"
                            id=""
                            onClick={(e) => skinTone(e)}
                          />
                        </div>
                      </Col>
                      <Col className={`${styles.spacing_cstm}`} xs={12} md={1}>
                        <div
                          className={`${styles.skin_color8} ${
                            skinColor == "dark_one" ? "cstm_color_selected" : ""
                          }`}
                        >
                          <input
                            className={`${styles.cstm_checkbox} form-check-input`}
                            type="checkbox"
                            value="dark_one"
                            name="dark_one"
                            id=""
                            onClick={(e) => skinTone(e)}
                          />
                        </div>
                      </Col>
                      <Col className={`${styles.spacing_cstm}`} xs={12} md={1}>
                        <div
                          className={`${styles.skin_color9} ${
                            skinColor == "dark_two" ? "cstm_color_selected" : ""
                          }`}
                        >
                          <input
                            className={`${styles.cstm_checkbox} form-check-input`}
                            type="checkbox"
                            value="dark_two"
                            name="dark_two"
                            id=""
                            onClick={(e) => skinTone(e)}
                          />
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Container>

                <Row className={`${styles.skin_text}`}>
                  <Col className="text-center">
                    <p>Very fair</p>
                    <span>burn easily can't tan</span>
                  </Col>
                  <Col className="text-center">
                    <p>Fair</p>
                    <span>usually burn sometimes tan</span>
                  </Col>
                  <Col className="text-center">
                    <p>Medium</p>
                    <span>sometimes burn usually tan</span>
                  </Col>
                  <Col className="text-center">
                    <p>Olive</p>
                    <span>rarely burn always tan</span>
                  </Col>
                  <Col className="text-center">
                    <p>Brown</p>
                    <span>never burn always tan</span>
                  </Col>
                  <Col className="text-center">
                    <p>Dark</p>
                    <span>never burn always tan</span>
                  </Col>
                </Row>
              </>
            ) : (
              ""
            )}
            {showNext ? (
              <div className="d-flex justify-content-between mt-4">
                <div className={`${styles.desktop_next}`}>
                  <Button
                    className={`${styles.select_price_next} ps-1`}
                    variant="outline-secondary"
                  >
                    <span
                      onClick={() => props.nextModal("back_to_select_products")}
                    >
                      <ArrowBackIosNewIcon
                        style={{ fontSize: "1rem", marginTop: "-6px" }}
                      />{" "}
                      Back
                    </span>
                  </Button>
                </div>
                <div className={`${styles.mobile_next}`}>
                  <ArrowBackIosNewIcon
                    onClick={() => props.nextModal("back_to_select_products")}
                    style={{
                      fontSize: "1.5rem",
                      marginTop: "0px",
                      marginLeft: "1px",
                    }}
                  />{" "}
                </div>

                <Button
                  className={`${styles.select_price_next}`}
                  variant="outline-secondary"
                  onClick={() => props.nextModal("selectPrice")}
                >
                  Next
                </Button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default SelectPrice;
