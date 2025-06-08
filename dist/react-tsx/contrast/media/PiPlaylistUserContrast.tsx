import React from 'react';

/**
 * PiPlaylistUserContrast icon from the contrast style in media category.
 */
interface PiPlaylistUserContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPlaylistUserContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'playlist-user icon',
  ...props
}: PiPlaylistUserContrastProps): JSX.Element {
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
      <path d="M13.25 17.118h-2.5c-.69 0-1.25.56-1.25 1.25 0 .345.28.625.625.625h3.75c.345 0 .625-.28.625-.625 0-.69-.56-1.25-1.25-1.25M13 13.69a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
  <path fill="currentColor" d="M3 14c0-1.4 0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.092C4.9 10 5.6 10 7 10h10c1.4 0 2.1 0 2.635.273a2.5 2.5 0 0 1 1.092 1.092C21 11.9 21 12.6 21 14v4c0 1.4 0 2.1-.273 2.635a2.5 2.5 0 0 1-1.092 1.092C19.1 22 18.4 22 17 22H7c-1.4 0-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.093-1.092C3 20.1 3 19.4 3 18z" opacity=".28"/>
  <path d="M5 6h14M7 2.001 17 2M7 22h10c1.4 0 2.1 0 2.635-.273a2.5 2.5 0 0 0 1.092-1.092C21 20.1 21 19.4 21 18v-4c0-1.4 0-2.1-.273-2.635a2.5 2.5 0 0 0-1.092-1.092C19.1 10 18.4 10 17 10H7c-1.4 0-2.1 0-2.635.273a2.5 2.5 0 0 0-1.093 1.092C3 11.9 3 12.6 3 14v4c0 1.4 0 2.1.272 2.635a2.5 2.5 0 0 0 1.093 1.092C4.9 22 5.6 22 7 22"/>
    </svg>
  );
}
