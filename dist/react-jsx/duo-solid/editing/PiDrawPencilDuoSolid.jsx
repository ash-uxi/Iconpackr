import React from 'react';

/**
 * PiDrawPencilDuoSolid icon from the duo-solid style in editing category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiDrawPencilDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'draw-pencil icon',
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
      <path d="M12.0001 1.8501C6.3941 1.8501 1.8501 6.3941 1.8501 12.0001C1.8501 14.692 2.91947 17.2737 4.82296 19.1772C6.72646 21.0807 9.30815 22.1501 12.0001 22.1501C14.692 22.1501 17.2737 21.0807 19.1772 19.1772C21.0807 17.2737 22.1501 14.692 22.1501 12.0001C22.1501 6.3941 17.6061 1.8501 12.0001 1.8501Z" fill={color || "currentColor"} opacity="0.28" fillRule="evenodd" clipRule="evenodd" /> <path d="M12.8581 7.48684C12.7693 7.33853 12.6436 7.21577 12.4932 7.13053C12.3429 7.04529 12.173 7.00049 12.0001 7.00049C11.8273 7.00049 11.6574 7.04529 11.507 7.13053C11.3566 7.21577 11.2309 7.33853 11.1421 7.48684L8.15312 12.4868L7.14212 14.1798C7.04931 14.3349 7.00024 14.5122 7.00012 14.6928V17.9268C7.00012 18.1921 7.10548 18.4464 7.29302 18.6339C7.48055 18.8215 7.73491 18.9268 8.00012 18.9268C8.26534 18.9268 8.51969 18.8215 8.70723 18.6339C8.89477 18.4464 9.00012 18.1921 9.00012 17.9268V14.9698L9.87012 13.5138L10.1771 13.0008H13.8231L14.1301 13.5138L15.0001 14.9698V17.9278C15.0001 18.1931 15.1055 18.4474 15.293 18.6349C15.4806 18.8225 15.7349 18.9278 16.0001 18.9278C16.2653 18.9278 16.5197 18.8225 16.7072 18.6349C16.8948 18.4474 17.0001 18.1931 17.0001 17.9278V14.6938C17 14.5132 16.9509 14.3359 16.8581 14.1808L15.8471 12.4878L12.8581 7.48684Z" fill={color || "currentColor"} fillRule="evenodd" clipRule="evenodd" />
    </svg>
  );
}
