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
    <path :fill="color || 'currentColor'" d="M14 5.5a4 4 0 1 1 8 0 4 4 0 0 1-8 0M16.707 15.793a1 1 0 0 0-1.414 1.414l1.693 1.693-1.693 1.693a1 1 0 0 0 1.414 1.414l1.693-1.693 1.693 1.693a1 1 0 0 0 1.414-1.414L19.814 18.9l1.693-1.693a1 1 0 0 0-1.414-1.414L18.4 17.486zM2 18.5a4 4 0 1 1 8 0 4 4 0 0 1-8 0" /> <path d="M6 15.5v-1m0 0V3m0 11.5a9 9 0 0 1 9-9" opacity=".28" />
  </svg>
</template>

<script>
/**
 * PiGitBranchCancelDuoSolid icon from the duo-solid style in development category.
 */
export default {
  name: 'PiGitBranchCancelDuoSolid',
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
      default: 'git-branch-cancel icon'
    }
  }
}
</script>
