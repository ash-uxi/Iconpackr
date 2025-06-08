import React from 'react';

/**
 * PiFloorLampOnContrast icon from the contrast style in appliances category.
 */
interface PiFloorLampOnContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFloorLampOnContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'floor-lamp-on icon',
  ...props
}: PiFloorLampOnContrastProps): JSX.Element {
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
      <path d="M12 21V10M9 21h6m-7-8-1 2m9-2 1 2m1-5-1.937-5.649A2 2 0 0 0 14.171 3H9.83a2 2 0 0 0-1.892 1.351L6 10z"/>
  <path fill="currentColor" d="M7.937 4.351A2 2 0 0 1 9.829 3h4.342a2 2 0 0 1 1.892 1.351L18 10H6z" opacity=".28"/>
    </svg>
  );
}
