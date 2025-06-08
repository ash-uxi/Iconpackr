import React from 'react';

/**
 * PiPhotoImagePortraitStroke icon from the stroke style in media category.
 */
interface PiPhotoImagePortraitStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPhotoImagePortraitStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'photo-image-portrait icon',
  ...props
}: PiPhotoImagePortraitStrokeProps): JSX.Element {
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
      <path d="M20 10.0394C18.6891 10.0885 17.7423 10.1985 16.9009 10.4456C13.3091 11.5002 10.5002 14.3091 9.44558 17.9009C9.1424 18.9335 9.04551 20.1248 9.01454 21.9529M20 10.0394V10C20 7.19974 20 5.79961 19.455 4.73005C18.9757 3.78924 18.2108 3.02433 17.27 2.54497C16.2004 2 14.8003 2 12 2C9.19974 2 7.79961 2 6.73005 2.54497C5.78924 3.02433 5.02433 3.78924 4.54497 4.73005C4 5.79961 4 7.19974 4 10V14C4 16.8003 4 18.2004 4.54497 19.27C5.02433 20.2108 5.78924 20.9757 6.73005 21.455C7.32675 21.7591 8.02634 21.8935 9.01454 21.9529M20 10.0394V14C20 16.8003 20 18.2004 19.455 19.27C18.9757 20.2108 18.2108 20.9757 17.27 21.455C16.2004 22 14.8003 22 12 22C10.762 22 9.79765 22 9.01454 21.9529M9.5 8.5C8.94772 8.5 8.5 8.05228 8.5 7.5C8.5 6.94772 8.94772 6.5 9.5 6.5C10.0523 6.5 10.5 6.94772 10.5 7.5C10.5 8.05228 10.0523 8.5 9.5 8.5Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
