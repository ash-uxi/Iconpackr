import React from 'react';

/**
 * PiFolderSettingsContrast icon from the contrast style in files-&-folders category.
 */
interface PiFolderSettingsContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFolderSettingsContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'folder-settings icon',
  ...props
}: PiFolderSettingsContrastProps): JSX.Element {
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
      <path d="M11.174 21H8.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C2 17.96 2 16.84 2 14.6V9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C5.04 3 6.16 3 8.4 3h.316c.47 0 .704 0 .917.065a1.5 1.5 0 0 1 .517.276c.172.142.302.337.563.728l.575.862c.26.391.39.586.562.728a1.5 1.5 0 0 0 .517.276c.213.065.448.065.917.065H15.6c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748c.362.71.423 1.601.434 3.163M18 18h.01M18 14l1.179 1.155 1.65.017.017 1.65L22 18l-1.154 1.179-.018 1.65-1.65.017L18 22l-1.179-1.154-1.65-.018-.016-1.65L14 18l1.155-1.179.017-1.65 1.65-.016z"/>
  <path fill="currentColor" d="M2 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C5.04 3 6.16 3 8.4 3h.316c.47 0 .704 0 .917.065a1.5 1.5 0 0 1 .517.276c.172.142.302.337.563.728l.575.862c.26.391.39.586.562.728a1.5 1.5 0 0 0 .517.276c.213.065.448.065.917.065H15.6c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748c.43.843.436 1.943.436 4.117h-.298a3 3 0 0 0-.842-.13l-.444-.004-.317-.31a3 3 0 0 0-4.198 0l-.317.31-.444.005a3 3 0 0 0-2.968 2.968l-.005.444-.31.317a3 3 0 0 0 0 4.198l.31.317.005.444q0 .07.004.14H8.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C2 17.96 2 16.84 2 14.6z" opacity=".28"/>
    </svg>
  );
}
