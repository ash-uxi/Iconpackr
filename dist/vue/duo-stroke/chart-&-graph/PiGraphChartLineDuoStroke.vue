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
    <path d="M21 21H7C4.79086 21 3 19.2091 3 17V3" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  <path d="M7 16.9999L8.99209 12.0294M19.4252 7.91616C19.6072 7.9707 19.8002 8 20 8C21.1046 8 22 7.10457 22 6C22 4.89543 21.1046 4 20 4C18.8954 4 18 4.89543 18 6C18 6.90476 18.6008 7.66919 19.4252 7.91616ZM19.4252 7.91616L17.5748 13.1231M17.5748 13.1231C17.3928 13.0686 17.1998 13.0393 17 13.0393C16.3925 13.0393 15.8483 13.3101 15.4815 13.7376M17.5748 13.1231C18.3992 13.3701 19 14.1345 19 15.0393C19 16.1438 18.1046 17.0393 17 17.0393C15.8954 17.0393 15 16.1438 15 15.0393C15 14.5422 15.1813 14.0875 15.4815 13.7376M15.4815 13.7376L11.5185 11.6031M11.5185 11.6031C11.8187 11.2533 12 10.7986 12 10.3015C12 9.19696 11.1046 8.30153 10 8.30153C8.89543 8.30153 8 9.19696 8 10.3015C8 11.0385 8.39866 11.6825 8.99209 12.0294M11.5185 11.6031C11.1517 12.0307 10.6075 12.3015 10 12.3015C9.63244 12.3015 9.28805 12.2024 8.99209 12.0294" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiGraphChartLineDuoStroke icon from the duo-stroke style in chart-&-graph category.
 */
export default {
  name: 'PiGraphChartLineDuoStroke',
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
      default: 'graph-chart-line icon'
    }
  }
}
</script>
