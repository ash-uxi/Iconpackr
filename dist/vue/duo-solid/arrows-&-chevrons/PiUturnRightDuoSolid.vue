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
    <path :fill="color || 'currentColor'" d="M14.972 3.99a1 1 0 0 1 1.586-.881 21.8 21.8 0 0 1 4.073 3.856 1.64 1.64 0 0 1 0 2.071 21.8 21.8 0 0 1-4.073 3.856 1 1 0 0 1-1.586-.882l.17-2.32a23 23 0 0 0 0-3.38z" /> <path d="M20 8H9a5 5 0 0 0 0 10h3" opacity=".28" />
  </svg>
</template>

<script>
/**
 * PiUturnRightDuoSolid icon from the duo-solid style in arrows-&-chevrons category.
 */
export default {
  name: 'PiUturnRightDuoSolid',
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
      default: 'uturn-right icon'
    }
  }
}
</script>
