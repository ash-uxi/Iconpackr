import React from 'react';

/**
 * PiDice1Solid icon from the solid style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiDice1Solid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'dice-1 icon',
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
      <path d="M10.9562 2H13.0438C14.4068 1.99999 15.4908 1.99999 16.3654 2.07144C17.261 2.14462 18.0247 2.29768 18.7239 2.65396C19.8529 3.2292 20.7708 4.14709 21.346 5.27606C21.7023 5.9753 21.8554 6.73898 21.9286 7.63458C22 8.50914 22 9.59313 22 10.9561V13.0438C22 14.4068 22 15.4909 21.9286 16.3654C21.8554 17.261 21.7023 18.0247 21.346 18.7239C20.7708 19.8529 19.8529 20.7708 18.7239 21.346C18.0247 21.7023 17.261 21.8554 16.3654 21.9286C15.4909 22 14.4069 22 13.0439 22H10.9562C9.59322 22 8.50914 22 7.63458 21.9286C6.73898 21.8554 5.9753 21.7023 5.27606 21.346C4.14709 20.7708 3.2292 19.8529 2.65396 18.7239C2.29768 18.0247 2.14462 17.261 2.07144 16.3654C1.99999 15.4908 1.99999 14.4068 2 13.0438V10.9562C1.99999 9.5932 1.99999 8.50917 2.07144 7.63458C2.14462 6.73898 2.29768 5.9753 2.65396 5.27606C3.2292 4.14708 4.14708 3.2292 5.27606 2.65396C5.9753 2.29768 6.73898 2.14462 7.63458 2.07144C8.50917 1.99999 9.5932 1.99999 10.9562 2ZM12 10.9C11.3925 10.9 10.9 11.3925 10.9 12C10.9 12.6075 11.3925 13.1 12 13.1H12.01C12.6175 13.1 13.11 12.6075 13.11 12C13.11 11.3925 12.6175 10.9 12.01 10.9H12Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" stroke="none"/>
    </svg>
  );
}
