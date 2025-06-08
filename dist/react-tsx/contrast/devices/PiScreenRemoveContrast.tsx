import React from 'react';

/**
 * PiScreenRemoveContrast icon from the contrast style in devices category.
 */
interface PiScreenRemoveContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiScreenRemoveContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'screen-remove icon',
  ...props
}: PiScreenRemoveContrastProps): JSX.Element {
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
      <path d="M13.04 2H4.4c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.656.656C2 3.139 2 3.559 2 4.4v10.2c0 .84 0 1.26.163 1.581a1.5 1.5 0 0 0 .656.656c.32.163.74.163 1.581.163H12m10-6.234V14.6c0 .84 0 1.26-.163 1.581a1.5 1.5 0 0 1-.656.656c-.32.163-.74.163-1.581.163H12m0 3.875V17m0 3.875c-1.75 0-3.5.375-5 1.125m5-1.125c1.75 0 3.5.375 5 1.125"/>
  <path fill="currentColor" fillRule="evenodd" d="M14.073 2H4.4c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.656.656C2 3.139 2 3.559 2 4.4v10.2c0 .84 0 1.26.163 1.581a1.5 1.5 0 0 0 .656.655c.32.164.74.164 1.581.164h15.2c.84 0 1.26 0 1.581-.163a1.5 1.5 0 0 0 .655-.656c.164-.32.164-.74.164-1.581V9.762a3 3 0 0 1-2.104-.879l-.354-.353-.353.353a3 3 0 1 1-4.243-4.243l.354-.353-.354-.354A3 3 0 0 1 14.073 2" clipRule="evenodd" opacity=".28"/>
  <path d="m17.034 6.762 2.475-2.475m0 0 2.474-2.474M19.51 4.287l-2.475-2.474m2.475 2.474 2.474 2.475"/>
    </svg>
  );
}
