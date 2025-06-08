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
    <path d="M12.005 7.994v.01m0 3.99v.01m0 3.99v.01" /> <path :fill="color || 'currentColor'" d="M22.15 12.002c0 5.605-4.544 10.15-10.15 10.15S1.85 17.607 1.85 12.002 6.394 1.852 12 1.852s10.15 4.544 10.15 10.15" opacity=".28" />
  </svg>
</template>

<script>
/**
 * PiThreeDotsMenuVerticalCircleDuoSolid icon from the duo-solid style in general category.
 */
export default {
  name: 'PiThreeDotsMenuVerticalCircleDuoSolid',
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
      default: 'three-dots-menu-vertical-circle icon'
    }
  }
}
</script>
