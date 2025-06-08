import React from 'react';

/**
 * PiCloudRainDuoStroke icon from the duo-stroke style in weather category.
 */
interface PiCloudRainDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCloudRainDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'cloud-rain icon',
  ...props
}: PiCloudRainDuoStrokeProps): JSX.Element {
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
      <path d="M6.01705 9.02561C6.00575 9.18227 6 9.34046 6 9.5M6.01705 9.02561C3.75887 9.26656 2 11.1779 2 13.5C2 15.1695 2.90918 16.6267 4.25944 17.4034M6.01705 9.02561C6.26002 5.65723 9.06969 3 12.5 3C15.3713 3 17.8077 4.86169 18.6681 7.44382C20.6276 8.28516 22 10.2323 22 12.5C22 14.2448 21.1875 15.7999 19.9202 16.8075" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M8 14V16M12 15V17M16 14V16M8 19V20M12 20V21M16 19V20" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
