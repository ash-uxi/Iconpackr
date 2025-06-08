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
    <path  d="M17 12V8H7v4z" fill="none"/>
  <path d="M17 12V8H7v4z" fill="none"/>
  <path d="M21 7v10a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiWindowDockTopStroke icon from the stroke style in devices category.
 */
export default {
  name: 'PiWindowDockTopStroke',
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
      default: 'window-dock-top icon'
    }
  }
}
</script>
