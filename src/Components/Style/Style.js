import React, { Fragment } from "react";
import {
  getBackgroundCSS,
  getBorderCSS,
  getMultiShadowCSS,
  getTypoCSS,
} from "../../../../Components/utils/getCSS";
import { btnAlign, getBoxCss, logoPosition } from "../../utils/functions";
import ResponsiveStyle from "./ResponsiveStyle";

const Style = ({ attributes }) => {
  const {
    cId,
    formHeader,
    formFields,
    general,
    termsConditions,
    formLabel,
    fieldIcons,
    button,
    password,
    validation
  } = attributes;
  const mainWrapper = `#rgfrRegisterBlock-${cId} .rgfr-register-form-main-wrapper`;
  const formWrapper = `${mainWrapper} .rgfr-register-form`;
  const formContainer = `${formWrapper} .rgfr-registerForm-container`;
  const formEl = `${formContainer} .rgfr-register-form-wrapper`;
  const checkBoxEl = `${formEl} .rgfr-checkbox-wrapper`;
  const logoWrapper = `${formEl} .rgfr-register-logo-wrapper`;
  const logoEl = `${logoWrapper} .rgrf-register-logo`;
  const headingWrapper = `${logoWrapper} .rgfr-register-heading`;
  const formImage = `${formWrapper} .rgfr-register-image-wrapper`;
  const inputWrapper = `${formEl} .rgfr-inputField-wrapper`;
  const inputField = `${inputWrapper} .rgfr-register-input-field`;
  const labelEl = `${inputWrapper} .rgfr-register-input-label`;
  const fieldsIcon = `${inputField} .rgfr-inputField .rgfr-inputField-icon`
  const buttonWrapper = `${formEl} .rgfr-registerFormBtn-wrapper`;
  const signUpButton = `${buttonWrapper} .rgfr-register-loader-wrapper`;
  const signinButton = `${buttonWrapper} .rgfr-signInBtn-wrapper`;
  const successMessageEl = `${formContainer} .rgfr-successMessage`;
  return (
    <Fragment>
      <style>{`
    ${getTypoCSS("", formHeader.header.title.typography)?.googleFontLink}
    ${getTypoCSS("", formHeader.header.subTitle.typography)?.googleFontLink}
    ${getTypoCSS("", formFields.input.typography)?.googleFontLink}
    ${getTypoCSS("", formLabel.typography)?.googleFontLink}
    ${getTypoCSS("", termsConditions.typography)?.googleFontLink}
    ${getTypoCSS("", button.signup.typography)?.googleFontLink}
    ${getTypoCSS("", button.signin.typography)?.googleFontLink}
    ${getTypoCSS("", validation.success.styles.typo)?.googleFontLink}
    ${getTypoCSS("", validation.error.styles.typo)?.googleFontLink}
    #rgfrRegisterBlock-${cId}{
      margin:${getBoxCss(general.containerBox.margin.desktop)};
      justify-content:${general.containerBox.alignment.desktop};
    } 
    ${mainWrapper}{
      padding:${getBoxCss(general.containerBox.padding.desktop)};
      ${getBorderCSS(general.containerBox.border)}
      ${getBackgroundCSS(general.containerBox.bg)};
      box-shadow:${getMultiShadowCSS(general.containerBox.shadow)};
    }
    ${formWrapper}{
      width:${general.containerBox.width.desktop};
      ${formHeader.image.desktop.url
          ? `flex-direction:${logoPosition(formHeader.image.position.desktop)};`
          : ""
        }
      justify-content:${formHeader.image.desktop.url ? "normal" : "center"};
    }
    ${formContainer}{
      width:${general.formWrapper.width.desktop};
      margin:${getBoxCss(general.formWrapper.margin.desktop)};
      padding:${getBoxCss(general.formWrapper.padding.desktop)};
      ${getBorderCSS(general.formWrapper.border)}
      ${getBackgroundCSS(general.formWrapper.bg)};
      box-shadow:${getMultiShadowCSS(general.formWrapper.shadow)};
    }
    ${formEl}{
      width:${general.form.width.desktop};
      margin:${getBoxCss(general.form.margin.desktop)};
      padding:${getBoxCss(general.form.padding.desktop)};
      ${getBorderCSS(general.form.border)}
      ${getBackgroundCSS(general.form.bg)}
      box-shadow:${getMultiShadowCSS(general.form.shadow)};
    }
    
    ${formImage}{
        margin:${getBoxCss(formHeader.image.margin.desktop)};
        padding:${getBoxCss(formHeader.image.padding.desktop)};
        ${getBorderCSS(formHeader.image.border)};
    }
    ${formImage} img {
        height:${formHeader.image.height.desktop};
        width:${formHeader.image.width.desktop};
      }
    ${logoWrapper}{
        flex-direction: ${logoPosition(formHeader.header.logo.position)};
        width:${formHeader.header.width.desktop};
        height:${formHeader.header.height.desktop};
        margin:${getBoxCss(formHeader.header.margin.desktop)};
        padding:${getBoxCss(formHeader.header.padding.desktop)};
        ${getBorderCSS(formHeader.header.border)}
        ${getBackgroundCSS(formHeader.header.bg)}
    }
    ${logoEl} img{
      height:${formHeader.header.logo.height.desktop};
      width:${formHeader.header.logo.width.desktop};
      margin:${getBoxCss(formHeader.header.logo.margin.desktop)};
      padding:${getBoxCss(formHeader.header.logo.padding.desktop)};
      ${getBorderCSS(formHeader.header.logo.border)}
      box-shadow:${getMultiShadowCSS(formHeader.header.logo.shadow)};
    }
    ${headingWrapper}{
      width:calc(100% - ${formHeader.header.logo.width.desktop} + ${formHeader.header.logo.url.url ? "0px" : formHeader.header.logo.width.desktop
        });
    }
    ${headingWrapper} img{
      object-fit:contain;
      height:${formHeader.header.logo.height.desktop};
      width:${formHeader.header.logo.width.desktop};
      margin:${getBoxCss(formHeader.header.logo.margin.desktop)};
      padding:${getBoxCss(formHeader.header.logo.padding.desktop)};
      ${getBorderCSS(formHeader.header.logo.border)}
    }
    ${getTypoCSS(`${headingWrapper} h4`, formHeader.header.title.typography)
          .styles
        }
    ${headingWrapper} h4{
      margin:${getBoxCss(formHeader.header.title.margin.desktop)};
      padding:${getBoxCss(formHeader.header.title.padding.desktop)};
      color:${formHeader.header.title.color};
      ${getBackgroundCSS(formHeader.header.title.bg)}
      ${getBorderCSS(formHeader.header.title.border)}
    }

    ${getTypoCSS(
          `${headingWrapper} .rgfr-register-subHeading`,
          formHeader.header.subTitle.typography
        ).styles
        }
    ${headingWrapper} .rgfr-register-subHeading{
      margin:${getBoxCss(formHeader.header.subTitle.margin.desktop)};
      padding:${getBoxCss(formHeader.header.subTitle.padding.desktop)};
      color:${formHeader.header.subTitle.color};
      ${getBackgroundCSS(formHeader.header.subTitle.bg)}
      ${getBorderCSS(formHeader.header.subTitle.border)}
    }

    ${inputField}{
      margin:${getBoxCss(formFields.input.margin.desktop)};
    }

    ${formFields.fields
          .map(
            (val, i) =>
              inputField +
              `.rgfr-width-${i + 1}{
      width:${val.width.desktop}
      }`
          )
          .join(" ")}

    ${getTypoCSS(labelEl, formLabel.typography).styles}

    ${labelEl}{
      margin:${getBoxCss(formLabel.margin.desktop)};
      padding:${getBoxCss(formLabel.padding.desktop)};
      color:${formLabel.color.text};
      background:${formLabel.color.bg};
      ${getBorderCSS(formLabel.border)}
      }
    ${getTypoCSS(
            `${inputField} .rgfr-inputField input`,
            formFields.input.typography
          ).styles
        }

    ${inputField} .rgfr-inputField input{
      color:${formFields.input.color.normal.text};
      background:${formFields.input.color.normal.bg};
      padding-top:${formFields.input.padding.desktop.top};
      padding-left:${formFields.fieldIcons
          ? `calc(24px + ${formFields.input.padding.desktop.left})`
          : formFields.input.padding.desktop.left
        };
      padding-bottom:${formFields.input.padding.desktop.bottom};
      padding-right:${formFields.input.padding.desktop.right};
      text-align:${formFields.input.txtAlign};
      ${getBorderCSS(formFields.input.border.normal)}
    }

    ${getTypoCSS(`${inputField} .rgfr-input-errorMessage`, validation.error.styles.typo).styles}

    ${inputField} .rgfr-input-errorMessage{
      margin:${getBoxCss(validation.error.styles.margin)};
      color:${validation.error.styles.color};
    }

    ${inputField} .rgfr-inputField input::placeholder{
      color:${formFields.input.color.normal.placeholder};
    }

    ${inputField} .rgfr-inputField input:focus{
      background:${formFields.input.color.focus.bg};
      ${getBorderCSS(formFields.input.border.focus)};
    }
    ${inputField} .rgfr-inputField input:focus::placeholder{
      color:${formFields.input.color.focus.placeholder};
    }
    ${fieldsIcon}{
      width:${fieldIcons.icon.iconSize.desktop};
      fill:${fieldIcons.icon.color};
      top:${fieldIcons.icon.vertical.desktop};
      left:${fieldIcons.icon.horizontal.desktop};
    }

    ${inputField} .rgfr-inputField .register-eyeIcon.open{
      width:${fieldIcons.passVisibility.iconSize.desktop};
      color:${fieldIcons.passVisibility.openColor};
      top:${fieldIcons.passVisibility.vertical.desktop};
      right:${fieldIcons.passVisibility.horizontal.desktop};
    }
    ${inputField} .rgfr-inputField .register-eyeIcon.close{
      width:${fieldIcons.passVisibility.iconSize.desktop};
      color:${fieldIcons.passVisibility.closeColor};
      top:${fieldIcons.passVisibility.vertical.desktop};
      right:${fieldIcons.passVisibility.horizontal.desktop};
    }

    ${inputField} .passLength, .rgfr-passStrengthTextWrapper{
      width:${password.container.width.desktop};
      height:${password.container.height.desktop};
      margin:${getBoxCss(password.container.margin.desktop)};
      padding:${getBoxCss(password.container.padding.desktop)};
      ${getBorderCSS(password.container.border)}
      ${getBackgroundCSS(password.container.bg)}
    }

    ${inputField} .passLength .rgfr-strengthMeter{
      width:${password.meter.width.desktop};
      height:${password.meter.height.desktop};
      margin:${getBoxCss(password.meter.margin.desktop)};
      padding:${getBoxCss(password.meter.padding.desktop)};
      ${getBorderCSS(password.meter.border)}
    }
    ${Object.keys(password.colors).map((value) => {
          return `  ${inputField} .passLength .${value}{
        background:${password.colors[value]};
    }`
        }).join("")}
    ${Object.keys(password.colors).map((value) => {
          return `  ${inputField} .${value}-text{
        color:${password.colors[value]};
    }`
        }).join("")}

${getTypoCSS(`${inputField} .rgfr-passStrengthTextWrapper span`, password.passStrengthTxt.typography).styles}
    ${inputField} .rgfr-passStrengthTextWrapper span{
      margin:${getBoxCss(password.passStrengthTxt.margin.desktop)};
      padding:${getBoxCss(password.passStrengthTxt.padding.desktop)};
    }
  

    ${getTypoCSS(checkBoxEl, termsConditions.typography).styles}

    ${checkBoxEl}{
      margin:${getBoxCss(termsConditions.margin.desktop)};
      padding:${getBoxCss(termsConditions.padding.desktop)};
      color:${termsConditions.color.text};
      background:${termsConditions.color.bg};
    }
    ${checkBoxEl} :where(a){
      color:${termsConditions.color.link};
    }
    ${checkBoxEl} .container{
      margin:${getBoxCss(termsConditions.checkboxMargin.desktop)};
    }
    ${checkBoxEl} .container input:checked ~ .checkmark {
      background:${termsConditions.color.checkbox};
    }
    ${buttonWrapper}{
      flex-direction:${button.signup.displayAs.desktop};
      align-items: ${button.signup.displayAs.desktop === "column" ? btnAlign(button.signup.alignment.desktop) : "center"};
      justify-content:${button.signup.justifyContent.desktop};
    }
    ${signUpButton}{
      margin:${getBoxCss(button.signup.margin.desktop)};
    }
    
    ${getTypoCSS(`${signUpButton} .rgfr-signupBtn`, button.signup.typography).styles}
    ${signUpButton} .rgfr-signupBtn{
      height:${button.signup.height.desktop};
      width:${button.signup.width.desktop};
      padding:${getBoxCss(button.signup.padding.desktop)};
      color:${button.signup.color.normal.color};
      ${getBackgroundCSS(button.signup.color.normal.bg)}
      ${getBorderCSS(button.signup.border.normal)}
    }

    ${signUpButton} .rgfr-signupBtn:hover{
      color:${button.signup.color.hover.color};
      ${getBackgroundCSS(button.signup.color.hover.bg)};
      ${getBorderCSS(button.signup.border.hover)};
    }
    ${signUpButton} .rgfr-loader{
      right:${button.signup.spinner.position}%;
      color:${button.signup.spinner.color};
    }

    ${getTypoCSS(`${signinButton} a`, button.signin.typography).styles}
    ${signinButton}{
      flex-direction:${button.signin.displayAs.desktop};
      ${button.signin.displayAs.desktop === "row" ? `justify-content:${button.signin.justifyContent.desktop}` : `align-items:${button.signin.alignItems.desktop}`};
      width:${button.signin.width.container.desktop}
    }
    ${signinButton} :where(a){
      width:${button.signin.width.width.desktop};
      height:${button.signin.height.desktop};
      color:${button.signin.color.normal.color};
      ${getBackgroundCSS(button.signin.color.normal.bg)}
      margin:${getBoxCss(button.signin.margin.desktop)};
      padding:${getBoxCss(button.signin.padding.desktop)};
      ${getBorderCSS(button.signin.border.normal)}
    }
    ${signinButton} :where(a):hover{
      color:${button.signin.color.hover.color};
      ${getBackgroundCSS(button.signin.color.hover.bg)}
      ${getBorderCSS(button.signin.border.hover)}
    }
    ${successMessageEl} {
      margin:${getBoxCss(validation.success.styles.margin)};
      padding:${getBoxCss(validation.success.styles.padding)};
      ${getBorderCSS(validation.success.styles.border)}
      ${getBackgroundCSS(validation.success.styles.color.bg)}
    }
    ${getTypoCSS(`${successMessageEl} span`, validation.success.styles.typo).styles}
    ${successMessageEl} span{
      color:${validation.success.styles.color.text};
    }
    `}</style>
      <ResponsiveStyle attributes={attributes} />
    </Fragment>
  );
};

export default Style;
