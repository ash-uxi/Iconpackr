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
    <path d="M13.7238 2.95862C12.9505 1.644 11.0494 1.644 10.2761 2.95862L2.02453 16.9863C1.24025 18.3196 2.20156 20.0003 3.7484 20.0003H20.2516C21.7984 20.0003 22.7597 18.3196 21.9754 16.9863L13.7238 2.95862Z" fill="currentColor" stroke="none"/>
  </svg>
</template>

<script>
/**
 * PiVercelSolid icon from the solid style in apps-&-social category.
 */
export default {
  name: 'PiVercelSolid',
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
      default: 'vercel icon'
    }
  }
}
</script>
