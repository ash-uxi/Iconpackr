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
    <path d="M10 10a9.4 9.4 0 0 1-4 7.698M20 10a9.4 9.4 0 0 1-4 7.698" opacity=".28" /> <path :fill="color || 'currentColor'" fill-rule="evenodd" d="M7 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8m10 0a4 4 0 1 0 0 8 4 4 0 0 0 0-8" clip-rule="evenodd" />
  </svg>
</template>

<script>
/**
 * PiTextQuotesCloseDuoSolid icon from the duo-solid style in editing category.
 */
export default {
  name: 'PiTextQuotesCloseDuoSolid',
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
      default: 'text-quotes-close icon'
    }
  }
}
</script>
