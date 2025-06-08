import React from 'react';

/**
 * PiPeopleMaleMaleSolid icon from the solid style in users category.
 */
interface PiPeopleMaleMaleSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPeopleMaleMaleSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'people-male-male icon',
  ...props
}: PiPeopleMaleMaleSolidProps): JSX.Element {
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
      <path d="M6 2C4.34315 2 3 3.34315 3 5C3 6.65685 4.34315 8 6 8C7.65686 8 9 6.65685 9 5C9 3.34315 7.65686 2 6 2ZM5.26041 9C3.18005 9 1.44698 10.5947 1.27422 12.6678L1.00346 15.9171C0.980231 16.1958 1.07477 16.4715 1.26414 16.6773C1.45351 16.883 1.7204 17.0001 2.00006 17.0001H2.12921C2.65561 17.0001 3.09188 17.4082 3.12699 17.9334L3.29652 20.47C3.39168 21.8938 4.57429 23 6.00122 23C7.42872 23 8.61161 21.8929 8.70601 20.4685L8.87106 17.9784C8.90649 17.4438 9.35689 17.0322 9.89247 17.0448L9.9764 17.0468C10.26 17.0535 10.533 16.9395 10.7276 16.7331C10.9222 16.5267 11.02 16.2474 10.9966 15.9647L10.7242 12.6704C10.5527 10.5961 8.81916 9 6.73782 9H5.26041ZM15 5C15 3.34315 16.3431 2 18 2C19.6569 2 21 3.34315 21 5C21 6.65685 19.6569 8 18 8C16.3431 8 15 6.65685 15 5ZM17.2604 9C15.18 9 13.447 10.5947 13.2742 12.6678L13.0035 15.9171C12.9802 16.1958 13.0748 16.4715 13.2641 16.6773C13.4535 16.883 13.7204 17.0001 14.0001 17.0001H14.1292C14.6556 17.0001 15.0919 17.4082 15.127 17.9334L15.2965 20.47C15.3917 21.8938 16.5743 23 18.0012 23C19.4287 23 20.6116 21.8929 20.706 20.4685L20.871 17.9784C20.9065 17.4439 21.3569 17.0322 21.8924 17.0448L21.9764 17.0468C22.26 17.0535 22.533 16.9395 22.7276 16.7331C22.9222 16.5267 23.02 16.2474 22.9966 15.9647L22.7242 12.6704C22.5527 10.5961 20.8192 9 18.7378 9H17.2604Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" stroke="none"/>
    </svg>
  );
}
