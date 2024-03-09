import React, { Fragment } from 'react';
import { usePassStrengthMeter } from '../hooks/usePassStrengthMeter';

const PasswordStrength = ({ type, value }) => {
  usePassStrengthMeter(value, 'passLength')
  return (
    <Fragment>
      {
        type==="password" && value && <div className="passLength">
          <div className="rgfr-strengthMeter"></div>
          <div className="rgfr-strengthMeter"></div>
          <div className="rgfr-strengthMeter"></div>
          <div className="rgfr-strengthMeter"></div>  
        </div>
      }
    </Fragment>
  );
};

export default PasswordStrength;