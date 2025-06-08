import React from 'react';

/**
 * PiPlaylistPlayContrast icon from the contrast style in media category.
 */
interface PiPlaylistPlayContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPlaylistPlayContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'playlist-play icon',
  ...props
}: PiPlaylistPlayContrastProps): JSX.Element {
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
      <path fill="currentColor" d="M3 14c0-1.4 0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.092C4.9 10 5.6 10 7 10h10c1.4 0 2.1 0 2.635.273a2.5 2.5 0 0 1 1.092 1.092C21 11.9 21 12.6 21 14v4c0 1.4 0 2.1-.273 2.635a2.5 2.5 0 0 1-1.092 1.092C19.1 22 18.4 22 17 22H7c-1.4 0-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.093-1.092C3 20.1 3 19.4 3 18z" opacity=".28"/>
  <path d="M5 6h14M7 2.001 17 2M7 22h10c1.4 0 2.1 0 2.635-.273a2.5 2.5 0 0 0 1.092-1.092C21 20.1 21 19.4 21 18v-4c0-1.4 0-2.1-.273-2.635a2.5 2.5 0 0 0-1.092-1.092C19.1 10 18.4 10 17 10H7c-1.4 0-2.1 0-2.635.273a2.5 2.5 0 0 0-1.093 1.092C3 11.9 3 12.6 3 14v4c0 1.4 0 2.1.272 2.635a2.5 2.5 0 0 0 1.093 1.092C4.9 22 5.6 22 7 22"/>
  <path d="M9.485 15.84c0-1.432 0-2.149.3-2.548a1.5 1.5 0 0 1 1.093-.597c.498-.036 1.1.351 2.305 1.125l.162.104c1.045.672 1.567 1.008 1.748 1.436a1.5 1.5 0 0 1 0 1.167c-.18.427-.703.763-1.748 1.435l-.162.104c-1.205.774-1.807 1.162-2.305 1.126a1.5 1.5 0 0 1-1.094-.597c-.3-.4-.3-1.116-.3-2.548z"/>
    </svg>
  );
}
