import React from 'react';

/**
 * PiArrowDownDuoSolid icon from the duo-solid style in arrows-&-chevrons category.
 */
interface PiArrowDownDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArrowDownDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'arrow-down icon',
  ...props
}: PiArrowDownDuoSolidProps): JSX.Element {
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
      <path d="M12 20V4" opacity=".28" /> <path fill={color || "currentColor"} d="M12 21c-.432 0-.864-.144-1.22-.43a31.2 31.2 0 0 1-5.584-5.806A1 1 0 0 1 6 13.17h12a1 1 0 0 1 .804 1.594 31.2 31.2 0 0 1-5.584 5.807c-.356.285-.788.429-1.22.429" />
    </svg>
  );
}
