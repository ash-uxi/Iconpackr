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
    <path d="M8.99976 15L11.9998 12M11.9998 12L14.9998 9M11.9998 12L8.99976 9M11.9998 12L14.9998 15M11.9996 21.1499C6.9462 21.1499 2.84961 17.0533 2.84961 11.9999C2.84961 6.94645 6.9462 2.84985 11.9996 2.84985C17.053 2.84985 21.1496 6.94645 21.1496 11.9999C21.1496 17.0533 17.053 21.1499 11.9996 21.1499Z" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiMultipleCrossCancelCircleStroke icon from the stroke style in maths category.
 */
export default {
  name: 'PiMultipleCrossCancelCircleStroke',
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
      default: 'multiple-cross-cancel-circle icon'
    }
  }
}
</script>
