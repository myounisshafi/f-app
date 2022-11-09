import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal, { ModalProps } from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import styles from "./reset.module.css";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import axios from 'axios'
import { Omit, BsPrefixProps } from 'react-bootstrap/esm/helpers';

function ResetPassword(props: JSX.IntrinsicAttributes & Omit<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & { ref?: React.Ref<HTMLDivElement>; }, BsPrefixProps<"div"> & ModalProps> & BsPrefixProps<"div"> & ModalProps & { children?: React.ReactNode; }) {

  const [validated, setValidated] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState('');
  const [passwordMatch2, setPasswordMatch2] = useState('')
  const [match, setMatch] = useState(false);
  const [empty , setEmpty]= useState(false)
  const [greenMatch , setGreenMatch]= useState(false)



  const handleSubmit = (event: { preventDefault: () => void; }) => {
     event.preventDefault();
    if (passwordMatch !== passwordMatch2) {
     
      setMatch(true);
       setEmpty(false)
    }
    else if (passwordMatch == '' && passwordMatch2 == '') {
      setEmpty(true)
      setMatch(false);
    }
  };
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState(false)


  const resetPassword = async () => {
    let request = {};
    const headers = {
      accept: "application/json",
      "content-type": "application/json",
    };
    request["phone_number"] = `${props.userPhoneNumber}`;
    request["password"] = passwordMatch2;
    const response = await axios.put("https://fluffie.herokuapp.com/user/forgot-password", request, {
      headers: headers,
    }).then(response => {
      props.setReset(false);
      setError(false)
    }).catch((err) => {
      if (err.response.status == '409') {
        setError(true)
      }
    });
    
  }


  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={`${styles.create_pass}`}
    >
      <Modal.Body  >
        <h2 className="text-center mt-5 fw-bold">Create new password</h2>
        <div className={`${styles.modal_body_sec, styles.modal_width_cstm} pt-2 pb-5`}>
          <p className="text-center">
            Your new password must be different from previous passwords.
          </p>
          <div className="form_wrapper pt-3">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>

              <Form.Group className={`${styles.eye_wrapper} mb-2`} controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <div className='position-relative'>
                  <Form.Control className="pt-3 pb-3" type={showPassword ? 'text' : 'password'} value={passwordMatch} onChange={(e) => { setPasswordMatch(e.target.value); setMatch(false);  setEmpty(false)}} placeholder=""  required />
                <span className={`${styles.eye_child}`} onClick={() => setShowPassword(!showPassword)}> {showPassword ?  <RemoveRedEyeIcon />  : <VisibilityOffIcon/>}</span>
                </div>
              </Form.Group>
                 <Form.Group className={`${styles.eye_wrapper} mb-2`} controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <div className='position-relative'>
                  <Form.Control className="pt-3 pb-3" type={showPassword ? 'text' : 'password'} value={passwordMatch2} onChange={(e) => { setPasswordMatch2(e.target.value); setMatch(false);  setEmpty(false)}}  placeholder="" required />
                
                </div>
                {error ? (<p className='text-danger' style={{fontSize: '12px'}}>You can't have your old password as your new password</p>) : ""}
              </Form.Group>
                {
                    match ? <p style={{padding:'4px 0px 0px 0px', borderBottom: '1px solid red', color:'red' , display:'inline-block'}}>Password and confirm password must match</p> : ''
                  }
                   {
                    empty ? <p style={{padding:'4px 0px 0px 0px', borderBottom: '1px solid red', color:'red' , display:'inline-block'}}>Fields can't be empty</p> : ''
                    }
              <div className="submit_btn">
                <Button type="submit" variant="primary" className='w-100 mt-3 login_form_btn' style={{ backgroundColor: "#fd7791", border: "none", padding: "15px 0px" }} onClick={() => resetPassword()}>Continue</Button>
              </div>
            </Form>
          </div>
        </div>
      </Modal.Body>
    </Modal>


  )
}


export default ResetPassword