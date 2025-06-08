import React from 'react';

/**
 * PiBumbleDuoSolid icon from the duo-solid style in apps-&-social category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiBumbleDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'bumble icon',
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
      <path d="M7.083 12h10m-7 4.045h4M9.083 8h6" /> <path fill={color || "currentColor"} d="M8.618 2c-.557 0-1.047-.001-1.504.147a3 3 0 0 0-1.08.624c-.356.32-.601.745-.879 1.228L1.69 10.001c-.279.482-.525.906-.624 1.375a3 3 0 0 0 0 1.248c.1.469.345.893.624 1.375l3.465 6.002c.278.482.523.907.88 1.228a3 3 0 0 0 1.08.624c.456.148.946.148 1.503.147h6.93c.557 0 1.047.001 1.503-.147.4-.13.768-.342 1.08-.624.357-.32.602-.745.88-1.228l3.465-6.002c.279-.482.524-.906.624-1.375a3 3 0 0 0 0-1.248c-.1-.469-.345-.893-.624-1.375L19.01 3.999c-.278-.483-.523-.908-.88-1.228a3 3 0 0 0-1.08-.624c-.456-.148-.946-.148-1.503-.147z" opacity=".28" />
    </svg>
  );
}
