import React from 'react';

/**
 * PiFolderQuestionMarkDuoSolid icon from the duo-solid style in files-&-folders category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiFolderQuestionMarkDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'folder-question-mark icon',
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
      <path d="M9.85 11.502a2.249 2.249 0 0 1 4.37.75c0 1.499-2.249 2.248-2.249 2.248m.03 3h.01" /> <path fill={color || "currentColor"} d="M9.924 2.108C9.564 1.998 9.184 2 8.806 2h-.449C7.273 2 6.4 2 5.691 2.058c-.728.06-1.369.185-1.961.487A5 5 0 0 0 1.545 4.73c-.302.593-.428 1.233-.487 1.962C1 7.399 1 8.274 1 9.357v5.286c0 1.084 0 1.958.058 2.666.06.729.185 1.369.487 1.961a5 5 0 0 0 2.185 2.185c.592.302 1.233.428 1.961.487C6.4 22 7.273 22 8.357 22h7.286c1.084 0 1.958 0 2.666-.058.729-.06 1.369-.185 1.961-.487a5 5 0 0 0 2.185-2.185c.302-.592.428-1.232.487-1.961C23 16.6 23 15.727 23 14.643v-2.286c0-1.083 0-1.958-.058-2.665-.06-.73-.185-1.37-.487-1.962a5 5 0 0 0-2.185-2.185c-.592-.302-1.232-.427-1.961-.487C17.6 5 16.727 5 15.643 5h-2.359c-.531 0-.589-.01-.626-.021a.5.5 0 0 1-.173-.093c-.03-.024-.07-.067-.365-.51l-.575-.862-.05-.075c-.21-.314-.42-.631-.71-.87a2.5 2.5 0 0 0-.861-.46" opacity=".28" />
    </svg>
  );
}
