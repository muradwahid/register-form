import { Flex, __experimentalNumberControl as NumberControl, SelectControl, ToggleControl,__experimentalInputControl as InputControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import React, { Fragment } from 'react';
import { updateData } from '../../../../utils/functions';
import { Label } from '../../../../../../Components';

const WeakPassword = ({ attributes, setAttributes }) => {
  const { formFields, weakPassword ,validation} = attributes;
  return (
    <Fragment>
      <ToggleControl label={__("Enable use of weak Password", "b-blocks")} checked={formFields.weakPass} value={formFields.weakPass} onChange={(value) => setAttributes({ formFields: updateData(formFields, "weakPass", value) })} />
      {
        !formFields.weakPass &&
        <Fragment>
            
          <Flex
            align="center"
            justify="space-between"
          >
            <Label className="mb10">{__("Validation Text", "b-blocks")}</Label>
              <SelectControl value={weakPassword.option} options={[{ label: "Default", value: "default" }, {label:"Custom",value:"custom"}]}  onChange={value=>setAttributes({weakPassword:updateData(weakPassword,"option",value)})}/>
            </Flex>
            
            {
              weakPassword.option === "custom" && <>
                <Label className="mt10">{__("Custom Validation Text", "b-blocks")}</Label>
                <InputControl type='text' value={validation.error.password.custom} onChange={value => setAttributes({validation:updateData(validation,"error",value,"password","custom")})} />
              </>
            }

          <Flex
            align="center"
            justify="space-between"
          >
            <Label className="mb10">{__("Minimum Password Length", "b-blocks")}</Label>
            <NumberControl
              onChange={value => setAttributes({ weakPassword: updateData(weakPassword, "validation", value, "length") })}
              isDragEnabled
              isShiftStepEnabled
              shiftStep={1}
              step={1}
              value={weakPassword.validation.length}
              max={50}
              min={4}
            />
          </Flex>

          <ToggleControl label={__("One Uppercase Letter", "b-blocks")} checked={weakPassword.validation.uppercase} value={weakPassword.validation.uppercase} onChange={(value) => setAttributes({ weakPassword: updateData(weakPassword, "validation", value, "uppercase") })} />

          <ToggleControl label={__("One Lowercase Letter", "b-blocks")} checked={weakPassword.validation.lowercase} value={weakPassword.validation.lowercase} onChange={(value) => setAttributes({ weakPassword: updateData(weakPassword, "validation", value, "lowercase") })} />

          <ToggleControl label={__("One Number", "b-blocks")} checked={weakPassword.validation.number} value={weakPassword.validation.number} onChange={(value) => setAttributes({ weakPassword: updateData(weakPassword, "validation", value, "number") })} />

          <ToggleControl label={__("One Special Character", "b-blocks")} checked={weakPassword.validation.specialChar} value={weakPassword.validation.specialChar} onChange={(value) => setAttributes({ weakPassword: updateData(weakPassword, "validation", value, "specialChar") })} />

        </Fragment>
      }


    </Fragment>
  );
};

export default WeakPassword;