import React from 'react';

/**
 * PiLayerTwoStroke icon from the stroke style in security category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiLayerTwoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'layer-two icon',
  ...props 
}) {
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
      <path d="M20.9229 14.5737C20.8048 14.8092 20.4367 14.9833 19.7007 15.3313L13.4293 18.297C12.9052 18.5448 12.6431 18.6687 12.3683 18.7175C12.1248 18.7607 11.875 18.7607 11.6316 18.7175C11.3568 18.6687 11.0947 18.5448 10.5706 18.297L4.29922 15.3313C3.56316 14.9833 3.19513 14.8092 3.07703 14.5737M13.4293 13.7971L19.7007 10.8314C20.4368 10.4834 20.8048 10.3093 20.9229 10.0738C21.0257 9.86888 21.0257 9.63112 20.9229 9.42617C20.8048 9.19067 20.4368 9.01663 19.7007 8.66856L13.4293 5.70291C12.9052 5.45508 12.6432 5.33117 12.3683 5.2824C12.1249 5.2392 11.8751 5.2392 11.6317 5.2824C11.3568 5.33117 11.0948 5.45508 10.5707 5.70291L4.29927 8.66856C3.56321 9.01663 3.19518 9.19067 3.07708 9.42617C2.97431 9.63112 2.97431 9.86888 3.07708 10.0738C3.19518 10.3093 3.56321 10.4834 4.29927 10.8314L10.5707 13.7971C11.0948 14.0449 11.3568 14.1688 11.6317 14.2176C11.8751 14.2608 12.1249 14.2608 12.3683 14.2176C12.6432 14.1688 12.9052 14.0449 13.4293 13.7971Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
