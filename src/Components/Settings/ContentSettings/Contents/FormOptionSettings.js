import { Flex, PanelBody, SelectControl, TextControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import React,{Fragment,useState,useEffect} from 'react';
import { Label } from '../../../../../../Components';
import PanelSelectControl from '../../../Panel/PanelSelectControl/PanelSelectControl';
import { updateData } from '../../../../utils/functions';

const FormOptionSettings = ({attributes, setAttributes}) => {
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
      title={__("Register Form Options", "b-blocks")}
      initialOpen={false}
    >
      <ToggleControl label={__("Redirect", "b-blocks")} checked={formOptions.isRedirect} value={formOptions.isRedirect} onChange={val => setAttributes({ formOptions: updateData(formOptions, "isRedirect", val) })} />
      
      {formOptions.isRedirect && (
        <Fragment>
          {!formOptions.redirectPrevious && (
            <>
              <Label>{__("Custom Redirect URL", "b-blocks")}</Label>
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
            label={__("Redirect to Previous Page", "b-blocks")}
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
        <Label className="mb10">{__("New User Role", "b-blocks")}</Label>
        <SelectControl value={formOptions.userRole} onChange={value => setAttributes({ formOptions: updateData(formOptions, "userRole", value) })} options={roles} />
      </Flex>
    </PanelBody>
  );
};

export default FormOptionSettings;