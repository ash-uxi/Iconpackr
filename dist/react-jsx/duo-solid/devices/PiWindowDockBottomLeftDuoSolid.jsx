import React from 'react';

/**
 * PiWindowDockBottomLeftDuoSolid icon from the duo-solid style in devices category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiWindowDockBottomLeftDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'window-dock-bottom-left icon',
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
      <path d="M10.2 18H10.223C10.343 18 10.484 18 10.61 17.99C10.8086 17.9769 11.0027 17.9246 11.181 17.836C11.463 17.6923 11.6922 17.463 11.836 17.181C11.9245 17.0027 11.9768 16.8087 11.99 16.61C12 16.484 12 16.342 12 16.223V12.777C12 12.657 12 12.516 11.99 12.39C11.978 12.245 11.947 12.037 11.836 11.819C11.6922 11.5371 11.463 11.3078 11.181 11.164C10.963 11.052 10.755 11.022 10.61 11.01C10.485 11 10.342 11 10.223 11H6.777C6.657 11 6.515 11 6.39 11.01C6.245 11.022 6.037 11.052 5.819 11.164C5.53703 11.3078 5.30776 11.5371 5.164 11.819C5.052 12.037 5.022 12.245 5.01 12.39C5 12.515 5 12.658 5 12.777V16.223C5 16.343 5 16.484 5.01 16.61C5.02283 16.8086 5.07483 17.0027 5.163 17.181C5.30702 17.4632 5.53666 17.6924 5.819 17.836C5.99729 17.9246 6.19136 17.9769 6.39 17.99C6.51882 17.9984 6.64792 18.0018 6.777 18H10.2Z" fill={color || "currentColor"} fillRule="evenodd" clipRule="evenodd" /> <path d="M2 15.2V15.241C2 16.046 2 16.711 2.044 17.251C2.09 17.814 2.189 18.331 2.436 18.816C2.81949 19.5686 3.43139 20.1805 4.184 20.564C4.669 20.811 5.186 20.91 5.748 20.956C6.29 21 6.954 21 7.758 21H16.242C17.047 21 17.712 21 18.252 20.956C18.815 20.91 19.332 20.811 19.817 20.564C20.5696 20.1805 21.1815 19.5686 21.565 18.816C21.812 18.331 21.911 17.814 21.957 17.252C22 16.71 22 16.046 22 15.242V8.758C22 7.953 22 7.288 21.956 6.748C21.91 6.185 21.811 5.668 21.564 5.183C21.1805 4.43039 20.5686 3.81849 19.816 3.435C19.331 3.188 18.814 3.089 18.252 3.043C17.71 3 17.046 3 16.242 3H7.759C6.954 3 6.289 3 5.749 3.044C5.186 3.09 4.669 3.189 4.184 3.436C3.43139 3.81949 2.81949 4.43139 2.436 5.184C2.189 5.669 2.09 6.186 2.044 6.748C2 7.289 2 7.954 2 8.758V15.2Z" fill={color || "currentColor"} opacity="0.28" fillRule="evenodd" clipRule="evenodd" />
    </svg>
  );
}
