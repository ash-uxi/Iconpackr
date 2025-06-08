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
    <path d="M4 9H12C14.8003 9 16.2004 9 17.27 9.54497C18.2108 10.0243 18.9757 10.7892 19.455 11.73C20 12.7996 20 14.1997 20 17L20 20" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  <path d="M8.85867 4C7.10583 5.2963 5.53153 6.81065 4.1746 8.50473C4.0582 8.65006 4 8.82503 4 9C4 9.17497 4.0582 9.34994 4.1746 9.49526C5.53153 11.1893 7.10583 12.7037 8.85867 14" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiArrowTurnUpLeftDuoStroke icon from the duo-stroke style in arrows-&-chevrons category.
 */
export default {
  name: 'PiArrowTurnUpLeftDuoStroke',
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
      default: 'arrow-turn-up-left icon'
    }
  }
}
</script>
