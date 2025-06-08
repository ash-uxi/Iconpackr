import React from 'react';

/**
 * PiCreditCardLockedStroke icon from the stroke style in money-&-payments category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiCreditCardLockedStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'credit-card-locked icon',
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
      <path d="M22 9H21.9944M21.9944 9H2.00559M21.9944 9C22 9.41261 22 10.9248 22 11.4492M21.9944 9C21.9761 7.6499 21.8979 6.8394 21.564 6.18404C21.1805 5.43139 20.5686 4.81947 19.816 4.43597C18.9603 4 17.8402 4 15.6 4H8.4C6.15979 4 5.03968 4 4.18404 4.43597C3.43139 4.81947 2.81947 5.43139 2.43597 6.18404C2.10205 6.8394 2.02389 7.6499 2.00559 9M2.00559 9H2M2.00559 9C2 9.41261 2 9.87562 2 10.4V13.6C2 15.8402 2 16.9603 2.43597 17.816C2.81947 18.5686 3.43139 19.1805 4.18404 19.564C5.03968 20 6.15979 20 8.4 20H10.0712M20.7914 17.1092V16.6667C20.7914 15.1939 19.5416 14 18 14C16.4584 14 15.2086 15.1939 15.2086 16.6667V17.1092M20.7914 17.1092C20.7677 17.1009 20.7438 17.093 20.7197 17.0856C20.4415 17 20.0894 17 19.3851 17H16.6149C15.9106 17 15.5585 17 15.2803 17.0856C15.2562 17.093 15.2323 17.1009 15.2086 17.1092M20.7914 17.1092C21.383 17.3168 21.8262 17.9088 21.965 18.4994C22.0291 18.7718 21.9972 19.1068 21.9334 19.7769C21.8793 20.3459 21.8522 20.6304 21.7587 20.8621C21.5484 21.3829 21.0942 21.779 20.5323 21.932C20.2823 22 19.9833 22 19.3851 22H16.6149C16.0167 22 15.7177 22 15.4677 21.932C14.9058 21.779 14.4516 21.3829 14.2413 20.8621C14.1478 20.6304 14.1207 20.3459 14.0666 19.7769C14.0028 19.1068 13.9709 18.7718 14.035 18.4994C14.1738 17.9088 14.617 17.3168 15.2086 17.1092M9 13H6" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
