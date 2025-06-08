import React from 'react';

/**
 * PiEraserDefaultDuoStroke icon from the duo-stroke style in editing category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiEraserDefaultDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'eraser-default icon',
  ...props 
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <path  fillRule="evenodd" d="M12.968 2.706a4.2 4.2 0 0 1 2.6 0c.542.176 1 .486 1.456.873.44.374.94.875 1.55 1.485l.362.361c.61.61 1.11 1.11 1.485 1.551.387.457.697.914.873 1.456a4.2 4.2 0 0 1 0 2.6c-.176.542-.486.999-.873 1.455-.374.44-.875.941-1.485 1.552l-4.897 4.897c-.61.61-1.111 1.11-1.552 1.485-.456.387-.913.697-1.455.873a4.2 4.2 0 0 1-2.6 0c-.542-.176-1-.486-1.456-.873-.44-.374-.94-.875-1.55-1.485l-.362-.361c-.61-.61-1.11-1.11-1.485-1.551-.387-.457-.697-.914-.873-1.456a4.2 4.2 0 0 1 0-2.6c.176-.542.486-.999.873-1.455.374-.44.875-.941 1.485-1.552L9.96 5.064c.61-.61 1.111-1.11 1.552-1.485.456-.387.913-.697 1.455-.873m1.982 1.902a2.2 2.2 0 0 0-1.364 0c-.19.062-.417.189-.78.496-.37.315-.813.757-1.46 1.404l-4.838 4.838c-.647.647-1.09 1.09-1.404 1.46-.307.363-.434.59-.496.78a2.2 2.2 0 0 0 0 1.364c.062.191.189.418.496.78.315.37.757.813 1.404 1.46l.302.302c.647.647 1.09 1.09 1.46 1.404.362.307.589.434.78.496.443.144.92.144 1.364 0 .19-.062.417-.189.78-.496.37-.315.813-.757 1.46-1.404l4.839-4.838c.646-.647 1.088-1.09 1.403-1.46.307-.363.434-.59.496-.78a2.2 2.2 0 0 0 0-1.364c-.062-.191-.189-.418-.496-.78-.315-.37-.757-.813-1.404-1.46l-.302-.302c-.647-.647-1.09-1.09-1.46-1.404-.362-.307-.589-.434-.78-.496" clipRule="evenodd" fill="none"/>
  <path d="m14.268 17.292-7.56-7.56" opacity=".28" fill="none"/>
    </svg>
  );
}
