import React from 'react';

/**
 * PiArrowUpSquareStroke icon from the stroke style in arrows-&-chevrons category.
 */
interface PiArrowUpSquareStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArrowUpSquareStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'arrow-up-square icon',
  ...props
}: PiArrowUpSquareStrokeProps): JSX.Element {
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
      <path d="M8 11.9486C9.03704 10.5241 10.2485 9.24467 11.6038 8.1419C11.72 8.0473 11.86 8 12 8M16 11.9486C14.963 10.5241 13.7515 9.24467 12.3962 8.1419C12.28 8.0473 12.14 8 12 8M12 8L12 16M12 21C9.20435 21 7.80653 21 6.7039 20.5433C5.23373 19.9343 4.06569 18.7663 3.45672 17.2961C3 16.1935 3 14.7956 3 12C3 9.20435 3 7.80653 3.45672 6.7039C4.06569 5.23373 5.23373 4.06569 6.7039 3.45672C7.80653 3 9.20435 3 12 3C14.7956 3 16.1935 3 17.2961 3.45672C18.7663 4.06569 19.9343 5.23373 20.5433 6.7039C21 7.80653 21 9.20435 21 12C21 14.7956 21 16.1935 20.5433 17.2961C19.9343 18.7663 18.7663 19.9343 17.2961 20.5433C16.1935 21 14.7956 21 12 21Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
