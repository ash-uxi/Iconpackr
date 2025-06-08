import React from 'react';

/**
 * PiTextParagraphStroke icon from the stroke style in editing category.
 */
interface PiTextParagraphStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiTextParagraphStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'text-paragraph icon',
  ...props
}: PiTextParagraphStrokeProps): JSX.Element {
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
      <path d="M13 3H18M13 3H9.02914C5.69934 3 3 5.69934 3 9.02914C3 12.3589 5.69934 15.0583 9.02914 15.0583H13M13 3V15.0583M18 3V21M18 3H21M13 21V15.0583" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
