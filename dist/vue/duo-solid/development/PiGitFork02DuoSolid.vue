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
    <path :fill="color || 'currentColor'" d="M18 1.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8M6 1.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8M6 14.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8" /> <path d="M6 15.5v-7m11.875-.002c-.154.604-.258.962-.409 1.268a4 4 0 0 1-2.746 2.144c-.417.09-.892.09-1.843.09h-.922c-1.435 0-2.153 0-2.787.219a4 4 0 0 0-1.495.923c-.475.466-.795 1.102-1.428 2.368" opacity=".28" />
  </svg>
</template>

<script>
/**
 * PiGitFork02DuoSolid icon from the duo-solid style in development category.
 */
export default {
  name: 'PiGitFork02DuoSolid',
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
