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
    <path fill="currentColor" fill-rule="evenodd" d="M15.401 13.883A1 1 0 0 1 15.874 15 4 4 0 0 1 13 17.874a1 1 0 0 1-.957-1.676l2.154-2.154a1 1 0 0 1 1.203-.161" clip-rule="evenodd" opacity=".28"/>
  <path d="m22 2-5.831 5.831m0 0L12.87 11.13M16.17 7.83C15.008 7.32 13.623 7 12 7c-6.3 0-9 4.813-9 7m9.872-2.871L9.128 14.87m3.742-3.742a3 3 0 0 0-3.743 3.743m0 0L2 22m17.391-11.735C20.49 11.598 21 13.048 21 14m-8.249 2.905a3 3 0 0 0 2.154-2.154"/>
  </svg>
</template>

<script>
/**
 * PiEye02OffContrast icon from the contrast style in security category.
 */
export default {
  name: 'PiEye02OffContrast',
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
      default: 'eye-02-off icon'
    }
  }
}
</script>
