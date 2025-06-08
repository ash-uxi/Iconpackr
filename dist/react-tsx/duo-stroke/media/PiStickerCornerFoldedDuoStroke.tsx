import React from 'react';

/**
 * PiStickerCornerFoldedDuoStroke icon from the duo-stroke style in media category.
 */
interface PiStickerCornerFoldedDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiStickerCornerFoldedDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'sticker-corner-folded icon',
  ...props
}: PiStickerCornerFoldedDuoStrokeProps): JSX.Element {
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
      <path d="M17 3H7C4.79086 3 3 4.79086 3 7V17C3 19.2091 4.79086 21 7 21H13C17.4183 21 21 17.4183 21 13V7C21 4.79086 19.2091 3 17 3Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M21 13C21 17.4183 17.4183 21 13 21H9C10.146 21 10.7191 21 11.1779 20.833C11.9471 20.553 12.553 19.9471 12.833 19.1779C13 18.7191 13 18.146 13 17L13 15.9538C13 14.9199 13 14.4029 13.2012 14.008C13.3782 13.6606 13.6606 13.3782 14.008 13.2012C14.4029 13 14.9199 13 15.9538 13H17C18.146 13 18.7191 13 19.1779 12.833C19.9471 12.553 20.553 11.9471 20.833 11.1779C21 10.7191 21 10.146 21 9V13Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
