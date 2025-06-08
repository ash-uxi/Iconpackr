import React from 'react';

/**
 * PiBulbOnDuoSolid icon from the duo-solid style in appliances category.
 */
interface PiBulbOnDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiBulbOnDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'bulb-on icon',
  ...props
}: PiBulbOnDuoSolidProps): JSX.Element {
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
      <path d="M10.379 21h3.242M12 2V1m7 3.707L19.707 4m-15 .707L4 4m18 7h-1M3 11H2" /> <path fill={color || "currentColor"} d="M12 3.994c-3.657 0-6.687 2.863-6.687 6.474 0 1.975.913 3.735 2.335 4.915q.646.537.787 1.075l.228.875a2.22 2.22 0 0 0 2.147 1.661h2.38c1.011 0 1.894-.683 2.148-1.66l.227-.876q.141-.538.788-1.075c1.421-1.18 2.335-2.94 2.335-4.915 0-3.611-3.03-6.474-6.688-6.474" opacity=".28" />
    </svg>
  );
}
