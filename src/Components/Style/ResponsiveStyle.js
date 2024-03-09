import React from 'react';
import { btnAlign, getBoxCss, logoPosition } from '../../utils/functions';

const ResponsiveStyle = ({ attributes }) => {
  const {
    cId,
    formHeader,
    formFields,
    general,
    termsConditions,
    formLabel,
    fieldIcons,
    button,
    password
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
  const fieldsIcon = `${inputField} .rgfr-inputField .rgfr-inputField-icon`;
  const buttonWrapper = `${formEl} .rgfr-registerFormBtn-wrapper`;
  const signUpButton = `${buttonWrapper} .rgfr-register-loader-wrapper`;
  const signinButton = `${buttonWrapper} .rgfr-signInBtn-wrapper`;
  return (
    <style>
      {`
      @media (max-width:1024px){
      #rgfrRegisterBlock-${cId}{
      margin:${getBoxCss(general.containerBox.margin.tablet)};
      justify-content:${general.containerBox.alignment.tablet};
    } 
    ${mainWrapper}{
      padding:${getBoxCss(general.containerBox.padding.tablet)};
    }
      ${formHeader.image.tablet.url ? `
        ${formWrapper}{
        width:${general.containerBox.width.tablet};
        flex-direction:${logoPosition(formHeader.image.position.tablet)};
        justify-content:${formHeader.image.tablet.url ? "normal" : "center"};
    }
      `: ""}
    ${formContainer}{
      width:${general.formWrapper.width.tablet};
      margin:${getBoxCss(general.formWrapper.margin.tablet)};
      padding:${getBoxCss(general.formWrapper.padding.tablet)};;
    }
    ${formEl}{
      width:${general.form.width.tablet};
      margin:${getBoxCss(general.form.margin.tablet)};
      padding:${getBoxCss(general.form.padding.tablet)};
    }
    ${formImage}{
        margin:${getBoxCss(formHeader.image.margin.tablet)};
        padding:${getBoxCss(formHeader.image.padding.tablet)};
    }
    ${formImage} img {
        height:${formHeader.image.height.tablet};
        width:${formHeader.image.width.tablet};
      }
    ${logoWrapper}{
        width:${formHeader.header.width.tablet};
        height:${formHeader.header.height.tablet};
        margin:${getBoxCss(formHeader.header.margin.tablet)};
        padding:${getBoxCss(formHeader.header.padding.tablet)};
    }
    ${logoEl} img{
      height:${formHeader.header.logo.height.tablet};
      width:${formHeader.header.logo.width.tablet};
      margin:${getBoxCss(formHeader.header.logo.margin.tablet)};
      padding:${getBoxCss(formHeader.header.logo.padding.tablet)};
    }
    ${headingWrapper}{
      width:calc(100% - ${formHeader.header.logo.width.tablet} + ${formHeader.header.logo.url.url ? "0px" : formHeader.header.logo.width.tablet
        });
    }
    ${headingWrapper} img{
      object-fit:contain;
      height:${formHeader.header.logo.height.tablet};
      width:${formHeader.header.logo.width.tablet};
      margin:${getBoxCss(formHeader.header.logo.margin.tablet)};
      padding:${getBoxCss(formHeader.header.logo.padding.tablet)};
    }
    ${headingWrapper} h4{
      margin:${getBoxCss(formHeader.header.title.margin.tablet)};
      padding:${getBoxCss(formHeader.header.title.padding.tablet)};
    }
    ${headingWrapper} .rgfr-register-subHeading{
      margin:${getBoxCss(formHeader.header.subTitle.margin.tablet)};
      padding:${getBoxCss(formHeader.header.subTitle.padding.tablet)};
    }
    ${inputField}{
      margin:${getBoxCss(formFields.input.margin.tablet)};
    }
      ${formFields.fields
          .map(
            (val, i) =>
              inputField +
              `.rgfr-width-${i + 1}{
      width:${val.width.tablet};
      }`
          )
          .join(" ")}
    ${labelEl}{
      margin:${getBoxCss(formLabel.margin.tablet)};
      padding:${getBoxCss(formLabel.padding.tablet)};
      }
    ${inputField} .rgfr-inputField input{
      padding-top:${formFields.input.padding.tablet.top};
      padding-left:${formFields.fieldIcons
          ? `calc(24px + ${formFields.input.padding.tablet.left})`
          : formFields.input.padding.tablet.left
        };
    }
    ${fieldsIcon}{
      width:${fieldIcons.icon.iconSize.tablet};
      top:${fieldIcons.icon.vertical.tablet};
      left:${fieldIcons.icon.horizontal.tablet};
    }
    ${inputField} .rgfr-inputField .register-eyeIcon.open{
      width:${fieldIcons.passVisibility.iconSize.tablet};
      top:${fieldIcons.passVisibility.vertical.tablet};
      right:${fieldIcons.passVisibility.horizontal.tablet};
    }
    ${inputField} .rgfr-inputField .register-eyeIcon.close{
      width:${fieldIcons.passVisibility.iconSize.tablet};
      top:${fieldIcons.passVisibility.vertical.tablet};
      right:${fieldIcons.passVisibility.horizontal.tablet};
    }
    ${inputField} .passLength, .rgfr-passStrengthTextWrapper{
      width:${password.container.width.tablet};
      height:${password.container.height.tablet};
      margin:${getBoxCss(password.container.margin.tablet)};
      padding:${getBoxCss(password.container.padding.tablet)};
    }
    ${inputField} .passLength .rgfr-strengthMeter{
      width:${password.meter.width.tablet};
      height:${password.meter.height.tablet};
      margin:${getBoxCss(password.meter.margin.tablet)};
      padding:${getBoxCss(password.meter.padding.tablet)};
    }
    ${inputField} .rgfr-passStrengthTextWrapper span{
      margin:${getBoxCss(password.passStrengthTxt.margin.tablet)};
      padding:${getBoxCss(password.passStrengthTxt.padding.tablet)};
    }
    ${checkBoxEl}{
      margin:${getBoxCss(termsConditions.margin.tablet)};
      padding:${getBoxCss(termsConditions.padding.tablet)};
    }
    ${checkBoxEl} .container{
      margin:${getBoxCss(termsConditions.checkboxMargin.tablet)};
    }
    ${buttonWrapper}{
      flex-direction:${button.signup.displayAs.tablet};
      align-items: ${button.signup.displayAs.tablet === "column" ? btnAlign(button.signup.alignment.tablet) : "center"};
      justify-content:${button.signup.justifyContent.tablet};
    }
    ${signUpButton}{
      margin:${getBoxCss(button.signup.margin.tablet)};
    }
    ${signUpButton} .rgfr-signupBtn{
      height:${button.signup.height.tablet};
      width:${button.signup.width.tablet};
      padding:${getBoxCss(button.signup.padding.tablet)};
    }
    ${signinButton}{
      flex-direction:${button.signin.displayAs.tablet};
      ${button.signin.displayAs.tablet === "row" ? `justify-content:${button.signin.justifyContent.tablet}` : `align-items:${button.signin.alignItems.tablet}`};
      width:${button.signin.width.container.tablet}
    }
    ${signinButton} :where(a){
      width:${button.signin.width.width.tablet};
      height:${button.signin.height.tablet};
      margin:${getBoxCss(button.signin.margin.tablet)};
      padding:${getBoxCss(button.signin.padding.tablet)};
    }
    }


    @media (max-width:767px){
      #rgfrRegisterBlock-${cId}{
      margin:${getBoxCss(general.containerBox.margin.mobile)};
      justify-content:${general.containerBox.alignment.mobile};
    } 
    ${mainWrapper}{
      padding:${getBoxCss(general.containerBox.padding.mobile)};
    }
      ${formHeader.image.mobile.url ? `
        ${formWrapper}{
        width:${general.containerBox.width.mobile};
        flex-direction:${logoPosition(formHeader.image.position.mobile)};
        justify-content:${formHeader.image.mobile.url ? "normal" : "center"};
    }
      `: ""}
    ${formContainer}{
      width:${general.formWrapper.width.mobile};
      margin:${getBoxCss(general.formWrapper.margin.mobile)};
      padding:${getBoxCss(general.formWrapper.padding.mobile)};;
    }
    ${formEl}{
      width:${general.form.width.mobile};
      margin:${getBoxCss(general.form.margin.mobile)};
      padding:${getBoxCss(general.form.padding.mobile)};
    }
    ${formImage}{
        margin:${getBoxCss(formHeader.image.margin.mobile)};
        padding:${getBoxCss(formHeader.image.padding.mobile)};
    }
    ${formImage} img {
        height:${formHeader.image.height.mobile};
        width:${formHeader.image.width.mobile};
      }
    ${logoWrapper}{
        width:${formHeader.header.width.mobile};
        height:${formHeader.header.height.mobile};
        margin:${getBoxCss(formHeader.header.margin.mobile)};
        padding:${getBoxCss(formHeader.header.padding.mobile)};
    }
    ${logoEl} img{
      height:${formHeader.header.logo.height.mobile};
      width:${formHeader.header.logo.width.mobile};
      margin:${getBoxCss(formHeader.header.logo.margin.mobile)};
      padding:${getBoxCss(formHeader.header.logo.padding.mobile)};
    }
    ${headingWrapper}{
      width:calc(100% - ${formHeader.header.logo.width.mobile} + ${formHeader.header.logo.url.url ? "0px" : formHeader.header.logo.width.mobile
        });
    }
    ${headingWrapper} img{
      object-fit:contain;
      height:${formHeader.header.logo.height.mobile};
      width:${formHeader.header.logo.width.mobile};
      margin:${getBoxCss(formHeader.header.logo.margin.mobile)};
      padding:${getBoxCss(formHeader.header.logo.padding.mobile)};
    }
    ${headingWrapper} h4{
      margin:${getBoxCss(formHeader.header.title.margin.mobile)};
      padding:${getBoxCss(formHeader.header.title.padding.mobile)};
    }
    ${headingWrapper} .rgfr-register-subHeading{
      margin:${getBoxCss(formHeader.header.subTitle.margin.mobile)};
      padding:${getBoxCss(formHeader.header.subTitle.padding.mobile)};
    }
    ${inputField}{
      margin:${getBoxCss(formFields.input.margin.mobile)};
    }
      ${formFields.fields
          .map(
            (val, i) =>
              inputField +
              `.rgfr-width-${i + 1}{
      width:${val.width.mobile};
      }`
          )
          .join(" ")}
    ${labelEl}{
      margin:${getBoxCss(formLabel.margin.mobile)};
      padding:${getBoxCss(formLabel.padding.mobile)};
      }
    ${inputField} .rgfr-inputField input{
      padding-top:${formFields.input.padding.mobile.top};
      padding-left:${formFields.fieldIcons
          ? `calc(24px + ${formFields.input.padding.mobile.left})`
          : formFields.input.padding.mobile.left
        };
    }
    ${fieldsIcon}{
      width:${fieldIcons.icon.iconSize.mobile};
      top:${fieldIcons.icon.vertical.mobile};
      left:${fieldIcons.icon.horizontal.mobile};
    }
    ${inputField} .rgfr-inputField .register-eyeIcon.open{
      width:${fieldIcons.passVisibility.iconSize.mobile};
      top:${fieldIcons.passVisibility.vertical.mobile};
      right:${fieldIcons.passVisibility.horizontal.mobile};
    }
    ${inputField} .rgfr-inputField .register-eyeIcon.close{
      width:${fieldIcons.passVisibility.iconSize.mobile};
      top:${fieldIcons.passVisibility.vertical.mobile};
      right:${fieldIcons.passVisibility.horizontal.mobile};
    }
    ${inputField} .passLength, .rgfr-passStrengthTextWrapper{
      width:${password.container.width.mobile};
      height:${password.container.height.mobile};
      margin:${getBoxCss(password.container.margin.mobile)};
      padding:${getBoxCss(password.container.padding.mobile)};
    }
    ${inputField} .passLength .rgfr-strengthMeter{
      width:${password.meter.width.mobile};
      height:${password.meter.height.mobile};
      margin:${getBoxCss(password.meter.margin.mobile)};
      padding:${getBoxCss(password.meter.padding.mobile)};
    }
    ${inputField} .rgfr-passStrengthTextWrapper span{
      margin:${getBoxCss(password.passStrengthTxt.margin.mobile)};
      padding:${getBoxCss(password.passStrengthTxt.padding.mobile)};
    }
    ${checkBoxEl}{
      margin:${getBoxCss(termsConditions.margin.mobile)};
      padding:${getBoxCss(termsConditions.padding.mobile)};
    }
    ${checkBoxEl} .container{
      margin:${getBoxCss(termsConditions.checkboxMargin.mobile)};
    }
    ${buttonWrapper}{
      flex-direction:${button.signup.displayAs.mobile};
      align-items: ${button.signup.displayAs.mobile === "column" ? btnAlign(button.signup.alignment.mobile) : "center"};
      justify-content:${button.signup.justifyContent.mobile};
    }
    ${signUpButton}{
      margin:${getBoxCss(button.signup.margin.mobile)};
    }
    ${signUpButton} .rgfr-signupBtn{
      height:${button.signup.height.mobile};
      width:${button.signup.width.mobile};
      padding:${getBoxCss(button.signup.padding.mobile)};
    }
    ${signinButton}{
      flex-direction:${button.signin.displayAs.mobile};
      ${button.signin.displayAs.mobile === "row" ? `justify-content:${button.signin.justifyContent.mobile}` : `align-items:${button.signin.alignItems.mobile}`};
      width:${button.signin.width.container.mobile}
    }
    ${signinButton} :where(a){
      width:${button.signin.width.width.mobile};
      height:${button.signin.height.mobile};
      margin:${getBoxCss(button.signin.margin.mobile)};
      padding:${getBoxCss(button.signin.padding.mobile)};
    }
    }
      `}
    </style>
  );
};

export default ResponsiveStyle;