import React, { Fragment, useState } from "react";
import SVG from "react-inlinesvg";
import { LoginSocialFacebook, LoginSocialGoogle } from "reactjs-social-login";
import emailIcon from "../../../assets/icon/envelope-solid.svg";
import passIcon from "../../../assets/icon/lock-solid.svg";
import userIcon from "../../../assets/icon/user-solid.svg";
import { inputType } from "../../utils/functions";
import { FaFacebook, FcGoogle, ImEye, ImEyeBlocked } from "../../utils/icons";
import PasswordStrength from "../PasswordStrength/PasswordStrength";
import PasswordStrengthText from "../PasswordStrength/PasswordStrengthText";
import Style from "../Style/Style";
import FormImg from "./FormImage";
import { handleRegisterForm } from "./validateRegisterForm";

const RegisterForm = ({ attributes, nonce }) => {
  const { formHeader, formFields, button, termsConditions, validation, socialSignUp, weakPassword } = attributes;
  const [showPass, setShowPass] = useState(true);
  const [errorMessage, setErrorMessage] = useState({});
  const [pass, setPass] = useState("");

  const handleIcon = (type) => {
    if (type === "username") {
      return userIcon;
    } else if (type === "password") {
      return passIcon;
    } else if (type === "email") {
      return emailIcon;
    } else if (type === "confirmpassword") {
      return passIcon;
    } else {
      return userIcon;
    }
  };

  console.log(errorMessage?.errors)

  return (
    <Fragment>
      <Style attributes={attributes} />
      <div className="rgfr-register-form-main-wrapper">
        <div className="rgfr-register-form">
          <FormImg attributes={attributes} />
          <div className="rgfr-registerForm-container">
            <form onSubmit={(e) => handleRegisterForm(e, validation, setErrorMessage, formFields, weakPassword, nonce)} className="rgfr-register-form-wrapper">
              <div className="rgfr-register-logo-wrapper">
                {formHeader.header.logo.url.url && (
                  <div className="rgrf-register-logo">
                    <img src={formHeader.header.logo.url.url} alt={formHeader.header.logo.url.alt} />
                  </div>
                )}

                {formHeader.header.title.text.length > 0 || formHeader.header.subTitle.text.length > 0 ? (
                  <div className="rgfr-register-heading">
                    <h4>{formHeader.header.title.text}</h4>
                    <p className="rgfr-register-subHeading">
                      {formHeader.header.subTitle.text}
                    </p>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="rgfr-inputField-wrapper">
                {formFields.fields?.map((val, i) => (
                  <div
                    key={i}
                    className={`rgfr-register-input-field rgfr-width-${i + 1}`}
                  >
                    {formFields.showLabel && (
                      <label
                        htmlFor={val.type}
                        className={`rgfr-register-input-label`}
                      >
                        {val.label.text}{" "}
                        {val.required && formFields.showRequiredMark && (
                          <span className="rgfr-requiredMark">*</span>
                        )}
                      </label>
                    )}
                    <div className="rgfr-inputField">
                      <input
                        {...(val.type === "password"
                          ? { onChange: (e) => setPass(e.target.value) }
                          : {})}
                        type={
                          inputType(val.type) === "password"
                            ? formFields.passVisibilityIcon && !showPass
                              ? "text"
                              : "password"
                            : inputType(val.type)
                        }
                        name={val.type}
                        id={val.type}
                        required={val.required}
                        placeholder={val.placeholder.text}
                      />
                      {formFields.fieldIcons && (
                        <SVG
                          src={val.icon.url ? val.icon.url : handleIcon(val.type)}
                          className="rgfr-inputField-icon"
                          height="auto"
                        />
                      )}
                      {formFields.passVisibilityIcon &&
                        val.type === "password" && (
                          <div onClick={() => setShowPass(!showPass)}>
                            {showPass ? (
                              <ImEye className="register-eyeIcon open" />
                            ) : (
                              <ImEyeBlocked className="register-eyeIcon close" />
                            )}
                          </div>
                        )}
                    </div>
                    {/* {
                      errorMessage.errors?.[val?.type]?.type === val.type && <small className="rgfr-input-errorMessage">{errorMessage?.errors?.[val?.type]?.message}</small>
                    } */}
                    {errorMessage.errors?.[val.type] && <small className="rgfr-input-errorMessage">{errorMessage?.errors?.[val?.type]}</small>}
                    {formFields.showPassStrengthMeter && (
                      <PasswordStrength type={val.type} value={pass} key={i} />
                    )}
                    {formFields.showPassStrengthText && val.type === "password" && (
                      <PasswordStrengthText
                        password={pass}
                        attributes={attributes}
                      />
                    )}
                  </div>
                ))}

              </div>
              {termsConditions.show && (
                <div className="rgfr-checkbox-wrapper">
                  <label className="container">
                    <input type="checkbox" required />
                    <span className="checkmark"></span>
                  </label>
                  {/* <input type="checkbox" name="checkbox" required /> */}
                  <label>{termsConditions.label.first}</label>
                  <a href={termsConditions.url}>{termsConditions.label.second}</a>
                </div>
              )}

              <div className="rgfr-registerFormBtn-wrapper">
                <div className="rgfr-register-loader-wrapper">
                  <input
                    className="rgfr-signupBtn"
                    type="submit"
                    value={button.signup.text}
                  />
                  {
                    button.signup.spinner.show &&
                    <span className="rgfr-loader"></span>
                  }
                </div>
                <div className="rgfr-signInBtn-wrapper">
                  {
                    button.signin.text.first.length > 0 &&
                    <span>{button.signin.text.first}</span>
                  }
                  <a href={button.signin.text.link}>
                    {button.signin.text.second}
                  </a>
                </div>
              </div>
            </form>
            {
              socialSignUp.google.show || socialSignUp.facebook.show && socialSignUp.separator.show ? <div className="rgfr-separator">
                {
                  socialSignUp.separator.type === "text" &&
                  <div className="rgfr-separatorText">
                    <span>{socialSignUp.separator.text}</span>
                  </div>
                }
                {
                  socialSignUp.separator.type === "line" &&
                  <hr />
                }
              </div> : ""
            }
            {
              socialSignUp.google.show || socialSignUp.facebook.show ?
                <div className="rgfr-social-signUpBtn">
                  {
                    socialSignUp.google.show && !socialSignUp.google.clientId ? <div className="rgfr-socialSignup-warning">
                      <span>Client Id required for google signup</span>
                    </div> :
                      <LoginSocialGoogle
                        client_id={socialSignUp.google.clientId}
                        onResolve={(response) => console.log(response)}
                        onReject={(error) => console.log(error)}
                        scope="profile https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email"
                      >
                        <div className="rgfr-googleSignUp">
                          <div className="rgfr-googleBtn">
                            <FcGoogle className="rgfr-googleIcon" />
                            <span>{socialSignUp.google.text}</span>
                          </div>
                        </div>
                      </LoginSocialGoogle>
                  }
                  {
                    socialSignUp.facebook.show && !socialSignUp.facebook.clientId ? <div className="rgfr-socialSignup-warning">
                      <span>API key required for facebook signup</span>
                    </div> :
                      <LoginSocialFacebook
                        appId={socialSignUp.facebook.clientId}
                        onResolve={(response) => console.log(response)}
                        onReject={(error) => console.log(error)}
                      >
                        <div className="rgfr-facebookSignUp">
                          <div className="rgfr-facebookBtn">
                            <FaFacebook className="rgfr-facebookIcon" />
                            <span>{socialSignUp.facebook.text}</span>
                          </div>
                        </div>
                      </LoginSocialFacebook>
                  }
                </div> : ""
            }
          </div>

          {/* {formHeader.image.url.desktop && (
            <div className="rgfr-register-image-wrapper">
              <img src={formHeader.image.url.desktop} alt="" />
            </div>
          )} */}
        </div>
      </div>
    </Fragment>
  );
};

export default RegisterForm;


