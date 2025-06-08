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
    <path d="M18.4358 19.8497C16.6849 21.2865 14.4428 22.1501 12.0006 22.1501C6.3949 22.1501 1.85059 17.6058 1.85059 12.0001C1.85059 9.55783 2.71416 7.31582 4.15101 5.5649L18.4358 19.8497Z" fill="currentColor" stroke="none"/>
  <path d="M22.1506 12.0001C22.1506 6.39441 17.6063 1.8501 12.0006 1.8501C9.55824 1.8501 7.31616 2.71373 5.56521 4.15067L19.85 18.4355C21.287 16.6845 22.1506 14.4424 22.1506 12.0001Z" fill="currentColor" stroke="none"/>
  </svg>
</template>

<script>
/**
 * PiBanLeftSolid icon from the solid style in security category.
 */
export default {
  name: 'PiBanLeftSolid',
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
      default: 'ban-left icon'
    }
  }
}
</script>
