import { PanelBody, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import React, { Fragment } from 'react';
import { updateData } from '../../../../utils/functions';

const ValidationSettings = ({ attributes, setAttributes }) => {
  const { validation } = attributes;
  return (
    <Fragment>
      <PanelBody title={__("Validation Messages", "register-form")} initialOpen={false} >
        <div className='mb10'>
          <strong>Error Messages</strong>
        </div>
        <TextControl label={__("Invalid Email", "register-form")} value={validation.error.email.invalid} onChange={value => setAttributes({ validation: updateData(validation, "error", value, "email", "invalid") })} />

        <TextControl label={__("Email is missing", "register-form")} value={validation.error.email.missing} onChange={value => setAttributes({ validation: updateData(validation, "error", value, "email", "missing") })} />

        <TextControl label={__("Already Used Email", "register-form")} value={validation.error.email.alreadyUsed} onChange={value => setAttributes({ validation: updateData(validation, "error", value, "email", "alreadyUsed") })} />

        <TextControl label={__("Invalid Username", "register-form")} value={validation.error.username.invalid} onChange={value => setAttributes({ validation: updateData(validation, "error", value, "username", "invalid") })} />

        <TextControl label={__("Username is missing", "register-form")} value={validation.error.username.missing} onChange={value => setAttributes({ validation: updateData(validation, "error", value, "username", "missing") })} />

        <TextControl label={__("Username already in use", "register-form")} value={validation.error.username.alreadyUsed} onChange={value => setAttributes({ validation: updateData(validation, "error", value, "username", "alreadyUsed") })} />


        <TextControl label={__("Invalid Password", "register-form")} value={validation.error.password.invalid} onChange={value => setAttributes({ validation: updateData(validation, "error", value, "password", "invalid") })} />

        <TextControl label={__("Password is missing", "register-form")} value={validation.error.password.missing} onChange={value => setAttributes({ validation: updateData(validation, "error", value, "password", "missing") })} />

        <TextControl label={__("Invalid Password Confirmed", "register-form")} value={validation.error.password.confirmedPass} onChange={value => setAttributes({ validation: updateData(validation, "error", value, "password", "confirmedPass") })} />
        <hr />
        <div className='mb5'>
          <strong>Success Messages</strong>
        </div>
        <TextControl label={__("Successful Registration", "register-form")} value={validation.success.text} onChange={value => setAttributes({ validation: updateData(validation, "success", value, "text") })} />
      </PanelBody>
    </Fragment>
  );
};

export default ValidationSettings;