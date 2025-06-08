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
    <path d="M12 10h9l2 2-2 2h-3l-1.146-1.146a.5.5 0 0 0-.708 0L15 14h-3" /> <path :fill="color || 'currentColor'" fill-rule="evenodd" d="M12.533 10a1 1 0 0 0-.105-.445 5.5 5.5 0 1 0 0 4.89 1 1 0 0 0 .104-.445H15l1.146-1.146a.5.5 0 0 1 .708 0L18 14h3l2-2-2-2z" clip-rule="evenodd" opacity=".28" /> <path stroke-width="2.2" d="M6.5 13v-2a1.25 1.25 0 0 0 0 2" />
  </svg>
</template>

<script>
/**
 * PiKeyRight02DuoSolid icon from the duo-solid style in security category.
 */
export default {
  name: 'PiKeyRight02DuoSolid',
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
      default: 'key-right-02 icon'
    }
  }
}
</script>
