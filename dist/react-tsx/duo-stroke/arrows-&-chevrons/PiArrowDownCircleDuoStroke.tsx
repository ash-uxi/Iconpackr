import React from 'react';

/**
 * PiArrowDownCircleDuoStroke icon from the duo-stroke style in arrows-&-chevrons category.
 */
interface PiArrowDownCircleDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArrowDownCircleDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'arrow-down-circle icon',
  ...props
}: PiArrowDownCircleDuoStrokeProps): JSX.Element {
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
      <path d="M11.9999 2.84985C6.94645 2.84985 2.84985 6.94645 2.84985 11.9999C2.84985 17.0533 6.94645 21.1499 11.9999 21.1499C17.0533 21.1499 21.1499 17.0533 21.1499 11.9999C21.1499 6.94645 17.0533 2.84985 11.9999 2.84985Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M16 12.0514C14.963 13.4759 13.7515 14.7553 12.3962 15.8581C12.28 15.9527 12.14 16 12 16M8 12.0514C9.03704 13.4759 10.2485 14.7553 11.6038 15.8581C11.72 15.9527 11.86 16 12 16M12 16L12 8" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
