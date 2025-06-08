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
    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2h7a3.5 3.5 0 1 1 0 7H12v10.5A3.5 3.5 0 1 1 8.5 16a3.5 3.5 0 1 1 0-7A3.5 3.5 0 0 1 5 5.5"/>
    <path d="M12 12.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0"/>
  </g>
  <path d="M12 2H8.5a3.5 3.5 0 1 0 0 7M12 2v7m0-7h3.5a3.5 3.5 0 1 1 0 7M12 9H8.5M12 9v7m0-7h3.5m-7 0a3.5 3.5 0 1 0 0 7m3.5 0H8.5m3.5 0v3.5A3.5 3.5 0 1 1 8.5 16m7-7a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7"/>
  </svg>
</template>

<script>
/**
 * PiFigmaContrast icon from the contrast style in apps-&-social category.
 */
export default {
  name: 'PiFigmaContrast',
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
      default: 'figma icon'
    }
  }
}
</script>
