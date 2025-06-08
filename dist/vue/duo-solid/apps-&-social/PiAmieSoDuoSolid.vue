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
    <path d="M11 14v-4a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0" /> <path :fill="color || 'currentColor'" d="M8.21 2a6.21 6.21 0 0 0-4.92 10A6.21 6.21 0 0 0 12 20.71 6.21 6.21 0 0 0 20.71 12 6.21 6.21 0 0 0 12 3.29 6.2 6.2 0 0 0 8.21 2" opacity=".28" />
  </svg>
</template>

<script>
/**
 * PiAmieSoDuoSolid icon from the duo-solid style in apps-&-social category.
 */
export default {
  name: 'PiAmieSoDuoSolid',
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
      default: 'amie-so icon'
    }
  }
}
</script>
