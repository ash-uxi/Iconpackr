import React from 'react';

/**
 * PiTextParagraphDuoSolid icon from the duo-solid style in editing category.
 */
interface PiTextParagraphDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiTextParagraphDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'text-paragraph icon',
  ...props
}: PiTextParagraphDuoSolidProps): JSX.Element {
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
      <path d="M18 3v18" opacity=".28" /> <path fill={color || "currentColor"} fillRule="evenodd" d="M9.03 2a7.03 7.03 0 1 0 0 14.058H12V21a1 1 0 0 0 2 0V4h7a1 1 0 1 0 0-2z" clipRule="evenodd" />
    </svg>
  );
}
