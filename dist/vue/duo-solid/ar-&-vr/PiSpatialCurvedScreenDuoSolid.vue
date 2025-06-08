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
    <path d="M16 20.997h-5m-2.99 0H8" /> <path :fill="color || 'currentColor'" d="M20.496 2.405A2 2 0 0 1 23 4.383V16.61l-.001.116a2 2 0 0 1-2.503 1.862l-.111-.032-.01-.003-.638-.19a28 28 0 0 0-16.112.19l-.01.003-.111.032a2 2 0 0 1-2.503-1.862L1 16.61V4.383l.001-.116a2 2 0 0 1 2.503-1.862l.111.032.01.003.638.19a28 28 0 0 0 16.112-.19l.01-.003c.034-.01.074-.023.111-.032" opacity=".35" />
  </svg>
</template>

<script>
/**
 * PiSpatialCurvedScreenDuoSolid icon from the duo-solid style in ar-&-vr category.
 */
export default {
  name: 'PiSpatialCurvedScreenDuoSolid',
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
      default: 'spatial-curved-screen icon'
    }
  }
}
</script>
