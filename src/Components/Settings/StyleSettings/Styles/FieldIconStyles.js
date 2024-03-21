import {
  Flex,
  PanelBody,
  __experimentalUnitControl as UnitControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { useState } from "react";
import { Label } from "../../../../../../Components";
import { updateData } from "../../../../utils/functions";
import Device from "../../../Panel/Device/Device";
import { PanelColorPicker } from "../../../Panel/PanelColorPicker/PanelColorPicker";

const FieldIconStyles = ({ attributes, setAttributes }) => {
  const { fieldIcons } = attributes;
  const [device, setDevice] = useState("desktop");
  return (
    <PanelBody title={__("Form Icons", "b-blocks")} initialOpen={false}>
      <div className="mt10">
        <strong>Form Fields Icon</strong>
      </div>
      <div className="rgfr-panelDevice mt15">
        <Device
          className="rgfr-device"
          style={{ top: "4px" }}
          value={device}
          onChange={(value) => setDevice(value)}
        />
        <Flex align="center" justify="space-between">
          <Flex>
            <Label className="mb5">{__("Icon Size", "b-blocks")}</Label>
          </Flex>
          <UnitControl
            className="rgfr-unitControl"
            value={fieldIcons.icon.iconSize[device]}
            onChange={(value) =>
              setAttributes({
                fieldIcons: updateData(
                  fieldIcons,
                  "icon",
                  value,
                  "iconSize",
                  device
                ),
              })
            }
          />
        </Flex>
      </div>

      <PanelColorPicker
        label={__("Open Eye Color", "b-blocks")}
        value={fieldIcons.icon.color}
        onChange={(value) =>
          setAttributes({
            fieldIcons: updateData(
              fieldIcons,
              "icon",
              value,
              "color"
            ),
          })
        }
      />

      <div className="rgfr-panelDevice mt15">
        <Device
          style={{ position: "absolute", left: "110px", top: "4px", zIndex: 333 }}
          value={device}
          onChange={(value) => setDevice(value)}
          position="vertical"
        />
        <Flex align="center" justify="space-between">
          <Label className="mb5">
            {__("Vertical Alignment", "b-blocks")}
          </Label>
          <UnitControl
            className="rgfr-unitControl"
            value={fieldIcons.icon.vertical[device]}
            min={-100}
            max={100}
            onChange={(value) =>
              setAttributes({
                fieldIcons: updateData(
                  fieldIcons,
                  "icon",
                  value,
                  "vertical",
                  device
                ),
              })
            }
          />
        </Flex>
      </div>

      <div className="rgfr-panelDevice mt15">
        <Device
          style={{ position: "absolute", left: "125px", top: "4px", zIndex: 7 }}
          value={device}
          onChange={(value) => setDevice(value)}
          position="vertical"
        />
        <Flex align="center" justify="space-between">
          <Label className="mb5">
            {__("Horizontal Alignment", "b-blocks")}
          </Label>
          <UnitControl
            className="rgfr-unitControl"
            value={fieldIcons.icon.horizontal[device]}
            onChange={(value) =>
              setAttributes({
                fieldIcons: updateData(
                  fieldIcons,
                  "icon",
                  value,
                  "horizontal",
                  device
                ),
              })
            }
          />
        </Flex>
      </div>


      <hr />

      <div className="mt10">
        <strong>Password Visibility</strong>
      </div>
      <div className="rgfr-panelDevice mt15">
        <Device
          className="rgfr-device"
          style={{top:"4px"}}
          value={device}
          onChange={(value) => setDevice(value)}
        />
        <Flex align="center" justify="space-between">
          <Flex>
            <Label className="mb5">{__("Icon Size", "b-blocks")}</Label>
          </Flex>
          <UnitControl
            className="rgfr-unitControl"
            value={fieldIcons.passVisibility.iconSize[device]}
            onChange={(value) =>
              setAttributes({
                fieldIcons: updateData(
                  fieldIcons,
                  "passVisibility",
                  value,
                  "iconSize",
                  device
                ),
              })
            }
          />
        </Flex>
      </div>
      <PanelColorPicker
        label={__("Open Eye Color", "b-blocks")}
        value={fieldIcons.passVisibility.openColor}
        onChange={(value) =>
          setAttributes({
            fieldIcons: updateData(
              fieldIcons,
              "passVisibility",
              value,
              "openColor"
            ),
          })
        }
      />

      <PanelColorPicker
        label={__("Close Eye Color", "b-blocks")}
        value={fieldIcons.passVisibility.closeColor}
        onChange={(value) =>
          setAttributes({
            fieldIcons: updateData(
              fieldIcons,
              "passVisibility",
              value,
              "closeColor"
            ),
          })
        }
      />

      <div className="rgfr-panelDevice mt15">
        <Device
          style={{ position: "absolute", left: "110px",top:"4px", zIndex: 333 }}
          value={device}
          onChange={(value) => setDevice(value)}
          position="vertical"
        />
        <Flex align="center" justify="space-between">
          <Label className="mb5">
            {__("Vertical Alignment", "b-blocks")}
          </Label>
          <UnitControl
            className="rgfr-unitControl"
            value={fieldIcons.passVisibility.vertical[device]}
            min={-100}
            max={100}
            onChange={(value) =>
              setAttributes({
                fieldIcons: updateData(
                  fieldIcons,
                  "passVisibility",
                  value,
                  "vertical",
                  device
                ),
              })
            }
          />
        </Flex>
      </div>

      <div className="rgfr-panelDevice mt15">
        <Device
          style={{ position: "absolute", left: "125px",top:"4px", zIndex: 7 }}
          value={device}
          onChange={(value) => setDevice(value)}
          position="vertical"
        />
        <Flex align="center" justify="space-between">
          <Label className="mb5">
            {__("Horizontal Alignment", "b-blocks")}
          </Label>
          <UnitControl
            className="rgfr-unitControl"
            value={fieldIcons.passVisibility.horizontal[device]}
            onChange={(value) =>
              setAttributes({
                fieldIcons: updateData(
                  fieldIcons,
                  "passVisibility",
                  value,
                  "horizontal",
                  device
                ),
              })
            }
          />
        </Flex>
      </div>
    </PanelBody>
  );
};

export default FieldIconStyles;
