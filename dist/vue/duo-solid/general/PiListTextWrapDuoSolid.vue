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
    <path :fill="color || 'currentColor'" fill-rule="evenodd" d="M3 12a1 1 0 0 1 1-1h13a4 4 0 0 1 0 8h-2.508l.306 1.836a1 1 0 0 1-1.587.964 16 16 0 0 1-2.83-2.727 1.7 1.7 0 0 1 0-2.146 16 16 0 0 1 2.83-2.727 1 1 0 0 1 1.587.964L14.492 17H17a2 2 0 1 0 0-4H4a1 1 0 0 1-1-1" clip-rule="evenodd" /> <path d="M4 18h2.5M4 6h16" opacity=".28" />
  </svg>
</template>

<script>
/**
 * PiListTextWrapDuoSolid icon from the duo-solid style in general category.
 */
export default {
  name: 'PiListTextWrapDuoSolid',
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
      default: 'list-text-wrap icon'
    }
  }
}
</script>
