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
  <path d="M6 9v12M6 9a3 3 0 1 1 0-6 3 3 0 0 1 0 6m12 6v-2m0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6m-2.5-6.7 2.4-2.4m0 0 2.4-2.4m-2.4 2.4-2.4-2.4m2.4 2.4 2.4 2.4"/>
  </svg>
</template>

<script>
/**
 * PiGitPullRequestCancelContrast icon from the contrast style in development category.
 */
export default {
  name: 'PiGitPullRequestCancelContrast',
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
