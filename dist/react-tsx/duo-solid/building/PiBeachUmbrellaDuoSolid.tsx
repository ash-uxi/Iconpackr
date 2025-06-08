import React from 'react';

/**
 * PiBeachUmbrellaDuoSolid icon from the duo-solid style in building category.
 */
interface PiBeachUmbrellaDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiBeachUmbrellaDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'beach-umbrella icon',
  ...props
}: PiBeachUmbrellaDuoSolidProps): JSX.Element {
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
      <path d="M10.74 14.5 7 20.978" /> <path fill={color || "currentColor"} d="M16.328 3.369c.552-.216.801-.143.89-.091.09.052.279.23.368.817.087.575.05 1.383-.152 2.394-.403 2.011-1.41 4.604-2.95 7.273q-.142.243-.285.482l-.252.412-1.052-1.027a5.8 5.8 0 0 0-2.132-1.322l-.346-.11L9 11.8l.231-.424q.135-.243.276-.486c1.54-2.669 3.282-4.838 4.823-6.192.774-.68 1.456-1.118 1.997-1.33" /> <path fill={color || "currentColor"} d="M19.615 5.24c2.656 3.028 3.203 7.559 1.06 11.269q-.246.425-.526.816a1 1 0 0 1-1.565.078l-.267-.303a5.8 5.8 0 0 0-2.499-1.67q.2-.33.397-.667c1.62-2.806 2.724-5.605 3.18-7.882.113-.57.19-1.121.22-1.642" opacity=".28" /> <path d="M3 21h18" /> <path fill={color || "currentColor"} d="M4.033 6.9C6.175 3.19 10.371 1.4 14.321 2.184c-.435.286-.874.628-1.31 1.011-1.745 1.534-3.616 3.89-5.236 6.696q-.15.258-.292.515l-.088.16A5.8 5.8 0 0 0 4.933 9.29L4.7 9.237l-.395-.079a1 1 0 0 1-.717-1.394q.2-.438.445-.864" opacity=".28" />
    </svg>
  );
}
