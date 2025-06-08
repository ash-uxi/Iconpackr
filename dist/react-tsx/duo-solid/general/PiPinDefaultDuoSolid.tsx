import React from 'react';

/**
 * PiPinDefaultDuoSolid icon from the duo-solid style in general category.
 */
interface PiPinDefaultDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPinDefaultDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'pin-default icon',
  ...props
}: PiPinDefaultDuoSolidProps): JSX.Element {
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
      <path d="M12 15.692V21" opacity=".28" /> <path fill={color || "currentColor"} d="M15.628 1.97a39 39 0 0 0-7.256 0 2.6 2.6 0 0 0-2.286 3.196l.986 4.093a.47.47 0 0 1-.037.343.94.94 0 0 1-.358.353A5.54 5.54 0 0 0 4 14.698c0 .75.55 1.384 1.292 1.49 2.215.316 4.452.505 6.708.505s4.493-.189 6.708-.505A1.505 1.505 0 0 0 20 14.698a5.54 5.54 0 0 0-2.677-4.743.94.94 0 0 1-.358-.353.47.47 0 0 1-.037-.343l.986-4.093a2.6 2.6 0 0 0-2.286-3.197" />
    </svg>
  );
}
