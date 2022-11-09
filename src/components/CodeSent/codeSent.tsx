import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal, { ModalProps } from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import styles from "./codeSent.module.css";
import { Omit, BsPrefixProps } from 'react-bootstrap/esm/helpers';

function CodeSent(props: JSX.IntrinsicAttributes & Omit<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & { ref?: React.Ref<HTMLDivElement>; }, BsPrefixProps<"div"> & ModalProps> & BsPrefixProps<"div"> & ModalProps & { children?: React.ReactNode; }) {

  const [userCode, setUserCode] = useState('')

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setUserCode(e.target.value)
    props.setIncorrectCode(false)
  }

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event: { currentTarget: any; preventDefault: () => void; stopPropagation: () => void; }) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      props.getCode(userCode, "login")
    }

    setValidated(true);
  };
  return (

    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={styles.code_sent_modal}
    >
      <Modal.Body  >
        <h2 className="text-center fw-bold mt-5">We sent you a code</h2>
        <div className={`${styles.modal_body_sec, styles.modal_width_cstm} pt-2 pb-5`}>

          <p className="text-center">
            Enter it below to verify your phone number: {props.userPhoneNumber}
          </p>
          <div className="form_wrapper pt-3">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>

              <Form.Group className="mb-2" controlId="formBasicPassword">
                <Form.Label>Verification Code</Form.Label>
                <Form.Control className={`pt-3 pb-3`} type="text" placeholder="" onChange={(e) => inputHandler(e)} required />
                {props.incorrectCode == true ? <Form.Label type="invalid" className='text-danger' style={{fontSize: '12px'}}>Incorrect Code. Please try again.</Form.Label> : ""}
                <Form.Control.Feedback type="invalid">
                  Please enter your OTP.
                </Form.Control.Feedback>
              </Form.Group>
              <a onClick={() => props.sendCode()}>Didn't receive SMS?</a>
              <div className="submit_btn">
                <Button type="submit" variant="primary" className='w-100 mt-3 login_form_btn' style={{ backgroundColor: "#fd7791", border: "none", padding: "15px 0px" }}>Continue</Button>
              </div>
            </Form>
          </div>
        </div>
      </Modal.Body>
    </Modal>


  )
}

export default CodeSent