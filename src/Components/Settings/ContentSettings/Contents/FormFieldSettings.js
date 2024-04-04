import { Button, Flex, PanelBody, PanelRow, SelectControl, TextControl, ToggleControl, __experimentalUnitControl as UnitControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { produce } from 'immer';
import React, { Fragment } from 'react';
import { Label } from '../../../../../../Components';
import emailIcon from '../../../../../assets/icon/envelope-solid.svg';
import passIcon from '../../../../../assets/icon/lock-solid.svg';
import userIcon from "../../../../../assets/icon/user-solid.svg";
import { updateData } from '../../../../utils/functions';
import { addInputFieldOptions, inputFieldOptions } from '../../../../utils/options';
import Device from '../../../Panel/Device/Device';
import MediaArea from '../../../Panel/MediaArea/MediaArea';
import PanelInputControl from '../../../Panel/PanelInputControl/PanelInputControl';
import { PanelRepeater } from '../../../Panel/PanelRepeater/PanelRepeater';
import WeakPassword from './WeakPassword';
const FormFieldSettings = ({ attributes, setAttributes }) => {
  const { formFields, password } = attributes;
  const handleIcon = (type) => {
    if (type === "username") {
      return userIcon
    } else if (type === "password") {
      return passIcon
    } else if (type === "email") {
      return emailIcon
    } else if (type === "confirmpassword") {
      return passIcon
    } else {
      return userIcon
    }
  }

  const updateRepeaterData = (
    index,
    property,
    value,
    secondProperty,
    thirdProperty
  ) => {
    const updatedData = produce(formFields.fields, (draft) => {
      if (property && secondProperty && thirdProperty) {
        draft[index][property][secondProperty][thirdProperty] = value;
      } else if (property && secondProperty) {
        draft[index][property][secondProperty] = value;
      } else {
        draft[index][property] = value;
      }
    });
    setAttributes({ formFields: { ...formFields, fields: updatedData } })
  };
  const handleDelete = (index) => {
    setAttributes({
      formFields: { ...formFields, fields: [...formFields.fields.slice(0, index), ...formFields.fields.slice(index + 1)] },
    });
  }
  const handleAddItem = () => {
    const fieldsData = [...formFields.fields];
    fieldsData.push(addInputFieldOptions)
    setAttributes({ formFields: { ...formFields, fields: fieldsData } })
  }

  return (
    <Fragment>
      <PanelBody title={__("Form Fields", "register-form")} initialOpen={false}>
        <p>Fields</p>
        {
          formFields.fields.map((val, i) => <PanelRepeater key={i} index={i} length={formFields.fields.length} copy={true} delete={true} handleDelete={handleDelete} title={val.label.text} >
            <PanelRow>
              <Label className='mb10'>Type</Label>
              <SelectControl className='controller-width' options={inputFieldOptions} value={val.type} onChange={(value) => updateRepeaterData(i, "type", value)} />
            </PanelRow>
            <PanelRow>
              <Label className='mb10'>Label</Label>
              <TextControl className='controller-width' value={val.label.text} onChange={(value) => updateRepeaterData(i, "label", value, "text")} />
            </PanelRow>
            <PanelRow>
              <Label className='mb10'>Placeholder</Label>
              <TextControl className='controller-width' value={val.placeholder.text} onChange={(value) => updateRepeaterData(i, "placeholder", value, "text")} />
            </PanelRow>
            <ToggleControl label={__("Required", "register-form")} value={val.required} checked={val.required} onChange={(value) => updateRepeaterData(i, "required", value)} />
            <PanelRow>
              <Flex justify='flex-start' gap="0px">
                <Label className="mb10">{__("Field Width", "register-form")}</Label>
                <Device className='mb10' value={val.device} onChange={(value) => updateRepeaterData(i, "device", value)} />
              </Flex>
              <UnitControl units={[{ label: "%", value: "%", default: "100" }]} max={100} style={{ width: "60px" }} value={val.width[val.device]} onChange={(value) => updateRepeaterData(i, "width", value, val.device)} />
            </PanelRow>
            <Label>{__("Icon", "register-form")}</Label>
            <MediaArea types="image/svg+xml" default={handleIcon(val.type)} label={__("Select SVG", "register-form")} value={val.icon.url} onChange={(value) => updateRepeaterData(i, "icon", value, "url")} />
          </PanelRepeater>)
        }
        <div className='panelInputFieldAddButton'>
          <Button onClick={handleAddItem} variant='primary' > <span className="dashicons dashicons-plus"></span> Add Item</Button>
        </div>

        <hr />
        <ToggleControl label={__("Show Label", "register-form")} value={formFields.showLabel} checked={formFields.showLabel} onChange={(value) => setAttributes({ formFields: updateData(formFields, "showLabel", value) })} />
        {
          formFields.showLabel && <ToggleControl label={__("Show Required Mark", "register-form")} value={formFields.showRequiredMark} checked={formFields.showRequiredMark} onChange={(value) => setAttributes({ formFields: updateData(formFields, "showRequiredMark", value) })} />
        }

        <ToggleControl label={__("Password Visibility Icon", "register-form")} value={formFields.passVisibilityIcon} checked={formFields.passVisibilityIcon} onChange={(value) => setAttributes({ formFields: updateData(formFields, "passVisibilityIcon", value) })} />

        <ToggleControl label={__("Show Field Icons", "register-form")} value={formFields.fieldIcons} checked={formFields.fieldIcons} onChange={(value) => setAttributes({ formFields: updateData(formFields, "fieldIcons", value) })} />

        <ToggleControl label={__("Show Password Strength Meter", "register-form")} value={formFields.showPassStrengthMeter} checked={formFields.showPassStrengthMeter} onChange={(value) => setAttributes({ formFields: updateData(formFields, "showPassStrengthMeter", value) })} />

        <ToggleControl label={__("Show Password Strength Text", "register-form")} value={formFields.showPassStrengthText} checked={formFields.showPassStrengthText} onChange={(value) => setAttributes({ formFields: updateData(formFields, "showPassStrengthText", value) })} />

        {
          formFields.showPassStrengthText && <Fragment>
            <Flex
              align="center"
              justify="space-between"
            >
              <Label className="mb10">{__("Password Strength Text", "register-form")}</Label>
              <SelectControl options={[{ label: "Default", value: "default" }, { label: "Custom", value: "custom" }]} value={formFields.passStrengthText} onChange={(value) => setAttributes({ formFields: updateData(formFields, "passStrengthText", value) })} />
            </Flex>
            {
              formFields.passStrengthText === "custom" &&
              <Fragment>
                <PanelInputControl className="width130" label={__("Very Weak Password", "register-form")} value={password.passStrengthTxt.veryWeak} onChange={(value) => setAttributes({ password: updateData(password, "passStrengthTxt", value, "veryWeak") })} />

                <PanelInputControl className="width130" label={__("Weak Password", "register-form")} value={password.passStrengthTxt.weak} onChange={(value) => setAttributes({ password: updateData(password, "passStrengthTxt", value, "weak") })} />

                <PanelInputControl className="width130" label={__("Medium Password", "register-form")} value={password.passStrengthTxt.medium} onChange={(value) => setAttributes({ password: updateData(password, "passStrengthTxt", value, "medium") })} />

                <PanelInputControl className="width130" label={__("Strong Password", "register-form")} value={password.passStrengthTxt.strong} onChange={(value) => setAttributes({ password: updateData(password, "passStrengthTxt", value, "strong") })} />

              </Fragment>
            }
          </Fragment>
        }
        <WeakPassword attributes={attributes} setAttributes={setAttributes} />
      </PanelBody>
    </Fragment>
  );
};

export default FormFieldSettings;
