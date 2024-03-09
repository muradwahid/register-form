const { Dashicon } = wp.components;
import React from 'react';
import { CircleHalfStroke } from '../../../utils/icons';
import "./tabpanel.scss";

/**
 * TabPanel component.
 *
 * @component
 * @param {Object} props
 * @param {String} [props.value] - Optional
 * @param {Function} [props.onChange=() => {}]
 * @returns {JSX.Element}
 */


export const TabPanel = (props) => {
  const { value, onChange = () => { } } = props;
  return (
    <>
      <div className="tab-panel-container">
        <div
          onClick={() => onChange('content')}
          className={`single-tab ${value === 'content'
            ? 'is-tab-active active-tab-color'
            : 'deActive-tab-color'
            }`}
        >
          <Dashicon icon="edit" />
          <span>Content</span>
        </div>
        <div
          onClick={() => onChange('style')}
          className={`single-tab ${value === 'style'
            ? 'is-tab-active active-tab-color'
            : 'deActive-tab-color'
            }`}
        >
          <CircleHalfStroke
            style={{ paddingBottom: '4px', fontSize: '20px' }}
          />
          <span>Style</span>
        </div>
      </div>
    </>
  );
};
