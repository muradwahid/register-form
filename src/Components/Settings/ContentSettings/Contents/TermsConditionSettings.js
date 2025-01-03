import { PanelBody, TextControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import React, { Fragment } from 'react';
import { Label } from '../../../../../../Components';
import { updateData, webUrl } from '../../../../utils/functions';

const TermsConditionSettings = ({ attributes, setAttributes }) => {
  const { termsConditions } = attributes;
  return (
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
            value={termsConditions.url}
            placeholder={webUrl}
            onChange={(val) =>
              setAttributes({
                termsConditions: updateData(termsConditions, "url", val),
              })
            }
          />
        </Fragment>
      )}
    </PanelBody>
  );
};

export default TermsConditionSettings;