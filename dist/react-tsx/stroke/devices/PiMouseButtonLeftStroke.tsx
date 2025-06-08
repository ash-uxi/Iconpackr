import React from 'react';

/**
 * PiMouseButtonLeftStroke icon from the stroke style in devices category.
 */
interface PiMouseButtonLeftStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMouseButtonLeftStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'mouse-button-left icon',
  ...props
}: PiMouseButtonLeftStrokeProps): JSX.Element {
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
      <path d="M12 3C15.866 3 19 6.13401 19 10V14C19 17.866 15.866 21 12 21C8.13401 21 5 17.866 5 14V10C5 6.13401 8.13401 3 12 3ZM12 3V7.8C12 8.92011 12 9.48016 11.782 9.90798C11.5903 10.2843 11.2843 10.5903 10.908 10.782C10.4802 11 9.9201 11 8.8 11H5" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
