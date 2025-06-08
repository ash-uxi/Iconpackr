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
    <path d="M14.9999 12.7715C14.2609 13.2328 13.4914 13.673 12.6933 14.0906C12.4899 14.1971 12.2449 14.2503 12 14.2503C11.755 14.2503 11.5101 14.1971 11.3066 14.0906C10.5086 13.673 9.73902 13.2328 9 12.7715" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M5.19971 9.75C5.32615 10.0107 5.51125 10.2482 5.75084 10.4452C7.39132 11.7937 9.25488 13.0164 11.3068 14.0903C11.5102 14.1968 11.7552 14.25 12.0001 14.25C12.2451 14.25 12.4901 14.1968 12.6935 14.0903C14.7454 13.0164 16.609 11.7937 18.2495 10.4452C18.4891 10.2482 18.6741 10.0107 18.8006 9.75" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiPriorityLowDuoStroke icon from the duo-stroke style in development category.
 */
export default {
  name: 'PiPriorityLowDuoStroke',
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
      default: 'priority-low icon'
    }
  }
}
</script>
