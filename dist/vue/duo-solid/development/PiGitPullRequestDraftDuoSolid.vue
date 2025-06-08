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
    <path :fill="color || 'currentColor'" d="M18 14a4 4 0 1 0 0 8 4 4 0 0 0 0-8M6 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8" /> <path d="M6 9v12m12-8v2m-5-9q.514 0 1 .1M17 8q.348.462.584 1" opacity=".28" />
  </svg>
</template>

<script>
/**
 * PiGitPullRequestDraftDuoSolid icon from the duo-solid style in development category.
 */
export default {
  name: 'PiGitPullRequestDraftDuoSolid',
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
      default: 'git-pull-request-draft icon'
    }
  }
}
</script>
