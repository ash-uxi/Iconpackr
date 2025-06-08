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
    <path :fill="color || 'currentColor'" d="M12 1.85C6.394 1.85 1.85 6.394 1.85 12c0 5.605 4.544 10.15 10.15 10.15S22.15 17.605 22.15 12 17.606 1.85 12 1.85" opacity=".28" /> <path d="M8 12h.01M12 12h.01M16 12h.01" />
  </svg>
</template>

<script>
/**
 * PiThreeDotsMenuHorizontalCircleDuoSolid icon from the duo-solid style in general category.
 */
export default {
  name: 'PiThreeDotsMenuHorizontalCircleDuoSolid',
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
      default: 'three-dots-menu-horizontal-circle icon'
    }
  }
}
</script>
