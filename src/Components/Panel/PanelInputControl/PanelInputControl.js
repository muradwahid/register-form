import { Flex, TextControl } from '@wordpress/components';
import React from 'react';
import { Label } from '../../../../../Components';

const PanelInputControl = ({ label, value, onChange = () => { }, style, className }) => {
  return (
    <div>
      <Flex
        align="center"
        justify="space-between"
      >
        <Label className="mb10">{label}</Label>
        <TextControl style={style} className={className} value={value} onChange={(value) => onChange(value)} />
      </Flex>
    </div>
  );
};

export default PanelInputControl;