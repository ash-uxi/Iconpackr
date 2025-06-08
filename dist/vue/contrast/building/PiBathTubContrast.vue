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
    <path d="m17 20 1 1M3 11V5a3 3 0 0 1 6 0v1"/>
  <path fill="currentColor" d="M3 13.414V15.2c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 20 6.12 20 7.8 20h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 17.72 21 16.88 21 15.2v-1.786c0-.372 0-.558.026-.736a2.5 2.5 0 0 1 .471-1.139c.108-.144.24-.276.503-.539H2c.263.263.395.395.503.539a2.5 2.5 0 0 1 .471 1.139c.026.178.026.364.026.736" opacity=".28"/>
  <path d="M3 13.414V15.2c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 20 6.12 20 7.8 20h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 17.72 21 16.88 21 15.2v-1.786c0-.372 0-.558.026-.736a2.5 2.5 0 0 1 .471-1.139c.108-.144.24-.276.503-.539H2c.263.263.395.395.503.539a2.5 2.5 0 0 1 .471 1.139c.026.178.026.364.026.736M7 6h4M7 20l-1 1"/>
  </svg>
</template>

<script>
/**
 * PiBathTubContrast icon from the contrast style in building category.
 */
export default {
  name: 'PiBathTubContrast',
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
      default: 'bath-tub icon'
    }
  }
}
</script>
