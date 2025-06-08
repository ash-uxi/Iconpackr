import React from 'react';

/**
 * PiWindowDockTopDuoSolid icon from the duo-solid style in devices category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiWindowDockTopDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'window-dock-top icon',
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
      <path d="M22 15.241C22 16.046 22 16.711 21.956 17.251C21.91 17.814 21.811 18.331 21.564 18.816C21.1805 19.5686 20.5686 20.1805 19.816 20.564C19.331 20.811 18.814 20.91 18.252 20.956C17.71 21 17.046 21 16.242 21H7.758C6.953 21 6.288 21 5.748 20.956C5.185 20.91 4.668 20.811 4.183 20.564C3.43039 20.1805 2.81849 19.5686 2.435 18.816C2.188 18.331 2.089 17.814 2.043 17.252C2 16.71 2 16.046 2 15.242V8.758C2 7.953 2 7.288 2.044 6.748C2.09 6.185 2.189 5.668 2.436 5.183C2.81949 4.43039 3.43139 3.81849 4.184 3.435C4.669 3.188 5.186 3.089 5.748 3.043C6.29 3 6.954 3 7.758 3H16.241C17.046 3 17.711 3 18.251 3.044C18.814 3.09 19.331 3.189 19.816 3.436C20.5686 3.81949 21.1805 4.43139 21.564 5.184C21.811 5.669 21.91 6.186 21.956 6.748C22 7.289 22 7.954 22 8.758V15.241Z" fill={color || "currentColor"} opacity="0.28" fillRule="evenodd" clipRule="evenodd" /> <path d="M6.777 13C6.657 13 6.516 13 6.39 12.99C6.19138 12.9768 5.99732 12.9245 5.819 12.836C5.53703 12.6922 5.30776 12.463 5.164 12.181C5.07548 12.0027 5.02314 11.8086 5.01 11.61C5 11.485 5 11.342 5 11.223V7.777C5 7.657 5 7.515 5.01 7.39C5.022 7.245 5.052 7.037 5.164 6.819C5.30776 6.53703 5.53703 6.30776 5.819 6.164C6.037 6.052 6.245 6.022 6.39 6.01C6.516 6 6.658 6 6.777 6H17.223C17.343 6 17.485 6 17.61 6.01C17.8086 6.02288 18.0026 6.07488 18.181 6.163C18.4631 6.30702 18.6924 6.53666 18.836 6.819C18.948 7.037 18.978 7.245 18.99 7.39C19 7.515 19 7.658 19 7.777V11.223C19 11.343 19 11.484 18.99 11.61C18.9772 11.8086 18.9252 12.0026 18.837 12.181C18.693 12.4631 18.4633 12.6924 18.181 12.836C18.0027 12.9245 17.8086 12.9768 17.61 12.99C17.485 13 17.342 13 17.223 13H6.777Z" fill={color || "currentColor"} fillRule="evenodd" clipRule="evenodd" />
    </svg>
  );
}
