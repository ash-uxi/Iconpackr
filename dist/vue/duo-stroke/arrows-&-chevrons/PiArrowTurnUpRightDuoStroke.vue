<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    :class="className"
    fill="none"
    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" :style="{color: color || 'currentColor'}"
    role="img"
    :aria-label="ariaLabel"
    v-bind="$attrs"
  >
    <path d="M15.1414 4C16.8942 5.2963 18.4685 6.81065 19.8254 8.50473C19.9418 8.65006 20 8.82503 20 9C20 9.17497 19.9418 9.34994 19.8254 9.49526C18.4685 11.1893 16.8942 12.7037 15.1414 14" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M20 9H12C9.19974 9 7.79961 9 6.73005 9.54497C5.78924 10.0243 5.02433 10.7892 4.54497 11.73C4 12.7996 4 14.1997 4 17V20" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiArrowTurnUpRightDuoStroke icon from the duo-stroke style in arrows-&-chevrons category.
 */
export default {
  name: 'PiArrowTurnUpRightDuoStroke',
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
      default: 'arrow-turn-up-right icon'
    }
  }
}
</script>
