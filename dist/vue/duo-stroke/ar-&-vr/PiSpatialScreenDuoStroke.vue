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
    <path d="M16 21H11M2 14V7" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.35" fill="none"/>
  <path d="M21 15.4V5.6C21 5.03995 21 4.75992 20.891 4.54601C20.7951 4.35785 20.6422 4.20487 20.454 4.10899C20.2401 4 19.9601 4 19.4 4H6.6C6.03995 4 5.75992 4 5.54601 4.10899C5.35785 4.20487 5.20487 4.35785 5.10899 4.54601C5 4.75992 5 5.03995 5 5.6V15.4C5 15.9601 5 16.2401 5.10899 16.454C5.20487 16.6422 5.35785 16.7951 5.54601 16.891C5.75992 17 6.03995 17 6.6 17H19.4C19.9601 17 20.2401 17 20.454 16.891C20.6422 16.7951 20.7951 16.6422 20.891 16.454C21 16.2401 21 15.9601 21 15.4Z" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiSpatialScreenDuoStroke icon from the duo-stroke style in ar-&-vr category.
 */
export default {
  name: 'PiSpatialScreenDuoStroke',
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
      default: 'spatial-screen icon'
    }
  }
}
</script>
