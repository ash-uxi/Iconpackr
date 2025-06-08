import React from 'react';

/**
 * PiWaterTripleDropletDuoSolid icon from the duo-solid style in weather category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiWaterTripleDropletDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'water-triple-droplet icon',
  ...props 
}) {
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
      <path d="M12.6728 1.31602C12.4887 1.1485 12.2487 1.05566 11.9998 1.05566C11.7509 1.05566 11.5109 1.1485 11.3268 1.31602C8.0898 4.26302 7.0688 6.96002 7.6548 9.12302C8.2308 11.251 10.2518 12.389 11.9998 12.389C13.7478 12.389 15.7688 11.251 16.3448 9.12302C16.9308 6.96002 15.9088 4.26302 12.6728 1.31602Z" fill={color || "currentColor"} opacity="0.28" fillRule="evenodd" clipRule="evenodd" /> <path d="M6.67272 11.526C6.48861 11.3585 6.24864 11.2656 5.99972 11.2656C5.7508 11.2656 5.51083 11.3585 5.32672 11.526C2.09072 14.473 1.06872 17.17 1.65472 19.333C2.22972 21.46 4.25172 22.599 5.99972 22.599C7.74772 22.599 9.76872 21.461 10.3447 19.333C10.9307 17.17 9.90872 14.473 6.67272 11.526ZM18.6727 11.526C18.4886 11.3585 18.2486 11.2656 17.9997 11.2656C17.7508 11.2656 17.5108 11.3585 17.3267 11.526C14.0907 14.473 13.0687 17.17 13.6547 19.333C14.2307 21.461 16.2517 22.599 17.9997 22.599C19.7477 22.599 21.7687 21.461 22.3447 19.333C22.9307 17.17 21.9087 14.473 18.6727 11.526Z" fill={color || "currentColor"} fillRule="evenodd" clipRule="evenodd" />
    </svg>
  );
}
