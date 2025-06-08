import React from 'react';

/**
 * PiVolumeOneDuoStroke icon from the duo-stroke style in media category.
 */
interface PiVolumeOneDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiVolumeOneDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'volume-one icon',
  ...props
}: PiVolumeOneDuoStrokeProps): JSX.Element {
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
      <path d="M14 18.9127V5.08767C14 3.37675 12.0661 2.38153 10.6739 3.37599L7.86092 5.38524C7.29344 5.79058 6.6464 6.0709 5.96255 6.20767C3.6585 6.66848 2 8.69152 2 11.0412V12.9592C2 15.3088 3.6585 17.3319 5.96255 17.7927C6.6464 17.9295 7.29344 18.2098 7.86092 18.6151L10.6739 20.6244C12.0661 21.6188 14 20.6236 14 18.9127Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M18 14C18.317 13.7374 18.5685 13.4256 18.7401 13.0824C18.9117 12.7392 19 12.3714 19 12C19 11.6286 18.9117 11.2608 18.7401 10.9176C18.5685 10.5744 18.317 10.2626 18 10" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
