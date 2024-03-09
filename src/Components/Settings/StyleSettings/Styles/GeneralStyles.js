import { __experimentalBoxControl as BoxControl, Flex, PanelBody, __experimentalUnitControl as UnitControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import React, { Fragment, useState } from 'react';
import { Background, BorderControl, Label, MultiShadowControl } from '../../../../../../Components';
import { updateData } from '../../../../utils/functions';
import { alignCenter, alignLeft, alignRight } from '../../../../utils/icons';
import Device from '../../../Panel/Device/Device';
import { PanelAlign } from '../../../Panel/PanelAlign/PanelAlign';
import { Tab } from '../../../Panel/Tab/Tab';

const GeneralStyles = ({ attributes, setAttributes }) => {
  const { general } = attributes;
  const [tab, setTab] = useState("containerbox");
  const [device, setDevice] = useState("desktop");
  return (
    <PanelBody title={__("General", "register-form")} initialOpen={true}>
      <Tab options={["Container Box", "Form Wrapper", "Form"]} paddingX={8} value={tab} onChange={value => setTab(value)} />
      {
        tab === "containerbox" && <Fragment>
          <div className="rgfr-panelDevice mt15">
            <Device className='rgfr-device' value={device} onChange={value => setDevice(value)} />
            <Flex
              align="center"
              justify="space-between"
            >
              <Label className='mb5'>{__("Width", "register-form")}</Label>
              <UnitControl
                className="rgfr-unitControl"
                onChange={(value) => setAttributes({ general: updateData(general, "containerBox", value, "width", device) })}
                isUnitSelectTabbable
                value={general.containerBox.width[device]} />
            </Flex>
          </div>
          <div className="rgfr-panelDevice">
            <Device className='rgfr-device' value={device} onChange={value => setDevice(value)} />
            <BoxControl label={__("Margin", "register-form")} values={general.containerBox.margin[device]} onChange={value => setAttributes({ general: updateData(general, "containerBox", value, "margin", device) })} />
          </div>

          <div className="rgfr-panelDevice">
            <Device className='rgfr-device' value={device} onChange={value => setDevice(value)} />
            <BoxControl label={__("Padding", "register-form")} values={general.containerBox.padding[device]} onChange={value => setAttributes({ general: updateData(general, "containerBox", value, "padding", device) })} />
          </div>

          <div className="rgfr-panelDevice">
            <Device className='rgfr-device mt5' style={{left:"70px"}} value={device} onChange={value => setDevice(value)} />
            <PanelAlign label={__("Alignment", "register-form")} icons={[{ label: "Left", value: alignLeft }, { label: "Center", value: alignCenter }, { label: "Right", value: alignRight }]} value={general.containerBox.alignment[device]} onChange={value => setAttributes({ general: updateData(general, 'containerBox', value, "alignment", device) })} />
          </div>

          <BorderControl label={__("Border", "register-form")} value={general.containerBox.border} onChange={value => setAttributes({ general: updateData(general, "containerBox", value, "border") })} />

          <Background label={__("Background", "register-form")} value={general.containerBox.bg} onChange={(value) => setAttributes({ general: updateData(general, "containerBox", value, "bg") })} />

          <MultiShadowControl label={__("Shadow", "register-form")} value={general.containerBox.shadow} onChange={value => setAttributes({ general: updateData(general, "containerBox", value, "shadow") })} />
        </Fragment>
      }

      {
        tab === "formwrapper" && <Fragment>
          <div className="rgfr-panelDevice mt15">
            <Device className='rgfr-device' value={device} onChange={value => setDevice(value)} />
            <Flex
              align="center"
              justify="space-between"
            >
              <Label className='mb5'>{__("Width", "register-form")}</Label>
              <UnitControl
                className="rgfr-unitControl"
                onChange={(value) => setAttributes({ general: updateData(general, "formWrapper", value, "width", device) })}
                isUnitSelectTabbable
                value={general.formWrapper.width[device]} />
            </Flex>
          </div>

          <div className="rgfr-panelDevice">
            <Device className='rgfr-device' value={device} onChange={value => setDevice(value)} />
            <BoxControl label={__("Margin", "register-form")} values={general.formWrapper.margin[device]} onChange={(value) => setAttributes({ general: updateData(general, "formWrapper", value, "margin", device) })} />
          </div>

          <div className="rgfr-panelDevice">
            <Device className='rgfr-device' value={device} onChange={value => setDevice(value)} />
            <BoxControl label={__("Padding", "register-form")} values={general.formWrapper.padding[device]} onChange={value => setAttributes({ general: updateData(general, "formWrapper", value, "padding", device) })} />
          </div>

          <BorderControl label={__("Border", "register-form")} value={general.formWrapper.border} onChange={value => setAttributes({ general: updateData(general, "formWrapper", value, "border") })} />
          <Background label={__("Background", "register-form")} value={general.formWrapper.bg} onChange={(value) => setAttributes({ general: updateData(general, "formWrapper", value, "bg") })} />
          <MultiShadowControl label={__("Shadow", "register-form")} value={general.formWrapper.shadow} onChange={value => setAttributes({ general: updateData(general, "formWrapper", value, "shadow") })} />
        </Fragment>
      }
      {
        tab === "form" && <Fragment>
          <div className="rgfr-panelDevice mt15">
            <Device className='rgfr-device' value={device} onChange={value => setDevice(value)} />
            <Flex
              align="center"
              justify="space-between"
            >
              <Label className='mb5'>{__("Width", "register-form")}</Label>
              <UnitControl
                className="rgfr-unitControl"
                onChange={(value) => setAttributes({ general: updateData(general, "form", value, "width", device) })}
                isUnitSelectTabbable
                value={general.form.width[device]} />
            </Flex>
          </div>
          <div className="rgfr-panelDevice">
            <Device className='rgfr-device' value={device} onChange={value => setDevice(value)} />
            <BoxControl label={__("Margin", "register-form")} values={general.form.margin[device]} onChange={value => setAttributes({ general: updateData(general, "form", value, "margin", device) })} />
          </div>

          <div className="rgfr-panelDevice">
            <Device className='rgfr-device' value={device} onChange={value => setDevice(value)} />
            <BoxControl label={__("Padding", "register-form")} values={general.form.padding[device]} onChange={value => setAttributes({ general: updateData(general, "form", value, "padding", device) })} />
          </div>

          <BorderControl label={__("Border", "register-form")} value={general.form.border} onChange={value => setAttributes({ general: updateData(general, "form", value, "border") })} />

          <Background label={__("Background", "register-form")} value={general.form.bg} onChange={(value) => setAttributes({ general: updateData(general, "form", value, "bg") })} />

          <MultiShadowControl label={__("Shadow", "register-form")} value={general.form.shadow} onChange={value => setAttributes({ general: updateData(general, "form", value, "shadow") })} />
        </Fragment>
      }
    </PanelBody>
  );
};

export default GeneralStyles;