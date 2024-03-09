import { PanelBody, __experimentalBoxControl as BoxControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import React, { useState } from 'react';
import Device from '../../../Panel/Device/Device';
import { updateData } from '../../../../utils/functions';
import { PanelColorPicker } from '../../../Panel/PanelColorPicker/PanelColorPicker';
import { Typography } from '../../../../../../Components';
const TermsConditionStyles = ({ attributes, setAttributes }) => {
  const { termsConditions } = attributes;
  const [device, setDevice] = useState("desktop");
  return (
    <PanelBody
      title={__("Terms & Conditions", "register-form")}
      initialOpen={false}
    >
      <div className="rgfr-panelDevice">
        <Device
          className="rgfr-device"
          value={device}
          onChange={(value) => setDevice(value)}
        />
        <BoxControl
          label={__("Margin", "register-form")}
          values={termsConditions.margin[device]}
          onChange={(value) =>
            setAttributes({
              termsConditions: updateData(
                termsConditions,
                "margin",
                value,
                device
              ),
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
        <BoxControl
          label={__("Padding", "register-form")}
          values={termsConditions.padding[device]}
          onChange={(value) =>
            setAttributes({
              termsConditions: updateData(
                termsConditions,
                "padding",
                value,
                device
              ),
            })
          }
        />
      </div>

      <div className="rgfr-panelDevice">
        <Device
          className="rgfr-device"
          style={{left:"115px"}}
          value={device}
          onChange={(value) => setDevice(value)}
        />
        <BoxControl
          label={__("Checkbox Margin", "register-form")}
          values={termsConditions.checkboxMargin[device]}
          onChange={(value) =>
            setAttributes({
              termsConditions: updateData(
                termsConditions,
                "checkboxMargin",
                value,
                device
              ),
            })
          }
        />
      </div>

      <PanelColorPicker label={__("Color", "register-form")} value={termsConditions.color.text} onChange={value => setAttributes({termsConditions:updateData(termsConditions,"color",value,"text")})} />
      
      <PanelColorPicker label={__("Link Color", "register-form")} value={termsConditions.color.link} onChange={value => setAttributes({termsConditions:updateData(termsConditions,"color",value,"link")})} />
      
      <PanelColorPicker label={__("Background Color", "register-form")} value={termsConditions.color.bg} onChange={value => setAttributes({termsConditions:updateData(termsConditions,"color",value,"bg")})} />

      <PanelColorPicker label={__("Checkbox", "register-form")} value={termsConditions.color.checkbox} onChange={value => setAttributes({termsConditions:updateData(termsConditions,"color",value,"checkbox")})} />
      <Typography
        label={__("Typography", "register-form")}
        value={termsConditions.typography}
        onChange={(value) =>
          setAttributes({
            termsConditions: updateData(termsConditions, "typography", value),
          })
        }
      />
    </PanelBody>
  );
};

export default TermsConditionStyles;