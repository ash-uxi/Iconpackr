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
    <path d="M11.9691 16C13.4233 14.9414 14.7294 13.7046 15.8551 12.3211C15.9517 12.2025 16 12.0596 16 11.9167M11.9691 7.83333C13.4233 8.89198 14.7294 10.1287 15.8551 11.5122C15.9517 11.6309 16 11.7738 16 11.9167M16 11.9167L4 11.9167M20 19V5" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiAlignRightStroke icon from the stroke style in arrows-&-chevrons category.
 */
export default {
  name: 'PiAlignRightStroke',
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
      default: 'align-right icon'
    }
  }
}
</script>
