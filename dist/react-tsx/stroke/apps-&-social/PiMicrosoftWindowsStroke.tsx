import React from 'react';

/**
 * PiMicrosoftWindowsStroke icon from the stroke style in apps-&-social category.
 */
interface PiMicrosoftWindowsStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMicrosoftWindowsStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'microsoft-windows icon',
  ...props
}: PiMicrosoftWindowsStrokeProps): JSX.Element {
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
      <path d="M11 4.87682V18.6546M21 11.7657L3 11.7657M4.77913 17.9634L18.7791 19.5189C19.9639 19.6506 21 18.7232 21 17.5312V6.00024C21 4.80821 19.9639 3.88083 18.7791 4.01247L4.77914 5.56803C3.76627 5.68057 3 6.53669 3 7.55579V15.9756C3 16.9947 3.76627 17.8508 4.77913 17.9634Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
