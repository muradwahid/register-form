import { __experimentalBoxControl as BoxControl, PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import React, { useState } from 'react';
import { Typography } from '../../../../../../Components';
import { updateData } from '../../../../utils/functions';
import Device from '../../../Panel/Device/Device';
import { PanelColorPicker } from '../../../Panel/PanelColorPicker/PanelColorPicker';
const TermsConditionStyles = ({ attributes, setAttributes }) => {
  const { termsConditions } = attributes;
  const [device, setDevice] = useState("desktop");
  return (
    <PanelBody
      title={__("Terms & Conditions", "b-blocks")}
      initialOpen={false}
    >
      <div className="rgfr-panelDevice">
        <Device
          className="rgfr-device"
          value={device}
          onChange={(value) => setDevice(value)}
        />
        <BoxControl className="boxControlWp"
          label={__("Margin", "b-blocks")}
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
        <BoxControl className="boxControlWp"
          label={__("Padding", "b-blocks")}
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
          style={{ left: "115px" }}
          value={device}
          onChange={(value) => setDevice(value)}
        />
        <BoxControl className="boxControlWp"
          label={__("Checkbox Margin", "b-blocks")}
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

      <PanelColorPicker label={__("Color", "b-blocks")} value={termsConditions.color.text} onChange={value => setAttributes({ termsConditions: updateData(termsConditions, "color", value, "text") })} />

      <PanelColorPicker label={__("Link Color", "b-blocks")} value={termsConditions.color.link} onChange={value => setAttributes({ termsConditions: updateData(termsConditions, "color", value, "link") })} />

      <PanelColorPicker label={__("Background Color", "b-blocks")} value={termsConditions.color.bg} onChange={value => setAttributes({ termsConditions: updateData(termsConditions, "color", value, "bg") })} />

      <PanelColorPicker label={__("Checkbox", "b-blocks")} value={termsConditions.color.checkbox} onChange={value => setAttributes({ termsConditions: updateData(termsConditions, "color", value, "checkbox") })} />
      <Typography
        label={__("Typography", "b-blocks")}
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