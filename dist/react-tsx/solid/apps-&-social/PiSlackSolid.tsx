import React from 'react';

/**
 * PiSlackSolid icon from the solid style in apps-&-social category.
 */
interface PiSlackSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSlackSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'slack icon',
  ...props
}: PiSlackSolidProps): JSX.Element {
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
      <path d="M14.5 1C13.1193 1 12 2.11929 12 3.5V8.5C12 9.88071 13.1193 11 14.5 11C15.8807 11 17 9.88071 17 8.5V3.5C17 2.11929 15.8807 1 14.5 1Z" fill="currentColor" stroke="none"/>
  <path d="M15 18C13.8954 18 13 18.8954 13 20V20.5C13 21.8807 14.1193 23 15.5 23C16.8807 23 18 21.8807 18 20.5C18 19.1193 16.8807 18 15.5 18H15Z" fill="currentColor" stroke="none"/>
  <path d="M15.5 12C14.1193 12 13 13.1193 13 14.5C13 15.8807 14.1193 17 15.5 17H20.5C21.8807 17 23 15.8807 23 14.5C23 13.1193 21.8807 12 20.5 12H15.5Z" fill="currentColor" stroke="none"/>
  <path d="M20.5 6C19.1193 6 18 7.11929 18 8.5V9C18 10.1046 18.8954 11 20 11H20.5C21.8807 11 23 9.88071 23 8.5C23 7.11929 21.8807 6 20.5 6Z" fill="currentColor" stroke="none"/>
  <path d="M3.5 13C2.11929 13 1 14.1193 1 15.5C1 16.8807 2.11929 18 3.5 18C4.88071 18 6 16.8807 6 15.5V15C6 13.8954 5.10457 13 4 13H3.5Z" fill="currentColor" stroke="none"/>
  <path d="M3.5 7C2.11929 7 1 8.11929 1 9.5C1 10.8807 2.11929 12 3.5 12H8.5C9.88071 12 11 10.8807 11 9.5C11 8.11929 9.88071 7 8.5 7H3.5Z" fill="currentColor" stroke="none"/>
  <path d="M8.5 1C7.11929 1 6 2.11929 6 3.5C6 4.88071 7.11929 6 8.5 6H9C10.1046 6 11 5.10457 11 4V3.5C11 2.11929 9.88071 1 8.5 1Z" fill="currentColor" stroke="none"/>
  <path d="M9.5 13C8.11929 13 7 14.1193 7 15.5V20.5C7 21.8807 8.11929 23 9.5 23C10.8807 23 12 21.8807 12 20.5V15.5C12 14.1193 10.8807 13 9.5 13Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
