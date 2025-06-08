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
    <path :fill="color || 'currentColor'" d="M18 14a4 4 0 1 0 0 8 4 4 0 0 0 0-8" /> <path d="M18 15v-4a5 5 0 0 0-5-5M6 9v4a5 5 0 0 0 5 5" opacity=".28" /> <path :fill="color || 'currentColor'" d="M6 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8" />
  </svg>
</template>

<script>
/**
 * PiGitCompareDuoSolid icon from the duo-solid style in development category.
 */
export default {
  name: 'PiGitCompareDuoSolid',
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
      default: 'git-compare icon'
    }
  }
}
</script>
