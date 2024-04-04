import {
  __experimentalBoxControl as BoxControl,
  PanelBody,
  ToggleControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { Fragment, useState } from "react";
import { Background, BorderControl, Typography } from "../../../../../../Components";
import { updateData } from "../../../../utils/functions";
import { PanelColorPicker } from "../../../Panel/PanelColorPicker/PanelColorPicker";
import { Tab } from "../../../Panel/Tab/Tab";

const MessageStyles = ({ attributes, setAttributes }) => {
  const { validation } = attributes;
  const [message, setMessage] = useState("success");
  return (
    <PanelBody title={__("Messages", "register-form")} initialOpen={false}>
      <Tab
        options={["Success", "Error"]}
        value={message}
        onChange={(val) => setMessage(val)}
      />
      {message === "success" && (
        <Fragment>
          <ToggleControl
            label={__("Show success message", "register-form")}
            checked={validation.success.styles.isShow}
            value={validation.success.styles.isShow}
            onChange={(val) =>
              setAttributes({
                validation: updateData(
                  validation,
                  "success",
                  val,
                  "styles",
                  "isShow"
                ),
              })
            }
          />
          {
            validation.success.styles.isShow && <Fragment>
              <BoxControl
                label={__("Padding", "register-form")}
                values={validation.success.styles.padding}
                onChange={(val) =>
                  setAttributes({
                    validation: updateData(
                      validation,
                      "success",
                      val,
                      "styles",
                      "padding"
                    ),
                  })
                }
              />
              <BoxControl
                label={__("Margin", "register-form")}
                values={validation.success.styles.margin}
                onChange={(val) =>
                  setAttributes({
                    validation: updateData(
                      validation,
                      "success",
                      val,
                      "styles",
                      "margin"
                    ),
                  })
                }
              />
              <PanelColorPicker label={__("Color", "register-form")} value={validation.success.styles.color.text} onChange={val => setAttributes({ validation: updateData(validation, "success", val, "styles", "color", "text") })} />

              <Background label={__("Background", "register-form")} isImage={false} value={validation.success.styles.color.bg} onChange={val => setAttributes({ validation: updateData(validation, "success", val, "styles", "color", "bg") })} />

              <Typography label={__("Typography", "register-form")} value={validation.success.styles.typo} onChange={val => setAttributes({ validation: updateData(validation, "success", val, "styles", "typo") })} />

              <BorderControl label={__("Border", "register-form")} value={validation.success.styles.border} onChange={val => setAttributes({ validation: updateData(validation, "success", val, "styles", "border") })} />
            </Fragment>
          }

        </Fragment>
      )}
      {
        message === "error" && <Fragment>
          <BoxControl
            label={__("Margin", "register-form")}
            values={validation.error.styles.margin}
            onChange={(val) =>
              setAttributes({
                validation: updateData(
                  validation,
                  "error",
                  val,
                  "styles",
                  "margin"
                ),
              })
            }
          />

          <PanelColorPicker label={__("Color", "register-form")} value={validation.error.styles.color} onChange={val => setAttributes({ validation: updateData(validation, "error", val, "styles", "color") })} />

          <Typography label={__("Typography", "register-form")} value={validation.error.styles.typo} onChange={val => setAttributes({ validation: updateData(validation, "error", val, "styles", "typo") })} />
        </Fragment>
      }
    </PanelBody>
  );
};

export default MessageStyles;
