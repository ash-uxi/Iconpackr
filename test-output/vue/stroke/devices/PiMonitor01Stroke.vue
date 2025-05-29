<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    :class="className"
    fill="none"
    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" :style="{color: color || 'currentColor'}"
    v-bind="$attrs"
  >
    
  </svg>
</template>

<script>
/**
 * PiMonitor01Stroke icon from the stroke style in devices category.
 */
export default {
  name: 'PiMonitor01Stroke',
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
    }
  }
}
</script>
