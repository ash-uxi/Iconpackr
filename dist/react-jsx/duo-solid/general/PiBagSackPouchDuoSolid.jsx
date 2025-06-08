import React from 'react';

/**
 * PiBagSackPouchDuoSolid icon from the duo-solid style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiBagSackPouchDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'bag-sack-pouch icon',
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
      <path d="M10.9638 5.68945C10.5876 5.68945 10.2187 5.71998 9.8583 5.77856C5.86828 6.42721 3.16129 10.4067 2.49268 14.1234C2.15185 16.0181 2.30166 18.0045 3.18668 19.6274C4.09585 21.2946 5.72285 22.4658 8.06836 22.7566C10.6796 23.0803 13.3209 23.0803 15.9321 22.7566C18.1673 22.4795 19.7554 21.4021 20.6884 19.8467C21.5991 18.3282 21.8258 16.4577 21.5888 14.6445C21.1221 11.0755 18.7682 7.20914 15.199 6.03686C14.5161 5.81253 13.7922 5.68945 13.0367 5.68945H10.9638Z" fill={color || "currentColor"} opacity="0.28" /> <path d="M12.8882 3.49959C13.6194 3.01215 14.5238 2.87568 15.3587 3.11542L14.2834 5.80379C14.5958 5.86129 14.9013 5.93982 15.1989 6.03759C15.5378 6.14891 15.8658 6.28452 16.1822 6.44186L17.5927 2.91567C17.6912 2.66942 17.6879 2.39413 17.5834 2.15036C17.4789 1.90659 17.2819 1.7143 17.0356 1.6158L16.3856 1.35581C14.8647 0.747444 13.1418 0.926842 11.7788 1.83549C11.1224 2.27309 10.3191 2.43201 9.54551 2.27729L8.56869 2.08193C8.20219 2.00863 7.82541 2.14583 7.59185 2.43763C7.3583 2.72942 7.30696 3.12711 7.45876 3.46865L8.62649 6.09606C9.02186 5.9555 9.43273 5.84847 9.85818 5.7793C10.114 5.73771 10.3742 5.71026 10.6381 5.69784L10.0321 4.33414C11.04 4.35375 12.0378 4.06651 12.8882 3.49959Z" fill={color || "currentColor"} />
    </svg>
  );
}
