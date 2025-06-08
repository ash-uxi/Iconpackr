import React from 'react';

/**
 * PiStickerCornerFoldedSolid icon from the solid style in media category.
 */
interface PiStickerCornerFoldedSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiStickerCornerFoldedSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'sticker-corner-folded icon',
  ...props
}: PiStickerCornerFoldedSolidProps): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      
       style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <path d="M2 7C2 4.23858 4.23858 2 7 2H17C19.7614 2 22 4.23858 22 7V8V8.2C22 9.05658 21.9992 9.63887 21.9624 10.089C21.9266 10.5274 21.8617 10.7516 21.782 10.908C21.5903 11.2843 21.2843 11.5903 20.908 11.782C20.7516 11.8617 20.5274 11.9266 20.089 11.9624C19.6389 11.9992 19.0566 12 18.2 12H16.2H16.1615C15.6343 12 15.1795 12 14.805 12.0306C14.4096 12.0629 14.0164 12.1342 13.638 12.327C13.0735 12.6146 12.6146 13.0735 12.327 13.638C12.1342 14.0164 12.0629 14.4096 12.0306 14.805C12 15.1795 12 15.6343 12 16.1614V16.2V18.2C12 19.0566 11.9992 19.6389 11.9624 20.089C11.9266 20.5274 11.8617 20.7516 11.782 20.908C11.5903 21.2843 11.2843 21.5903 10.908 21.782C10.7516 21.8617 10.5274 21.9266 10.089 21.9624C9.63887 21.9992 9.05658 22 8.2 22H8H7C4.23858 22 2 19.7614 2 17V7ZM13.4711 21.9879C18.0667 21.7509 21.7509 18.0667 21.9879 13.4711C21.9314 13.5034 21.8741 13.5344 21.816 13.564C21.3306 13.8113 20.8139 13.9099 20.2518 13.9558C19.7106 14 19.0463 14 18.2413 14H18.2H16.2C15.6234 14 15.2512 14.0008 14.9678 14.0239C14.6962 14.0461 14.5955 14.0838 14.546 14.109C14.3578 14.2049 14.2049 14.3578 14.109 14.546C14.0838 14.5955 14.0461 14.6962 14.0239 14.9678C14.0008 15.2512 14 15.6234 14 16.2V18.2V18.2413C14 19.0463 14 19.7106 13.9558 20.2518C13.9099 20.8139 13.8113 21.3306 13.564 21.816C13.5344 21.8741 13.5034 21.9314 13.4711 21.9879Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" stroke="none"/>
    </svg>
  );
}
