import React from 'react';

/**
 * PiFaceSadDisappointedContrast icon from the contrast style in general category.
 */
interface PiFaceSadDisappointedContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFaceSadDisappointedContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'face-sad-disappointed icon',
  ...props
}: PiFaceSadDisappointedContrastProps): JSX.Element {
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
      <path fill="currentColor" d="M2.85 12a9.15 9.15 0 1 1 18.3 0 9.15 9.15 0 0 1-18.3 0" opacity=".28"/>
  <path d="m8.386 10.005 1.228-.86m4.771 0 1.229.86M8.429 16A4.99 4.99 0 0 1 12 14.5c1.4 0 2.664.574 3.572 1.5M12 21.15a9.15 9.15 0 1 1 0-18.3 9.15 9.15 0 0 1 0 18.3"/>
    </svg>
  );
}
