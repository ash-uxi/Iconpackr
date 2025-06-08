import React from 'react';

/**
 * PiDeleteDustbin01DuoStroke icon from the duo-stroke style in general category.
 */
interface PiDeleteDustbin01DuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiDeleteDustbin01DuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'delete-dustbin-01 icon',
  ...props
}: PiDeleteDustbin01DuoStrokeProps): JSX.Element {
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
      <path d="M16 6L14.8944 3.78885C14.3463 2.69253 13.2257 2 12 2C10.7743 2 9.65374 2.69253 9.10557 3.78885L8 6M16 6H4M16 6H20" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M18 6V15C18 16.8638 18 17.7956 17.6955 18.5307C17.2895 19.5108 16.5108 20.2895 15.5307 20.6955C14.7956 21 13.8638 21 12 21C10.1362 21 9.20435 21 8.46927 20.6955C7.48915 20.2895 6.71046 19.5108 6.30448 18.5307C6 17.7956 6 16.8638 6 15V6" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
