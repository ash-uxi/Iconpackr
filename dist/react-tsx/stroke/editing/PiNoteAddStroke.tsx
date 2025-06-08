import React from 'react';

/**
 * PiNoteAddStroke icon from the stroke style in editing category.
 */
interface PiNoteAddStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiNoteAddStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'note-add icon',
  ...props
}: PiNoteAddStrokeProps): JSX.Element {
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
      <path d="M7 12H17M7 16H14M20 22V19M20 19V16M20 19H17M20 19H23M21 11.53V8.8C21 8.50929 21 8.24373 20.9983 8M11.9947 20H7.8C6.11984 20 5.27976 20 4.63803 19.673C4.07354 19.3854 3.6146 18.9265 3.32698 18.362C3 17.7202 3 16.8802 3 15.2V8.8C3 8.50929 3 8.24373 3.00169 8M20.9983 8C20.9902 6.83507 20.9434 6.16873 20.673 5.63803C20.3854 5.07354 19.9265 4.6146 19.362 4.32698C18.7202 4 17.8802 4 16.2 4H7.8C6.11984 4 5.27976 4 4.63803 4.32698C4.07354 4.6146 3.6146 5.07354 3.32698 5.63803C3.05658 6.16873 3.00979 6.83507 3.00169 8M20.9983 8H3.00169" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
