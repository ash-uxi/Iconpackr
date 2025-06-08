import React from 'react';

/**
 * PiMediaGifDuoStroke icon from the duo-stroke style in media category.
 */
interface PiMediaGifDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMediaGifDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'media-gif icon',
  ...props
}: PiMediaGifDuoStrokeProps): JSX.Element {
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
      <path d="M3 10.4C3 8.15979 3 7.03968 3.43597 6.18404C3.81947 5.43139 4.43139 4.81947 5.18404 4.43597C6.03968 4 7.15979 4 9.4 4H14.6C16.8402 4 17.9603 4 18.816 4.43597C19.5686 4.81947 20.1805 5.43139 20.564 6.18404C21 7.03968 21 8.15979 21 10.4V13.6C21 15.8402 21 16.9603 20.564 17.816C20.1805 18.5686 19.5686 19.1805 18.816 19.564C17.9603 20 16.8402 20 14.6 20H9.4C7.15979 20 6.03968 20 5.18404 19.564C4.43139 19.1805 3.81947 18.5686 3.43597 17.816C3 16.9603 3 15.8402 3 13.6V10.4Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M9.5 8.75H8C6.89543 8.75 6 9.64543 6 10.75V13.25C6 14.3546 6.89543 15.25 8 15.25H9.5V12H8.78703M12.8472 8.75V15.25M18.0422 8.75H17.0422C16.49 8.75 16.0422 9.19772 16.0422 9.75V12.0062M16.0422 12.0062V15.25M16.0422 12.0062H18.0422" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
