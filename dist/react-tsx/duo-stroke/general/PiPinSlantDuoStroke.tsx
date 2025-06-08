import React from 'react';

/**
 * PiPinSlantDuoStroke icon from the duo-stroke style in general category.
 */
interface PiPinSlantDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPinSlantDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'pin-slant icon',
  ...props
}: PiPinSlantDuoStrokeProps): JSX.Element {
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
      <path d="M12.7639 4.24744C13.2722 3.4162 14.3994 3.2289 15.1492 3.85109C16.9776 5.36824 18.6322 7.02288 20.1494 8.85124C20.7715 9.60106 20.5842 10.7283 19.753 11.2366L16.1614 13.4329C15.4954 13.8402 15.3229 14.5833 15.4995 15.2982C15.8809 16.8422 15.4267 18.4732 14.3021 19.5978C14.1246 19.7753 13.8436 19.7953 13.6427 19.6447C11.8829 18.3248 10.2057 16.9074 8.64937 15.3511C7.09302 13.7947 5.67563 12.1175 4.35579 10.3577C4.20515 10.1569 4.22512 9.87582 4.40265 9.6983C5.52724 8.57371 7.15826 8.11951 8.70224 8.50096C9.4171 8.67758 10.1603 8.50507 10.5676 7.839L12.7639 4.24744Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M8.64951 15.3506L3.48242 20.5177" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
