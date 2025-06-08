import React from 'react';

/**
 * PiFaceSmileUpsideDownDuoSolid icon from the duo-solid style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiFaceSmileUpsideDownDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'face-smile-upside-down icon',
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
      <path d="M12.0001 2.0459C6.39441 2.0459 1.8501 6.59021 1.8501 12.1959C1.8501 17.8016 6.39441 22.3459 12.0001 22.3459C17.6058 22.3459 22.1501 17.8016 22.1501 12.1959C22.1501 6.59021 17.6058 2.0459 12.0001 2.0459Z" fill={color || "currentColor"} opacity="0.28" /> <path d="M14.8565 10.5965C15.2432 10.9909 15.8763 10.9972 16.2707 10.6106C16.6651 10.224 16.6714 9.59083 16.2847 9.19644C15.1969 8.08681 13.6781 7.39648 11.9999 7.39648C10.3217 7.39648 8.80289 8.08681 7.7151 9.19644C7.32848 9.59083 7.33477 10.224 7.72916 10.6106C8.12354 10.9972 8.75668 10.9909 9.1433 10.5965C9.87043 9.8548 10.8807 9.39648 11.9999 9.39648C13.1191 9.39648 14.1294 9.8548 14.8565 10.5965Z" fill={color || "currentColor"} /> <path d="M14.9998 15.5962C14.4475 15.5962 13.9998 15.1485 13.9998 14.5962V13.5962C13.9998 13.0439 14.4475 12.5962 14.9998 12.5962C15.5521 12.5962 15.9998 13.0439 15.9998 13.5962L15.9998 14.5962C15.9998 15.1485 15.5521 15.5962 14.9998 15.5962Z" fill={color || "currentColor"} /> <path d="M8.99983 15.5962C8.44755 15.5962 7.99983 15.1485 7.99983 14.5962L7.99983 13.5962C7.99983 13.0439 8.44755 12.5962 8.99983 12.5962C9.55212 12.5962 9.99983 13.0439 9.99983 13.5962L9.99983 14.5962C9.99983 15.1485 9.55212 15.5962 8.99983 15.5962Z" fill={color || "currentColor"} />
    </svg>
  );
}
