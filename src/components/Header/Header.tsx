import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import styles from "./header.module.css";
import Login from "../loginmodal/login";
import RegisterModal from "../register/register";
import CodeSent from "../CodeSent/codeSent";
import CreatePassword from "../CreatePassword/createPassword";
import SelectProducts from "../SelectProducts/selectProduct";
import SelectPrice from "../selectPrice/selectPrice";
import FinishProducts from "../FinishProducts/finishProducts";
import VerifyPhone from "../verifyPhone/VerifyPhone";
import ForgetPassword from "../ForgetPassword/forgetPassword";
import axios from "axios";
import ResetPassword from "../ResetPassword/resetPassword";
import CloseIcon from "@mui/icons-material/Close";
import {
  userPreferance,
  userRegisteration,
  login,
  verifyNumber,
  resetVerifyCode,
  verifyCode,
} from "../api/api";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { isUserLoginSelector, logoutUser } from "../../redux/userSlice";
import { searchProducts } from "../../redux/productSlice";
import { setSearchKeyword } from "../../redux/filtersSlice";

function Header(props: { state: unknown; setState: (arg0: boolean) => void }) {
  const [modalShow, setModalShow] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);
  const [codeShow, setCodeShow] = useState(false);
  const [createShow, setCreatePassShow] = useState(false);
  const [selectShow, setSelectShow] = useState(false);
  const [selectPrice, setPriceShow] = useState(false);
  const [finishPrice, setFinishPrice] = useState(false);
  const [sendSMS, setSendSMS] = useState(false);
  const [incorrectCode, setIncorrectCode] = useState(false);
  const [forget, setForget] = useState(false);
  const [reset, setReset] = useState(false);
  const [emptyForm, setEmptyForm] = useState(false);
  const [numberExist, setNumberExist] = useState(true);
  const [numberNotExist, setNumberNotExist] = useState(true);
  const [showToggler, setShowToggler] = useState(false);
  const dispatch = useAppDispatch();
  const isUserLogin = useAppSelector(isUserLoginSelector);
  const refSearchInput = useRef();
  const refSearchCollapsed = useRef();
  const [skin, setSkin] = useState({
    skinType: "",
    skinConcern: "",
  });
  const [rangeColor, setRangeColor] = useState({
    productRange: "",
    skinColor: "",
  });
  const [mainSupplementaryProduct, setMainSupplementaryProduct] = useState({
    mainProduct: "",
    supplementaryProduct: "",
  });

  let userPhoneNumber = useRef(null);
  let userFullName = useRef(null);
  let userDateOfBirth = useRef(null);
  let userPassword = useRef(null);

  const userSignUp = (phonenumber: number, f_name: string, dob: string) => {
    userPhoneNumber.current = phonenumber;
    userFullName.current = f_name;
    userDateOfBirth.current = dob;
  };

  const userPass = (password: string) => {
    userPassword.current = password;
  };

  const skinValues = (skintype: string, skinconcern: string) => {
    console.log(skintype, skinconcern);
    setSkin({ ...skin, skinType: skintype, skinConcern: skinconcern });
  };

  const skinRangeColor = (pricerange: string, skincolor: string) => {
    setRangeColor({
      ...rangeColor,
      productRange: pricerange,
      skinColor: skincolor,
    });
  };

  const finishProducts = (
    mainProductValue: string,
    supplementaryProductValue: string
  ) => {
    setMainSupplementaryProduct({
      ...mainSupplementaryProduct,
      mainProduct: mainProductValue,
      supplementaryProduct: supplementaryProductValue,
    });
  };

  const userData = async () => {
    userPreferance(
      userPhoneNumber.current,
      skin.skinType,
      skin.skinConcern,
      rangeColor.productRange,
      rangeColor.skinColor,
      mainSupplementaryProduct.mainProduct,
      mainSupplementaryProduct.supplementaryProduct
    );
    setFinishPrice(false);
  };

  const userRegister = async () => {
    userRegisteration(
      userPhoneNumber.current,
      userFullName.current,
      userDateOfBirth.current,
      userPassword.current
    );
    setCreatePassShow(false);
    setSelectShow(true);
  };

  const userLogin = async (phone_number: number, password: string) => {
    // dispatch(loginUser(phone_number, password));
    setModalShow(false);
  };

  const sendCode = async () => {
    verifyNumber(userPhoneNumber.current)
      .then((response) => {
        setRegisterModal(false);
        setSendSMS(false);
        setCodeShow(true);
        setNumberExist(true);
      })
      .catch((err) => {
        if (err.response.status == "409") {
          setNumberExist(false);
          setRegisterModal(true);
          setSendSMS(false);
        }
      });
  };

  const resetSendCode = async (phone_number: number, type: string) => {
    if (type !== "resend") {
      userPhoneNumber.current = phone_number;
    }
    resetVerifyCode(userPhoneNumber.current)
      .then((response) => {
        setForget(true);
        setModalShow(false);
      })
      .catch((err) => {
        if (err.response.status == "409") {
          setNumberNotExist(false);
        }
      });
  };

  const getCode = async (userCode: number, type: string) => {
    verifyCode(userCode, userPhoneNumber.current)
      .then((response) => {
        if (type == "login") {
          if (response?.data.valid == true) {
            setCodeShow(false);
            setCreatePassShow(true);
          } else {
            setIncorrectCode(true);
          }
        } else if (type == "reset-password") {
          if (response?.data.valid == true) {
            setForget(false);
            setReset(true);
            setIncorrectCode(false);
          } else {
            setIncorrectCode(true);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const nextModal = (modalType: string) => {
    if (modalType == "register") {
      setSendSMS(true);
    } else if (modalType == "selectedProduct") {
      setSelectShow(false);
      setPriceShow(true);
    } else if (modalType == "selectPrice") {
      setPriceShow(false);
      setFinishPrice(true);
    } else if (modalType == "finishModal") {
      setFinishPrice(false);
    } else if (modalType == "edit-number") {
      setSendSMS(false);
    } else if (modalType == "redirect_register") {
      setModalShow(false);
      setRegisterModal(true);
    } else if (modalType == "login_redirect") {
      setModalShow(true);
      setRegisterModal(false);
    } else if (modalType == "redirect_termsOfService") {
      setRegisterModal(false);
    } else if (modalType == "back_to_select_products") {
      setPriceShow(false);
      setSelectShow(true);
    } else if (modalType == "back_to_select_price") {
      setFinishPrice(false);
      setPriceShow(true);
    } else if (modalType == "forgot_password") {
      setModalShow(false);
      setForget(true);
    }
  };

  const handleHeaderLoginBtn = () => {
    if (isUserLogin) {
      dispatch(logoutUser());
    } else {
      setModalShow(true);
    }
  };

  const doSearch = () => {
    if (refSearchInput.current?.value.trim() !== "")
      dispatch(
        setSearchKeyword({ keyword: refSearchInput.current.value.trim() })
      );
    else
      dispatch(
        setSearchKeyword({ keyword: refSearchCollapsed.current?.value })
      );
  };
  useEffect(() => {
    if (props.state) {
      setRegisterModal(true);
      props.setState(false);
    }
  }, [props.state]);
  return (
    <nav
      className={`${
        showToggler ? "cstm_shadow" : ""
      } navbar navbar-expand-lg pt-4`}
    >
      <div className={`container-fluid ${styles.container__inner}`}>
        <Link href="/" className="navbar-brand">
          <a className="nav-link">
            <img src="./logo.png" alt="" srcSet="" />
          </a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowToggler(!showToggler)}
        >
          {showToggler ? (
            <CloseIcon />
          ) : (
            <span className="navbar-toggler-icon"></span>
          )}
        </button>
        <form className={`d-flex ${styles.cstm__search}`}>
          <div className={`form-group ${styles.form__group}`}>
            <input
              ref={refSearchInput}
              className="form-control me-2 mt-2"
              type="search"
              placeholder="Search for 2000+ products... "
              aria-label="Search"
            />
            <img
              onClick={doSearch}
              src="./search.png"
              alt=""
              srcSet=""
              className={`${styles.searchIcon} cursor-pointer`}
            />
          </div>
        </form>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className={`${styles.mobile_search_bar}`}>
            <form className={`d-flex ${styles.cstm__search}`}>
              <div className={`form-group ${styles.form__group}`}>
                <input
                  className="form-control me-2 mt-2"
                  type="search"
                  placeholder="Search for 2000+ products... "
                  aria-label="Search"
                  ref={refSearchCollapsed}
                />
                <img
                  src="./search.png"
                  alt=""
                  srcSet=""
                  onClick={doSearch}
                  className={`${styles.searchIcon} cursor-pointer`}
                />
              </div>
            </form>
          </div>
          <ul
            className={`navbar-nav m-auto  justify-content-center ${styles.cstm__navBar}`}
          >
            <li className="nav-item">
              <Link href="/find-products">
                <a className="nav-link">Find Products</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about">
                <a className="nav-link">About</a>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="#">
                Explore
              </a>
            </li>
          </ul>
          <form className={`${styles.mobile_block} d-flex`}>
            <div className={`${styles.singIn}`} onClick={handleHeaderLoginBtn}>
              {isUserLogin ? "Logout" : "Sign In"}
            </div>
            <button
              className={`btn ${styles.pink__btn}`}
              type="button"
              onClick={() => setRegisterModal(true)}
            >
              Get Started
            </button>
          </form>
        </div>
      </div>
      <Login
        show={modalShow}
        onHide={() => setModalShow(false)}
        userLogin={userLogin}
        nextModal={nextModal}
        resetSendCode={resetSendCode}
        numberNotExist={numberNotExist}
        setNumberNotExist={setNumberNotExist}
      />
      <RegisterModal
        userSignUp={userSignUp}
        show={registerModal}
        nextModal={nextModal}
        numberExist={numberExist}
        onHide={() => setRegisterModal(false)}
        setNumberExist={setNumberExist}
      />
      <VerifyPhone
        show={sendSMS}
        userPhoneNumber={userPhoneNumber.current}
        nextModal={nextModal}
        sendCode={sendCode}
        onHide={() => setSendSMS(false)}
      />
      <CodeSent
        show={codeShow}
        nextModal={nextModal}
        onHide={() => setCodeShow(false)}
        getCode={getCode}
        userPhoneNumber={userPhoneNumber.current}
        incorrectCode={incorrectCode}
        setIncorrectCode={setIncorrectCode}
        sendCode={sendCode}
      />
      <CreatePassword
        nextModal={nextModal}
        show={createShow}
        onHide={() => setCreatePassShow(false)}
        userPass={userPass}
        userRegister={userRegister}
      />
      <ResetPassword
        nextModal={nextModal}
        setReset={setReset}
        show={reset}
        onHide={() => setReset(false)}
        userPhoneNumber={userPhoneNumber.current}
      />
      <SelectProducts
        show={selectShow}
        nextModal={nextModal}
        onHide={() => setSelectShow(false)}
        skinValues={skinValues}
        emptyForm={emptyForm}
      />
      <SelectPrice
        show={selectPrice}
        onHide={() => setPriceShow(false)}
        nextModal={nextModal}
        skinRangeColor={skinRangeColor}
        emptyForm={emptyForm}
      />
      <FinishProducts
        show={finishPrice}
        onHide={() => setFinishPrice(false)}
        nextModal={nextModal}
        finishProducts={finishProducts}
        userData={userData}
        emptyForm={emptyForm}
        setEmptyForm={setEmptyForm}
      />
      <ForgetPassword
        show={forget}
        nextModal={nextModal}
        resetSendCode={resetSendCode}
        getCode={getCode}
        userPhoneNumber={userPhoneNumber.current}
        incorrectCode={incorrectCode}
        setIncorrectCode={setIncorrectCode}
        onHide={() => setForget(false)}
      />
    </nav>
  );
}

export default Header;
