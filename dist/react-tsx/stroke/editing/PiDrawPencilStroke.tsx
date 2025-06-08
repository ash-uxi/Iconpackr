import React from 'react';

/**
 * PiDrawPencilStroke icon from the stroke style in editing category.
 */
interface PiDrawPencilStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiDrawPencilStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'draw-pencil icon',
  ...props
}: PiDrawPencilStrokeProps): JSX.Element {
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
      <path d="M9.01192 13L8.00012 14.693V20.2313M9.01192 13L12.0001 8L14.9883 13M9.01192 13H14.9883M14.9883 13L16.0001 14.693V20.2313M16.0001 20.2313C19.049 18.747 21.1501 15.6187 21.1501 11.9996C21.1501 6.94621 17.0535 2.84961 12.0001 2.84961C6.94669 2.84961 2.8501 6.94621 2.8501 11.9996C2.8501 15.6187 4.9512 18.747 8.00012 20.2313M16.0001 20.2313C14.7917 20.8196 13.4345 21.1496 12.0001 21.1496C10.5658 21.1496 9.2085 20.8196 8.00012 20.2313" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
