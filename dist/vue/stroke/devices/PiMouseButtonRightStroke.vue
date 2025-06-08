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
    <path d="M12 3C8.13401 3 5 6.13401 5 10V14C5 17.866 8.13401 21 12 21C15.866 21 19 17.866 19 14V10C19 6.13401 15.866 3 12 3ZM12 3V7.8C12 8.92011 12 9.48016 12.218 9.90798C12.4097 10.2843 12.7157 10.5903 13.092 10.782C13.5198 11 14.0799 11 15.2 11H19" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiMouseButtonRightStroke icon from the stroke style in devices category.
 */
export default {
  name: 'PiMouseButtonRightStroke',
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
      default: 'mouse-button-right icon'
    }
  }
}
</script>
