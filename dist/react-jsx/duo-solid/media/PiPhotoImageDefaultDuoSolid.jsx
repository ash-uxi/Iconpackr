import React from 'react';

/**
 * PiPhotoImageDefaultDuoSolid icon from the duo-solid style in media category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiPhotoImageDefaultDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'photo-image-default icon',
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
      <path d="M20.9929 9.25H20.9392C19.6035 9.24999 18.8722 9.24998 18.2473 9.31422C12.566 9.89828 8.05542 14.3266 7.34604 19.9688C8.04013 19.9995 8.89374 20 10 20H14C15.4166 20 16.419 19.9992 17.2026 19.9352C17.9745 19.8721 18.4457 19.7527 18.816 19.564C19.5686 19.1805 20.1805 18.5686 20.564 17.816C20.7527 17.4457 20.8721 16.9745 20.9352 16.2026C20.9992 15.419 21 14.4166 21 13V11C21 10.3312 20.9998 9.75471 20.9929 9.25ZM7.5 6.5C6.39543 6.5 5.5 7.39543 5.5 8.5C5.5 9.60457 6.39543 10.5 7.5 10.5C8.60457 10.5 9.5 9.60457 9.5 8.5C9.5 7.39543 8.60457 6.5 7.5 6.5Z" fill={color || "currentColor"} fillRule="evenodd" clipRule="evenodd" /> <path d="M9.95624 2C8.5932 1.99999 7.50917 1.99999 6.63458 2.07144C5.73898 2.14462 4.9753 2.29768 4.27606 2.65396C3.14708 3.2292 2.2292 4.14708 1.65396 5.27606C1.29768 5.9753 1.14462 6.73898 1.07144 7.63458C0.999986 8.50917 0.999992 9.5932 1 10.9562V13.0438C0.999992 14.4068 0.999986 15.4908 1.07144 16.3654C1.14462 17.261 1.29768 18.0247 1.65396 18.7239C2.2292 19.8529 3.14709 20.7708 4.27606 21.346C5.28355 21.8594 6.45408 21.9602 7.99841 21.9891C8.58072 22 9.24244 22 9.99256 22H14.0438C15.4068 22 16.4909 22 17.3654 21.9286C18.261 21.8554 19.0247 21.7023 19.7239 21.346C20.8529 20.7708 21.7708 19.8529 22.346 18.7239C22.7023 18.0247 22.8554 17.261 22.9286 16.3654C23 15.4909 23 14.4069 23 13.0439V11C23 10.6453 23 10.3108 22.9989 9.99644C22.9915 7.90993 22.9508 6.46297 22.346 5.27606C21.7708 4.14709 20.8529 3.2292 19.7239 2.65396C19.0247 2.29768 18.261 2.14462 17.3654 2.07144C16.4908 1.99999 15.4068 1.99999 14.0438 2H9.95624Z" fill={color || "currentColor"} opacity="0.28" />
    </svg>
  );
}
