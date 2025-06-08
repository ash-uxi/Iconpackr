<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    :class="className"
    
     :style="{color: color || 'currentColor'}"
    role="img"
    :aria-label="ariaLabel"
    v-bind="$attrs"
  >
    <path :fill="color || 'currentColor'" d="M10.357 3C9.273 3 8.4 3 7.691 3.058c-.728.06-1.369.185-1.96.487A5 5 0 0 0 3.544 5.73c-.302.592-.428 1.233-.487 1.961C3 8.4 3 9.273 3 10.357v3.286c0 1.084 0 1.958.058 2.666.06.729.185 1.369.487 1.961a5 5 0 0 0 2.185 2.185c.592.302 1.233.428 1.961.487C8.4 21 9.273 21 10.357 21h3.286c1.084 0 1.958 0 2.666-.058.729-.06 1.369-.185 1.961-.487a5 5 0 0 0 2.185-2.185c.302-.592.428-1.232.487-1.961C21 15.6 21 14.727 21 13.643v-3.286c0-1.084 0-1.958-.058-2.666-.06-.728-.185-1.369-.487-1.96a5 5 0 0 0-2.185-2.186c-.592-.302-1.232-.428-1.961-.487C15.6 3 14.727 3 13.643 3z" opacity=".28" /> <path d="M14 11v9" />
  </svg>
</template>

<script>
/**
 * PiNpmLogoSymbolDuoSolid icon from the duo-solid style in apps-&-social category.
 */
export default {
  name: 'PiNpmLogoSymbolDuoSolid',
  props: {
    size: {
      type: Number,
      default: 24
    },
    color: {
      type: String,
      default: undefined
    },
    className: {
      type: String,
      default: undefined
    },
    ariaLabel: {
      type: String,
      default: 'npm-logo-symbol icon'
    }
  }
}
</script>
