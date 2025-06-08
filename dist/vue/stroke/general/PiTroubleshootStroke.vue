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
    <path d="M18.364 5.63604C16.7353 4.00736 14.4853 3 12 3C9.51472 3 7.26472 4.00736 5.63604 5.63604M18.364 5.63604C19.9926 7.26472 21 9.51472 21 12C21 14.4853 19.9926 16.7353 18.364 18.364M18.364 5.63604L14.1213 9.87868M14.1213 9.87868C13.5784 9.33579 12.8284 9 12 9C11.1716 9 10.4216 9.33579 9.87868 9.87868M14.1213 9.87868C14.6642 10.4216 15 11.1716 15 12C15 12.8284 14.6642 13.5784 14.1213 14.1213M9.87868 9.87868C9.33579 10.4216 9 11.1716 9 12C9 12.8284 9.33579 13.5784 9.87868 14.1213M9.87868 9.87868L5.63604 5.63604M9.87868 14.1213C10.4216 14.6642 11.1716 15 12 15C12.8284 15 13.5784 14.6642 14.1213 14.1213M9.87868 14.1213L5.63604 18.364M14.1213 14.1213L18.364 18.364M18.364 18.364C16.7353 19.9926 14.4853 21 12 21C9.51472 21 7.26472 19.9926 5.63604 18.364M5.63604 18.364C4.00736 16.7353 3 14.4853 3 12C3 9.51472 4.00736 7.26472 5.63604 5.63604" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiTroubleshootStroke icon from the stroke style in general category.
 */
export default {
  name: 'PiTroubleshootStroke',
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
      default: 'troubleshoot icon'
    }
  }
}
</script>
