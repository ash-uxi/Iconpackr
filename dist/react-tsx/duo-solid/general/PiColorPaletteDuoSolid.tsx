import React from 'react';

/**
 * PiColorPaletteDuoSolid icon from the duo-solid style in general category.
 */
interface PiColorPaletteDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiColorPaletteDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'color-palette icon',
  ...props
}: PiColorPaletteDuoSolidProps): JSX.Element {
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
      <path d="M10.2488 7.2627C10.2488 6.15813 11.1442 5.2627 12.2488 5.2627C13.3533 5.2627 14.2488 6.15813 14.2488 7.2627C14.2488 8.36726 13.3533 9.2627 12.2488 9.2627C11.1442 9.2627 10.2488 8.36726 10.2488 7.2627Z" fill={color || "currentColor"} /> <path d="M12.536 1.51496C6.76388 1.20754 1.79406 5.67474 1.48664 11.4469C1.17922 17.219 5.64642 22.1888 11.4186 22.4962C12.5674 22.5574 13.4429 21.8826 13.845 21.0353C14.2686 20.1427 14.184 18.9706 13.506 18.219C13.3541 18.0506 13.3498 17.654 13.5888 17.4392C13.6984 17.3407 13.9088 17.2568 14.3725 17.264C14.8888 17.2721 15.3985 17.3719 15.9136 17.3993C19.3609 17.5829 22.3353 14.9106 22.519 11.4628L22.5193 11.4573C22.7689 6.21929 18.1584 1.81441 12.536 1.51496Z" fill={color || "currentColor"} opacity="0.28" /> <path d="M16.7234 9C15.6188 9 14.7234 9.89543 14.7234 11C14.7234 12.1046 15.6188 13 16.7234 13C17.828 13 18.7234 12.1046 18.7234 11C18.7234 9.89543 17.828 9 16.7234 9Z" fill={color || "currentColor"} /> <path d="M5.47852 11C5.47852 9.89543 6.37395 9 7.47852 9C8.58308 9 9.47852 9.89543 9.47852 11C9.47852 12.1046 8.58308 13 7.47852 13C6.37395 13 5.47852 12.1046 5.47852 11Z" fill={color || "currentColor"} />
    </svg>
  );
}
