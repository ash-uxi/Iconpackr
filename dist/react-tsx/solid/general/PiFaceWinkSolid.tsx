import React from 'react';

/**
 * PiFaceWinkSolid icon from the solid style in general category.
 */
interface PiFaceWinkSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFaceWinkSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'face-wink icon',
  ...props
}: PiFaceWinkSolidProps): JSX.Element {
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
      <path d="M1.8501 12.0001C1.8501 6.39441 6.39441 1.8501 12.0001 1.8501C17.6058 1.8501 22.1501 6.39441 22.1501 12.0001C22.1501 17.6058 17.6058 22.1501 12.0001 22.1501C6.39441 22.1501 1.8501 17.6058 1.8501 12.0001ZM13.743 9.78624C13.5555 9.97377 13.4501 10.2281 13.4501 10.4934C13.4501 10.7586 13.5554 11.0129 13.743 11.2005L14.4501 11.9076C14.8406 12.2981 15.4738 12.2981 15.8643 11.9076C16.2548 11.5171 16.2548 10.8839 15.8643 10.4934C16.2548 10.1029 16.2548 9.4698 15.8643 9.07928C15.4738 8.68874 14.8407 8.6887 14.4501 9.07921L13.743 9.78624ZM10.0001 9.90022C10.0001 9.34793 9.55241 8.90022 9.00012 8.90022C8.44784 8.90022 8.00012 9.34793 8.00012 9.90022V10.9002C8.00012 11.4525 8.44784 11.9002 9.00012 11.9002C9.55241 11.9002 10.0001 11.4525 10.0001 10.9002V9.90022ZM7.72928 13.8864C8.12366 13.4998 8.7568 13.5061 9.14342 13.9004C9.87055 14.6422 10.8809 15.1005 12 15.1005C13.1192 15.1005 14.1295 14.6422 14.8567 13.9004C15.2433 13.5061 15.8764 13.4998 16.2708 13.8864C16.6652 14.273 16.6715 14.9061 16.2849 15.3005C15.1971 16.4102 13.6783 17.1005 12 17.1005C10.3218 17.1005 8.80301 16.4102 7.71522 15.3005C7.3286 14.9061 7.33489 14.273 7.72928 13.8864Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" stroke="none"/>
    </svg>
  );
}
