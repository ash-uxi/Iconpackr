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
    <path d="M9 5.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M21 5.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M9 18.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  </g>
  <path d="M6 15.5v-7m0 7a3 3 0 1 0 .245.01M6 15.5q.124 0 .245.01M6 8.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6m11.875-.003c-.154.605-.258.962-.409 1.269a4 4 0 0 1-2.746 2.144c-.417.09-.892.09-1.843.09h-.922c-1.435 0-2.153 0-2.787.219a4 4 0 0 0-1.495.923c-.475.466-.795 1.102-1.428 2.368m11.63-7.013q.062.003.125.003a3 3 0 1 0-.125-.003"/>
  </svg>
</template>

<script>
/**
 * PiGitFork02Contrast icon from the contrast style in development category.
 */
export default {
  name: 'PiGitFork02Contrast',
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
      default: 'git-fork-02 icon'
    }
  }
}
</script>
