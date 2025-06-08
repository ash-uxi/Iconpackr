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
    <path d="M6 18H14.8C15.9201 18 16.4802 18 16.908 17.782C17.2843 17.5903 17.5903 17.2843 17.782 16.908C18 16.4802 18 15.9201 18 14.8V6M6 18H2M6 18V22M6 18V9.2C6 8.0799 6 7.51984 6.21799 7.09202C6.40973 6.71569 6.71569 6.40973 7.09202 6.21799C7.51984 6 8.0799 6 9.2 6H18M18 2V6M18 6H22" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiCropStroke icon from the stroke style in editing category.
 */
export default {
  name: 'PiCropStroke',
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
      default: 'crop icon'
    }
  }
}
</script>
