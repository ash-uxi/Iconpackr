import React from 'react';

/**
 * PiNoteOutlineStroke icon from the stroke style in editing category.
 */
interface PiNoteOutlineStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiNoteOutlineStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'note-outline icon',
  ...props
}: PiNoteOutlineStrokeProps): JSX.Element {
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
      <path d="M3.00169 8C3 8.24373 3 8.50929 3 8.8V15.2C3 16.8802 3 17.7202 3.32698 18.362C3.6146 18.9265 4.07354 19.3854 4.63803 19.673C5.27976 20 6.11984 20 7.8 20H16.2C17.8802 20 18.7202 20 19.362 19.673C19.9265 19.3854 20.3854 18.9265 20.673 18.362C21 17.7202 21 16.8802 21 15.2V8.8C21 8.50929 21 8.24373 20.9983 8M3.00169 8C3.00979 6.83507 3.05658 6.16873 3.32698 5.63803C3.6146 5.07354 4.07354 4.6146 4.63803 4.32698C5.27976 4 6.11984 4 7.8 4H16.2C17.8802 4 18.7202 4 19.362 4.32698C19.9265 4.6146 20.3854 5.07354 20.673 5.63803C20.9434 6.16873 20.9902 6.83507 20.9983 8M3.00169 8H20.9983" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
