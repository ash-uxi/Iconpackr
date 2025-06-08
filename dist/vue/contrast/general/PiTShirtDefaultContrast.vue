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
    <path fill="currentColor" d="M1.5 6 8 3l1.09.272a12 12 0 0 0 5.82 0L16 3l6.5 3-1.5 5-3-1v10a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V10l-3 1z" opacity=".28"/>
  <path d="M1.5 6 8 3l1.09.272a12 12 0 0 0 5.82 0L16 3l6.5 3-1.5 5-3-1v10a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V10l-3 1z"/>
  </svg>
</template>

<script>
/**
 * PiTShirtDefaultContrast icon from the contrast style in general category.
 */
export default {
  name: 'PiTShirtDefaultContrast',
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
