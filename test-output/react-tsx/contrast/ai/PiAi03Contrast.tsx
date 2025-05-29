import React from 'react';

/**
 * PiAi03Contrast icon from the contrast style in ai category.
 */
interface PiAi03ContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
}

export default function PiAi03Contrast({
  size = 24,
  color,
  className,
  ...props
}: PiAi03ContrastProps): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style={{color: color || "currentColor"}}
      
      {...props}
    >
      
    </svg>
  );
}
