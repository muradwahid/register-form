import { __experimentalBoxControl as BoxControl, Flex, PanelBody, RangeControl, SelectControl, ToggleControl, __experimentalUnitControl as UnitControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import React, { Fragment, useState } from 'react';
import { Background, BorderControl, Label, Typography } from '../../../../../../Components';
import { updateData } from '../../../../utils/functions';
import { alignCenter, alignLeft, alignRight } from '../../../../utils/icons';
import { justifyContent } from '../../../../utils/options';
import Device from '../../../Panel/Device/Device';
import { PanelAlign } from '../../../Panel/PanelAlign/PanelAlign';
import { PanelColorPicker } from '../../../Panel/PanelColorPicker/PanelColorPicker';
import { Tab } from '../../../Panel/Tab/Tab';

const ButtonStyles = ({ attributes, setAttributes }) => {
  const { button } = attributes;
  const [device, setDevice] = useState("desktop");
  const [hover, setHover] = useState("normal");
  return (
    <PanelBody title={__("Button", "register-form")} initialOpen={false}>
      <div className="rgfr-panelDevice">
        <Device
          className="rgfr-device"
          value={device}
          onChange={(value) => setDevice(value)}
        />
        <BoxControl className="boxControlWp"
          label={__("Margin", "register-form")}
          values={button.signup.margin[device]}
          onChange={(value) =>
            setAttributes({
              button: updateData(button, "signup", value, "margin", device),
            })
          }
        />
      </div>

      <div className="rgfr-panelDevice">
        <Device
          className="rgfr-device"
          value={device}
          onChange={(value) => setDevice(value)}
        />
        <BoxControl className="boxControlWp"
          label={__("Padding", "register-form")}
          values={button.signup.padding[device]}
          onChange={(value) =>
            setAttributes({
              button: updateData(button, "signup", value, "padding", device),
            })
          }
        />
      </div>
      <Typography label={__("Typography", "register-form")} value={button.signup.typography} onChange={value => setAttributes({ button: updateData(button, "signup", value, "typography") })} />

      <div className="rgfr-panelDevice mt15">
        <Device className='rgfr-device' style={{ top: "8px" }} value={device} onChange={value => setDevice(value)} />
        <Flex
          align="center"
          justify="space-between"
        >
          <Label className='mb5'>{__("Display as", "register-form")}</Label>
          <SelectControl labelPosition='left' options={[{ label: "Inline", value: "row" }, { label: "Block", value: "column" }]} value={button.signup.displayAs[device]} onChange={value => setAttributes({ button: updateData(button, "signup", value, "displayAs", device) })} />
        </Flex>
      </div>

      {
        button.signup.displayAs[device] === "row" &&
        <div className="rgfr-panelDevice mt15">
          <Device position="vertical" style={{ position: "absolute", top: "5px", left: "88px", zIndex: 999 }} value={device} onChange={value => setDevice(value)} />
          <Flex
            align="center"
            justify="space-between"
          >
            <Label className='mb10'>{__("Justify Content", "register-form")}</Label>
            <SelectControl labelPosition='left' options={justifyContent} value={button.signup.justifyContent[device]} onChange={value => setAttributes({ button: updateData(button, "signup", value, "justifyContent", device) })} />
          </Flex>
        </div>
      }

      {
        button.signup.displayAs[device] === "column" &&
        <div className="rgfr-panelDevice mt15">
          <Device className='rgfr-device' style={{ top: "5px", left: "70px" }} value={device} onChange={value => setDevice(value)} />
          <PanelAlign
            className='mb10 mt10'
            label={__("Alignment", "register-form")}
            value={button.signup.alignment[device]}
            icons={[{ label: "left", value: alignLeft }, { label: "center", value: alignCenter }, { label: "right", value: alignRight }]} onChange={value => setAttributes({ button: updateData(button, "signup", value, "alignment", device) })}
          />
        </div>
      }

      <Flex className="rgfr-panelDevice" align="center" justify="space-between">
        <Label className="mb10">{__("Button Width", "register-form")}</Label>
        <UnitControl className="rgfr-unitControl" value={button.signup.width[device]} min={0} onChange={value => setAttributes({ button: updateData(button, "signup", value, "width", device) })} />
      </Flex>

      <Flex className="rgfr-panelDevice" align="center" justify="space-between">
        <Label className="mb10">{__("Button Height", "register-form")} </Label>
        <UnitControl className="rgfr-unitControl" min={0} value={button.signup.height[device]} onChange={value => setAttributes({ button: updateData(button, "signup", value, "height", device) })} />
      </Flex>

      <ToggleControl label={__("Show Spinner", "register-form")} checked={button.signup.spinner.show} value={button.signup.spinner.show} onChange={value => setAttributes({ button: updateData(button, "signup", value, "spinner", "show") })} />

      {
        button.signup.spinner.show && <Fragment>
          <small className='rgfr-spinnerAlert'>Spinner is only visible after clicking on the button.</small>
          <RangeControl label={__("Position", "register-form")} value={button.signup.spinner.position} onChange={value => setAttributes({ button: updateData(button, "signup", value, "spinner", "position") })} />
          <PanelColorPicker label={__("Color", "register-form")} value={button.signup.spinner.color} onChange={value => setAttributes({ button: updateData(button, "signup", value, "spinner", "color") })} />
        </Fragment>
      }

      <Tab options={["normal", "hover"]} value={hover} onChange={value => setHover(value)} />

      <PanelColorPicker label={__("Color", "register-form")} value={button.signup.color[hover].color} onChange={value => setAttributes({ button: updateData(button, "signup", value, "color", hover, "color") })} />
      <Background label={__("Background", "register-form")} value={button.signup.color[hover].bg} onChange={value => setAttributes({ button: updateData(button, "signup", value, 'color', hover, "bg") })} />
      <BorderControl label={__("Border", "register-form")} value={button.signup.border[hover]} onChange={value => setAttributes({ button: updateData(button, "signup", value, "border", hover) })} />

    </PanelBody>
  );
};

export default ButtonStyles;