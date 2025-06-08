import React from 'react';

/**
 * PiMaximizeTwoArrowStroke icon from the stroke style in arrows-&-chevrons category.
 */
interface PiMaximizeTwoArrowStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMaximizeTwoArrowStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'maximize-two-arrow icon',
  ...props
}: PiMaximizeTwoArrowStrokeProps): JSX.Element {
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
      <path d="M12 6.28858C13.7786 5.99076 15.5759 5.92321 17.3472 6.08707C17.4991 6.10113 17.6335 6.16659 17.7335 6.26652C17.8334 6.36646 17.8989 6.50086 17.9129 6.65281C18.0768 8.42407 18.0092 10.2214 17.7114 12M12 17.7114C10.2214 18.0092 8.42407 18.0768 6.65281 17.9129C6.50086 17.8989 6.36646 17.8334 6.26652 17.7335C6.16659 17.6335 6.10113 17.4991 6.08707 17.3472C5.92321 15.5759 5.99076 13.7786 6.28858 12" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
