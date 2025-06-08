import React from 'react';

/**
 * PiFolderQuestionMarkStroke icon from the stroke style in files-&-folders category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiFolderQuestionMarkStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'folder-question-mark icon',
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
      <path d="M9.8501 11.5022C10.0263 11.0014 10.3741 10.579 10.8318 10.31C11.2896 10.0409 11.8278 9.9426 12.3511 10.0324C12.8744 10.1221 13.3491 10.3942 13.691 10.8004C14.033 11.2066 14.2201 11.7207 14.2193 12.2517C14.2193 13.7506 11.971 14.5 11.971 14.5M12.0001 17.5H12.0101M22 12.4V14.6C22 16.8402 22 17.9603 21.564 18.816C21.1805 19.5686 20.5686 20.1805 19.816 20.564C18.9603 21 17.8402 21 15.6 21H8.4C6.15979 21 5.03968 21 4.18404 20.564C3.43139 20.1805 2.81947 19.5686 2.43597 18.816C2 17.9603 2 16.8402 2 14.6V9.4C2 7.15979 2 6.03968 2.43597 5.18404C2.81947 4.43139 3.43139 3.81947 4.18404 3.43597C5.03968 3 6.15979 3 8.4 3H8.71556C9.18517 3 9.41997 3 9.6331 3.06473C9.82179 3.12203 9.99732 3.21597 10.1497 3.34118C10.3217 3.48262 10.452 3.67798 10.7125 4.06872L11.2875 4.93128C11.548 5.32202 11.6783 5.51739 11.8503 5.65882C12.0027 5.78403 12.1782 5.87797 12.3669 5.93527C12.58 6 12.8148 6 13.2844 6H15.6C17.8402 6 18.9603 6 19.816 6.43597C20.5686 6.81947 21.1805 7.43139 21.564 8.18404C22 9.03969 22 10.1598 22 12.4Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
