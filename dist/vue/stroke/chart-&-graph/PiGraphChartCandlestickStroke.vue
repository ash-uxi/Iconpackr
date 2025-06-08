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
    <path d="M21 21H7C4.79086 21 3 19.2091 3 17V3M9 6L9 9M9 17V15M17 3L17 5M17 17V11M9 15C8.53501 15 8.30252 15 8.11177 14.9489C7.59413 14.8102 7.18981 14.4059 7.05111 13.8882C7 13.6975 7 13.465 7 13V11C7 10.535 7 10.3025 7.05111 10.1118C7.18981 9.59413 7.59413 9.18981 8.11177 9.05111C8.30252 9 8.53501 9 9 9M9 15C9.46499 15 9.69748 15 9.88823 14.9489C10.4059 14.8102 10.8102 14.4059 10.9489 13.8882C11 13.6975 11 13.465 11 13V11C11 10.535 11 10.3025 10.9489 10.1118C10.8102 9.59413 10.4059 9.18981 9.88823 9.05111C9.69748 9 9.46499 9 9 9M17 11C16.535 11 16.3025 11 16.1118 10.9489C15.5941 10.8102 15.1898 10.4059 15.0511 9.88823C15 9.69748 15 9.46499 15 9V7C15 6.53501 15 6.30252 15.0511 6.11177C15.1898 5.59413 15.5941 5.18981 16.1118 5.05111C16.3025 5 16.535 5 17 5M17 11C17.465 11 17.6975 11 17.8882 10.9489C18.4059 10.8102 18.8102 10.4059 18.9489 9.88823C19 9.69748 19 9.46499 19 9V7C19 6.53501 19 6.30252 18.9489 6.11177C18.8102 5.59413 18.4059 5.18981 17.8882 5.05111C17.6975 5 17.465 5 17 5" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiGraphChartCandlestickStroke icon from the stroke style in chart-&-graph category.
 */
export default {
  name: 'PiGraphChartCandlestickStroke',
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
      default: 'graph-chart-candlestick icon'
    }
  }
}
</script>
