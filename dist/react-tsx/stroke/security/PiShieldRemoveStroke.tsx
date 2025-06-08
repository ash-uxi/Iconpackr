import React from 'react';

/**
 * PiShieldRemoveStroke icon from the stroke style in security category.
 */
interface PiShieldRemoveStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiShieldRemoveStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'shield-remove icon',
  ...props
}: PiShieldRemoveStrokeProps): JSX.Element {
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
      <path d="M8.99961 12.0001H14.9996M10.7499 2.36804L5.36231 4.31356C4.21313 4.72854 3.43042 5.799 3.38346 7.01992L3.25621 10.3285C3.09853 14.4282 5.2355 18.2749 8.79958 20.3071L10.3203 21.1741C11.2211 21.6878 12.3233 21.6998 13.2351 21.2059L14.7237 20.3995C18.5411 18.3318 20.7852 14.2123 20.4522 9.88366L20.2252 6.93316C20.1347 5.7566 19.3629 4.74238 18.253 4.34159L12.7878 2.36804C12.1293 2.13025 11.4084 2.13025 10.7499 2.36804Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
