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
    <path :fill="color || 'currentColor'" d="M16.207 2.793a1 1 0 1 0-1.414 1.414L16.486 5.9l-1.693 1.693a1 1 0 0 0 1.414 1.414L17.9 7.314l1.693 1.693a1 1 0 1 0 1.414-1.414L19.314 5.9l1.693-1.693a1 1 0 0 0-1.414-1.414L17.9 4.486zM18 14a4 4 0 1 0 0 8 4 4 0 0 0 0-8M6 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8" /> <path d="M6 9v12m12-6v-2" opacity=".28" />
  </svg>
</template>

<script>
/**
 * PiGitPullRequestCancelDuoSolid icon from the duo-solid style in development category.
 */
export default {
  name: 'PiGitPullRequestCancelDuoSolid',
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
      default: 'git-pull-request-cancel icon'
    }
  }
}
</script>
