import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal, { ModalProps } from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Grid from "@mui/material/Grid";
import styles from "./selectProduct.module.css";
import { Omit, BsPrefixProps } from "react-bootstrap/esm/helpers";

function SelectProducts(
  props: JSX.IntrinsicAttributes &
    Omit<
      Pick<
        React.DetailedHTMLProps<
          React.HTMLAttributes<HTMLDivElement>,
          HTMLDivElement
        >,
        "key" | keyof React.HTMLAttributes<HTMLDivElement>
      > & { ref?: React.Ref<HTMLDivElement> },
      BsPrefixProps<"div"> & ModalProps
    > &
    BsPrefixProps<"div"> &
    ModalProps & { children?: React.ReactNode }
) {
  const [skinTypeValue, setSkinTypeValue] = useState("");
  const [skinConcernValue, setSkinConcernValue] = useState("");
  const [concernShow, setConcernShow] = useState(false);
  const [nextShow, setNextShow] = useState(false);

  const skinType = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSkinTypeValue((e.target as HTMLInputElement).value);
  };
  const concern = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSkinConcernValue((e.target as HTMLInputElement).value);
  };

  useEffect(() => {
    if (skinTypeValue !== "") {
      setConcernShow(true);
    }
    if (skinConcernValue !== "") {
      setNextShow(true);
    }
    props.skinValues(skinTypeValue, skinConcernValue);
  }, [skinTypeValue, skinConcernValue]);

  useEffect(() => {
    if (props.emptyForm) {
      setSkinTypeValue("");
      setSkinConcernValue("");
      setConcernShow(false);
      setNextShow(false);
    }
  }, [props.emptyForm]);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={`${styles.select_product_modal}`}
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
                1 of 3
              </p>
            </Grid>
            <Grid item xs={12} md={9}>
              <h2 className="mt-5">
                Ray, let's find skincare products based on what other consumers
                say.
              </h2>
            </Grid>
            <Grid item xs={3}>
              <p className={`${styles.number_modal} mt-5 text-end me-4`}>
                1 of 3
              </p>
            </Grid>
          </Grid>
          <p className={`${styles.p_p} mb-0 mt-3`}>
            Which of these options sounds like you?
          </p>
          <div className={`${styles.slect_product} pt-3`}>
            <Form>
              <div className=" d-flex flex-wrap ">
                <label
                  className={`${styles.cstm_label} ${
                    skinTypeValue == "oily" ? "cstm_label_selected" : ""
                  } form-check-label`}
                >
                  <input
                    className={`${styles.cstm_radio}  form-check-input`}
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    value="oily"
                    onChange={(e) => skinType(e)}
                  />
                  🪔 Oily
                </label>

                <label
                  className={`${styles.cstm_label} ${
                    skinTypeValue == "dry" ? "cstm_label_selected" : ""
                  } form-check-label`}
                >
                  <input
                    className={`${styles.cstm_radio} form-check-input`}
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    value="dry"
                    onChange={(e) => skinType(e)}
                  />
                  🌵 Dry
                </label>
                <label
                  className={`${styles.cstm_label} ${
                    skinTypeValue == "normal" ? "cstm_label_selected" : ""
                  } form-check-label`}
                >
                  <input
                    className={`${styles.cstm_radio} form-check-input`}
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    value="normal"
                    onChange={(e) => skinType(e)}
                  />
                  👌 Normal
                </label>
              </div>
              <div className="d-flex flex-wrap">
                <label
                  className={`${styles.cstm_label} ${
                    skinTypeValue == "sensitive" ? "cstm_label_selected" : ""
                  } form-check-label`}
                >
                  <input
                    className={`${styles.cstm_radio} form-check-input`}
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    value="sensitive"
                    onChange={(e) => skinType(e)}
                  />
                  😰 Sensitive
                </label>
                <label
                  className={`${styles.cstm_label} ${
                    skinTypeValue == "combination" ? "cstm_label_selected" : ""
                  } form-check-label`}
                >
                  <input
                    className={`${styles.cstm_radio} form-check-input`}
                    type="radio"
                    name="flexRadioDefault"
                    value="combination"
                    id="flexRadioDefault1"
                    onChange={(e) => skinType(e)}
                  />
                  🤝 Combination
                </label>
                <label
                  className={`${styles.cstm_label} ${
                    skinTypeValue == "not_sure" ? "cstm_label_selected" : ""
                  } form-check-label`}
                >
                  <input
                    className={`${styles.cstm_radio} form-check-input`}
                    type="radio"
                    name="flexRadioDefault"
                    value="not_sure"
                    id="flexRadioDefault1"
                    onChange={(e) => skinType(e)}
                  />
                  🤔 Not sure
                </label>
              </div>
            </Form>

            {concernShow ? (
              <>
                <p className={`${styles.p_p} ${styles.left_space_p} mt-3 ml-0`}>
                  What's your <strong>number one</strong> concern right now?
                </p>
                <Form>
                  <div
                    className={`${styles.prcduct_mobile_view} d-flex flex-wrap`}
                  >
                    <label
                      className={`${styles.cstm_label} ${
                        skinConcernValue == "dryness"
                          ? "cstm_label_selected"
                          : ""
                      } form-check-label ${styles.mobile_cstm_label}`}
                    >
                      <input
                        className={`${styles.cstm_radio} form-check-input`}
                        type="radio"
                        value="dryness"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        onChange={(e) => concern(e)}
                      />
                      🌵 Dryness
                    </label>
                    <label
                      className={`${styles.cstm_label} ${
                        skinConcernValue == "dullness"
                          ? "cstm_label_selected"
                          : ""
                      } form-check-label ${styles.mobile_cstm_label}`}
                    >
                      <input
                        className={`${styles.cstm_radio} form-check-input`}
                        type="radio"
                        value="dullness"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        onChange={(e) => concern(e)}
                      />
                      💀 Dullness
                    </label>
                    <label
                      className={`${styles.cstm_label} ${
                        skinConcernValue == "fine_lines"
                          ? "cstm_label_selected"
                          : ""
                      } form-check-label ${styles.mobile_cstm_label1}`}
                    >
                      <input
                        className={`${styles.cstm_radio} form-check-input`}
                        type="radio"
                        value="fine_lines"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        onChange={(e) => concern(e)}
                      />
                      👵 Fine lines & wrinkles
                    </label>
                  </div>
                  <div className="d-flex flex-wrap">
                    <label
                      className={`${styles.cstm_label} ${
                        skinConcernValue == "acne_pimples"
                          ? "cstm_label_selected"
                          : ""
                      } form-check-label `}
                    >
                      <input
                        className={`${styles.cstm_radio} form-check-input`}
                        type="radio"
                        value="acne_pimples"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        onChange={(e) => concern(e)}
                      />
                      😞 Acne & pimples
                    </label>
                    <label
                      className={`${styles.cstm_label} ${
                        skinConcernValue == "sun_damage"
                          ? "cstm_label_selected"
                          : ""
                      } form-check-label`}
                    >
                      <input
                        className={`${styles.cstm_radio} form-check-input`}
                        type="radio"
                        value="sun_damage"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        onChange={(e) => concern(e)}
                      />
                      ☀️ Sun damage & pigmentation
                    </label>
                  </div>
                  <div
                    className={`${styles.prcduct_mobile_view} d-flex flex-wrap`}
                  >
                    <label
                      className={`${styles.cstm_label} ${
                        skinConcernValue == "redness_irritation"
                          ? "cstm_label_selected"
                          : ""
                      } form-check-label ${styles.mobile_cstm_label1}`}
                    >
                      <input
                        className={`${styles.cstm_radio} form-check-input`}
                        type="radio"
                        value="redness_irritation"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        onChange={(e) => concern(e)}
                      />
                      🔴 Redness & irritation
                    </label>
                    <label
                      className={`${styles.cstm_label} ${
                        skinConcernValue == "puffiness"
                          ? "cstm_label_selected"
                          : ""
                      } form-check-label ${styles.mobile_cstm_label_p} `}
                    >
                      <input
                        className={`${styles.cstm_radio} form-check-input`}
                        type="radio"
                        value="puffiness"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        onChange={(e) => concern(e)}
                      />
                      🐡 Puffiness
                    </label>
                    <label
                      className={`${styles.cstm_label} ${
                        skinConcernValue == "dark_circle"
                          ? "cstm_label_selected"
                          : ""
                      } form-check-label ${styles.mobile_cstm_label_d}`}
                    >
                      <input
                        className={`${styles.cstm_radio} form-check-input`}
                        type="radio"
                        value="dark_circle"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        onChange={(e) => concern(e)}
                      />
                      ⚫ Dark eye circle
                    </label>
                  </div>
                  <div
                    className={`${styles.prcduct_mobile_view} d-flex flex-wrap`}
                  >
                    <label
                      className={`${styles.cstm_label} ${
                        skinConcernValue == "skin_texture"
                          ? "cstm_label_selected"
                          : ""
                      } form-check-label ${styles.mobile_cstm_label_r}`}
                    >
                      <input
                        className={`${styles.cstm_radio} form-check-input`}
                        type="radio"
                        value="skin_texture"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        onChange={(e) => concern(e)}
                      />
                      ⛰️ Rough skin texture
                    </label>
                    <label
                      className={`${styles.cstm_label} ${
                        skinConcernValue == "constant_breakouts"
                          ? "cstm_label_selected"
                          : ""
                      } form-check-label ${styles.mobile_cstm_label_c}`}
                    >
                      <input
                        className={`${styles.cstm_radio} form-check-input`}
                        type="radio"
                        value="constant_breakouts"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        onChange={(e) => concern(e)}
                      />
                      🚨 Constant breakouts
                    </label>
                    <label
                      className={`${styles.cstm_label} ${
                        skinConcernValue == "large_pores"
                          ? "cstm_label_selected"
                          : ""
                      } form-check-label ${styles.mobile_cstm_label_l}`}
                    >
                      <input
                        className={`${styles.cstm_radio} form-check-input`}
                        type="radio"
                        value="large_pores"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        onChange={(e) => concern(e)}
                      />
                      ⚫ Large pores
                    </label>
                  </div>
                  <div className="d-flex flex-wrap">
                    <label
                      className={`${styles.cstm_label} ${
                        skinConcernValue == "uneven_skin_tone"
                          ? "cstm_label_selected"
                          : ""
                      } form-check-label`}
                    >
                      <input
                        className={`${styles.cstm_radio} form-check-input`}
                        type="radio"
                        value="uneven_skin_tone"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        onChange={(e) => concern(e)}
                      />
                      🚥 Uneven skin tone
                    </label>
                    <label
                      className={`${styles.cstm_label} ${
                        skinConcernValue == "saggy_skin"
                          ? "cstm_label_selected"
                          : ""
                      } form-check-label`}
                    >
                      <input
                        className={`${styles.cstm_radio} form-check-input`}
                        type="radio"
                        value="saggy_skin"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        onChange={(e) => concern(e)}
                      />
                      👵 Saggy and lifeless skin
                    </label>
                  </div>
                  <div className="d-flex flex-wrap">
                    <label
                      className={`${styles.cstm_label} ${
                        skinConcernValue == "scares"
                          ? "cstm_label_selected"
                          : ""
                      } form-check-label`}
                    >
                      <input
                        className={`${styles.cstm_radio} form-check-input`}
                        type="radio"
                        value="scares"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        onChange={(e) => concern(e)}
                      />
                      🤕 Scarring
                    </label>
                  </div>
                </Form>
              </>
            ) : (
              ""
            )}

            {nextShow ? (
              <div
                className={`d-flex justify-content-end mt-4`}
                onClick={() => props.nextModal("selectedProduct")}
              >
                <Button
                  variant="outline-secondary"
                  className={`${styles.select_product_next}`}
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

export default SelectProducts;
