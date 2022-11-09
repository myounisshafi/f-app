import React, { useState, useEffect } from "react";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import Modal, { ModalProps } from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Grid from "@mui/material/Grid";
import styles from "./finishProducts.module.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Omit, BsPrefixProps } from "react-bootstrap/esm/helpers";

function FinishProducts(props: JSX.IntrinsicAttributes & Omit<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & { ref?: React.Ref<HTMLDivElement>; }, BsPrefixProps<"div"> & ModalProps> & BsPrefixProps<"div"> & ModalProps & { children?: React.ReactNode; }) {
  const [ProductValue, setProductValue] = useState("");

  const mainProduct = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductValue(e.target.value);
  };

  useEffect(() => {
    props.finishProducts(ProductValue);
  }, [ProductValue]);

  useEffect(() => {
    if (props.emptyForm) {
      setProductValue("");
    }
  }, [props.emptyForm]);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
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
                3 of 3
              </p>
            </Grid>
            <Grid item xs={9}>
              <h2 className="mt-5">
                Ray, let's find skincare products based on what other consumers
                say.
              </h2>
            </Grid>
            <Grid item xs={3}>
              <p className={`${styles.number_modal}  text-center `}>3 of 3</p>
            </Grid>
          </Grid>
          <p className="mb-0 mt-3">
            Nearly there! Based on this simple 6 step routine,<br></br> Do you
            know what you want to do?
          </p>
          <div className="form_wrapper pt-3">
            <Form>
              <div className="d-flex flex-wrap ">
                <label
                  className={`${styles.cstm_label} ${
                    ProductValue == "cleanse" ? "cstm_label_selected" : ""
                  } form-check-label`}
                >
                  <input
                    className={`${styles.cstm_radio} form-check-input`}
                    value="cleanse"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    onChange={(e) => mainProduct(e)}
                  />
                  🧼 Cleanse
                </label>
                <label
                  className={`${styles.cstm_label} ${
                    ProductValue == "exfoliate" ? "cstm_label_selected" : ""
                  } form-check-label`}
                >
                  <input
                    className={`${styles.cstm_radio} form-check-input`}
                    value="exfoliate"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    onChange={(e) => mainProduct(e)}
                  />
                  🧽 Exfoliate
                </label>
                <label
                  className={`${styles.cstm_label} ${
                    ProductValue == "tone" ? "cstm_label_selected" : ""
                  } form-check-label`}
                >
                  <input
                    className={`${styles.cstm_radio} form-check-input`}
                    value="tone"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    onChange={(e) => mainProduct(e)}
                  />
                  🧴 Tone
                </label>
                <label
                  className={`${styles.cstm_label} ${
                    ProductValue == "treat" ? "cstm_label_selected" : ""
                  } form-check-label`}
                >
                  <input
                    className={`${styles.cstm_radio} form-check-input`}
                    value="treat"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    onChange={(e) => mainProduct(e)}
                  />
                  ⚗️ Treat
                </label>
                <label
                  className={`${styles.cstm_label} ${
                    ProductValue == "hydrate" ? "cstm_label_selected" : ""
                  } form-check-label`}
                >
                  <input
                    className={`${styles.cstm_radio} form-check-input`}
                    value="hydrate"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    onChange={(e) => mainProduct(e)}
                  />
                  💧 Hydrate
                </label>
                <label
                  className={`${styles.cstm_label} ${
                    ProductValue == "protect" ? "cstm_label_selected" : ""
                  } form-check-label`}
                >
                  <input
                    className={`${styles.cstm_radio} form-check-input`}
                    value="protect"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    onChange={(e) => mainProduct(e)}
                  />
                  🌞 Protect
                </label>
              </div>
            </Form>

            <p className="mt-3">Or show me the supplementary stuff:</p>
            <Form>
              <div className="d-flex flex-wrap">
                <label
                  className={`${styles.cstm_label} ${
                    ProductValue == "masks" ? "cstm_label_selected" : ""
                  } form-check-label`}
                >
                  <input
                    className={`${styles.cstm_radio} form-check-input`}
                    value="masks"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    onChange={(e) => mainProduct(e)}
                  />
                  🎭 Masks
                </label>
                <label
                  className={`${styles.cstm_label} ${
                    ProductValue == "eye_care" ? "cstm_label_selected" : ""
                  } form-check-label`}
                >
                  <input
                    className={`${styles.cstm_radio} form-check-input`}
                    value="eye_care"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    onChange={(e) => mainProduct(e)}
                  />
                  👁️ Eye Care
                </label>
                <label
                  className={`${styles.cstm_label} ${
                    ProductValue == "lip_care" ? "cstm_label_selected" : ""
                  } form-check-label`}
                >
                  <input
                    className={`${styles.cstm_radio} form-check-input`}
                    value="lip_care"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    onChange={(e) => mainProduct(e)}
                  />
                  👄 Lip Care
                </label>
                <label
                  className={`${styles.cstm_label} ${
                    ProductValue == "neck_care" ? "cstm_label_selected" : ""
                  } form-check-label`}
                >
                  <input
                    className={`${styles.cstm_radio} form-check-input`}
                    value="neck_care"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    onChange={(e) => mainProduct(e)}
                  />
                  🧣 Neck Care
                </label>
              </div>
            </Form>
            <Link href="/find-products">
              <span
                className={`${styles.looking_for}`}
                onClick={() => {
                  props.userData();
                  props.setEmptyForm(true);
                }}
                style={{ textDecoration: "underline", cursor: "pointer" }}
              >
                I don't really know what I'm looking for 🤷
              </span>
            </Link>
            <div className="d-flex justify-content-between mt-5">
              <div className={`${styles.desktop_next}`}>
                <Button
                  className={`${styles.select_price_next} ps-1`}
                  variant="outline-secondary"
                >
                  <span onClick={() => props.nextModal("back_to_select_price")}>
                    <ArrowBackIosNewIcon
                      style={{ fontSize: "1rem", marginTop: "-6px" }}
                    />{" "}
                    Back
                  </span>
                </Button>
              </div>
              <div className={`${styles.mobile_next}`}>
                <ArrowBackIosNewIcon
                  onClick={() => props.nextModal("back_to_select_price")}
                  style={{
                    fontSize: "1.5rem",
                    marginTop: "0px",
                    marginLeft: "1px",
                  }}
                />{" "}
              </div>
              <Button
                className={`${styles.finish_quiz}`}
                variant="outline-secondary"
              >
                <Link href="/find-products">
                  <span
                    onClick={() => {
                      props.userData();
                      props.setEmptyForm(true);
                    }}
                  >
                    Finish
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default FinishProducts;
