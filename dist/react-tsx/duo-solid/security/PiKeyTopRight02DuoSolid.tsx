import React from 'react';

/**
 * PiKeyTopRight02DuoSolid icon from the duo-solid style in security category.
 */
interface PiKeyTopRight02DuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiKeyTopRight02DuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'key-top-right-02 icon',
  ...props
}: PiKeyTopRight02DuoSolidProps): JSX.Element {
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
      <path d="m10.732 10.94 6.364-6.364h2.828v2.828l-2.12 2.121h-1.622a.5.5 0 0 0-.5.5v1.622l-2.122 2.121" /> <path fill={color || "currentColor"} fillRule="evenodd" d="M11.109 10.563a1 1 0 0 0-.39-.24 5.5 5.5 0 1 0 3.459 3.457 1 1 0 0 0-.241-.388l1.745-1.745v-1.622a.5.5 0 0 1 .5-.5h1.62l2.122-2.12v-2.83h-2.828z" clipRule="evenodd" opacity=".28" /> <path strokeWidth="2.2" d="M8.964 16.95 7.55 15.537a1.25 1.25 0 0 0 1.414 1.415z" />
    </svg>
  );
}
