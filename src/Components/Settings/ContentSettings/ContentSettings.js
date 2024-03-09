import {
  Flex,
  FlexItem,
  PanelBody,
  SelectControl,
  TextControl,
  TextareaControl,
  ToggleControl
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { Fragment, useState } from "react";
import { Label } from "../../../../../Components";
import { updateData, webUrl } from "../../../utils/functions";
import { bottomIcon, leftIcon, rightIcon, topIcon } from "../../../utils/icons";
import Device from "../../Panel/Device/Device";
import MediaArea from "../../Panel/MediaArea/MediaArea";
import { PanelAlign } from "../../Panel/PanelAlign/PanelAlign";
import PanelSelectControl from "../../Panel/PanelSelectControl/PanelSelectControl";
import { Tab } from "../../Panel/Tab/Tab";
import { TinyEditor } from "../../Panel/TinyEditor/TinyEditor";
import ButtonContent from "./ButtonContent";
import FormFieldSettings from "./FormFieldSettings";
import SocialSignUp from "./SocialSignUp";
import ValidationSettings from "./ValidationSettings";
const ContentSettings = ({ attributes, setAttributes }) => {
  const { formHeader, formOptions, emailOptions, termsConditions } = attributes;
  const [emailTab, setTab] = useState("user");
  const [device, setDevice] = useState("desktop");
  return (
    <Fragment>
      <PanelBody title={__("Form Header", "register-form")} initialOpen={true}>
        <Flex align="center" gap={5} justify="start">
          <p>Form Header Image</p>
          <Device className="mb10" value={device} onChange={value => setDevice(value)} />
        </Flex>
        <MediaArea
          style={{ marginBottom: "15px" }}
          label={__("Choose Image", "register-form")}
          value={formHeader.image[device]}
          width="100%"
          height="100%"
          onChange={(value) =>
            setAttributes({
              formHeader: { ...formHeader, image: { ...formHeader.image, [device]: { url: value.url, alt: value.alt, title: value.title } } }
            })
          }
          default=""
        />

        {/* <PanelRow>
          <Label className="mb10">{__("Image Size", "register-form")}</Label>
          <SelectControl
            value={formHeader.image.resolution}
            options={imageSizeOptions}
            onChange={(value) =>
              setAttributes({
                formHeader: updateData(
                  formHeader,
                  "image",
                  value,
                  "resolution"
                ),
              })
            }
          />
        </PanelRow> */}

        {/* {formHeader.image.resolution === "custom" && (
          <>
            <PanelRow>
              <Label className="mb10">{__("Width", "register-form")}</Label>
              <UnitControl
                value={formHeader.image.width}
                onChange={(value) =>
                  setAttributes({
                    formHeader: updateData(formHeader, "image", value, "width"),
                  })
                }
              />
            </PanelRow>

            <PanelRow>
              <Label className="mb10">{__("Height", "register-form")}</Label>
              <UnitControl
                value={formHeader.image.height}
                onChange={(value) =>
                  setAttributes({
                    formHeader: updateData(
                      formHeader,
                      "image",
                      value,
                      "height"
                    ),
                  })
                }
              />
            </PanelRow>
          </>
        )} */}
        <PanelAlign
          label={__("Image Position", "register-form")}
          icons={device === "desktop" ? [
            { label: "left", value: leftIcon },
            { label: "right", value: rightIcon },
          ] : device === "tablet" ? [
            { label: "left", value: leftIcon },
            { label: "top", value: topIcon },
            { label: "bottom", value: bottomIcon },
            { label: "right", value: rightIcon },
          ] : [{ label: "top", value: topIcon },
          { label: "bottom", value: bottomIcon }]}
          value={formHeader.image.position[device]}
          onChange={(value) =>
            setAttributes({
              formHeader: updateData(formHeader, "image", value, "position", device),
            })
          }
          labelPosition={device === "tablet" ? "top" : "left"}
        />


        <hr />

        <p>Form Header Logo</p>
        <MediaArea
          style={{ marginBottom: "15px" }}
          label={__("Choose Logo", "register-form")}
          value={formHeader.header.logo.url}
          width="100%"
          height="100%"
          onChange={(value) => setAttributes({ formHeader: { ...formHeader, header: { ...formHeader.header, logo: { ...formHeader.header.logo, url: { url: value.url, alt: value.alt, title: value.title } } } } })}
          default=""
        />

        {/* <PanelRow>
          <Label className="mb10">{__("Logo Size", "register-form")}</Label>
          <SelectControl
            value={formHeader.header.logo.resolution}
            options={imageSizeOptions}
            onChange={(value) =>
              setAttributes({
                formHeader: updateData(formHeader, "header", value, "logo","resolution"),
              })
            }
          />
        </PanelRow>

        {formHeader.header.logo.resolution === "custom" && (
          <>
            <PanelRow>
              <Label className="mb10">{__("Width", "register-form")}</Label>
              <UnitControl
                value={formHeader.header.logo.width}
                onChange={(value) =>
                  setAttributes({
                    formHeader: updateData(formHeader, "header", value,"logo","width"),
                  })
                }
              />
            </PanelRow>

            <PanelRow>
              <Label className="mb10">{__("Height", "register-form")}</Label>
              <UnitControl
                value={formHeader.header.logo.height}
                onChange={(value) =>
                  setAttributes({
                    formHeader: updateData(formHeader,"header", value, "logo","height"),
                  })
                }
              />
            </PanelRow>
          </>
        )} */}
        <PanelAlign
          label={__("Logo Position", "register-form")}
          labelPosition="top"
          icons={[
            { label: "left", value: leftIcon },
            { label: "top", value: topIcon },
            { label: "bottom", value: bottomIcon },
            { label: "right", value: rightIcon },
          ]}
          value={formHeader.header.logo.position}
          onChange={(value) =>
            setAttributes({
              formHeader: updateData(formHeader, "header", value, "logo", "position"),
            })
          }
        />
        <hr />
        <TextControl
          label={__("Form Title", "register-form")}
          value={formHeader.header.title.text}
          onChange={(value) =>
            setAttributes({
              formHeader: updateData(formHeader, "header", value, "title", "text"),
            })
          }
          placeholder="Create a New Account"
        />
        <TextareaControl
          label={__("Form Sub Title", "register-form")}
          value={formHeader.header.subTitle.text}
          onChange={(value) =>
            setAttributes({
              formHeader: updateData(formHeader, "header", value, "subTitle", "text"),
            })
          }
          placeholder="Register form sub title."
        />
      </PanelBody>

      <FormFieldSettings
        attributes={attributes}
        setAttributes={setAttributes}
      />
      <ButtonContent attributes={attributes} setAttributes={setAttributes} />
      <SocialSignUp attributes={attributes} setAttributes={setAttributes} />

      <PanelBody
        title={__("Register Form Options", "register-form")}
        initialOpen={false}
      >
        <Label className="mb5">{__("Register Actions", "register-form")}</Label>
        <PanelSelectControl
          value={formOptions.actions}
          options={["Redirect", "Notify User By Email"]}
          onChange={(value) =>
            setAttributes({
              formOptions: updateData(formOptions, "actions", value),
            })
          }
        />
        {formOptions.actions.includes("Redirect") && (
          <Fragment>
            {!formOptions.redirectPrevious && (
              <>
                <Label>{__("Custom Redirect URL", "register-form")}</Label>
                <TextControl
                  value={formOptions.customUrl || webUrl + "/wp-admin/"}
                  onChange={(value) =>
                    setAttributes({
                      formOptions: updateData(formOptions, "customUrl", value),
                    })
                  }
                />
              </>
            )}
            <ToggleControl
              label={__("Redirect to Previous Page", "register-form")}
              checked={formOptions.redirectPrevious}
              value={formOptions.redirectPrevious}
              onChange={(value) =>
                setAttributes({
                  formOptions: updateData(
                    formOptions,
                    "redirectPrevious",
                    value
                  ),
                })
              }
            />
          </Fragment>
        )}
      </PanelBody>

      <PanelBody
        title={__("Register Email Options", "register-form")}
        initialOpen={false}
      >
        <Tab
          options={["user", "admin"]}
          value={emailTab}
          onChange={(value) => setTab(value)}
        />
        <Label>{__("Email Template Type", "register-form")}</Label>
        <SelectControl
          options={[
            { label: "WordPress Default", value: "default" },
            { label: "Custom", value: "custom" },
          ]}
          value={emailOptions[emailTab].type}
          onChange={(value) =>
            setAttributes({
              emailOptions: updateData(emailOptions, emailTab, value, "type"),
            })
          }
        />
        {emailOptions.user.type === "custom" && (
          <Fragment>
            <Label>{__("Email Subject", "register-form")}</Label>
            <TextControl
              value={emailOptions[emailTab].mail.subject}
              onChange={(value) =>
                setAttributes({
                  emailOptions: updateData(
                    emailOptions,
                    emailTab,
                    value,
                    "mail",
                    "subject"
                  ),
                })
              }
            />
            <Label>{__("Email Message", "register-form")}</Label>
            <TinyEditor
              value={emailOptions[emailTab].mail.message}
              onChange={(value) =>
                setAttributes({
                  emailOptions: updateData(
                    emailOptions,
                    emailTab,
                    value,
                    "mail",
                    "message"
                  ),
                })
              }
            />

            <Flex>
              <FlexItem>
                <Label>{__("Email Content Type", "register-form")}</Label>
              </FlexItem>
              <FlexItem>
                <SelectControl
                  options={[
                    { label: "HTML", value: "html" },
                    { label: "Plain", value: "plain" },
                  ]}
                  value={emailOptions[emailTab].messageType}
                  onChange={(value) =>
                    setAttributes({
                      emailOptions: updateData(
                        emailOptions,
                        emailTab,
                        value,
                        "messageType"
                      ),
                    })
                  }
                />
              </FlexItem>
            </Flex>
          </Fragment>
        )}
      </PanelBody>

      <PanelBody
        title={__("Terms & Conditions", "register-form")}
        initialOpen={false}
      >
        <ToggleControl
          label={__("Enforce Terms & Conditions", "register-form")}
          checked={termsConditions.show}
          value={termsConditions.show}
          onChange={(value) =>
            setAttributes({
              termsConditions: updateData(termsConditions, "show", value),
            })
          }
        />
        {termsConditions.show && (
          <Fragment>
            <Label>{__("First label", "register-form")}</Label>
            <TextControl
              value={termsConditions.label.first}
              onChange={(val) =>
                setAttributes({
                  termsConditions: updateData(
                    termsConditions,
                    "label",
                    val,
                    "first"
                  ),
                })
              }
            />

            <div className="rgfr-signinLinkPanelWrapper">
              <Label>{__("Second label", "register-form")}</Label>
              <TextControl
                value={termsConditions.label.second}
                onChange={(val) =>
                  setAttributes({
                    termsConditions: updateData(
                      termsConditions,
                      "label",
                      val,
                      "second"
                    ),
                  })
                }
              />
              <small>Second Label is linkable</small>
            </div>

            <Label>{__("Terms & Conditions URL", "register-form")}</Label>
            <TextControl
              value={termsConditions.url || webUrl}
              onChange={(val) =>
                setAttributes({
                  termsConditions: updateData(termsConditions, "url", val),
                })
              }
            />
          </Fragment>
        )}
      </PanelBody>
      <ValidationSettings attributes={attributes} setAttributes={setAttributes} />
    </Fragment>
  );
};

export default ContentSettings;
