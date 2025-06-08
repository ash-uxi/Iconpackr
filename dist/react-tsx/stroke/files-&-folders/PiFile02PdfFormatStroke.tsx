import React from 'react';

/**
 * PiFile02PdfFormatStroke icon from the stroke style in files-&-folders category.
 */
interface PiFile02PdfFormatStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFile02PdfFormatStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'file-02-pdf-format icon',
  ...props
}: PiFile02PdfFormatStrokeProps): JSX.Element {
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
      <path d="M3 19V14H4.5C5.88071 14 7 15.1193 7 16.5C7 17.8807 5.88071 19 4.5 19H3ZM3 19V21M17 18V14H21M17 18V21M17 18H21M11 2H12C16.4183 2 20 5.58172 20 10H19.8293C19.4175 8.83481 18.3062 8 17 8L16.4 8C16.0284 8 15.8426 8 15.6871 7.97538C14.8313 7.83983 14.1602 7.16865 14.0246 6.31287C14 6.1574 14 5.9716 14 5.6V5C14 3.34315 12.6569 2 11 2ZM11 2H8C5.79086 2 4 3.79086 4 6V10M10 14V21H10.5C12.433 21 14 19.433 14 17.5C14 15.567 12.433 14 10.5 14H10Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
