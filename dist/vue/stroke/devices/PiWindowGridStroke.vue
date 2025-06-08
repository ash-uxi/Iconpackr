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
    <path d="M10 14V16H7V14H10ZM17 14V16H14V14H17ZM10 8V10H7V8H10ZM17 8V10H14V8H17Z" stroke="currentColor" stroke-width="2" fill="none"/>
  <path d="M21 17V7C21 5.34315 19.6569 4 18 4L6 4C4.34315 4 3 5.34315 3 7V17C3 18.6569 4.34315 20 6 20H18C19.6569 20 21 18.6569 21 17Z" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiWindowGridStroke icon from the stroke style in devices category.
 */
export default {
  name: 'PiWindowGridStroke',
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
      default: 'window-grid icon'
    }
  }
}
</script>
