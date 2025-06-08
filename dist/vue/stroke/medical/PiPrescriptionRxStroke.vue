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
    <path d="M4.00342 9V3H10.0034C11.6603 3 13.0034 4.34315 13.0034 6C13.0034 7.65685 11.6603 9 10.0034 9H8.00342M4.00342 9V15M4.00342 9H8.00342M12.0034 21L16.0034 17M16.0034 17L20.0034 13M16.0034 17L20.0034 21M16.0034 17L8.00342 9" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiPrescriptionRxStroke icon from the stroke style in medical category.
 */
export default {
  name: 'PiPrescriptionRxStroke',
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
      default: 'prescription-rx icon'
    }
  }
}
</script>
