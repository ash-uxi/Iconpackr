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
    <path d="m6 10-3 1-1.5-5L8 3l1.09.272a12 12 0 0 0 5.82 0L16 3l6.5 3-1.5 5-3-1" /> <path :fill="color || 'currentColor'" fill-rule="evenodd" d="M7.58 2.092a1 1 0 0 1 .663-.062l1.09.272a11 11 0 0 0 5.335 0l1.09-.272a1 1 0 0 1 .66.062l6.5 3a1 1 0 0 1 .54 1.195l-1.5 5a1 1 0 0 1-1.274.662L19 11.387V20a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-8.613l-1.684.562a1 1 0 0 1-1.274-.662l-1.5-5a1 1 0 0 1 .54-1.195zm.995 2.052.515.128a12 12 0 0 0 5.82 0l.515-.128c.186-.047.315.162.18.297a5.125 5.125 0 0 1-7.21 0c-.135-.135-.006-.344.18-.297" clip-rule="evenodd" opacity=".28" />
  </svg>
</template>

<script>
/**
 * PiTShirtDefaultDuoSolid icon from the duo-solid style in general category.
 */
export default {
  name: 'PiTShirtDefaultDuoSolid',
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
      default: 't-shirt-default icon'
    }
  }
}
</script>
