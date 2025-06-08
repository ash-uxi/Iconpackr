import React from 'react';

/**
 * PiCoffeeCup01Contrast icon from the contrast style in food category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiCoffeeCup01Contrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'coffee-cup-01 icon',
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
      <path fill="currentColor" d="M4 11.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C5.52 8 6.08 8 7.2 8h7.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874c.121.238.175.516.199.908.019.314.019.702.019 1.2V14c0 .929 0 1.393-.051 1.783q-.014.11-.033.217a6 6 0 0 1-5.133 4.949C12.393 21 11.93 21 11 21s-1.393 0-1.783-.051a6 6 0 0 1-5.166-5.166C4 15.393 4 14.93 4 14z" opacity=".28"/>
  <path d="M7 4v-.066c0-.375.188-.726.5-.934s.5-.559.5-.934V2m3 2v-.066c0-.375.188-.726.5-.934s.5-.559.5-.934V2m3 2v-.066c0-.375.188-.726.5-.934s.5-.559.5-.934V2m1.916 14q.018-.108.033-.217C18 15.393 18 14.93 18 14v-2.8c0-.498 0-.886-.02-1.2m-.064 6a6 6 0 0 1-5.133 4.949C12.393 21 11.93 21 11 21s-1.393 0-1.783-.051a6 6 0 0 1-5.166-5.166C4 15.393 4 14.93 4 14v-2.8c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C5.52 8 6.08 8 7.2 8h7.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874c.121.238.175.516.199.908m-.065 6H19a3 3 0 1 0 0-6h-1.02"/>
    </svg>
  );
}
