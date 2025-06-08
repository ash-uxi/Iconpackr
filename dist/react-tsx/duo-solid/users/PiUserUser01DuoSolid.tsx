import React from 'react';

/**
 * PiUserUser01DuoSolid icon from the duo-solid style in users category.
 */
interface PiUserUser01DuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiUserUser01DuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'user-user-01 icon',
  ...props
}: PiUserUser01DuoSolidProps): JSX.Element {
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
      <path d="M12 2.25C9.37665 2.25 7.25 4.37665 7.25 7C7.25 9.62335 9.37665 11.75 12 11.75C14.6234 11.75 16.75 9.62335 16.75 7C16.75 4.37665 14.6234 2.25 12 2.25Z" fill={color || "currentColor"} /> <path d="M7 14C4.79086 14 3 15.7909 3 18C3 20.2091 4.79086 22 7 22H17C19.2091 22 21 20.2091 21 18C21 15.7909 19.2091 14 17 14H7Z" fill={color || "currentColor"} opacity="0.28" />
    </svg>
  );
}
