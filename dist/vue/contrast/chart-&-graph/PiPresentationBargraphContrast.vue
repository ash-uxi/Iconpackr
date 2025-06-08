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
    <path d="M12 3H8.4c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748C2 6.04 2 7.16 2 9.4v2.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C5.04 18 6.16 18 8.4 18h7.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748C22 14.96 22 13.84 22 11.6V9.4c0-2.24 0-3.36-.436-4.216a4 4 0 0 0-1.748-1.748C18.96 3 17.84 3 15.6 3zm0 0V2M6 22l2-4m10 4-2-4m-9-4v-2m5 2V7m5 7v-4"/>
  <path fill="currentColor" d="M15.6 3H8.4c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748C2 6.04 2 7.16 2 9.4v2.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C5.04 18 6.16 18 8.4 18h7.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748C22 14.96 22 13.84 22 11.6V9.4c0-2.24 0-3.36-.436-4.216a4 4 0 0 0-1.748-1.748C18.96 3 17.84 3 15.6 3" opacity=".28"/>
  </svg>
</template>

<script>
/**
 * PiPresentationBargraphContrast icon from the contrast style in chart-&-graph category.
 */
export default {
  name: 'PiPresentationBargraphContrast',
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
      default: 'presentation-bargraph icon'
    }
  }
}
</script>
