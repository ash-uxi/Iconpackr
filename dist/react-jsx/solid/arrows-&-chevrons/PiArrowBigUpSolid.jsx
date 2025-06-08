import React from 'react';

/**
 * PiArrowBigUpSolid icon from the solid style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiArrowBigUpSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'arrow-big-up icon',
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
      <path d="M19.804 9.2081C19.92 9.3649 19.9876 9.55221 19.9985 9.74696C20.0094 9.9417 19.9632 10.1354 19.8654 10.3042C19.7676 10.4729 19.6226 10.6094 19.4482 10.6968C19.2739 10.7842 19.0777 10.8187 18.884 10.7961C17.924 10.6851 16.964 10.5961 16 10.5321V19.4281C16 19.6811 16 19.9271 15.983 20.1351C15.9677 20.4026 15.8994 20.6643 15.782 20.9051C15.5903 21.2814 15.2843 21.5874 14.908 21.7791C14.6671 21.8961 14.4054 21.9641 14.138 21.9791C13.93 21.9971 13.684 21.9971 13.432 21.9971H10.568C10.316 21.9971 10.07 21.9971 9.862 21.9801C9.59456 21.9648 9.33282 21.8964 9.092 21.7791C8.7157 21.5874 8.40975 21.2814 8.218 20.9051C8.10066 20.6643 8.03234 20.4025 8.017 20.1351C8 19.9261 8 19.6801 8 19.4271V10.5321C7.03635 10.5968 6.0744 10.6848 5.115 10.7961C4.92135 10.8185 4.72537 10.7839 4.55117 10.6964C4.37696 10.6089 4.23213 10.4724 4.13449 10.3036C4.03684 10.1349 3.99064 9.94131 4.00157 9.74667C4.0125 9.55203 4.08008 9.36484 4.196 9.2081C6.05773 6.68947 8.23787 4.42261 10.682 2.4641C11.0559 2.16434 11.5208 2.00098 12 2.00098C12.4792 2.00098 12.9441 2.16434 13.318 2.4641C15.7622 4.42259 17.9423 6.68945 19.804 9.2081Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" stroke="none"/>
    </svg>
  );
}
