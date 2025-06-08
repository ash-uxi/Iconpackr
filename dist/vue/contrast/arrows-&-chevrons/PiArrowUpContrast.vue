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
    <path fill="currentColor" d="M11.406 4.21A30.2 30.2 0 0 0 6 9.83l6-.3 6 .3a30.2 30.2 0 0 0-5.406-5.62.95.95 0 0 0-1.188 0" opacity=".28"/>
  <path d="m12 9.53-6 .3a30.2 30.2 0 0 1 5.406-5.62.95.95 0 0 1 1.188 0A30.2 30.2 0 0 1 18 9.83zm0 0V20"/>
  </svg>
</template>

<script>
/**
 * PiArrowUpContrast icon from the contrast style in arrows-&-chevrons category.
 */
export default {
  name: 'PiArrowUpContrast',
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
      default: 'arrow-up icon'
    }
  }
}
</script>
