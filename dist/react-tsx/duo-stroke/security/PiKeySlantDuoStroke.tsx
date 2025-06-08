import React from 'react';

/**
 * PiKeySlantDuoStroke icon from the duo-stroke style in security category.
 */
interface PiKeySlantDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiKeySlantDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'key-slant icon',
  ...props
}: PiKeySlantDuoStrokeProps): JSX.Element {
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
      <path d="M15.7682 7.17144L18.5966 4.34302L20.7179 6.46434M15.7682 7.17144L10.1113 12.8283M15.7682 7.17144L17.1824 8.58566" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M4.4538 18.4854C6.0159 20.0475 8.54856 20.0475 10.1107 18.4854C11.6727 16.9233 11.6727 14.3907 10.1107 12.8286C8.54856 11.2665 6.0159 11.2665 4.4538 12.8286C2.8917 14.3907 2.8917 16.9233 4.4538 18.4854Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
