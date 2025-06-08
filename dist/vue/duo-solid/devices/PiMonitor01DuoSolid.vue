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
    <path d="M17 22h-5m0 0H7m5 0v-5" opacity=".28" /> <path :fill="color || 'currentColor'" d="M4.364 1c-.39 0-.74 0-1.03.024a2.5 2.5 0 0 0-.969.248 2.5 2.5 0 0 0-1.093 1.093 2.5 2.5 0 0 0-.248.968C1 3.625 1 3.975 1 4.363v10.273c0 .39 0 .74.024 1.03.025.313.083.644.248.969a2.5 2.5 0 0 0 1.093 1.092c.325.166.656.224.968.25.292.023.642.023 1.03.023h15.273c.39 0 .74 0 1.03-.024.313-.025.644-.083.969-.248a2.5 2.5 0 0 0 1.092-1.093c.166-.325.224-.656.25-.968.023-.292.023-.642.023-1.03V4.363c0-.39 0-.74-.024-1.03a2.5 2.5 0 0 0-.248-.969 2.5 2.5 0 0 0-1.093-1.093 2.5 2.5 0 0 0-.968-.248C20.375 1 20.025 1 19.637 1z" />
  </svg>
</template>

<script>
/**
 * PiMonitor01DuoSolid icon from the duo-solid style in devices category.
 */
export default {
  name: 'PiMonitor01DuoSolid',
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
      default: 'monitor-01 icon'
    }
  }
}
</script>
