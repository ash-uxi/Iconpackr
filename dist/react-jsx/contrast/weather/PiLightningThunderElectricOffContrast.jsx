import React from 'react';

/**
 * PiLightningThunderElectricOffContrast icon from the contrast style in weather category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiLightningThunderElectricOffContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'lightning-thunder-electric-off icon',
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
      <g fill="currentColor" opacity=".28">
    <path d="M11.81 3.867 6.054 8.379c-1.248.978-1.872 1.467-2.004 1.991-.115.456-.03.942.234 1.322.302.436 1.05.65 2.546 1.077l.568.162c.786.225 1.18.337 1.439.586.228.219.385.509.449.829.021.108.027.221.02.349l5.462-5.463c.044-.252.122-.563.226-.974l.44-1.753c.527-2.093.79-3.14.53-3.673a1.46 1.46 0 0 0-1.136-.828c-.561-.063-1.38.579-3.018 1.863M18.254 10.718a1 1 0 0 0-.992.251L7.55 20.681a1 1 0 0 0-.11 1.284c.393.555 1 .94 1.696 1.023.667.08 1.284-.259 1.756-.56.514-.328 1.152-.819 1.932-1.418l5.73-4.403c.603-.463 1.109-.852 1.477-1.193.367-.34.741-.756.884-1.309.19-.731.058-1.52-.372-2.145-.266-.387-.644-.622-1.003-.789-.358-.166-.797-.308-1.286-.453"/>
  </g>
  <path d="M17.97 11.676c.975.29 1.507.499 1.749.85.263.382.347.872.229 1.328-.137.526-.772 1.014-2.041 1.99l-5.652 4.342c-1.628 1.25-2.442 1.876-3 1.81-.4-.05-.76-.271-.998-.608m1.048-6.693L2 22m7.305-7.305c.008-.128.002-.24-.02-.349a1.58 1.58 0 0 0-.448-.83c-.26-.248-.653-.36-1.44-.585l-.567-.162c-1.496-.427-2.244-.64-2.546-1.077a1.63 1.63 0 0 1-.234-1.322c.132-.524.756-1.013 2.004-1.99l5.756-4.513c1.638-1.284 2.457-1.926 3.018-1.863.485.055.912.366 1.136.828.26.533-.003 1.58-.53 3.673l-.44 1.753c-.104.411-.182.722-.226.974m-5.463 5.463 5.463-5.463M22 2l-7.232 7.232"/>
    </svg>
  );
}
