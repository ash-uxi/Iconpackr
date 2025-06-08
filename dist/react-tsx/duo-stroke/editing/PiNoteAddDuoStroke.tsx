import React from 'react';

/**
 * PiNoteAddDuoStroke icon from the duo-stroke style in editing category.
 */
interface PiNoteAddDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiNoteAddDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'note-add icon',
  ...props
}: PiNoteAddDuoStrokeProps): JSX.Element {
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
      <path d="M21 12.1249V8.8C21 8.50929 21 8.24373 20.9983 8M13.125 20H7.8C6.11984 20 5.27976 20 4.63803 19.673C4.07354 19.3854 3.6146 18.9265 3.32698 18.362C3 17.7202 3 16.8802 3 15.2V8.8C3 8.50929 3 8.24373 3.00169 8" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M7 12H17M7 16H14M20 22V19M20 19V16M20 19H17M20 19H23M7.80002 4H16.2C17.8802 4 18.7203 4 19.362 4.32698C19.9265 4.6146 20.3854 5.07354 20.673 5.63803C20.9434 6.16873 20.9902 6.83507 20.9983 8H3.00171C3.0098 6.83507 3.05659 6.16873 3.327 5.63803C3.61462 5.07354 4.07356 4.6146 4.63804 4.32698C5.27978 4 6.11986 4 7.80002 4Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
