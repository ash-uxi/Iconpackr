import React from 'react';

/**
 * PiPencilScaleContrast icon from the contrast style in editing category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiPencilScaleContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'pencil-scale icon',
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
    <path d="M17.8 2h-2.6c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C12 3.52 12 4.08 12 5.2v13.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C13.52 22 14.08 22 15.2 22h2.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C21 20.48 21 19.92 21 18.8V5.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C19.48 2 18.92 2 17.8 2M3.656 3.208c-.228.24-.342.36-.424.499a1.4 1.4 0 0 0-.159.394c-.036.156-.037.322-.037.653L3 21.024a1.38 1.38 0 0 0 1.09 1.352 5.55 5.55 0 0 0 2.296.008l.053-.012.074-.015A1.41 1.41 0 0 0 7.6 21.025v-.076l.036-16.17c0-.344 0-.516-.038-.677a1.4 1.4 0 0 0-.167-.405c-.087-.141-.208-.262-.45-.504L5.281 1.5z"/>
  </g>
  <path d="M12 18h4m-4-8h4m-4-4h3m-3 8h3m.2 8h2.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C21 20.48 21 19.92 21 18.8V5.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C19.48 2 18.92 2 17.8 2h-2.6c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C12 3.52 12 4.08 12 5.2v13.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C13.52 22 14.08 22 15.2 22M5.282 1.5 6.98 3.193c.243.242.364.363.45.504q.117.189.168.405c.039.161.038.333.038.676L7.6 20.948v.077a1.41 1.41 0 0 1-1.161 1.348l-.053.01a5.55 5.55 0 0 1-2.296-.007A1.38 1.38 0 0 1 3 21.023l.036-16.27c0-.33 0-.496.037-.652q.05-.21.159-.394c.082-.139.196-.259.424-.499z"/>
    </svg>
  );
}
