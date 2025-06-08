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
    <path d="M2 7.14795L2.72917 8.08546C4.52868 10.3991 6.77699 12.3254 9.33921 13.7489C9.65601 13.9249 10.0549 13.8282 10.2559 13.5267L13.4676 8.70917C13.6741 8.39932 14.1004 8.33015 14.3943 8.55877C16.9557 10.5509 18.9953 13.135 20.338 16.089L20.6593 16.7959M22 12.1741C21.8189 13.6773 21.4411 15.1496 20.8767 16.5534C20.8337 16.6603 20.7554 16.7445 20.6593 16.7959M16.0136 15.6304C17.4059 16.2251 18.8699 16.6341 20.3678 16.8472C20.4709 16.8619 20.5724 16.8423 20.6593 16.7959" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiTrendlineDownStroke icon from the stroke style in chart-&-graph category.
 */
export default {
  name: 'PiTrendlineDownStroke',
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
      default: 'trendline-down icon'
    }
  }
}
</script>
