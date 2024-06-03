import React from 'react'

const BackgroundImage = ({
  imageUrl,
  alt = "Descriptive alt text",
  children,
  className,
}) => (
  <div className={className} >
    <img src={imageUrl} alt={alt} className="absolute bottom-0 right-0" />{" "}
    {/* For accessibility */}
    {children}
  </div>
);

export default BackgroundImage;