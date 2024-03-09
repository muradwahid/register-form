import React, { useEffect, useState } from 'react';
import "./panelRepeater.scss"

/**
 * PanelRepeater component.
 *
 * @component
 * @param {Object} props
 * @param {Object} [props.children] - Optional
 * @param {String} [props.title] -Optional
 * @param {Number} [props.length] - Optional
 * @param {Function} [props.onChange=() => {}] 
 * @param {Boolean} [props.toggle] - Optional
 * @param {Boolean} [props.copy] - Optional
 * @param {Boolean} [props.delete] - Optional
 * @param {Number} [props.index] - Optional
 * @param {Function} [props.handleDelete] - Optional
 * @param {Function} [props.handleCopy] - Optional
 * @returns {JSX.Element}
 */



export const PanelRepeater = (props) => {
  const {
    children,
    title,
    length = 2,
    onChange = () => { },
    toggle = false,
    copy = true,
    delete: del = true,
    index = null,
    handleDelete,
    handleCopy,
  } = props
  const [open, setOpen] = useState(toggle);
  useEffect(() => {
    onChange(open);
  }, [open, toggle]);
  return (
    <>
      <div className="panel-repeater-wrapper">
        <div className="panel-repeater-header-wrapper">
          <p
            onClick={() => setOpen(!open)}
            className="panel-repeater-header-title"
          >
            {title}
          </p>
          <div className="panel-repeater-icon-group">
            {copy && (
              <div
                onClick={handleCopy ? () => handleCopy(index) : null}
                className="panel-repeater-icon"
              >
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M296 48H176.5C154.4 48 136 65.4 136 87.5V96h-7.5C106.4 96 88 113.4 88 135.5v288c0 22.1 18.4 40.5 40.5 40.5h208c22.1 0 39.5-18.4 39.5-40.5V416h8.5c22.1 0 39.5-18.4 39.5-40.5V176L296 48zm0 44.6l83.4 83.4H296V92.6zm48 330.9c0 4.7-3.4 8.5-7.5 8.5h-208c-4.4 0-8.5-4.1-8.5-8.5v-288c0-4.1 3.8-7.5 8.5-7.5h7.5v255.5c0 22.1 10.4 32.5 32.5 32.5H344v7.5zm48-48c0 4.7-3.4 8.5-7.5 8.5h-208c-4.4 0-8.5-4.1-8.5-8.5v-288c0-4.1 3.8-7.5 8.5-7.5H264v128h128v167.5z"></path></svg>
              </div>
            )}
            {del && length > 1 && (
              <div
                onClick={handleDelete ? () => handleDelete(index) : null}
                className="panel-repeater-icon"
              >
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path></svg>
              </div>
            )}
          </div>
        </div>
        {open && (
          <div
            style={{
              padding: '10px',
              border: '1px solid #ccc',
              borderTop: 'none',
            }}
          >
            {children}
          </div>
        )}
      </div>
    </>
  );
};
