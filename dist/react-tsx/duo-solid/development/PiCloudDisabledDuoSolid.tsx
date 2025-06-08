import React from 'react';

/**
 * PiCloudDisabledDuoSolid icon from the duo-solid style in development category.
 */
interface PiCloudDisabledDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCloudDisabledDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'cloud-disabled icon',
  ...props
}: PiCloudDisabledDuoSolidProps): JSX.Element {
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
      <g fill={color || "currentColor"} opacity=".28"> <path d="M19.293 3.293a1 1 0 1 1 1.414 1.414l-18 18a1 1 0 0 1-1.414-1.414l1.622-1.622A5.49 5.49 0 0 1 1 15.5a5.5 5.5 0 0 1 2.609-4.68c.475-.294.824-.51 1.068-.664q.181-.116.271-.177c.128-.087.165-.229.223-.367.087-.208.204-.501.367-.906a7.502 7.502 0 0 1 11.511-3.17zM18.979 9.31a1 1 0 0 1 1.287-.108A6.5 6.5 0 0 1 16.5 21H9.702a1 1 0 0 1-.707-1.707z" /> </g> <path d="M2 22 20 4" />
    </svg>
  );
}
