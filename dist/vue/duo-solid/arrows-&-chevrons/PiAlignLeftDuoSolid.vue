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
    <path :fill="color || 'currentColor'" d="M20 13a1 1 0 1 0 0-2h-7.124q.03-1.503.152-3.003a1 1 0 0 0-1.59-.886 21.8 21.8 0 0 0-4.069 3.853 1.64 1.64 0 0 0 0 2.072 21.8 21.8 0 0 0 4.069 3.853 1 1 0 0 0 1.59-.886q-.122-1.5-.152-3.003z" /> <path d="M4 5v14" opacity=".28" />
  </svg>
</template>

<script>
/**
 * PiAlignLeftDuoSolid icon from the duo-solid style in arrows-&-chevrons category.
 */
export default {
  name: 'PiAlignLeftDuoSolid',
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
      default: 'align-left icon'
    }
  }
}
</script>
