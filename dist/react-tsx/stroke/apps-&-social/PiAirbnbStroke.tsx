import React from 'react';

/**
 * PiAirbnbStroke icon from the stroke style in apps-&-social category.
 */
interface PiAirbnbStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAirbnbStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'airbnb icon',
  ...props
}: PiAirbnbStrokeProps): JSX.Element {
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
      <path d="M12 17.8568L10.0149 19.842C8.81166 21.0453 6.97339 21.3435 5.45142 20.5824C3.53196 19.6225 2.72898 17.3064 3.64233 15.3644L6.78549 8.68112C8.13453 5.81267 8.80906 4.37843 9.62773 3.77683C11.0365 2.74161 12.9543 2.74118 14.3636 3.77578C15.1825 4.37702 15.8577 5.81095 17.208 8.67881L20.3559 15.3645C21.2701 17.3062 20.4676 19.6228 18.548 20.5827C17.0264 21.3437 15.1886 21.0455 13.9857 19.8425L12 17.8568ZM12 17.8568L14.0504 15.8063C15.877 13.9796 14.5833 10.8564 12 10.8564C9.4168 10.8564 8.12308 13.9796 9.94965 15.8063L12 17.8568Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
