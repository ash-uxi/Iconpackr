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
    <path :fill="color || 'currentColor'" d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8" /> <path d="M3 12h6m6 0h6" opacity=".28" />
  </svg>
</template>

<script>
/**
 * PiGitCommitDuoSolid icon from the duo-solid style in development category.
 */
export default {
  name: 'PiGitCommitDuoSolid',
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
      default: 'git-commit icon'
    }
  }
}
</script>
