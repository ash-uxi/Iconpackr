import React from 'react';

/**
 * PiPencilEraserEditLineSolid icon from the solid style in general category.
 */
interface PiPencilEraserEditLineSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPencilEraserEditLineSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'pencil-eraser-edit-line icon',
  ...props
}: PiPencilEraserEditLineSolidProps): JSX.Element {
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
      <path d="M12 21C12 20.4477 12.4477 20 13 20H21C21.5523 20 22 20.4477 22 21C22 21.5523 21.5523 22 21 22H13C12.4477 22 12 21.5523 12 21Z" fill="currentColor" stroke="none"/>
  <path d="M13.717 5.63121C13.5997 5.51387 13.4094 5.51408 13.2923 5.63168L3.05189 15.917C2.83564 16.1336 2.62424 16.3454 2.46567 16.601C2.32684 16.8248 2.22287 17.0684 2.15724 17.3234C2.08231 17.6145 2.07531 17.9137 2.06813 18.2205L2.0003 20.9709C1.99366 21.24 2.09582 21.5004 2.28367 21.6933C2.47151 21.8861 2.72919 21.9951 2.9984 21.9955L5.79769 22.0001C6.11408 22.001 6.42451 22.0019 6.72739 21.9292C6.99253 21.8656 7.24588 21.7604 7.47811 21.6176C7.74324 21.4546 7.96201 21.2343 8.18547 21.0093L18.4061 10.7437C18.5228 10.6264 18.5226 10.4368 18.4056 10.3199L13.717 5.63121Z" fill="currentColor" stroke="none"/>
  <path d="M16.154 2.75744C17.0102 1.89744 18.3496 1.7525 19.3694 2.41141C20.2689 2.99261 21.042 3.77496 21.609 4.68846C22.2777 5.76573 22.0392 7.09458 21.2101 7.92735L20.2406 8.90114C20.1235 9.01874 19.9332 9.01895 19.8158 8.90161L15.1272 4.21297C15.0102 4.096 15.01 3.90641 15.1267 3.78917L16.154 2.75744Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
