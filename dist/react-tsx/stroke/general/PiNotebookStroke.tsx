import React from 'react';

/**
 * PiNotebookStroke icon from the stroke style in general category.
 */
interface PiNotebookStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiNotebookStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'notebook icon',
  ...props
}: PiNotebookStrokeProps): JSX.Element {
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
      <path d="M12 5.06642V21.5M12 5.06642C15.0249 3.96646 19.0052 3.3551 22 5.06642V20.5664C18.8032 19.1964 14.9369 20.165 12 21.5M12 5.06642C8.9751 3.96646 4.99481 3.35509 2 5.06641V20.5664C5.19684 19.1964 9.06309 20.165 12 21.5" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
