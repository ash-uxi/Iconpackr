import React from 'react';

/**
 * PiPencilEditSolid icon from the solid style in general category.
 */
interface PiPencilEditSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPencilEditSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'pencil-edit icon',
  ...props
}: PiPencilEditSolidProps): JSX.Element {
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
      <path d="M19.3694 2.41141C18.3496 1.7525 17.0102 1.89744 16.154 2.75744L3.05189 15.917C2.83563 16.1336 2.62424 16.3454 2.46567 16.601C2.32684 16.8248 2.22287 17.0684 2.15724 17.3234C2.08231 17.6145 2.07531 17.9137 2.06813 18.2205L2.0003 20.9709C1.99366 21.24 2.09582 21.5004 2.28367 21.6933C2.47151 21.8861 2.72919 21.9951 2.9984 21.9955L5.79769 22.0001C6.11408 22.001 6.42451 22.0019 6.72739 21.9292C6.99253 21.8656 7.24588 21.7604 7.47811 21.6176C7.74324 21.4546 7.962 21.2343 8.18546 21.0093L21.2163 7.92115C21.2415 7.89579 21.2657 7.87147 21.2881 7.84783C22.1004 6.99042 22.2317 5.69153 21.609 4.68846C21.5919 4.6608 21.573 4.63209 21.5534 4.60218L21.5148 4.54323C20.9557 3.69046 20.225 2.96422 19.3694 2.41141Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
