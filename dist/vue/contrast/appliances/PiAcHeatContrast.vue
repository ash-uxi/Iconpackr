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
    <g fill="currentColor" opacity=".28">
    <path d="M20 4H4a2 2 0 0 0-2 2v6h20V6a2 2 0 0 0-2-2M17.237 15c1.676 1.532 2.579 2.601 2.579 4.421 0 1.39-1.176 2.579-2.58 2.579-1.403 0-2.578-1.19-2.578-2.579 0-.425.16-.845.368-1.105 1.907 1.315 3.48-1.129 2.21-3.316"/>
  </g>
  <path d="M18 8h-2m6 4V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v6zm-4.763 3c1.676 1.532 2.579 2.601 2.579 4.421 0 1.39-1.176 2.579-2.58 2.579-1.403 0-2.578-1.19-2.578-2.579 0-.425.16-.845.368-1.105 1.907 1.315 3.48-1.129 2.21-3.316"/>
  </svg>
</template>

<script>
/**
 * PiAcHeatContrast icon from the contrast style in appliances category.
 */
export default {
  name: 'PiAcHeatContrast',
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
      default: 'ac-heat icon'
    }
  }
}
</script>
