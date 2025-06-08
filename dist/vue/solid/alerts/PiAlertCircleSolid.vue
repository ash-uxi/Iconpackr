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
    <path d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM13 15.9999V15.9988C13 15.4465 12.5523 14.9988 12 14.9988C11.4477 14.9988 11 15.4465 11 15.9988V15.9999C11 16.5522 11.4477 16.9999 12 16.9999C12.5523 16.9999 13 16.5522 13 15.9999ZM13 12.6238V8.62375C13 8.07147 12.5523 7.62375 12 7.62375C11.4477 7.62375 11 8.07147 11 8.62375V12.6238C11 13.176 11.4477 13.6238 12 13.6238C12.5523 13.6238 13 13.176 13 12.6238Z" fill="currentColor" stroke="none"/>
  </svg>
</template>

<script>
/**
 * PiAlertCircleSolid icon from the solid style in alerts category.
 */
export default {
  name: 'PiAlertCircleSolid',
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
      default: 'alert-circle icon'
    }
  }
}
</script>
