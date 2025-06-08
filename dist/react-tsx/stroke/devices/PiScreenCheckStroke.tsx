import React from 'react';

/**
 * PiScreenCheckStroke icon from the stroke style in devices category.
 */
interface PiScreenCheckStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiScreenCheckStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'screen-check icon',
  ...props
}: PiScreenCheckStrokeProps): JSX.Element {
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
      <path d="M12.6936 2.00007H4.4C3.55992 2.00007 3.13988 2.00007 2.81901 2.16356C2.53677 2.30737 2.3073 2.53684 2.16349 2.81908C2 3.13995 2 3.55999 2 4.40007V14.6001C2 15.4401 2 15.8602 2.16349 16.1811C2.3073 16.4633 2.53677 16.6928 2.81901 16.8366C3.13988 17.0001 3.55992 17.0001 4.4 17.0001H12M22 7.51562V14.6001C22 15.4401 22 15.8602 21.8365 16.1811C21.6927 16.4633 21.4632 16.6928 21.181 16.8366C20.8601 17.0001 20.4401 17.0001 19.6 17.0001H12M12 20.8751V17.0001M12 20.8751C10.25 20.8751 8.5 21.2501 7 22.0001M12 20.8751C13.75 20.8751 15.5 21.2501 17 22.0001" stroke="currentColor" strokeWidth="2" fill="none"/>
  <path d="M16 4.2587L18.0362 6.2927C19.0155 4.5802 20.3709 3.1125 22 2" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
