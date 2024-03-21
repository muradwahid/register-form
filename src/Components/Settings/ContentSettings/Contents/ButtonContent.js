import { Flex, PanelBody, TextControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { Fragment } from "react";
import PanelInputControl from "../../../Panel/PanelInputControl/PanelInputControl";
import { updateData, webUrl } from "../../../../utils/functions";

const ButtonContent = ({ attributes, setAttributes }) => {
  const { button } = attributes;
  return (
    <Fragment>
      <PanelBody initialOpen={false} title={__("Button", "b-blocks")}>
        <div className="mt0 mb10">
          <strong>Register</strong>
        </div>
        <PanelInputControl
          className="width120"
          label={__("Register Button Text", "b-blocks")}
          value={button.signup.text}
          onChange={(value) =>
            setAttributes({
              button: updateData(button, "signup", value, "text"),
            })
          }
        />
        <hr />
        <div className="mt0 mb10">
          <strong>SignIn</strong>
        </div>
        <Flex
          align="normal"
          gap={3}
        >
          <TextControl value={button.signin.text.first}
            onChange={(value) =>
              setAttributes({
                button: updateData(button, "signin", value, "text", "first"),
              })
            } />
          <div className="rgfr-signinLinkPanelWrapper">
            <TextControl style={{ marginBottom: "0px !important" }} value={button.signin.text.second}
              onChange={(value) =>
                setAttributes({
                  button: updateData(button, "signin", value, "text", "second"),
                })
              } />
            <small>{__("Second option is linkable","b-blocks")}</small>
          </div>
        </Flex>
        <TextControl label={__("Sign In URL")} value={button.signin.text.link} onChange={value => setAttributes({ button: updateData(button, "signin", value, "text", "link") })} />
      </PanelBody>
    </Fragment>
  );
};

export default ButtonContent;
