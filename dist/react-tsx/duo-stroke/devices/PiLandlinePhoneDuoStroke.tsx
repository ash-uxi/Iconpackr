import React from 'react';

/**
 * PiLandlinePhoneDuoStroke icon from the duo-stroke style in devices category.
 */
interface PiLandlinePhoneDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiLandlinePhoneDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'landline-phone icon',
  ...props
}: PiLandlinePhoneDuoStrokeProps): JSX.Element {
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
      <path d="M10 4H19C20.1046 4 21 4.89543 21 6V18C21 19.1046 20.1046 20 19 20H10" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M13 14H14" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M13 17H14" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M13 7H18V11H13V7Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M17 14H18" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M17 17H18" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M3 5.5C3 4.11929 4.11929 3 5.5 3H7.5C8.88071 3 10 4.11929 10 5.5V18.5C10 19.8807 8.88071 21 7.5 21H5.5C4.11929 21 3 19.8807 3 18.5V5.5Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
