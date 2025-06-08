import React from 'react';

/**
 * PiCameraAiContrast icon from the contrast style in ai category.
 */
interface PiCameraAiContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCameraAiContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'camera-ai icon',
  ...props
}: PiCameraAiContrastProps): JSX.Element {
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
      <path d="M16.757 6.417c1.157 0 1.735 0 2.202.158a3 3 0 0 1 1.884 1.883C21 8.925 21 9.503 21 10.66v4.957c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311c-.642.327-1.482.327-3.162.327H7.816c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.31c-.327-.643-.327-1.483-.327-3.163v-4.97c0-1.145 0-1.717.154-2.18a3 3 0 0 1 1.896-1.896c.462-.154 1.035-.154 2.18-.154.213 0 .32 0 .419-.02a1 1 0 0 0 .504-.27c.072-.071.131-.16.25-.338l1.106-1.66c.174-.26.26-.39.375-.484a1 1 0 0 1 .345-.184c.142-.044.298-.044.611-.044h2.288c.313 0 .47 0 .611.044a1 1 0 0 1 .345.184c.114.094.201.224.375.485l1.105 1.657c.12.18.18.27.252.342a1 1 0 0 0 .5.267c.101.021.209.021.425.021"/>
  <path fill="currentColor" fillRule="evenodd" d="M18.96 6.574c-.468-.157-1.046-.157-2.203-.157-.216 0-.324 0-.424-.021a1 1 0 0 1-.5-.268c-.073-.072-.133-.161-.253-.341l-1.105-1.658c-.174-.26-.26-.39-.375-.485a1 1 0 0 0-.345-.184c-.142-.043-.298-.043-.611-.043h-2.288c-.313 0-.47 0-.611.043a1 1 0 0 0-.345.184c-.114.095-.201.225-.375.485L8.419 5.79c-.119.178-.178.266-.25.338a1 1 0 0 1-.504.27c-.1.02-.206.02-.42.02-1.144 0-1.717 0-2.179.154A3 3 0 0 0 3.17 8.467c-.154.462-.154 1.035-.154 2.18v4.97c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.31 1.31c.642.328 1.482.328 3.163.328H16.2c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311c.327-.642.327-1.482.327-3.162V10.66c0-1.157 0-1.736-.157-2.203a3 3 0 0 0-1.884-1.883" clipRule="evenodd" opacity=".28"/>
  <path d="M8.466 16.604h.01m3.99-7c-.637 1.616-1.339 2.345-3 3 1.661.655 2.363 1.383 3 3 .638-1.617 1.34-2.345 3-3-1.66-.655-2.362-1.384-3-3"/>
    </svg>
  );
}
