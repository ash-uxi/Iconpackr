import React from 'react';

/**
 * PiGitCompareSolid icon from the solid style in development category.
 */
interface PiGitCompareSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiGitCompareSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'git-compare icon',
  ...props
}: PiGitCompareSolidProps): JSX.Element {
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
      <path d="M13 5C12.4477 5 12 5.44772 12 6C12 6.55228 12.4477 7 13 7C15.2091 7 17 8.79086 17 11V14.126C15.2748 14.5701 14 16.1362 14 18C14 20.2091 15.7909 22 18 22C20.2091 22 22 20.2091 22 18C22 16.1362 20.7252 14.5701 19 14.126V11C19 7.68629 16.3137 5 13 5Z" fill="currentColor" stroke="none"/>
  <path d="M6 2C3.79086 2 2 3.79086 2 6C2 7.86384 3.27477 9.42994 5 9.87398V13C5 16.3137 7.68629 19 11 19C11.5523 19 12 18.5523 12 18C12 17.4477 11.5523 17 11 17C8.79086 17 7 15.2091 7 13V9.87398C8.72523 9.42994 10 7.86384 10 6C10 3.79086 8.20914 2 6 2Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
