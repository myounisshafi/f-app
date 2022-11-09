import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal, { ModalProps } from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Link from 'next/link'
import { DropdownDate } from "react-dropdown-date";
import styles from "./register.module.css";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { Omit, BsPrefixProps } from 'react-bootstrap/esm/helpers';
import { E164Number } from 'libphonenumber-js/types';



const formatDate = (date: string | number | Date) => {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
};

function RegisterModal(props: JSX.IntrinsicAttributes & Omit<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & { ref?: React.Ref<HTMLDivElement>; }, BsPrefixProps<"div"> & ModalProps> & BsPrefixProps<"div"> & ModalProps & { children?: React.ReactNode; }) {


  const [inputValues, setInputValues] = useState({
    f_name: ''
  })
  const [dateOfBirth, setDateOfBirth] = useState({
    date: null,
    selectedDate: "2012-11-15",
  })
  const [validated, setValidated] = useState(false);
  const [value, setValue] = useState()
  const handleSubmit = (event: { currentTarget: any; preventDefault: () => void; stopPropagation: () => void; }) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      props.nextModal("register")
    }

    setValidated(true);
  };

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value })
  }

  const phoneNumber = (e) =>{
    setValue(e)
    props.setNumberExist(true)
  }

  useEffect(() => {
    props.userSignUp(value, inputValues.f_name, dateOfBirth.selectedDate)
  }, [inputValues, dateOfBirth, value])


  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body  >
        <div className={`${styles.modal_body_sec} pt-5 pb-5`}>
          <h4 className="text-center fw-bold">Join our community and start browsing skincare products with more transparency.</h4>
          <p className="text-center">
            Your phone number can only be used to create one account.
          </p>
          <div className={`${styles.form_wrapper} pt-2`}>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group className={`mb-3`} controlId="formBasicEmail">
                <Form.Label>Phone Number</Form.Label>
                <PhoneInput
                  className={`${styles.phone_input} ${props.numberExist == false ? "border border-danger" : ""}`}
                  placeholder="Enter phone number"
                  value={value}
                  onChange={(e) => phoneNumber(e)} />
                  {props.numberExist == false ? (<p style={{padding: "0px", fontSize: '12px', color: 'red'}}>Phone number already exists</p>) : ""}
              </Form.Group>

              <Form.Group className="mb-2" controlId="formBasicPassword">
                <Form.Label>Full Name</Form.Label>
                <Form.Control className={`${styles.cstm_reg_input} pt-2 pb-2`} type="text" placeholder="" name="f_name" required onChange={(e) => inputHandler(e)} />
                {/* <Form.Control.Feedback type="invalid">
                  Please enter your full name.
                </Form.Control.Feedback> */}
              </Form.Group >
              <Form.Group className="mb-2">
                <Row className="pt-2">
                  <Col >
                    <Form.Label >Date of birth</Form.Label>
                    <div>
                      <DropdownDate selectedDate={dateOfBirth.selectedDate} onDateChange={(date: any) => setDateOfBirth({ date: date, selectedDate: formatDate(date) })} />
                    </div>
                  </Col>
                </Row>
              </Form.Group>
              <div className="submit_btn">
                <Button variant="primary" className='w-100 mt-4 login_form_btn' style={{ backgroundColor: "#fd7791", border: "none", padding: "15px 0px" }} type="submit">Continue</Button>
                <div className={`mt-3 text-center ${styles.register_info}`}><span>By continuing, you agree with our </span><span onClick={() => props.nextModal("redirect_termsOfService")}><Link href="/terms-of-services">Terms of Service</Link></span> <span>and</span> <span onClick={() => props.nextModal("redirect_termsOfService")}><Link href="/privacy-policy">Privacy Policy</Link></span>
                  <div className={`${styles.already_account}`}>
                    <div className={`${styles.login_redirect}`} onClick={() => props.nextModal("login_redirect")} >Already have an account?</div>
                  </div>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
export default RegisterModal