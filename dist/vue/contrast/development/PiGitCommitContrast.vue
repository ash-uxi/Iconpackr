<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    :class="className"
    fill="none"
    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" :style="{color: color || 'currentColor'}"
    role="img"
    :aria-label="ariaLabel"
    v-bind="$attrs"
  >
    <path fill="currentColor" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0" opacity=".28"/>
  <path d="M15 12a3 3 0 1 1-6 0m6 0a3 3 0 1 0-6 0m6 0h6M9 12H3"/>
  </svg>
</template>

<script>
/**
 * PiGitCommitContrast icon from the contrast style in development category.
 */
export default {
  name: 'PiGitCommitContrast',
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
