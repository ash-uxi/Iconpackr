import React from 'react';

/**
 * PiStickerCornerFoldedContrast icon from the contrast style in media category.
 */
interface PiStickerCornerFoldedContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiStickerCornerFoldedContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'sticker-corner-folded icon',
  ...props
}: PiStickerCornerFoldedContrastProps): JSX.Element {
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
      <path d="M21 9c0 1.146 0 1.72-.167 2.178a2.77 2.77 0 0 1-1.655 1.655C18.719 13 18.146 13 17 13h-1.046c-1.034 0-1.551 0-1.946.201-.347.177-.63.46-.807.807-.201.395-.201.912-.201 1.946V17c0 1.146 0 1.72-.167 2.178a2.77 2.77 0 0 1-1.655 1.655C10.719 21 10.146 21 9 21"/>
  <path fill="currentColor" d="M3 7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v6a8 8 0 0 1-8 8H7a4 4 0 0 1-4-4z" opacity=".28"/>
  <path d="M3 7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v6a8 8 0 0 1-8 8H7a4 4 0 0 1-4-4z"/>
    </svg>
  );
}
