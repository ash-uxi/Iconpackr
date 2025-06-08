import React from 'react';

/**
 * PiBallFootballDuoSolid icon from the duo-solid style in sports category.
 */
interface PiBallFootballDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiBallFootballDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'ball-football icon',
  ...props
}: PiBallFootballDuoSolidProps): JSX.Element {
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
      <path d="m13.5 10.5-3 3m1.667-10.245a41.4 41.4 0 0 1 8.578 8.577m-17.487.331a41.4 41.4 0 0 0 8.578 8.579" /> <path fill={color || "currentColor"} d="M20.59 3.41c-1.369-1.369-2.885-1.71-4.63-1.64-1.245.05-2.625.195-4.013.51-2.25.509-4.584 1.48-6.384 3.28s-2.77 4.133-3.28 6.382a22.4 22.4 0 0 0-.51 4.014c-.07 1.745.272 3.262 1.64 4.63 1.369 1.37 2.886 1.711 4.631 1.64a22.4 22.4 0 0 0 4.013-.51c2.25-.509 4.583-1.48 6.383-3.28s2.77-4.133 3.28-6.383c.315-1.388.46-2.768.51-4.013.07-1.745-.271-3.262-1.64-4.63" opacity=".28" />
    </svg>
  );
}
