import {
  __experimentalBoxControl as BoxControl,
  Flex,
  PanelBody,
  SelectControl,
  __experimentalUnitControl as UnitControl
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { Fragment, useState } from "react";
import { Background, BorderControl, Label, Typography } from "../../../../../../Components";
import { updateData } from "../../../../utils/functions";
import { alignItems, justifyContent } from "../../../../utils/options";
import Device from "../../../Panel/Device/Device";
import { PanelColorPicker } from "../../../Panel/PanelColorPicker/PanelColorPicker";
import { Tab } from "../../../Panel/Tab/Tab";

const LoginLink = ({ attributes, setAttributes }) => {
  const { button } = attributes;
  const [device, setDevice] = useState("desktop");
  const [hover, setHover] = useState("normal");

  return (
    <PanelBody title={__("Login Link", "register-form")} initialOpen={false}>
      <div className="rgfr-panelDevice">
        <Device
          className="rgfr-device"
          value={device}
          onChange={(value) => setDevice(value)}
        />
        <BoxControl
          label={__("Margin", "register-form")}
          values={button.signin.margin[device]}
          onChange={(value) =>
            setAttributes({
              button: updateData(button, "signin", value, "margin", device),
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
          values={button.signin.padding[device]}
          onChange={(value) =>
            setAttributes({
              button: updateData(button, "signin", value, "padding", device),
            })
          }
        />
      </div>

      <Typography label={__("Typography", "register-form")} value={button.signin.typography} onChange={value => setAttributes({ button: updateData(button, "signin", value, "typography") })} />

      <div className="rgfr-panelDevice mt15">
        <Device
          className="rgfr-device"
          style={{ top: "8px" }}
          value={device}
          onChange={(value) => setDevice(value)}
        />
        <Flex align="center" justify="space-between">
          <Label className="mb5">{__("Display as", "register-form")}</Label>
          <SelectControl
            labelPosition="left"
            options={[
              { label: "Inline", value: "row" },
              { label: "Block", value: "column" },
            ]}
            value={button.signin.displayAs[device]}
            onChange={(value) =>
              setAttributes({
                button: updateData(
                  button,
                  "signin",
                  value,
                  "displayAs",
                  device
                ),
              })
            }
          />
        </Flex>
      </div>

      {button.signin.displayAs[device] === "row" && (
        <div className="rgfr-panelDevice mt15">
          <Device
            position="vertical"
            style={{
              position: "absolute",
              top: "5px",
              left: "88px",
              zIndex: 999,
            }}
            value={device}
            onChange={(value) => setDevice(value)}
          />
          <Flex align="center" justify="space-between">
            <Label className="mb10">
              {__("Justify Content", "register-form")}
            </Label>
            <SelectControl
              labelPosition="left"
              options={justifyContent}
              value={button.signin.justifyContent[device]}
              onChange={(value) =>
                setAttributes({
                  button: updateData(
                    button,
                    "signin",
                    value,
                    "justifyContent",
                    device
                  ),
                })
              }
            />
          </Flex>
        </div>
      )}

      {button.signin.displayAs[device] === "column" && <Fragment>

        <div className="rgfr-panelDevice mt15">
          <Device
            className="rgfr-device"
            style={{ top: "5px", left: "70px" }}
            value={device}
            onChange={(value) => setDevice(value)}
          />

          <Flex align="center" justify="space-between">
            <Label className="mb10">
              {__("Align Items", "register-form")}
            </Label>
            <SelectControl
              options={alignItems}
              value={button.signin.alignItems[device]}
              onChange={(value) =>
                setAttributes({
                  button: updateData(
                    button,
                    "signin",
                    value,
                    "alignItems",
                    device
                  ),
                })
              }
            />
          </Flex>
        </div>
      </Fragment>
      }

      <Flex className="rgfr-panelDevice" align="center" justify="space-between">
        <Label className="mb10">{__("Link Container Width", "register-form")}</Label>
        <UnitControl
          className="rgfr-unitControl"
          value={button.signin.width.container[device]}
          min={0}
          onChange={(value) =>
            setAttributes({
              button: updateData(button, "signin", value, "width","container",device),
            })
          }
        />
      </Flex>

      <Flex className="rgfr-panelDevice" align="center" justify="space-between">
        <Label className="mb10">{__("Link Width", "register-form")}</Label>
        <UnitControl
          className="rgfr-unitControl"
          value={button.signin.width.width[device]}
          min={0}
          onChange={(value) =>
            setAttributes({
              button: updateData(button, "signin", value, "width","width", device),
            })
          }
        />
      </Flex>

      <Flex className="rgfr-panelDevice" align="center" justify="space-between">
        <Label className="mb10">{__("Link Height", "register-form")} </Label>
        <UnitControl
          className="rgfr-unitControl"
          min={0}
          value={button.signin.height[device]}
          onChange={(value) =>
            setAttributes({
              button: updateData(button, "signin", value, "height", device),
            })
          }
        />
      </Flex>

      <Tab
        options={["normal", "hover"]}
        value={hover}
        onChange={(value) => setHover(value)}
      />

      <PanelColorPicker
        label={__("Color", "register-form")}
        value={button.signin.color[hover].color}
        onChange={(value) =>
          setAttributes({
            button: updateData(
              button,
              "signin",
              value,
              "color",
              hover,
              "color"
            ),
          })
        }
      />
      <Background
        label={__("Background", "register-form")}
        value={button.signin.color[hover].bg}
        onChange={(value) =>
          setAttributes({
            button: updateData(button, "signin", value, "color", hover, "bg"),
          })
        }
      />
      <BorderControl
        label={__("Border", "register-form")}
        value={button.signin.border[hover]}
        onChange={(value) =>
          setAttributes({
            button: updateData(button, "signin", value, "border", hover),
          })
        }
      />
    </PanelBody>
  );
};

export default LoginLink;
