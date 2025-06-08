import React from 'react';

/**
 * PiFloppyDefaultStroke icon from the stroke style in general category.
 */
interface PiFloppyDefaultStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFloppyDefaultStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'floppy-default icon',
  ...props
}: PiFloppyDefaultStrokeProps): JSX.Element {
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
      <path d="M11 7H7M17 21V17.8C17 16.1198 17 15.2798 16.673 14.638C16.3854 14.0735 15.9265 13.6146 15.362 13.327C14.7202 13 13.8802 13 12.2 13H11.8C10.1198 13 9.27976 13 8.63803 13.327C8.07354 13.6146 7.6146 14.0735 7.32698 14.638C7 15.2798 7 16.1198 7 17.8V21M17 21H7M17 21C19.2091 21 21 19.2091 21 17V9.0534C21 8.03451 20.7832 7.51113 20.0627 6.79066L17.2093 3.93726C16.4889 3.21679 15.9655 3 14.9466 3H9.4C7.15979 3 6.03968 3 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3 6.03968 3 7.15979 3 9.4V17C3 19.2091 4.79086 21 7 21" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
