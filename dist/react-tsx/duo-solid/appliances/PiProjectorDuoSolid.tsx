import React from 'react';

/**
 * PiProjectorDuoSolid icon from the duo-solid style in appliances category.
 */
interface PiProjectorDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiProjectorDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'projector icon',
  ...props
}: PiProjectorDuoSolidProps): JSX.Element {
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
      <g fill={color || "currentColor"} opacity=".28"> <path d="M4.968 8c-.439 0-.817 0-1.13.021a3 3 0 0 0-.986.207 3 3 0 0 0-1.624 1.624 3 3 0 0 0-.207.986C1 11.15 1 11.529 1 11.968v.064c0 .439 0 .817.021 1.13.023.33.072.66.207.986a3 3 0 0 0 1.624 1.624c.326.135.656.184.986.207l.162.009V16a1 1 0 1 0 2 0h3.354a1 1 0 0 0 .662-1.75A3 3 0 0 1 9 12c0-.896.391-1.7 1.016-2.25A1 1 0 0 0 9.354 8zM21.148 8.228a3 3 0 0 0-.986-.207C19.85 8 19.471 8 19.032 8h-4.386a1 1 0 0 0-.662 1.75A3 3 0 0 1 15 12c0 .896-.391 1.7-1.016 2.25a1 1 0 0 0 .662 1.75H18a1 1 0 1 0 2 0v-.012l.162-.01c.33-.022.66-.071.986-.206a3 3 0 0 0 1.624-1.624c.135-.326.184-.656.207-.986.021-.313.021-.691.021-1.13v-.064c0-.439 0-.817-.021-1.13a3.1 3.1 0 0 0-.207-.986 3 3 0 0 0-1.624-1.624" /> </g> <path d="M19.01 12H19m-3 0a4 4 0 0 0-1.354-3A3.99 3.99 0 0 0 12 8c-1.014 0-1.94.378-2.646 1A4 4 0 0 0 8 12a4 4 0 0 0 1.354 3c.705.622 1.632 1 2.646 1s1.94-.378 2.646-1A4 4 0 0 0 16 12" />
    </svg>
  );
}
