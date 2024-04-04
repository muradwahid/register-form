import { Flex, PanelBody, SelectControl, TextControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import React, { Fragment } from 'react';
import { Label } from '../../../../../../Components';
import { updateData } from '../../../../utils/functions';

const SocialSignUp = ({ attributes, setAttributes }) => {
  const { socialSignUp } = attributes;
  return (
    <PanelBody title={__("Social Signup", "register-form")} initialOpen={false}>
      <ToggleControl label={__("Enable Signup with Google", "register-form")} checked={socialSignUp.google.show} value={socialSignUp.google.show} onChange={value => setAttributes({ socialSignUp: updateData(socialSignUp, "google", value, "show") })} />
      {
        socialSignUp.google.show && <Fragment>
          <TextControl label={__("Please add Google client id", "register-form")} value={socialSignUp.google.clientId} onChange={value => setAttributes({ socialSignUp: updateData(socialSignUp, "google", value, "clientId") })} />

          <TextControl label={__("Text for Google Button", "register-form")} value={socialSignUp.google.text} onChange={value => setAttributes({ socialSignUp: updateData(socialSignUp, "google", value, "text") })} />
        </Fragment>
      }

      <ToggleControl label={__("Enable Signup with Facebook", "register-form")} checked={socialSignUp.facebook.show} value={socialSignUp.facebook.show} onChange={value => setAttributes({ socialSignUp: updateData(socialSignUp, "facebook", value, "show") })} />

      {
        socialSignUp.facebook.show && <Fragment>
          <TextControl label={__("Please add Facebook API key", "register-form")} value={socialSignUp.facebook.clientId} onChange={value => setAttributes({ socialSignUp: updateData(socialSignUp, "facebook", value, "clientId") })} />

          <TextControl label={__("Text for Facebook Button", "register-form")} value={socialSignUp.facebook.text} onChange={value => setAttributes({ socialSignUp: updateData(socialSignUp, "facebook", value, "text") })} />
        </Fragment>
      }

      <ToggleControl label={__("Show Separator", "register-form")} checked={socialSignUp.separator.show} value={socialSignUp.separator.show} onChange={value => setAttributes({ socialSignUp: updateData(socialSignUp, "separator", value, "show") })} />

      {
        socialSignUp.separator.show && <Fragment>
          <Flex>
            <Label className="mb10">{__("Separator Type", "register-form")}</Label>
            <SelectControl value={socialSignUp.separator.type} options={[{ label: "Text", value: "text" }, { label: "Line", value: "line" }]} onChange={value => setAttributes({ socialSignUp: updateData(socialSignUp, "separator", value, "type") })} />
          </Flex>

          <TextControl label={__("Separator Text", "register-form")} value={socialSignUp.separator.text} onChange={value => setAttributes({ socialSignUp: updateData(socialSignUp, "separator", value, "text") })} />
        </Fragment>
      }

    </PanelBody>
  );
};

export default SocialSignUp;