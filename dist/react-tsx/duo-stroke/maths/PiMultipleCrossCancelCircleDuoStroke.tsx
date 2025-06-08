import React from 'react';

/**
 * PiMultipleCrossCancelCircleDuoStroke icon from the duo-stroke style in maths category.
 */
interface PiMultipleCrossCancelCircleDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMultipleCrossCancelCircleDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'multiple-cross-cancel-circle icon',
  ...props
}: PiMultipleCrossCancelCircleDuoStrokeProps): JSX.Element {
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
      <path d="M2.84961 11.9999C2.84961 17.0533 6.9462 21.1499 11.9996 21.1499C17.053 21.1499 21.1496 17.0533 21.1496 11.9999C21.1496 6.94645 17.053 2.84985 11.9996 2.84985C6.9462 2.84985 2.84961 6.94645 2.84961 11.9999Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M9 15L12 12M12 12L15 9M12 12L9 9M12 12L15 15" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
