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
    <path fill="currentColor" d="M15.6 3H8.4c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748C2 6.04 2 7.16 2 9.4v2.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C5.04 18 6.16 18 8.4 18h7.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748C22 14.96 22 13.84 22 11.6V9.4c0-2.24 0-3.36-.436-4.216a4 4 0 0 0-1.748-1.748C18.96 3 17.84 3 15.6 3" opacity=".28"/>
  <path d="M7 13.5a9.04 9.04 0 0 1 3.79-4.583l.248-.149 1.924 3.464.249-.15A9.04 9.04 0 0 0 17 7.5M12 3H8.4c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748C2 6.04 2 7.16 2 9.4v2.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C5.04 18 6.16 18 8.4 18h7.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748C22 14.96 22 13.84 22 11.6V9.4c0-2.24 0-3.36-.436-4.216a4 4 0 0 0-1.748-1.748C18.96 3 17.84 3 15.6 3zm0 0V2M6 22l2-4m10 4-2-4"/>
  </svg>
</template>

<script>
/**
 * PiPresentationTrendlineUpContrast icon from the contrast style in chart-&-graph category.
 */
export default {
  name: 'PiPresentationTrendlineUpContrast',
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
      default: 'presentation-trendline-up icon'
    }
  }
}
</script>
