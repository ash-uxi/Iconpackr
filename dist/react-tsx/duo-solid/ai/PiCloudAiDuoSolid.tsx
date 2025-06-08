import React from 'react';

/**
 * PiCloudAiDuoSolid icon from the duo-solid style in ai category.
 */
interface PiCloudAiDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCloudAiDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'cloud-ai icon',
  ...props
}: PiCloudAiDuoSolidProps): JSX.Element {
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
      <path fill={color || "currentColor"} d="M12.5 4c3.16 0 5.86 1.953 6.965 4.715A6.5 6.5 0 0 1 16.5 21h-10a5.5 5.5 0 0 1-1.383-10.824A7.5 7.5 0 0 1 7.434 5.97 7.47 7.47 0 0 1 12.5 4" opacity=".28" /> <path d="M9 17zM13 10c-.637 1.617-1.34 2.345-3 3 1.66.655 2.363 1.383 3 3 .637-1.617 1.34-2.345 3-3-1.66-.655-2.363-1.383-3-3" />
    </svg>
  );
}
