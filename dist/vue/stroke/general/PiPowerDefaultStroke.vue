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
    <path d="M12.0001 8V2M7.55567 4C4.74888 5.56266 2.8501 8.55959 2.8501 12C2.8501 17.0534 6.94669 21.15 12.0001 21.15C17.0535 21.15 21.1501 17.0534 21.1501 12C21.1501 8.55959 19.2513 5.56266 16.4445 4" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiPowerDefaultStroke icon from the stroke style in general category.
 */
export default {
  name: 'PiPowerDefaultStroke',
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
      default: 'power-default icon'
    }
  }
}
</script>
