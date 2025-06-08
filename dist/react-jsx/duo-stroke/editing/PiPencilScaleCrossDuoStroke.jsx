import React from 'react';

/**
 * PiPencilScaleCrossDuoStroke icon from the duo-stroke style in editing category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiPencilScaleCrossDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'pencil-scale-cross icon',
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
      <path d="M3 3.00449L5.72665 3.00014C6.11608 2.99951 6.31079 2.9992 6.49406 3.04318C6.65654 3.08217 6.81188 3.14665 6.95435 3.23425C7.11505 3.33305 7.25274 3.47134 7.52811 3.74792L20.5014 16.7782C20.5328 16.8098 20.5486 16.8256 20.5622 16.84C21.0616 17.3671 21.1427 18.1667 20.7594 18.7842C20.2689 19.5743 19.6064 20.2449 18.8267 20.7487C18.204 21.151 17.3862 21.0629 16.8626 20.537L3.8099 7.42698C3.54444 7.16035 3.41171 7.02704 3.31544 6.87185C3.23007 6.73423 3.16608 6.58435 3.12568 6.42737C3.08011 6.25034 3.07546 6.06187 3.06616 5.68492L3 3.00449Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M4.516 13.0691L7.36705 15.9202M4.516 13.0691L3.94579 13.6394C3.14742 14.4377 2.74823 14.8369 2.59867 15.2972C2.46711 15.7021 2.46711 16.1383 2.59867 16.5432C2.74823 17.0035 3.14742 17.4027 3.94579 18.201L5.79897 20.0542C6.59734 20.8526 6.99652 21.2518 7.45683 21.4013C7.86173 21.5329 8.29788 21.5329 8.70278 21.4013C9.16309 21.2518 9.56229 20.8526 10.3606 20.0542L13.3778 17.0371M4.516 13.0691L6.97698 10.6082M13.0691 4.516L15.2074 6.65428M13.0691 4.516L10.6757 6.90948M13.0691 4.516L13.6394 3.94579C14.4377 3.14742 14.8369 2.74823 15.2972 2.59867C15.7021 2.46711 16.1383 2.46711 16.5432 2.59867C17.0035 2.74823 17.4027 3.14742 18.201 3.94579L20.0542 5.79897C20.8526 6.59734 21.2518 6.99652 21.4013 7.45683C21.5329 7.86173 21.5329 8.29789 21.4013 8.70279C21.2518 9.16309 20.8525 9.56231 20.0542 10.3606L17.0765 13.3384" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
