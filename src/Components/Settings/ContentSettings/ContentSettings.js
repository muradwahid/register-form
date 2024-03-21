import React, { Fragment } from 'react';
import ButtonContent from './Contents/ButtonContent';
import EmailOptionSettings from './Contents/EmailOptionSettings';
import FormFieldSettings from './Contents/FormFieldSettings';
import FormHeader from './Contents/FormHeader';
import FormOptionSettings from './Contents/FormOptionSettings';
import SocialSignUp from './Contents/SocialSignUp';
import TermsConditionSettings from './Contents/TermsConditionSettings';
import ValidationSettings from './Contents/ValidationSettings';

const ContentSettings = ({ attributes, setAttributes }) => {
  return (
    <Fragment>
      <FormHeader attributes={attributes} setAttributes={setAttributes} />
      <FormFieldSettings attributes={attributes}setAttributes={setAttributes}/>
      <ButtonContent attributes={attributes} setAttributes={setAttributes} />
      <SocialSignUp attributes={attributes} setAttributes={setAttributes} />
      <FormOptionSettings attributes={attributes} setAttributes={setAttributes} />
      <EmailOptionSettings attributes={attributes} setAttributes={setAttributes} />
      <TermsConditionSettings attributes={attributes} setAttributes={setAttributes} />
      <ValidationSettings attributes={attributes} setAttributes={setAttributes} />
    </Fragment>
  );
};

export default ContentSettings;