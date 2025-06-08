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
    <path d="M7 5a2 2 0 0 1 2 2v8a2 2 0 1 1-4 0V7a2 2 0 0 1 2-2M17 5a2 2 0 0 1 2 2v8a2 2 0 1 1-4 0V7a2 2 0 0 1 2-2"/>
  </g>
  <path d="M9 11h6M5 9H4a2 2 0 1 0 0 4h1m14 0h1a2 2 0 1 0 0-4h-1m0 4V7a2 2 0 1 0-4 0v8a2 2 0 1 0 4 0zM7 17a2 2 0 0 0 2-2V7a2 2 0 1 0-4 0v8a2 2 0 0 0 2 2"/>
  </svg>
</template>

<script>
/**
 * PiDumbbellContrast icon from the contrast style in sports category.
 */
export default {
  name: 'PiDumbbellContrast',
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
      default: 'dumbbell icon'
    }
  }
}
</script>
