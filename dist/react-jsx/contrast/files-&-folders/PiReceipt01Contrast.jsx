import React from 'react';

/**
 * PiReceipt01Contrast icon from the contrast style in files-&-folders category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiReceipt01Contrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'receipt-01 icon',
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
      <path fill="currentColor" d="M3 15.4V4.971c0-.442 0-.663.04-.821a1.3 1.3 0 0 1 1.46-.963c.162.025.365.112.771.286.245.106.368.158.491.199a3 3 0 0 0 1.511.095c.128-.024.256-.06.512-.134l.896-.256c.49-.14.736-.21.986-.238a3 3 0 0 1 .666 0c.25.028.495.098.986.238l.896.256c.256.073.384.11.512.135a3 3 0 0 0 1.51-.096c.124-.04.247-.093.492-.199.406-.174.61-.26.77-.286a1.3 1.3 0 0 1 1.46.963c.041.158.041.379.041.821v14.03a2 2 0 0 0 2 2H8.6c-1.96 0-2.94 0-3.689-.382a3.5 3.5 0 0 1-1.53-1.53C3 18.34 3 17.36 3 15.4" opacity=".28"/>
  <path d="M7 8h6m-6 4h6m-6 4h3m7-5v8a2 2 0 0 0 2 2m-2-10V4.971c0-.442 0-.663-.04-.821a1.3 1.3 0 0 0-1.46-.963c-.162.025-.365.112-.771.286a6 6 0 0 1-.491.199 3 3 0 0 1-1.511.095c-.128-.024-.256-.06-.512-.134l-.896-.256c-.49-.14-.736-.21-.986-.238a3 3 0 0 0-.666 0c-.25.028-.495.098-.986.238l-.896.256c-.256.073-.384.11-.512.135a3 3 0 0 1-1.51-.096c-.124-.04-.247-.093-.492-.199-.406-.174-.61-.26-.77-.286a1.3 1.3 0 0 0-1.46.963C3 4.308 3 4.529 3 4.97v10.43c0 1.96 0 2.94.381 3.688a3.5 3.5 0 0 0 1.53 1.53C5.66 21 6.64 21 8.6 21H19m-2-10h2.4c.56 0 .84 0 1.054.11a1 1 0 0 1 .437.436C21 11.76 21 12.04 21 12.6V19a2 2 0 0 1-2 2"/>
    </svg>
  );
}
