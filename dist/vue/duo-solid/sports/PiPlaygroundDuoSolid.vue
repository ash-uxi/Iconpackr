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
    <path d="M2 9h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H2m20-6h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2m-10 0v4m0-4a3 3 0 1 1 0-6m0 6a3 3 0 1 0 0-6m0 0V5" /> <path :fill="color || 'currentColor'" d="M5 4a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4z" opacity=".28" />
  </svg>
</template>

<script>
/**
 * PiPlaygroundDuoSolid icon from the duo-solid style in sports category.
 */
export default {
  name: 'PiPlaygroundDuoSolid',
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
      default: 'playground icon'
    }
  }
}
</script>
