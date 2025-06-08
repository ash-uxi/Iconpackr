import React from 'react';

/**
 * PiCloudDisabledSolid icon from the solid style in development category.
 */
interface PiCloudDisabledSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCloudDisabledSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'cloud-disabled icon',
  ...props
}: PiCloudDisabledSolidProps): JSX.Element {
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
      <path d="M18.979 9.30922C19.3243 8.96398 19.8683 8.91852 20.2661 9.20167C21.9188 10.3782 23 12.3128 23 14.5C23 18.0898 20.0899 21 16.5 21H9.70246C9.29799 21 8.93336 20.7564 8.77858 20.3827C8.6238 20.009 8.70935 19.5789 8.99535 19.2929L18.979 9.30922Z" fill="currentColor" stroke="none"/>
  <path d="M19.2929 3.29289C19.6834 2.90237 20.3166 2.90237 20.7071 3.29289C21.0976 3.68342 21.0976 4.31658 20.7071 4.70711L2.70711 22.7071C2.31658 23.0976 1.68342 23.0976 1.29289 22.7071C0.902369 22.3166 0.902369 21.6834 1.29289 21.2929L2.91489 19.6709C1.74337 18.663 1 17.1688 1 15.5C1 13.5217 2.04517 11.7883 3.6087 10.8206C4.08415 10.5263 4.43299 10.3103 4.67666 10.1556C4.79874 10.0781 4.88699 10.0207 4.94799 9.97922C5.07624 9.89207 5.11253 9.75047 5.17061 9.6117C5.25757 9.40398 5.37543 9.11066 5.5382 8.7055C6.64553 5.94909 9.34394 4 12.5 4C14.2101 4 15.7876 4.57325 17.0491 5.53673L19.2929 3.29289Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
