import React from 'react';

/**
 * PiWindowDockBottomDuoSolid icon from the duo-solid style in devices category.
 */
interface PiWindowDockBottomDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiWindowDockBottomDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'window-dock-bottom icon',
  ...props
}: PiWindowDockBottomDuoSolidProps): JSX.Element {
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
      <path d="M22 8.8V8.759C22 7.954 22 7.289 21.956 6.749C21.91 6.186 21.811 5.669 21.564 5.184C21.1805 4.43139 20.5686 3.81949 19.816 3.436C19.331 3.189 18.814 3.09 18.252 3.044C17.71 3 17.046 3 16.242 3H7.758C6.953 3 6.288 3 5.748 3.044C5.185 3.09 4.668 3.189 4.183 3.436C3.43039 3.81949 2.81849 4.43139 2.435 5.184C2.188 5.669 2.089 6.186 2.043 6.748C2 7.29 2 7.954 2 8.758V15.242C2 16.047 2 16.712 2.044 17.252C2.09 17.815 2.189 18.332 2.436 18.817C2.81949 19.5696 3.43139 20.1815 4.184 20.565C4.669 20.812 5.186 20.911 5.748 20.957C6.29 21 6.954 21 7.758 21H16.241C17.046 21 17.711 21 18.251 20.956C18.814 20.91 19.331 20.811 19.816 20.564C20.5686 20.1805 21.1805 19.5686 21.564 18.816C21.811 18.331 21.91 17.814 21.956 17.252C22 16.711 22 16.046 22 15.242V8.8Z" fill={color || "currentColor"} opacity="0.28" fillRule="evenodd" clipRule="evenodd" /> <path d="M6.8 11H6.777C6.657 11 6.516 11 6.39 11.01C6.19138 11.0232 5.99732 11.0755 5.819 11.164C5.53703 11.3078 5.30776 11.537 5.164 11.819C5.07548 11.9973 5.02314 12.1914 5.01 12.39C5 12.515 5 12.658 5 12.777V16.223C5 16.343 5 16.485 5.01 16.61C5.022 16.755 5.052 16.963 5.164 17.181C5.30776 17.463 5.53703 17.6922 5.819 17.836C6.037 17.948 6.245 17.978 6.39 17.99C6.516 18 6.658 18 6.777 18H17.223C17.343 18 17.485 18 17.61 17.99C17.8086 17.9771 18.0026 17.9251 18.181 17.837C18.4631 17.693 18.6924 17.4633 18.836 17.181C18.948 16.963 18.978 16.755 18.99 16.61C19 16.485 19 16.342 19 16.223V12.777C19 12.657 19 12.516 18.99 12.39C18.9772 12.1914 18.9252 11.9974 18.837 11.819C18.693 11.5369 18.4633 11.3076 18.181 11.164C18.0027 11.0755 17.8086 11.0232 17.61 11.01C17.485 11 17.342 11 17.223 11H6.8Z" fill={color || "currentColor"} fillRule="evenodd" clipRule="evenodd" />
    </svg>
  );
}
