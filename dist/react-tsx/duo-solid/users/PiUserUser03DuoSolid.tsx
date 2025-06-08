import React from 'react';

/**
 * PiUserUser03DuoSolid icon from the duo-solid style in users category.
 */
interface PiUserUser03DuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiUserUser03DuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'user-user-03 icon',
  ...props
}: PiUserUser03DuoSolidProps): JSX.Element {
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
      <path d="M10.1783 13.6752C6.56927 12.6747 3 15.3891 3 19.1342C3 20.717 4.28313 22.0002 5.86595 22.0002H18.1341C19.7169 22.0002 21 20.717 21 19.1342C21 15.3891 17.4307 12.6747 13.8217 13.6752L13.1258 13.8682C12.3892 14.0724 11.6108 14.0724 10.8742 13.8682L10.1783 13.6752Z" fill={color || "currentColor"} opacity="0.28" /> <path d="M12 2.25C9.37665 2.25 7.25 4.37665 7.25 7C7.25 9.62335 9.37665 11.75 12 11.75C14.6234 11.75 16.75 9.62335 16.75 7C16.75 4.37665 14.6234 2.25 12 2.25Z" fill={color || "currentColor"} />
    </svg>
  );
}
