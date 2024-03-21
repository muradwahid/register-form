import { Flex, FlexItem, PanelBody, SelectControl, TextControl } from '@wordpress/components';
import React,{useState,Fragment} from 'react';
import { Tab } from '../../../Panel/Tab/Tab';
import { __ } from '@wordpress/i18n';
import { Label } from '../../../../../../Components';
import { updateData } from '../../../../utils/functions';
import { TinyEditor } from '../../../Panel/TinyEditor/TinyEditor';

const EmailOptionSettings = ({ attributes, setAttributes }) => {
  const { emailOptions } = attributes;
  const [emailTab, setTab] = useState("user");
  return (
    <PanelBody
      title={__("Register Email Options", "b-blocks")}
      initialOpen={false}
    >
      <Tab
        options={["user", "admin"]}
        value={emailTab}
        onChange={(value) => setTab(value)}
      />
      <Label>{__("Email Template Type", "b-blocks")}</Label>
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
      {emailOptions[emailTab].type === "custom" && (
        <Fragment>
          <Label>{__("Email Subject", "b-blocks")}</Label>
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
          <Label>{__("Email Message", "b-blocks")}</Label>
          <TinyEditor
            value={emailOptions[emailTab].mail.message}
            default={emailOptions[emailTab].mail.message}
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
              <Label>{__("Email Content Type", "b-blocks")}</Label>
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
  );
};

export default EmailOptionSettings;