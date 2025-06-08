import React from 'react';

/**
 * PiNotionDuoSolid icon from the duo-solid style in apps-&-social category.
 */
interface PiNotionDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiNotionDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'notion icon',
  ...props
}: PiNotionDuoSolidProps): JSX.Element {
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
      <path d="M10.885 17.4v-6.794c0-.125 0-.187.023-.213a.09.09 0 0 1 .08-.029c.035.006.074.054.153.15l5.338 6.571c.079.097.118.145.152.15a.09.09 0 0 0 .08-.028c.024-.026.024-.088.024-.213V10.2" /> <path fill={color || "currentColor"} fillRule="evenodd" d="M8.718 2c-.972 0-1.763 0-2.404.052-.662.054-1.253.17-1.802.45a4.6 4.6 0 0 0-2.01 2.01c-.28.55-.396 1.14-.45 1.802C2 6.955 2 7.746 2 8.718v3.864c0 .973 0 1.763.052 2.404.054.662.17 1.253.45 1.802a4.6 4.6 0 0 0 1.408 1.643l3.28 2.448q.421.363.922.62c.55.28 1.14.395 1.802.449.641.052 1.431.052 2.404.052h2.964c.973 0 1.763 0 2.404-.052.662-.055 1.253-.17 1.802-.45a4.6 4.6 0 0 0 2.01-2.01c.28-.55.395-1.14.45-1.802.052-.641.052-1.431.052-2.404v-2.964c0-.973 0-1.763-.052-2.404-.055-.662-.17-1.253-.45-1.802a4.6 4.6 0 0 0-.44-.7l-2.561-3.41a4.6 4.6 0 0 0-1.709-1.5c-.55-.28-1.14-.396-1.802-.45C14.345 2 13.555 2 12.582 2zM5.6 15.282c0 .747 0 1.386.024 1.933l-.525-.392-.015-.01a2.6 2.6 0 0 1-.8-.933c-.113-.22-.194-.519-.238-1.057C4 14.273 4 13.565 4 12.54V8.76c0-1.025 0-1.733.046-2.283.044-.539.125-.837.237-1.057A2.6 2.6 0 0 1 5.42 4.283c.22-.112.518-.193 1.057-.237C7.027 4 7.735 4 8.76 4h3.78c1.025 0 1.733 0 2.283.046.538.044.837.125 1.057.237a2.6 2.6 0 0 1 1.004.902l.329.439a47 47 0 0 0-1.93-.024h-2.965c-.973 0-1.763 0-2.404.052-.662.054-1.253.17-1.802.45a4.6 4.6 0 0 0-2.01 2.01c-.28.55-.396 1.14-.45 1.802-.052.641-.052 1.431-.052 2.404z" clipRule="evenodd" opacity=".28" />
    </svg>
  );
}
