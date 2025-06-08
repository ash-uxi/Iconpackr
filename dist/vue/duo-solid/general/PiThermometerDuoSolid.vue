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
    <path d="M12 17a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0 0v-7" /> <path :fill="color || 'currentColor'" d="M12 1a4 4 0 0 1 4 4v10a5 5 0 1 1-8 0V5a4 4 0 0 1 4-4" opacity=".28" />
  </svg>
</template>

<script>
/**
 * PiThermometerDuoSolid icon from the duo-solid style in general category.
 */
export default {
  name: 'PiThermometerDuoSolid',
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
      default: 'thermometer icon'
    }
  }
}
</script>
