import { __experimentalBoxControl as BoxControl, PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import React, { useState } from 'react';
import { BorderControl, Typography } from '../../../../../../Components';
import { updateData } from '../../../../utils/functions';
import { alignCenter, alignLeft, alignRight } from '../../../../utils/icons';
import Device from '../../../Panel/Device/Device';
import { PanelAlign } from '../../../Panel/PanelAlign/PanelAlign';
import { PanelColorPicker } from '../../../Panel/PanelColorPicker/PanelColorPicker';
import { Tab } from '../../../Panel/Tab/Tab';

const FieldStyles = ({ attributes, setAttributes }) => {
  const { formFields } = attributes;
  const [device, setDevice] = useState("desktop");
  const [focus, setFocus] = useState("normal");
  return (
    <PanelBody title={__("Form Fields", "register-form")} initialOpen={false}>
      <div className="rgfr-panelDevice">
        <Device className='rgfr-device' value={device} onChange={value => setDevice(value)} />
        <BoxControl label={__("Margin", "register-form")} values={formFields.input.margin[device]} onChange={value => setAttributes({ formFields: updateData(formFields, "input", value, "margin", device) })} />
      </div>

      <div className="rgfr-panelDevice">
        <Device className='rgfr-device' value={device} onChange={value => setDevice(value)} />

        <BoxControl label={__("Padding", "register-form")} values={formFields.input.padding[device]} onChange={value => setAttributes({ formFields: updateData(formFields, "input", value, "padding", device) })} />
      </div>

      <Typography label={__("Typography", "register-form")} value={formFields.input.typography} onChange={value => setAttributes({ formFields: updateData(formFields, "input", value, "typography") })} />

      <PanelAlign
        className='mb10 mt10'
        label={__("Text Alignment", "register-form")}
        value={formFields.input.txtAlign}
        icons={[{ label: "left", value: alignLeft }, { label: "center", value: alignCenter }, { label: "right", value: alignRight }]} onChange={value => setAttributes({ formFields: updateData(formFields, "input", value, "txtAlign") })}
      />

      <Tab options={["normal", "focus"]} value={focus} onChange={value => setFocus(value)} />

      {
        focus === "normal" && <PanelColorPicker label={__("Color", "register-form")} value={formFields.input.color.normal.text} onChange={(value) => setAttributes({ formFields: updateData(formFields, "input", value, "color", "normal", "text") })} />
      }

      <PanelColorPicker label={__("Placeholder Color", "register-form")} value={formFields.input.color[focus].placeholder} onChange={value => setAttributes({ formFields: updateData(formFields, "input", value, "color", focus, "placeholder") })} />

      <PanelColorPicker label={__("Background", "register-form")} value={formFields.input.color[focus].bg} onChange={value => setAttributes({ formFields: updateData(formFields, "input", value, "color", focus, "bg") })} />

      <BorderControl label={__("Border", "register-form")} value={formFields.input.border[focus]} onChange={value => setAttributes({ formFields: updateData(formFields, "input", value, "border", focus) })} />

    </PanelBody>
  );
};

export default FieldStyles;