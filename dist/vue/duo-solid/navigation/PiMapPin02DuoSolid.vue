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
    <path d="M12 21v-8" opacity=".28" /> <path :fill="color || 'currentColor'" d="M12 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12" />
  </svg>
</template>

<script>
/**
 * PiMapPin02DuoSolid icon from the duo-solid style in navigation category.
 */
export default {
  name: 'PiMapPin02DuoSolid',
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
      default: 'map-pin-02 icon'
    }
  }
}
</script>
