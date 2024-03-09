import { Flex, PanelBody,__experimentalUnitControl as UnitControl,__experimentalBoxControl as BoxControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import React,{useState,Fragment} from 'react';
import Device from '../../../Panel/Device/Device';
import { Background, BorderControl, Label, Typography } from '../../../../../../Components';
import { updateData } from '../../../../utils/functions';
import { Tab } from '../../../Panel/Tab/Tab';
import { PanelColorPicker } from '../../../Panel/PanelColorPicker/PanelColorPicker';

const PasswordStrengthStyles = ({ attributes, setAttributes }) => {
  const { password, formFields } = attributes;
  const [device, setDevice] = useState("desktop");
  const [tab, setTab] = useState("container");
  return (
    <PanelBody title={__("Password Strength", "register-form")} initialOpen={false}>
      <Tab value={tab} onChange={value => setTab(value)} options={["container","meter","text"]} />
      {
        tab==="container" &&
      <Fragment>
        <div className='mb10'>
          <strong>Container</strong>
        </div>

        <div className="rgfr-panelDevice mt15">
          <Device className='rgfr-device' value={device} onChange={value => setDevice(value)} />
          <Flex
            align="center"
            justify="space-between"
          >
            <Label className='mb5'>{__("Width", "register-form")}</Label>
            <UnitControl
              className="rgfr-unitControl"
              onChange={(value) => setAttributes({ password: updateData(password, "container", value, "width", device) })}
              isUnitSelectTabbable
              value={password.container.width[device]} />
          </Flex>
        </div>
        <div className="rgfr-panelDevice mt15">
          <Device className='rgfr-device' value={device} onChange={value => setDevice(value)} />
          <Flex
            align="center"
            justify="space-between"
          >
            <Label className='mb5'>{__("Height", "register-form")}</Label>
            <UnitControl
              className="rgfr-unitControl"
              onChange={(value) => setAttributes({ password: updateData(password, "container", value, "height", device) })}
              isUnitSelectTabbable
              value={password.container.height[device]} />
          </Flex>
        </div>
        <div className="rgfr-panelDevice">
          <Device className='rgfr-device' value={device} onChange={value => setDevice(value)} />
          <BoxControl label={__("Margin", "register-form")} values={password.container.margin[device]} onChange={value => setAttributes({ password: updateData(password, "container", value, "margin", device) })} />
        </div>

        <div className="rgfr-panelDevice">
          <Device className='rgfr-device' value={device} onChange={value => setDevice(value)} />
          <BoxControl label={__("Padding", "register-form")} values={password.container.padding[device]} onChange={value => setAttributes({ password: updateData(password, "container", value, "padding", device) })} />
        </div>
        <Background label={__("Background", "register-form")} value={password.container.bg} onChange={value => setAttributes({ password: updateData(password, "container", value, "bg") })} />
        <BorderControl label={__("Border", "register-form")} value={password.container.border} onChange={value => setAttributes({ password: updateData(password, "container", value, "border") })} />
      </Fragment>
      }
      {
        tab==="meter"&& 
        <Fragment>
          <div className='mb10 mt10'>
            <strong>Strength Meter</strong>
          </div>

          <div className="rgfr-panelDevice mt15">
            <Device className='rgfr-device' value={device} onChange={value => setDevice(value)} />
            <Flex
              align="center"
              justify="space-between"
            >
              <Label className='mb5'>{__("Width", "register-form")}</Label>
              <UnitControl
                className="rgfr-unitControl"
                onChange={(value) => setAttributes({ password: updateData(password, "meter", value, "width", device) })}
                isUnitSelectTabbable
                value={password.meter.width[device]} />
            </Flex>
          </div>
          <div className="rgfr-panelDevice mt15">
            <Device className='rgfr-device' value={device} onChange={value => setDevice(value)} />
            <Flex
              align="center"
              justify="space-between"
            >
              <Label className='mb5'>{__("Height", "register-form")}</Label>
              <UnitControl
                className="rgfr-unitControl"
                onChange={(value) => setAttributes({ password: updateData(password, "meter", value, "height", device) })}
                isUnitSelectTabbable
                value={password.meter.height[device]} />
            </Flex>
          </div>
          <div className="rgfr-panelDevice">
            <Device className='rgfr-device' value={device} onChange={value => setDevice(value)} />
            <BoxControl label={__("Margin", "register-form")} values={password.meter.margin[device]} onChange={value => setAttributes({ password: updateData(password, "meter", value, "margin", device) })} />
          </div>

          <div className="rgfr-panelDevice">
            <Device className='rgfr-device' value={device} onChange={value => setDevice(value)} />
            <BoxControl label={__("Padding", "register-form")} values={password.meter.padding[device]} onChange={value => setAttributes({ password: updateData(password, "meter", value, "padding", device) })} />
          </div>
          <BorderControl label={__("Border", "register-form")} value={password.meter.border} onChange={value => setAttributes({ password: updateData(password, "meter", value, "border") })} />
        </Fragment>
      }
      {
      tab==="text"&&
        <Fragment>
          <div className='mb10 mt10'>
            <strong>Strength Text</strong>
          </div>

          <div className="rgfr-panelDevice">
            <Device className='rgfr-device' value={device} onChange={value => setDevice(value)} />
            <BoxControl label={__("Margin", "register-form")} values={password.passStrengthTxt.margin[device]} onChange={value => setAttributes({ password: updateData(password, "passStrengthTxt", value, "margin", device) })} />
          </div>

          <div className="rgfr-panelDevice">
            <Device className='rgfr-device' value={device} onChange={value => setDevice(value)} />
            <BoxControl label={__("Padding", "register-form")} values={password.passStrengthTxt.padding[device]} onChange={value => setAttributes({ password: updateData(password, "passStrengthTxt", value, "padding", device) })} />
        </div>
        <Typography label={__("Typography", "register-form")} value={password.passStrengthTxt.typography} onChange={value => setAttributes({ password: updateData(password, "passStrengthTxt", value,"typography")})} />
        </Fragment>
      }
      
      {
        formFields.showPassStrengthText || formFields.showPassStrengthMeter ?
        <Fragment>
            <hr />
            <div className='mt10 mb10'>
              <strong>Colors</strong>
            </div>
            <PanelColorPicker label={__("Very Weak Password", "register-form")} value={password.colors.veryWeak} onChange={value => setAttributes({ password: updateData(password, "colors", value, "veryWeak") })} />
            
            <PanelColorPicker label={__("Weak Password", "register-form")} value={password.colors.weak} onChange={value => setAttributes({ password: updateData(password, "colors", value, "weak") })} />
            
            <PanelColorPicker label={__("Medium Password", "register-form")} value={password.colors.medium} onChange={value => setAttributes({ password: updateData(password, "colors", value, "medium") })} />
            
            <PanelColorPicker label={__("Strong Password", "register-form")} value={password.colors.strong} onChange={value => setAttributes({password:updateData(password,"colors",value,"strong")})} />
      </Fragment>:""
      }



    </PanelBody>
  );
};

export default PasswordStrengthStyles;