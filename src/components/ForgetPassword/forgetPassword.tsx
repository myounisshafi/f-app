// @ts-nocheck
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal, { ModalProps } from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import styles from './forgetPassword.module.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { AutoTabProvider } from 'react-auto-tab'
import { Omit, BsPrefixProps } from 'react-bootstrap/esm/helpers';

function ForgetPassword(props: JSX.IntrinsicAttributes & Omit<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & { ref?: React.Ref<HTMLDivElement>; }, BsPrefixProps<"div"> & ModalProps> & BsPrefixProps<"div"> & ModalProps & { children?: React.ReactNode; }) {
  const [inputValue, setInputValue] = useState('')
  const [inputValue1, setInputValue1] = useState('')
  const [inputValue2, setInputValue2] = useState('')
  const [inputValue3, setInputValue3] = useState('')
  const [inputValue4, setInputValue4] = useState('')
  const [inputValue5, setInputValue5] = useState('')
  const [combinecode, setCombineCode] = useState('')
  const [btnColor, setBtnColor] = useState(false);
  useEffect(() => {
    if (inputValue !== '' && inputValue1 !== '' && inputValue2 !== '' && inputValue3 !== '' && inputValue4 !== '' && inputValue5 !== '') {
      setCombineCode(inputValue + inputValue1 + inputValue2 + inputValue3 + inputValue4 + inputValue5)
      setBtnColor(true)
    }
    else {
      setBtnColor(false)

    }
  }, [inputValue5])
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div className={`${styles.modal_body_sec} pt-5 pb-5`}>
          <h4 className="text-center fw-bold">Enter your confirmation code to reset your password</h4>
          <p className="text-center pt-3">
            An SMS was sent to the number {props.userPhoneNumber}. Didn't receive a code? <a href="#" onClick={() => props.resetSendCode(props.userPhoneNumber, "resend")}> Resend</a>
          </p>
          <div className="form_wrapper pt-4">
            <Form className={`${styles.code_position}`}>
              <AutoTabProvider>
                <Row>
                  <Col className={`${styles.no_spacing}`}>
                    <Form.Group className="mb-2" controlId="formBasicPassword">
                      <Form.Control className="pt-2 pb-2" type="number" name="password" value={inputValue} onChange={(e) => setInputValue(e.target.value)} maxLength={1} tabbable="true" />
                    </Form.Group>
                  </Col>
                  <Col className={`${styles.no_spacing}`}>
                    <Form.Group className="mb-2" controlId="formBasicPassword">
                      <Form.Control className="pt-2 pb-2" type="number" name="password" value={inputValue1} onChange={(e) => setInputValue1(e.target.value)} maxLength={1} tabbable="true" />
                    </Form.Group>
                  </Col>
                  <Col className={`${styles.no_spacing}`}>
                    <Form.Group className="mb-2" controlId="formBasicPassword">
                      <Form.Control className="pt-2 pb-2" type="number" name="password" value={inputValue2} onChange={(e) => setInputValue2(e.target.value)} maxLength={1} tabbable="true" />
                    </Form.Group>
                  </Col>
                  <Col className={`${styles.no_spacing}`}>
                    <Form.Group className="mb-2" controlId="formBasicPassword">
                      <Form.Control className="pt-2 pb-2" type="number" name="password" value={inputValue3} onChange={(e) => setInputValue3(e.target.value)} maxLength={1} tabbable="true" />
                    </Form.Group>
                  </Col>
                  <Col className={`${styles.no_spacing}`}>
                    <Form.Group className="mb-2" controlId="formBasicPassword">
                      <Form.Control className="pt-2 pb-2" type="number" name="password" value={inputValue4} onChange={(e) => setInputValue4(e.target.value)} maxLength={1} tabbable="true" />
                    </Form.Group>
                  </Col>
                  <Col className={`${styles.no_spacing}`}>
                    <Form.Group className="mb-2" controlId="formBasicPassword">
                      <Form.Control className="pt-2 pb-2" type="number" name="password" value={inputValue5} onChange={(e) => setInputValue5(e.target.value)} maxLength={1} tabbable="true" />
                    </Form.Group>
                  </Col>
                </Row>

              </AutoTabProvider>
              {props.incorrectCode ? <p type="invalid" className='text-danger' style={{ fontSize: '12px' }}>Incorrect Code. Please try again.</p> : ""}
              {
                btnColor ? <div className="submit_btn mt-0" style={{ padding: '0px' }}>
                  <Button variant="primary" className='w-100 mt-3 login_form_btn' style={{ backgroundColor: "#fd7791", border: "none", padding: "15px 10px", color: '#fff' }} onClick={() => { props.getCode(combinecode, "reset-password"); setInputValue(''); setInputValue1(''); setInputValue2(''); setInputValue3(''); setInputValue4(''); setInputValue5('') }}>Continue</Button>
                </div> : <div className="submit_btn mt-0" style={{ padding: '0px' }}>
                  <Button variant="primary" className='w-100 mt-3 login_form_btn' style={{ backgroundColor: "#E8E8E8", border: "none", padding: "15px 10px", color: '#AFAFAF' }} >Cancel</Button>
                </div>
              }
            </Form>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
export default ForgetPassword
