import React from 'react';

/**
 * PiCameraAiDuoSolid icon from the duo-solid style in ai category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiCameraAiDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'camera-ai icon',
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
      <path fill={color || "currentColor"} fillRule="evenodd" d="M22 10.66v-.171c0-.99.001-1.725-.21-2.351a4 4 0 0 0-2.51-2.511c-.627-.211-1.363-.21-2.352-.21-.129 0-.259.003-.388-.002h-.004l-.002-.003-.122-.18-1.141-1.712c-.134-.201-.301-.455-.536-.648a2 2 0 0 0-.689-.368c-.29-.089-.595-.088-.836-.087H10.79c-.242 0-.546-.002-.837.087a2 2 0 0 0-.689.368c-.234.193-.402.447-.536.648L7.587 5.234l-.12.178-.003.003H7.46c-.128.005-.256.002-.384.002-.978 0-1.706-.001-2.326.205a4 4 0 0 0-2.529 2.53c-.206.619-.206 1.347-.205 2.326v5.18c0 .805 0 1.47.044 2.01.046.563.144 1.08.392 1.565A4 4 0 0 0 4.2 20.98c.485.247 1.002.346 1.564.392.541.044 1.206.044 2.01.044h8.468c.805 0 1.469 0 2.01-.044.562-.046 1.079-.145 1.564-.392a4 4 0 0 0 1.748-1.748c.247-.485.346-1.002.392-1.564.044-.541.044-1.206.044-2.01V10.66" clipRule="evenodd" opacity=".28" /> <path d="M8.466 16.604h.01m3.99-7c-.637 1.616-1.339 2.345-3 3 1.661.655 2.363 1.383 3 3 .638-1.617 1.34-2.345 3-3-1.66-.655-2.362-1.384-3-3" />
    </svg>
  );
}
