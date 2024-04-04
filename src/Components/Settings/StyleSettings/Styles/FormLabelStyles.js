import {
  __experimentalBoxControl as BoxControl,
  PanelBody
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { useState } from "react";
import { BorderControl, Typography } from "../../../../../../Components";
import { updateData } from "../../../../utils/functions";
import Device from "../../../Panel/Device/Device";
import { PanelColorPicker } from "../../../Panel/PanelColorPicker/PanelColorPicker";

const FormLabelStyles = ({ attributes, setAttributes }) => {
  const { formLabel } = attributes;
  const [device, setDevice] = useState("desktop");
  return (
    <PanelBody title={__("Form Labels", "register-form")} initialOpen={false}>
      <div className="rgfr-panelDevice">
        <Device
          className="rgfr-device"
          value={device}
          onChange={(value) => setDevice(value)}
        />
        <BoxControl className="boxControlWp"
          label={__("Margin", "register-form")}
          values={formLabel.margin[device]}
          onChange={(value) =>
            setAttributes({
              formLabel: updateData(formLabel, "margin", value, device),
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
          values={formLabel.padding[device]}
          onChange={(value) =>
            setAttributes({
              formLabel: updateData(formLabel, "padding", value, device),
            })
          }
        />
      </div>

      <Typography
        label={__("Typography", "register-form")}
        value={formLabel.typography}
        onChange={(value) =>
          setAttributes({
            formLabel: updateData(formLabel, "typography", value),
          })
        }
      />
      <PanelColorPicker
        label={__("Color", "register-form")}
        value={formLabel.color.text}
        onChange={(value) =>
          setAttributes({
            formLabel: updateData(formLabel, "color", value, "text"),
          })
        }
      />
      <PanelColorPicker
        label={__("Background", "register-form")}
        value={formLabel.color.bg}
        onChange={(value) =>
          setAttributes({
            formLabel: updateData(formLabel, "color", value, "bg"),
          })
        }
      />
      <BorderControl
        label={__("Border", "register-form")}
        value={formLabel.border}
        onChange={(value) =>
          setAttributes({ formLabel: updateData(formLabel, "border", value) })
        }
      />

    </PanelBody>
  );
};

export default FormLabelStyles;
