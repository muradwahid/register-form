import React from "react";
import useDeviceWidth from "../hooks/useDeviceWidth";
const FormImg = ({ attributes }) => {
  const { formHeader } = attributes;
  const { device } = useDeviceWidth()
  const img = formHeader.image[device];
  const url = img?.url;
  const alt = img?.alt || img?.title;
  return url ? (
    <div className="rgfr-register-image-wrapper">
      <img src={url} alt={alt} />
    </div>
  ) : null;
}
export default FormImg