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
    <path :fill="color || 'currentColor'" d="M12 22.15c5.606 0 10.15-4.544 10.15-10.15S17.606 1.85 12 1.85 1.85 6.394 1.85 12c0 5.605 4.544 10.15 10.15 10.15" opacity=".28" /> <path d="M16 12.051a20.3 20.3 0 0 1-3.604 3.807A.63.63 0 0 1 12 16m-4-3.949a20.3 20.3 0 0 0 3.604 3.807A.63.63 0 0 0 12 16m0 0V8" />
  </svg>
</template>

<script>
/**
 * PiArrowDownCircleDuoSolid icon from the duo-solid style in arrows-&-chevrons category.
 */
export default {
  name: 'PiArrowDownCircleDuoSolid',
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
      default: 'arrow-down-circle icon'
    }
  }
}
</script>
