import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal, { ModalProps } from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Omit, BsPrefixProps } from 'react-bootstrap/esm/helpers';

function VerifyPhone(props: JSX.IntrinsicAttributes & Omit<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & { ref?: React.Ref<HTMLDivElement>; }, BsPrefixProps<"div"> & ModalProps> & BsPrefixProps<"div"> & ModalProps & { children?: React.ReactNode; }) {
    return (
        <Modal
            {...props}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className=''>
                <div>
                    <div className="p-3">
                        <p style={{ fontSize: "14px" }}>
                            We'll send an SMS to {props.userPhoneNumber}.
                        </p>
                        <Form>
                            <div>
                                <Button variant="primary" className='w-100 mt-3 login_form_btn' style={{ backgroundColor: "#fd7791", border: "none", padding: "15px 0px" }} onClick={() => props.sendCode()}>Send</Button>
                            </div>
                            <div>
                                <Button variant="primary" className='w-100 mt-3 login_form_btn' style={{ backgroundColor: "#E8E8E8", border: "none", padding: "15px 0px", color: "#AFAFAF" }} onClick={(e) => props.nextModal("edit-number")}>Edit</Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default VerifyPhone