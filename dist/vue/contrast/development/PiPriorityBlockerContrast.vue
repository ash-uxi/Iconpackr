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
    <path fill="currentColor" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0" opacity=".28"/>
  <path d="m8.5 15.5 7-7M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"/>
  </svg>
</template>

<script>
/**
 * PiPriorityBlockerContrast icon from the contrast style in development category.
 */
export default {
  name: 'PiPriorityBlockerContrast',
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
      default: 'priority-blocker icon'
    }
  }
}
</script>
