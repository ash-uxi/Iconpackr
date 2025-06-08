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
    <path d="M15 17a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0 0v-7" /> <path :fill="color || 'currentColor'" d="M15 1a4 4 0 0 1 4 4v10a5 5 0 1 1-8 0V5a4 4 0 0 1 4-4" opacity=".28" /> <path d="M7.572 10.019c-.634.846-1.37 1.61-2.19 2.275a.6.6 0 0 1-.381.135m0 0a.6.6 0 0 1-.38-.135 12.9 12.9 0 0 1-2.192-2.275m2.572 2.41V6" />
  </svg>
</template>

<script>
/**
 * PiThermometerDownDuoSolid icon from the duo-solid style in general category.
 */
export default {
  name: 'PiThermometerDownDuoSolid',
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
      default: 'thermometer-down icon'
    }
  }
}
</script>
