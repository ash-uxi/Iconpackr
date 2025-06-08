import React from 'react';

/**
 * PiSafeDuoStroke icon from the duo-stroke style in money-&-payments category.
 */
interface PiSafeDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSafeDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'safe icon',
  ...props
}: PiSafeDuoStrokeProps): JSX.Element {
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
      <path d="M19 21V20M5 21V20M6.8 4H17.2C18.8802 4 19.7202 4 20.362 4.32698C20.9265 4.6146 21.3854 5.07354 21.673 5.63803C22 6.27976 22 7.11984 22 8.8V15.2C22 16.8802 22 17.7202 21.673 18.362C21.3854 18.9265 20.9265 19.3854 20.362 19.673C19.7202 20 18.8802 20 17.2 20H6.8C5.11984 20 4.27976 20 3.63803 19.673C3.07354 19.3854 2.6146 18.9265 2.32698 18.362C2 17.7202 2 16.8802 2 15.2V8.8C2 7.11984 2 6.27976 2.32698 5.63803C2.6146 5.07354 3.07354 4.6146 3.63803 4.32698C4.27976 4 5.11984 4 6.8 4Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M19.0005 14V11M5.75781 16.2426L7.17203 14.8284M12.8289 9.17156L14.2431 7.75735M14.2431 16.2426L12.8289 14.8284M7.17203 9.17154L5.75781 7.75732M14.0004 12C14.0004 14.2091 12.2096 16 10.0004 16C7.79131 16 6.00045 14.2091 6.00045 12C6.00045 9.79082 7.79131 7.99996 10.0004 7.99996C12.2096 7.99996 14.0004 9.79082 14.0004 12Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
