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
    <g fill="currentColor" opacity=".28">
    <path d="M21 18a3 3 0 1 0-6 0 3 3 0 0 0 6 0M9 6a3 3 0 1 0-6 0 3 3 0 0 0 6 0"/>
  </g>
  <path d="M6 9v12M6 9a3 3 0 1 1 0-6 3 3 0 0 1 0 6m12 4v2m0 0a3 3 0 1 1 0 6 3 3 0 0 1 0-6m-5-9q.514 0 1 .1M17 8q.348.462.584 1"/>
  </svg>
</template>

<script>
/**
 * PiGitPullRequestDraftContrast icon from the contrast style in development category.
 */
export default {
  name: 'PiGitPullRequestDraftContrast',
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
