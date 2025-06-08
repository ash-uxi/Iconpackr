import React from 'react';

/**
 * PiLibraryStroke icon from the stroke style in general category.
 */
interface PiLibraryStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiLibraryStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'library icon',
  ...props
}: PiLibraryStrokeProps): JSX.Element {
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
      <path d="M11.4 3H9.6C9.03995 3 8.75992 3 8.54601 3.10899C8.35785 3.20487 8.20487 3.35785 8.10899 3.54601C8 3.75992 8 4.03995 8 4.6V19.4C8 19.9601 8 20.2401 8.10899 20.454C8.20487 20.6422 8.35785 20.7951 8.54601 20.891C8.75992 21 9.03995 21 9.6 21H11.4C11.9601 21 12.2401 21 12.454 20.891C12.6422 20.7951 12.7951 20.6422 12.891 20.454C13 20.2401 13 19.9601 13 19.4V4.6C13 4.03995 13 3.75992 12.891 3.54601C12.7951 3.35785 12.6422 3.20487 12.454 3.10899C12.2401 3 11.9601 3 11.4 3Z" stroke="currentColor" strokeWidth="2" fill="none"/>
  <path d="M17.0047 6.37642L15.2959 6.94209C14.7642 7.11809 14.4983 7.20609 14.3295 7.37679C14.181 7.52693 14.0839 7.72024 14.052 7.929C14.0157 8.16632 14.1037 8.43216 14.2797 8.96384L17.8704 19.8109C18.0464 20.3426 18.1344 20.6085 18.3051 20.7773C18.4553 20.9258 18.6486 21.0229 18.8574 21.0548C19.0947 21.0911 19.3605 21.0031 19.8922 20.8271L21.601 20.2614C22.1327 20.0854 22.3985 19.9974 22.5673 19.8267C22.7158 19.6765 22.813 19.4832 22.8449 19.2745C22.8811 19.0372 22.7931 18.7713 22.6171 18.2396L19.0264 7.39255C18.8504 6.86087 18.7624 6.59503 18.5917 6.42621C18.4416 6.27771 18.2483 6.18055 18.0395 6.14867C17.8022 6.11242 17.5363 6.20042 17.0047 6.37642Z" stroke="currentColor" strokeWidth="2" fill="none"/>
  <path d="M6.4 9H4.6C4.03995 9 3.75992 9 3.54601 9.10899C3.35785 9.20487 3.20487 9.35785 3.10899 9.54601C3 9.75992 3 10.0399 3 10.6V19.4C3 19.9601 3 20.2401 3.10899 20.454C3.20487 20.6422 3.35785 20.7951 3.54601 20.891C3.75992 21 4.03995 21 4.6 21H6.4C6.96005 21 7.24008 21 7.45399 20.891C7.64215 20.7951 7.79513 20.6422 7.89101 20.454C8 20.2401 8 19.9601 8 19.4V10.6C8 10.0399 8 9.75992 7.89101 9.54601C7.79513 9.35785 7.64215 9.20487 7.45399 9.10899C7.24008 9 6.96005 9 6.4 9Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
