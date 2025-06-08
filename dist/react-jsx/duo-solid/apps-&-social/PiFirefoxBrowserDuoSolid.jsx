import React from 'react';

/**
 * PiFirefoxBrowserDuoSolid icon from the duo-solid style in apps-&-social category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiFirefoxBrowserDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'firefox-browser icon',
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
      <path fill={color || "currentColor"} d="M15.433.197a1 1 0 0 1 .62.534c.542 1.153 1.387 2.122 2.342 3.217l.166.19.425.493c.282-.104.6-.075.859.078.204.121.391.273.569.43.305.27.696.677 1.082 1.248C22.274 7.54 23 9.32 23 11.906v.014c-.087 5.93-5.028 10.84-10.958 10.892h-.009c-3.917 0-7.315-2.21-9.26-5.24-1.95-3.035-2.505-7-.579-10.533a9.24 9.24 0 0 1 3.12-3.35 1 1 0 0 1 1.538.904 6 6 0 0 0-.008.537 9 9 0 0 1 1.29-.81 1 1 0 0 1 1.44 1.085 5 5 0 0 0-.1.968c0 .391.097.653.246.868.161.233.425.47.852.736a41 41 0 0 0 1.884.968 1 1 0 0 1 .473 1.353c-.36.723-.96 1.189-1.537 1.505-.572.313-1.204.521-1.714.684l-.127.041c-.44.14-.748.239-.967.342q.018.063.041.135c.092.28.245.65.49 1.012.469.691 1.286 1.399 2.84 1.399.568 0 1.418-.164 2.095-.63.623-.43 1.16-1.15 1.16-2.463v-.013a3.09 3.09 0 0 0-1.622-2.76 1 1 0 0 1 .126-1.817c-.787-1.132-1.335-2.413-1.332-3.7.004-1.475.732-2.794 2.24-3.728a1 1 0 0 1 .811-.108" opacity=".28" /> <path d="M16.21 12.323a4.09 4.09 0 0 0-2.146-3.653 3.44 3.44 0 0 1 2.605.755c-.458-.828-1.225-1.238-1.944-2-1.659-2.218-2.063-4.73.424-6.27 1.288 2.747 4.084 4.506 5.145 7.362a11.3 11.3 0 0 0-.96-2.948S22 7.13 22 11.906" />
    </svg>
  );
}
