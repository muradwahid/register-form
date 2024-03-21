import React, {Fragment} from 'react';
import GeneralStyles from './Styles/GeneralStyles';
import HeaderStyles from './Styles/HeaderStyles';
import FieldStyles from './Styles/FieldStyles';
import TermsConditionStyles from './Styles/TermsConditionStyles';
import FormLabelStyles from './Styles/FormLabelStyles';
import FieldIconStyles from './Styles/FieldIconStyles';
import ButtonStyles from './Styles/ButtonStyles';
import LoginLink from './Styles/LoginLink';
import PasswordStrengthStyles from './Styles/PasswordStrengthStyles';
import MessageStyles from './Styles/MessageStyles';

const StyleSettings = ({attributes,setAttributes}) => {
  return (
    <Fragment>
      <GeneralStyles attributes={attributes} setAttributes={setAttributes} />
      <HeaderStyles attributes={attributes} setAttributes={setAttributes} />
      <FieldStyles attributes={attributes} setAttributes={setAttributes} />
      <FormLabelStyles attributes={attributes} setAttributes={setAttributes} />
      <FieldIconStyles attributes={attributes} setAttributes={setAttributes} />
      <TermsConditionStyles
        attributes={attributes}
        setAttributes={setAttributes}
      />
      <ButtonStyles attributes={attributes} setAttributes={setAttributes} />
      <LoginLink attributes={attributes} setAttributes={setAttributes} />
      <MessageStyles attributes={attributes} setAttributes={setAttributes} />
      <PasswordStrengthStyles attributes={attributes} setAttributes={setAttributes} />
    </Fragment>
  );
};

export default StyleSettings;