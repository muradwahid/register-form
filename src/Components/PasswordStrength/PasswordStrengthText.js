import React from 'react';
import { passwordLength } from '../hooks/usePassStrengthMeter';

const PasswordStrengthText = ({ password, attributes }) => {
  const { password: pass, formFields } = attributes;
  const { passStrengthTxt } =pass
  const lengthPass = passwordLength(password)
  const handleStrengthText = (value) => {
    if (password.length < 6 && password.length > 1) {
      return passStrengthTxt.veryWeak;
    }
    else if (value === 1) {
      return passStrengthTxt.veryWeak;
    } else if (value === 2) {
      return passStrengthTxt.weak;
    } else if (value === 3) {
      return passStrengthTxt.medium;
    } else if (value === 4) {
      return passStrengthTxt.strong;
    }
  }
  const handleClass = (value) => { 
    if (password.length < 6 && password.length > 1) {
      return "veryWeak-text";
    }
    else if (value === 1) {
      return "veryWeak-text";
    } else if (value === 2) {
      return "weak-text";
    } else if (value === 3) {
      return "medium-text";
    } else if (value === 4) {
      return "strong-text";
    }
  }
  const handleDefaultEl = (value) => { 
    if (password.length < 6 && password.length > 1) {
      return <span className={handleClass(value)} >Very Weak</span>;
    }
    else if (value === 1) {
      return <span className={handleClass(value)} >Very Weak</span>;
    } else if (value === 2) {
      return <span className={handleClass(value)} >Weak Password</span>;
    } else if (value === 3) {
      return <span className={handleClass(value)} >Medium Password</span>;
    } else if (value === 4) {
      return <span className={handleClass(value)} >Strong Password</span>;
    }
  }
  // console.log(handleStrengthText(lengthPass)?.length)
  return (
    handleDefaultEl(lengthPass)?.type === "span" && handleStrengthText(lengthPass)?.length &&
    <div className="rgfr-passStrengthTextWrapper">
      {
        formFields.passStrengthText==="custom" &&
      <span className={handleClass(lengthPass)} >{handleStrengthText(lengthPass)}</span>
      }
      {
        formFields.passStrengthText === "default" && handleDefaultEl(lengthPass)
      }
    </div>
  );
};

export default PasswordStrengthText;