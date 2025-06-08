import React from 'react';

/**
 * PiProductHuntSolid icon from the solid style in apps-&-social category.
 */
interface PiProductHuntSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiProductHuntSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'product-hunt icon',
  ...props
}: PiProductHuntSolidProps): JSX.Element {
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
      <path d="M1.8501 12.0001C1.8501 6.39441 6.39441 1.8501 12.0001 1.8501C17.6058 1.8501 22.1501 6.39441 22.1501 12.0001C22.1501 17.6058 17.6058 22.1501 12.0001 22.1501C6.39441 22.1501 1.8501 17.6058 1.8501 12.0001ZM10.0001 7C9.44784 7 9.00012 7.44772 9.00012 8V17C9.00012 17.5523 9.44784 18 10.0001 18C10.5524 18 11.0001 17.5523 11.0001 17V14.625H12.8126C14.9182 14.625 16.6251 12.9181 16.6251 10.8125C16.6251 8.70691 14.9182 7 12.8126 7H10.0001Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" stroke="none"/>
  <path d="M12.8126 12.625H11.0001V9H12.8126C13.8136 9 14.6251 9.81148 14.6251 10.8125C14.6251 11.8135 13.8136 12.625 12.8126 12.625Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
