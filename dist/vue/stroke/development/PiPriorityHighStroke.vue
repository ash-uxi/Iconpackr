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
    <path d="M5.19971 14.25C5.32615 13.9893 5.51125 13.7518 5.75084 13.5548C7.39132 12.2063 9.25488 10.9836 11.3068 9.90972C11.5102 9.80324 11.7552 9.75 12.0001 9.75C12.2451 9.75 12.4901 9.80324 12.6935 9.90972C14.7454 10.9836 16.609 12.2063 18.2495 13.5548C18.4891 13.7518 18.6741 13.9893 18.8006 14.25" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiPriorityHighStroke icon from the stroke style in development category.
 */
export default {
  name: 'PiPriorityHighStroke',
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
      default: 'priority-high icon'
    }
  }
}
</script>
