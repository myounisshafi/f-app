import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal, { ModalProps } from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import styles from "./login.module.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { Omit, BsPrefixProps } from "react-bootstrap/esm/helpers";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { loginUser, userState } from "../../redux/userSlice";
import { Spinner } from "react-bootstrap";

function Signup(
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
  const [inputValues, setInputValues] = useState({
    phone_number: "",
    password: "",
  });
  const [value, setValue] = useState<any>("+923009683968");
  const [validatePhoneField, setValidatePhoneField] = useState(false);
  const userStateData = useAppSelector(userState);
  const dispatch = useAppDispatch();

  const inputHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  const phoneNumber = (e: React.SetStateAction<string>) => {
    setValue(e);
    setValidatePhoneField(false);
    props.setNumberNotExist(true);
  };

  const forgotPassword = () => {
    if (value !== "" && value !== undefined && value !== null) {
      props.resetSendCode(value);
    } else {
      setValidatePhoneField(true);
    }
  };

  useEffect(() => {
    if (userStateData.userToken) {
      props.userLogin();
    }
  }, [userStateData.userToken]);

  useEffect(() => {}, [inputValues]);
  const doUserLogin = () => {
    if (userStateData.isLogging) return;
    
    dispatch(loginUser(value, inputValues.password));

  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header
        closeButton
        className={`${styles.cstm_modal_header} pb-0`}
        style={{ borderBottom: "none" }}
      ></Modal.Header>
      <Modal.Body className="pt-0">
        <div className={`${styles.modal_body_sec} pt-2 pb-5`}>
          <h4 className="text-center">Welcome back!</h4>
          <p className="text-center">
            The Fluffie community is happy to see you again 🤗
          </p>
          <div className="form_wrapper pt-3">
            <Form className={`${styles.code_position}`}>
              <Form.Group className={` mb-3`} controlId="formBasicEmail">
                <Form.Label>Phone Number</Form.Label>
                <PhoneInput
                  className={`${styles.phone_input}`}
                  placeholder="Enter phone number"
                  value={value}
                  onChange={(e) => phoneNumber(e)}
                  required
                />
                {validatePhoneField ? (
                  <p className="text-danger" style={{ fontSize: "12px" }}>
                    Please enter your phone number
                  </p>
                ) : (
                  ""
                )}
                {!props.numberNotExist ? (
                  <p className="text-danger" style={{ fontSize: "12px" }}>
                    This phone number doesn't exist
                  </p>
                ) : (
                  ""
                )}
              </Form.Group>

              <Form.Group className="mb-2" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  className="pt-2 pb-2"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={(e) => inputHandler(e)}
                />
              </Form.Group>
              <a href="#" onClick={() => forgotPassword()}>
                Forgot your password?
              </a>
              <div className="submit_btn">
                <p className="text-center text-danger fs-5 mt-3">
                
                  {userStateData.message}
                </p>
                <Button
                  variant="primary"
                  className="w-100  login_form_btn"
                  style={{
                    backgroundColor: "#fd7791",
                    border: "none",
                    padding: "15px 0px",
                  }}
                  onClick={doUserLogin}
                >
                  {userStateData.isLogging ? (
                    <Spinner size="sm" animation="border" />
                  ) : (
                    "Log In"
                  )}
                </Button>
                <div className="mt-2">
                  <span>Need an account?</span>
                  <span
                    className={`${styles.register_redirect}`}
                    onClick={() => props.nextModal("redirect_register")}
                  >
                    {" "}
                    Register
                  </span>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default Signup;
