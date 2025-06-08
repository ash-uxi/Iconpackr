import React from 'react';

/**
 * PiPinSlantStroke icon from the stroke style in general category.
 */
interface PiPinSlantStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPinSlantStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'pin-slant icon',
  ...props
}: PiPinSlantStrokeProps): JSX.Element {
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
      <path d="M3.48193 20.5182L8.64902 15.3511M8.64902 15.3511C7.09267 13.7947 5.67528 12.1175 4.35544 10.3577C4.2048 10.1569 4.22477 9.87582 4.4023 9.6983C5.52688 8.57371 7.1579 8.11951 8.70189 8.50096C9.41675 8.67758 10.1599 8.50507 10.5672 7.839L12.7635 4.24744C13.2718 3.4162 14.399 3.2289 15.1489 3.85109C16.9772 5.36824 18.6319 7.02288 20.149 8.85124C20.7712 9.60106 20.5839 10.7283 19.7526 11.2366L16.1611 13.4329C15.495 13.8402 15.3225 14.5833 15.4991 15.2982C15.8806 16.8422 15.4264 18.4732 14.3018 19.5978C14.1243 19.7753 13.8432 19.7953 13.6424 19.6447C11.8826 18.3248 10.2054 16.9074 8.64902 15.3511Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
