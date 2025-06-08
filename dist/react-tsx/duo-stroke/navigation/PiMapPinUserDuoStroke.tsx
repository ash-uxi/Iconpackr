import React from 'react';

/**
 * PiMapPinUserDuoStroke icon from the duo-stroke style in navigation category.
 */
interface PiMapPinUserDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMapPinUserDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'map-pin-user icon',
  ...props
}: PiMapPinUserDuoStrokeProps): JSX.Element {
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
      <path d="M12 3c-2.92 0-7.79 2.056-7.79 8.222C4.21 17.39 10.054 21.5 12 21.5s7.79-4.111 7.79-10.278C19.79 5.056 14.922 3 12 3" opacity=".28" fill="none"/>
  <path  fillRule="evenodd" d="M12 6.868a3.921 3.921 0 1 0 0 7.843 3.921 3.921 0 0 0 0-7.843m-1.92 3.922a1.921 1.921 0 1 1 3.841 0 1.921 1.921 0 0 1-3.842 0" clipRule="evenodd" fill="none"/>
  <path  d="M17 16.64a3.87 3.87 0 0 0-2.11-.622H9.11c-.777 0-1.502.229-2.11.622a11.6 11.6 0 0 0 1.306 1.557c.244-.115.517-.18.804-.18h5.778c.288 0 .56.065.805.18A12 12 0 0 0 17 16.64M6.103 18.75l-.009-.01-.01-.013z" fill="none"/>
    </svg>
  );
}
