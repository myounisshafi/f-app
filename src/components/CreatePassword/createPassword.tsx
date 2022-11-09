import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal, { ModalProps } from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import styles from "./createPassword.module.css";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Omit, BsPrefixProps } from 'react-bootstrap/esm/helpers';

function CreatePassword(props: JSX.IntrinsicAttributes & Omit<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & { ref?: React.Ref<HTMLDivElement>; }, BsPrefixProps<"div"> & ModalProps> & BsPrefixProps<"div"> & ModalProps & { children?: React.ReactNode; }) {

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event: { currentTarget: any; preventDefault: () => void; stopPropagation: () => void; }) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      props.userRegister()
    }

    setValidated(true);
  };
  const [showPassword, setShowPassword] = useState(false)
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={`${styles.create_pass}`}
    >
      <Modal.Body  >
        <h2 className="text-center mt-5 fw-bold">Create a password</h2>
        <div className={`${styles.modal_body_sec, styles.modal_width_cstm} pt-2 pb-5`}>
          <p className="text-center">
            Make sure it's 8 characters or more.
          </p>
          <div className="form_wrapper pt-3">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>

              <Form.Group className={`${styles.eye_wrapper} mb-2`} controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <div className='position-relative'>
                  <Form.Control className="pt-3 pb-3" type={showPassword ? 'text' : 'password'} placeholder="" onChange={(e) => props.userPass(e.target.value)} required />
                  <span className={`${styles.eye_child}`} onClick={() => setShowPassword(!showPassword)}><RemoveRedEyeIcon /></span>
                </div>
              </Form.Group>
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

export default CreatePassword