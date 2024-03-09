/* eslint-disable no-unused-vars */
import { Button, ColorPalette, ColorPicker, Dropdown } from '@wordpress/components';
import React from 'react';

/**
 * PanelColorPicker component.
 *
 * @component
 * @param {Object} props
 * @param {String} [props.label] - Optional
 * @param {String} [props.value] -Optional
 * @param {Array} [props.colors] - Optional
 * @param {Function} [props.onChange=() => {}] 
 * @returns {JSX.Element}
 */

export const PanelColorPicker = (props) => {
  const { value, onChange = () => { }, label, colors } = props;
  const id = Math.floor(Math.random() * 99999999);

  return (
    <>
      <style>
        {`
        div.panelColorPickerSelectColor-${id}{
          ${value ? `background-color: ${value}` : `
          background-image: linear-gradient(
            45deg,
            #d5d8dc 25%,
            transparent 0,
            transparent 75%,
            #d5d8dc 0,
            #d5d8dc
          ),
          linear-gradient(
            45deg,
            #d5d8dc 25%,
            transparent 0,
            transparent 75%,
            #d5d8dc 0,
            #d5d8dc
          );
          background-size: 16px 16px;
          background-position: 0 0, calc(16px / 2) calc(16px / 2);
          `}
        }
        `}
      </style>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: "10px"
        }}
      >
        <div>{label}</div>
        <Dropdown
          className="my-container-class-name"
          contentClassName="my-popover-content-classname"
          renderToggle={({ isOpen, onToggle, onClose }) => (
            <div
              style={{display:"flex",alignItems:"center",gap:"15px"}}
            >
              <div className={`panelColorPickerSelectColor-${id}`}
                style={{
                  height: '30px',
                  width: '30px',
                  borderRadius: '50%',
                  border: '1px solid #ccc',
                }}>

              </div>
              <Button onClick={onToggle}
                aria-expanded={isOpen} icon="edit" />
            </div>
          )}
          renderContent={({ isOpen, onToggle, onClose }) => (
            <div>
              <ColorPalette
                colors={colors || [
                  { name: 'red', color: '#f00' },
                  { name: 'white', color: '#fff' },
                  { name: 'blue', color: '#00f' },
                ]}
                enableAlpha
                value={value}
                onChange={(value) => onChange(value)}
              />
              <div onClick={onClose}></div>
            </div>
          )}
        />
      </div>
    </>
  );
};
