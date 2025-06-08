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
    <path :fill="color || 'currentColor'" d="M15 5.087c0-2.524-2.853-3.992-4.907-2.525L7.28 4.572a3.9 3.9 0 0 1-1.514.655A5.93 5.93 0 0 0 1 11.04v1.918a5.93 5.93 0 0 0 4.766 5.814 3.9 3.9 0 0 1 1.514.656l2.813 2.009C12.147 22.905 15 21.437 15 18.913z" opacity=".28" /> <path d="m22 10-2.5 2.5m0 0L17 15m2.5-2.5L22 15m-2.5-2.5L17 10" />
  </svg>
</template>

<script>
/**
 * PiVolumeMuteDuoSolid icon from the duo-solid style in media category.
 */
export default {
  name: 'PiVolumeMuteDuoSolid',
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
      default: 'volume-mute icon'
    }
  }
}
</script>
