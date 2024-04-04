import { Flex, PanelBody, TextControl, TextareaControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import React, { useState } from 'react';
import { updateData } from '../../../../utils/functions';
import { bottomIcon, leftIcon, rightIcon, topIcon } from '../../../../utils/icons';
import Device from '../../../Panel/Device/Device';
import MediaArea from '../../../Panel/MediaArea/MediaArea';
import { PanelAlign } from '../../../Panel/PanelAlign/PanelAlign';

const FormHeader = ({ attributes, setAttributes }) => {
  const { formHeader } = attributes;
  const [device, setDevice] = useState("desktop");

  return (
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
  );
};

export default FormHeader;