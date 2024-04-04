import { Flex, PanelBody, SelectControl, TextControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import React, { Fragment, useEffect, useState } from 'react';
import { Label } from '../../../../../../Components';
import { updateData } from '../../../../utils/functions';

const FormOptionSettings = ({ attributes, setAttributes }) => {
  const { formOptions } = attributes;
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    wp.ajax.post('get_admin_roles', { nonce: window.wpApiSettings?.nonce }).done((res) => {
      setRoles(res.map(item => ({ label: item, value: item })));
    }).fail(error => {
      console.error(error);
    });
  }, [])
  return (
    <PanelBody
      title={__("Register Form Options", "register-form")}
      initialOpen={false}
    >
      <ToggleControl label={__("Redirect", "register-form")} checked={formOptions.isRedirect} value={formOptions.isRedirect} onChange={val => setAttributes({ formOptions: updateData(formOptions, "isRedirect", val) })} />

      {formOptions.isRedirect && (
        <Fragment>
          {!formOptions.redirectPrevious && (
            <>
              <Label>{__("Custom Redirect URL", "register-form")}</Label>
              <TextControl
                value={formOptions.customUrl}
                placeholder={location}
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
      <hr />
      <Flex>
        <Label className="mb10">{__("New User Role", "register-form")}</Label>
        <SelectControl value={formOptions.userRole} onChange={value => setAttributes({ formOptions: updateData(formOptions, "userRole", value) })} options={roles} />
      </Flex>
    </PanelBody>
  );
};

export default FormOptionSettings;