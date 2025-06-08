import React from 'react';

/**
 * PiCeilingLampOnSolid icon from the solid style in appliances category.
 */
interface PiCeilingLampOnSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCeilingLampOnSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'ceiling-lamp-on icon',
  ...props
}: PiCeilingLampOnSolidProps): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      
       style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <path d="M13 20C13 19.4477 12.5523 19 12 19C11.4477 19 11 19.4477 11 20V21C11 21.5523 11.4477 22 12 22C12.5523 22 13 21.5523 13 21V20Z" fill="currentColor" stroke="none"/>
  <path d="M13 2C13 1.44772 12.5523 1 12 1C11.4477 1 11 1.44772 11 2V4.04938C5.94668 4.5511 2 8.81465 2 14C2 14.5523 2.44772 15 3 15H8.12602C8.57006 16.7252 10.1362 18 12 18C13.8638 18 15.4299 16.7252 15.874 15H21C21.5523 15 22 14.5523 22 14C22 8.81465 18.0533 4.5511 13 4.04938V2ZM12 16C11.2597 16 10.6134 15.5978 10.2676 15L13.7324 15C13.3866 15.5978 12.7403 16 12 16Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" stroke="none"/>
  <path d="M16.866 18.5C16.5899 18.0217 15.9783 17.8578 15.5 18.134C15.0217 18.4101 14.8578 19.0217 15.134 19.5L15.634 20.366C15.9101 20.8443 16.5217 21.0082 17 20.7321C17.4783 20.4559 17.6422 19.8443 17.366 19.366L16.866 18.5Z" fill="currentColor" stroke="none"/>
  <path d="M8.86603 19.5C9.14217 19.0217 8.97829 18.4101 8.5 18.134C8.02171 17.8578 7.41012 18.0217 7.13397 18.5L6.63397 19.366C6.35783 19.8443 6.52171 20.4559 7 20.7321C7.47829 21.0082 8.08988 20.8443 8.36603 20.366L8.86603 19.5Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
