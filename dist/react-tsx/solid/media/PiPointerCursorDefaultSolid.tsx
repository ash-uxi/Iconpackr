import React from 'react';

/**
 * PiPointerCursorDefaultSolid icon from the solid style in media category.
 */
interface PiPointerCursorDefaultSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPointerCursorDefaultSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'pointer-cursor-default icon',
  ...props
}: PiPointerCursorDefaultSolidProps): JSX.Element {
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
      <path d="M10.3642 2.84017C9.01047 2.50173 7.92688 2.23082 7.0618 2.09691C6.1891 1.96182 5.38234 1.9372 4.64579 2.22563C3.53705 2.65982 2.65982 3.53705 2.22563 4.64579C1.9372 5.38234 1.96182 6.1891 2.09691 7.0618C2.23082 7.92688 2.50172 9.01047 2.84016 10.3642L4.1944 15.7811C4.48738 16.953 4.71429 17.8607 4.90953 18.5344C5.09562 19.1766 5.28862 19.7442 5.5556 20.1355C7.17596 22.5107 10.6326 22.6393 12.425 20.3912C12.7203 20.0207 12.955 19.469 13.1883 18.8425C13.4331 18.1852 13.7268 17.2969 14.1061 16.1501L14.1134 16.1279C14.26 15.6844 14.3074 15.5473 14.3639 15.4297C14.5875 14.9635 14.9635 14.5875 15.4297 14.3638C15.5473 14.3074 15.6845 14.26 16.1279 14.1134L16.1501 14.1061C17.2968 13.7268 18.1852 13.4331 18.8425 13.1883C19.469 12.955 20.0207 12.7203 20.3911 12.425C22.6393 10.6326 22.5107 7.17595 20.1355 5.55559C19.7441 5.28862 19.1765 5.09562 18.5344 4.90952C17.8607 4.71429 16.953 4.48738 15.7812 4.19441L10.3642 2.84017Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
