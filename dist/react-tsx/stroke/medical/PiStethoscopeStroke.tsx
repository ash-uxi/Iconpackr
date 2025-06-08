import React from 'react';

/**
 * PiStethoscopeStroke icon from the stroke style in medical category.
 */
interface PiStethoscopeStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiStethoscopeStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'stethoscope icon',
  ...props
}: PiStethoscopeStrokeProps): JSX.Element {
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
      <path d="M10.5 3.01172C11.8807 3.01172 13 4.13101 13 5.51172V7.19607C13 9.01538 12.3622 10.7771 11.1975 12.1748L10.9517 12.4697C10.1837 13.3913 9.09183 13.8522 8 13.8522M5.5 3.01172C4.11929 3.01172 3 4.13101 3 5.51172V7.19607C3 9.01538 3.63784 10.7771 4.80253 12.1748L5.04828 12.4697C5.81634 13.3913 6.90817 13.8522 8 13.8522M19 14.0117C20.3807 14.0117 21.5 12.8924 21.5 11.5117C21.5 10.131 20.3807 9.01172 19 9.01172C17.6193 9.01172 16.5 10.131 16.5 11.5117C16.5 12.8924 17.6193 14.0117 19 14.0117ZM19 14.0117V15.5117C19 18.5493 16.5376 21.0117 13.5 21.0117C10.4624 21.0117 8 18.5493 8 15.5117V13.8522" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
