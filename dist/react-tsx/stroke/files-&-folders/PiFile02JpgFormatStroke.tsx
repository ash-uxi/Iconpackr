import React from 'react';

/**
 * PiFile02JpgFormatStroke icon from the stroke style in files-&-folders category.
 */
interface PiFile02JpgFormatStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFile02JpgFormatStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'file-02-jpg-format icon',
  ...props
}: PiFile02JpgFormatStrokeProps): JSX.Element {
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
      <path d="M21.2496 15C20.7987 14.3814 20.1812 14 19.5 14C18.1193 14 17 15.567 17 17.5C17 19.433 18.1193 21 19.5 21C20.1812 21 20.7987 20.6186 21.2496 20V18H20.5M10 19V14H11.5C12.8807 14 14 15.1193 14 16.5C14 17.8807 12.8807 19 11.5 19H10ZM10 19V21M3 18.6667V19C3 20.1046 3.89543 21 5 21C6.10457 21 7 20.1046 7 19V14H4M11 2H12C16.4183 2 20 5.58172 20 10H19.8293C19.4175 8.83481 18.3062 8 17 8L16.4 8C16.0284 8 15.8426 8 15.6871 7.97538C14.8313 7.83983 14.1602 7.16865 14.0246 6.31287C14 6.1574 14 5.9716 14 5.6V5C14 3.34315 12.6569 2 11 2ZM11 2H8C5.79086 2 4 3.79086 4 6V10" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
