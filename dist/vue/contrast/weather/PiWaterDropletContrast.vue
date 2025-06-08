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
    <path fill="currentColor" d="M12 3c13 11 5.712 18 0 18s-13-7 0-18" opacity=".28"/>
  <path d="M12 3c13 11 5.712 18 0 18s-13-7 0-18"/>
  </svg>
</template>

<script>
/**
 * PiWaterDropletContrast icon from the contrast style in weather category.
 */
export default {
  name: 'PiWaterDropletContrast',
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
      default: 'water-droplet icon'
    }
  }
}
</script>
