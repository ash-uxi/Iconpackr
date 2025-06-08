import React from 'react';

/**
 * PiHomeSimpleSolid icon from the solid style in building category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiHomeSimpleSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'home-simple icon',
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
      <path d="M13.4907 2.22933C12.5201 1.92616 11.48 1.92616 10.5094 2.22933C9.90005 2.41965 9.37368 2.7554 8.82906 3.19337C8.30099 3.61803 7.69685 4.18862 6.94916 4.89478L4.23278 7.46022C3.57631 8.07984 3.12196 8.50869 2.78993 9.02697C2.49656 9.4849 2.27986 9.98762 2.14838 10.5153C1.99956 11.1126 1.99975 11.7374 2.00002 12.6401L2.00005 14.6428C2.00004 15.7266 2.00003 16.6007 2.05786 17.3086C2.11741 18.0375 2.24323 18.6777 2.54501 19.2699C3.02438 20.2108 3.78928 20.9757 4.73009 21.455C5.32239 21.7568 5.96257 21.8826 6.69142 21.9422C7.39927 22 8.27339 22 9.35711 22H14.6429C15.7266 22 16.6008 22 17.3087 21.9422C18.0375 21.8826 18.6777 21.7568 19.27 21.455C20.2108 20.9757 20.9757 20.2108 21.4551 19.2699C21.7569 18.6777 21.8827 18.0375 21.9422 17.3086C22.0001 16.6008 22.0001 15.7267 22 14.6429L22.0001 12.6401C22.0003 11.7374 22.0005 11.1126 21.8517 10.5153C21.7202 9.98762 21.5035 9.4849 21.2102 9.02697C20.8781 8.50869 20.4238 8.07985 19.7673 7.46024L17.051 4.89481C16.3033 4.18865 15.6991 3.61803 15.171 3.19337C14.6264 2.7554 14.1 2.41965 13.4907 2.22933Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
