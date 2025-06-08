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
    <path d="M12 12h-1.2c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311c-.23-.45-.298-.997-.318-1.862H6m6 3.5v3.5m0-3.5h1.2c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311c.23-.45.298-.997.318-1.862H18" opacity=".28" /> <path :fill="color || 'currentColor'" d="M12 14.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8M18 1.5a4 4 0 0 0-.012 8H18a4 4 0 0 0 0-8M6 1.5a4 4 0 1 0 0 8h.012A4 4 0 0 0 6 1.5" />
  </svg>
</template>

<script>
/**
 * PiGitFork01DuoSolid icon from the duo-solid style in development category.
 */
export default {
  name: 'PiGitFork01DuoSolid',
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
      default: 'git-fork-01 icon'
    }
  }
}
</script>
