import React from 'react';

/**
 * PiVisionProSolid icon from the solid style in ar-&-vr category.
 */
interface PiVisionProSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiVisionProSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'vision-pro icon',
  ...props
}: PiVisionProSolidProps): JSX.Element {
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
      <path d="M11.9998 5.5C9.98493 5.50001 7.33218 5.52596 5.16773 6.29894C4.06586 6.69244 3.02625 7.30015 2.25774 8.25192C1.47903 9.21631 1.04258 10.4551 1.02318 11.9873C1.00522 13.4055 1.32254 14.9158 2.09584 16.138C2.88848 17.3909 4.15518 18.3214 5.91034 18.4792C7.57246 18.6286 8.75335 17.8133 9.6361 17.1919L9.64647 17.1846C10.5943 16.5173 11.1953 16.0942 12.0005 16.0937C12.8094 16.0931 13.4104 16.515 14.354 17.1774L14.3971 17.2076C15.2954 17.8381 16.4943 18.6539 18.1872 18.4695C19.9193 18.2807 21.1603 17.3444 21.934 16.0978C22.6892 14.8814 22.9945 13.3882 22.9767 11.9873C22.9573 10.4551 22.5209 9.21627 21.7421 8.25187C20.9736 7.3001 19.934 6.69239 18.8321 6.2989C16.6676 5.52593 14.0148 5.49999 11.9998 5.5Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
