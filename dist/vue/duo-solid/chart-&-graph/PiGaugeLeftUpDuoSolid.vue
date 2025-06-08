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
    <path :fill="color || 'currentColor'" fill-rule="evenodd" d="M12 1.85C6.394 1.85 1.85 6.394 1.85 12c0 5.605 4.544 10.15 10.15 10.15S22.15 17.605 22.15 12 17.606 1.85 12 1.85" clip-rule="evenodd" opacity=".28" /> <path d="m7.996 7.997 4.623 3.468a.833.833 0 0 1 .088 1.243.833.833 0 0 1-1.242-.088z" />
  </svg>
</template>

<script>
/**
 * PiGaugeLeftUpDuoSolid icon from the duo-solid style in chart-&-graph category.
 */
export default {
  name: 'PiGaugeLeftUpDuoSolid',
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
      default: 'gauge-left-up icon'
    }
  }
}
</script>
