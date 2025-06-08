import React from 'react';

/**
 * PiPlaylistAiStroke icon from the stroke style in ai category.
 */
interface PiPlaylistAiStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPlaylistAiStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'playlist-ai icon',
  ...props
}: PiPlaylistAiStrokeProps): JSX.Element {
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
      <path d="M12.2998 12.9844C12.9373 14.6008 13.6389 15.3293 15.2998 15.9844C13.6389 16.6394 12.9373 17.3679 12.2998 18.9844C11.6623 17.3679 10.9607 16.6394 9.2998 15.9844C10.9607 15.3293 11.6623 14.6008 12.2998 12.9844Z" stroke="currentColor" strokeWidth="2" fill="none"/>
  <path d="M5 6H19M7 2.00127L17 2M7 22H17C18.4001 22 19.1002 22 19.635 21.7275C20.1054 21.4878 20.4878 21.1054 20.7275 20.635C21 20.1002 21 19.4001 21 18V14C21 12.5999 21 11.8998 20.7275 11.365C20.4878 10.8946 20.1054 10.5122 19.635 10.2725C19.1002 10 18.4001 10 17 10H7C5.59987 10 4.8998 10 4.36502 10.2725C3.89462 10.5122 3.51217 10.8946 3.27248 11.365C3 11.8998 3 12.5999 3 14V18C3 19.4001 3 20.1002 3.27248 20.635C3.51217 21.1054 3.89462 21.4878 4.36502 21.7275C4.8998 22 5.59987 22 7 22Z" stroke="currentColor" strokeWidth="2" fill="none"/>
  <path d="M8.7002 19.3232H8.7012" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
