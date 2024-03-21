import { __experimentalBoxControl as BoxControl, Flex, PanelBody, __experimentalUnitControl as UnitControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import React, { Fragment, useState } from 'react';
import { Background, BorderControl, Label, MultiShadowControl, Typography } from '../../../../../../Components';
import { updateData } from '../../../../utils/functions';
import Device from '../../../Panel/Device/Device';
import { PanelColorPicker } from '../../../Panel/PanelColorPicker/PanelColorPicker';
import { Tab } from '../../../Panel/Tab/Tab';

const HeaderStyles = ({ attributes, setAttributes }) => {
  const { formHeader } = attributes;
  const [headerTab, setHeaderTab] = useState("headercontent");
  const [subTab, setSubTab] = useState("title");
  const [device, setDevice] = useState("desktop")


  return (
    <Fragment>
      <PanelBody title={__("Form Header", "b-blocks")} initialOpen={false}>
        <Tab options={["Header Content", "Logo", "Image"]} paddingX={6} value={headerTab} onChange={value => setHeaderTab(value)} />

        {
          headerTab === "headercontent" && <Fragment>
            <div className="rgfr-panelDevice mt15">
              <Device className='rgfr-device' value={device} onChange={value => setDevice(value)} />
              <Flex
                align="center"
                justify="space-between"
              >
                <Label className='mb5'>{__("Width", "b-blocks")}</Label>
                <UnitControl className="rgfr-unitControl" units={[{ label: "%", value: "%", default: "100" }, { label: "px", value: "px" }, { label: "rem", value: "rem" }]} value={formHeader.header.width[device]} min={0} max={formHeader.header.width[device] && formHeader.header.width[device]?.includes("%") ? 100 : 1200} onChange={value => setAttributes({ formHeader: updateData(formHeader, "header", value, "width", device) })} />
              </Flex>
            </div>

            <div className="rgfr-panelDevice">
              <Device className='rgfr-device' value={device} onChange={value => setDevice(value)} />
              <Flex
                align="center"
                justify="space-between"
              >
                <Label className='mb5'>{__("Height", "b-blocks")}</Label>
                <UnitControl className="rgfr-unitControl" units={[{ label: "px", value: "px" }, { label: "%", value: "%" }, { label: "rem", value: "rem" }]} value={formHeader.header.height[device]} onChange={value => setAttributes({ formHeader: updateData(formHeader, "header", value, "height", device) })} />
              </Flex>
            </div>

            <div className="rgfr-panelDevice">
              <Device className='rgfr-device' value={device} onChange={value => setDevice(value)} />
              <BoxControl className="boxControlWp" label={__("Margin", "b-blocks")} values={formHeader.header.margin[device]} onChange={value => setAttributes({ formHeader: updateData(formHeader, "header", value, "margin", device) })} />
            </div>

            <div className="rgfr-panelDevice">
              <Device className='rgfr-device' value={device} onChange={value => setDevice(value)} />
              <BoxControl className="boxControlWp" label={__("Padding", "b-blocks")} values={formHeader.header.padding[device]} onChange={value => setAttributes({ formHeader: updateData(formHeader, "header", value, "padding", device) })} />
            </div>

            <BorderControl label={__("Border", "b-blocks")} value={formHeader.header.border} onChange={value => setAttributes({ formHeader: updateData(formHeader, "header", value, "border") })} />

            <Background label={__("Background", "b-blocks")} value={formHeader.header.bg} onChange={value => setAttributes({ formHeader: updateData(formHeader, "header", value, "bg") })} />
          </Fragment>
        }

        {
          headerTab === "logo" && <Fragment>
            <div className="rgfr-panelDevice mt15">
              <Device className='rgfr-device' value={device} onChange={value => setDevice(value)} />
              <Flex
                align="center"
                justify="space-between"
              >
                <Label className='mb5'>{__("Width", "b-blocks")}</Label>
                <UnitControl className="rgfr-unitControl" units={[{ label: "%", value: "%", default: "100" }, { label: "px", value: "px" }, { label: "rem", value: "rem" }]} value={formHeader.header.logo.width[device]} min={0} max={formHeader.header.logo.width[device].includes("%") ? 100 : 1200} onChange={value => setAttributes({ formHeader: updateData(formHeader, "header", value, "logo", "width", device) })} />
              </Flex>
            </div>

            <div className="rgfr-panelDevice">
              <Device className='rgfr-device' value={device} onChange={value => setDevice(value)} />
              <Flex
                align="center"
                justify="space-between"
              >
                <Label className='mb5'>{__("Height", "b-blocks")}</Label>
                <UnitControl className="rgfr-unitControl" units={[{ label: "px", value: "px" }, { label: "%", value: "%" }, { label: "rem", value: "rem" }]} value={formHeader.header.logo.height[device]} onChange={value => setAttributes({ formHeader: updateData(formHeader, "header", value, "logo", "height", device) })} />
              </Flex>
            </div>

            <div className="rgfr-panelDevice">
              <Device className='rgfr-device' value={device} onChange={value => setDevice(value)} />
              <BoxControl className="boxControlWp" label={__("Margin", "b-blocks")} values={formHeader.header.logo.margin[device]} onChange={value => setAttributes({ formHeader: updateData(formHeader, "header", value, "logo", "margin", device) })} />
            </div>

            <div className="rgfr-panelDevice">
              <Device className='rgfr-device' value={device} onChange={value => setDevice(value)} />
              <BoxControl className="boxControlWp" label={__("Padding", "b-blocks")} values={formHeader.header.logo.padding[device]} onChange={value => setAttributes({ formHeader: updateData(formHeader, "header", value, "logo", "padding", device) })} />
            </div>

            <BorderControl label={__("Border", "b-blocks")} value={formHeader.header.logo.border} onChange={value => setAttributes({ formHeader: updateData(formHeader, "header", value, "logo", "border") })} />
            <MultiShadowControl label={__("Shadow", "b-blocks")} value={formHeader.header.logo.shadow} onChange={value => setAttributes({ formHeader: updateData(formHeader, "header", value, "logo", "shadow") })} />
          </Fragment>
        }

        {
          headerTab === "image" && <Fragment>
            <div className="rgfr-panelDevice mt15">
              <Device className='rgfr-device' value={device} onChange={value => setDevice(value)} />
              <Flex
                align="center"
                justify="space-between"
              >
                <Label className='mb5'>{__("Width", "b-blocks")}</Label>
                <UnitControl className="rgfr-unitControl" units={[{ label: "em", value: "em", default: "100" }, { label: "px", value: "px" }, { label: "rem", value: "rem" }]} value={formHeader.image.width[device]} min={0} max={formHeader.image.width[device].includes("%") ? 100 : 1200} onChange={value => setAttributes({ formHeader: updateData(formHeader, "image", value, "width", device) })} />
              </Flex>
            </div>

            <div className="rgfr-panelDevice">
              <Device className='rgfr-device' value={device} onChange={value => setDevice(value)} />
              <Flex
                align="center"
                justify="space-between"
              >
                <Label className='mb5'>{__("Height", "b-blocks")}</Label>
                <UnitControl className="rgfr-unitControl" units={[{ label: "px", value: "px" }, { label: "%", value: "%" }, { label: "rem", value: "rem" }]} value={formHeader.image.height[device]} onChange={value => setAttributes({ formHeader: updateData(formHeader, "image", value, "height", device) })} />
              </Flex>
            </div>

            <div className="rgfr-panelDevice">
              <Device className='rgfr-device' value={device} onChange={value => setDevice(value)} />
              <BoxControl className="boxControlWp" label={__("Margin", "b-blocks")} values={formHeader.image.margin[device]} onChange={value => setAttributes({ formHeader: updateData(formHeader, "image", value, "margin", device) })} />
            </div>

            <div className="rgfr-panelDevice">
              <Device className='rgfr-device' value={device} onChange={value => setDevice(value)} />
              <BoxControl className="boxControlWp" label={__("Padding", "b-blocks")} values={formHeader.image.padding[device]} onChange={value => setAttributes({ formHeader: updateData(formHeader, "image", value, "padding", device) })} />
            </div>

            <BorderControl label={__("Border", "b-blocks")} value={formHeader.image.border} onChange={value => setAttributes({ formHeader: updateData(formHeader, "image", value, "border") })} />
          </Fragment>
        }
        <hr />
        <Tab options={["title", "subtitle"]} paddingX={6} value={subTab} onChange={value => setSubTab(value)} />
        {
          subTab === "title" && <Fragment>
            <div className="rgfr-panelDevice">
              <Device className='rgfr-device' value={device} onChange={value => setDevice(value)} />
              <BoxControl className="boxControlWp" label={__("Margin", "b-blocks")} values={formHeader.header.title.margin[device]} onChange={value => setAttributes({ formHeader: updateData(formHeader, "header", value, "title", "margin", device) })} />
            </div>

            <div className="rgfr-panelDevice">
              <Device className='rgfr-device' value={device} onChange={value => setDevice(value)} />

              <BoxControl className="boxControlWp" label={__("Padding", "b-blocks")} values={formHeader.header.title.padding[device]} onChange={value => setAttributes({ formHeader: updateData(formHeader, "header", value, "title", "padding", device) })} />
            </div>

            <PanelColorPicker label={__("Color", "b-blocks")} value={formHeader.header.title.color} onChange={(value) => setAttributes({ formHeader: updateData(formHeader, "header", value, "title", "color") })} />

            <Background label={__("Background", "b-blocks")} isImage={false} value={formHeader.header.title.bg} onChange={value => setAttributes({ formHeader: updateData(formHeader, "header", value, "title", "bg") })} />


            <BorderControl label={__("Border", "b-blocks")} value={formHeader.header.title.border} onChange={value => setAttributes({ formHeader: updateData(formHeader, "header", value, "title", "border") })} />

            <Typography label={__("Typography", "b-blocks")} value={formHeader.header.title.typography} onChange={value => setAttributes({ formHeader: updateData(formHeader, "header", value, "title", "typography") })} />
          </Fragment>
        }

        {
          subTab === "subtitle" && <Fragment>
            <div className="rgfr-panelDevice">
              <Device className='rgfr-device' value={device} onChange={value => setDevice(value)} />
              <BoxControl className="boxControlWp" label={__("Margin", "b-blocks")} values={formHeader.header.subTitle.margin[device]} onChange={value => setAttributes({ formHeader: updateData(formHeader, "header", value, "subTitle", "margin", device) })} />
            </div>

            <div className="rgfr-panelDevice">
              <Device className='rgfr-device' value={device} onChange={value => setDevice(value)} />

              <BoxControl className="boxControlWp" label={__("Padding", "b-blocks")} values={formHeader.header.subTitle.padding[device]} onChange={value => setAttributes({ formHeader: updateData(formHeader, "header", value, "subTitle", "padding", device) })} />
            </div>

            <PanelColorPicker label={__("Color", "b-blocks")} value={formHeader.header.subTitle.color} onChange={(value) => setAttributes({ formHeader: updateData(formHeader, "header", value, "subTitle", "color") })} />

            <Background label={__("Background", "b-blocks")} isImage={false} value={formHeader.header.subTitle.bg} onChange={value => setAttributes({ formHeader: updateData(formHeader, "header", value, "subTitle", "bg") })} />


            <BorderControl label={__("Border", "b-blocks")} value={formHeader.header.subTitle.border} onChange={value => setAttributes({ formHeader: updateData(formHeader, "header", value, "subTitle", "border") })} />

            <Typography label={__("Typography", "b-blocks")} value={formHeader.header.subTitle.typography} onChange={value => setAttributes({ formHeader: updateData(formHeader, "header", value, "subTitle", "typography") })} />
          </Fragment>
        }
      </PanelBody>
    </Fragment>
  );
};

export default HeaderStyles;