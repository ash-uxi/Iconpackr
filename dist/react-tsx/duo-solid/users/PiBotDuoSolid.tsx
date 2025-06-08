import React from 'react';

/**
 * PiBotDuoSolid icon from the duo-solid style in users category.
 */
interface PiBotDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiBotDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'bot icon',
  ...props
}: PiBotDuoSolidProps): JSX.Element {
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
      <path d="M13.0001 2C13.0001 1.44772 12.5524 1 12.0001 1C11.4478 1 11.0001 1.44772 11.0001 2V6L9.8005 5.99996C8.1315 5.99952 7.05211 5.99924 6.14597 6.29366C4.31934 6.88717 2.88724 8.31927 2.29373 10.1459C1.9993 11.052 1.99959 12.1314 2.00003 13.8004V14.1996C1.99959 15.8686 1.9993 16.948 2.29373 17.8541C2.88724 19.6807 4.31934 21.1128 6.14597 21.7063C7.05211 22.0008 8.13149 22.0005 9.80048 22H14.1997C15.8686 22.0005 16.948 22.0008 17.8542 21.7063C19.6808 21.1128 21.1129 19.6807 21.7064 17.8541C22.0008 16.948 22.0005 15.8686 22.0001 14.1996V13.8004C22.0005 12.1314 22.0008 11.052 21.7064 10.1459C21.1129 8.31927 19.6808 6.88717 17.8542 6.29366C16.948 5.99924 15.8686 5.99952 14.1996 5.99996L13.0001 6V2Z" fill={color || "currentColor"} opacity="0.28" /> <path d="M15.0004 10.8999C13.8406 10.8999 12.9004 11.8401 12.9004 12.9999C12.9004 14.1597 13.8406 15.0999 15.0004 15.0999C16.1602 15.0999 17.1004 14.1597 17.1004 12.9999C17.1004 11.8401 16.1602 10.8999 15.0004 10.8999Z" fill={color || "currentColor"} /> <path d="M9.00039 10.8999C7.84059 10.8999 6.90039 11.8401 6.90039 12.9999C6.90039 14.1597 7.84059 15.0999 9.00039 15.0999C10.1602 15.0999 11.1004 14.1597 11.1004 12.9999C11.1004 11.8401 10.1602 10.8999 9.00039 10.8999Z" fill={color || "currentColor"} />
    </svg>
  );
}
