import React from 'react';

/**
 * PiIncognitoContrast icon from the contrast style in media category.
 */
interface PiIncognitoContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiIncognitoContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'incognito icon',
  ...props
}: PiIncognitoContrastProps): JSX.Element {
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
      <g fill="currentColor" opacity=".28">
    <path d="M10 17a4 4 0 1 1-8 0 4 4 0 0 1 8 0M22 17a4 4 0 1 1-8 0 4 4 0 0 1 8 0M13.952 3.256a3 3 0 0 1 3.02 1.565l2.61 4.897a40.4 40.4 0 0 0-15.165 0L7.03 4.821a3 3 0 0 1 3.019-1.565c1.399.175 2.505.175 3.904 0"/>
  </g>
  <path d="M10 17h4m-4 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0m4 0a4 4 0 1 0 8 0 4 4 0 0 0-8 0m5.583-7.282L16.97 4.82a3 3 0 0 0-3.019-1.565 14.6 14.6 0 0 1-3.904 0 3 3 0 0 0-3.02 1.565l-2.61 4.897m15.165 0A40 40 0 0 1 22 10.26m-2.417-.542a40.4 40.4 0 0 0-15.166 0m0 0Q3.195 9.952 2 10.26"/>
    </svg>
  );
}
