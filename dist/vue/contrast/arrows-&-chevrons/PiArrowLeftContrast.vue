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
    <path fill="currentColor" d="M4.21 12.594A30.2 30.2 0 0 0 9.83 18l-.3-6 .3-6a30.2 30.2 0 0 0-5.62 5.406.95.95 0 0 0 0 1.188" opacity=".28"/>
  <path d="m9.53 12 .3 6a30.2 30.2 0 0 1-5.62-5.406.95.95 0 0 1 0-1.188A30.2 30.2 0 0 1 9.83 6zm0 0H20"/>
  </svg>
</template>

<script>
/**
 * PiArrowLeftContrast icon from the contrast style in arrows-&-chevrons category.
 */
export default {
  name: 'PiArrowLeftContrast',
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
      default: 'arrow-left icon'
    }
  }
}
</script>
