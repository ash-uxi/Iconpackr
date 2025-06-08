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
    <path :fill="color || 'currentColor'" fill-rule="evenodd" d="M12.646 2.237a1 1 0 0 0-1.292 0C4.76 7.815 2.94 12.694 4.023 16.405 5.09 20.065 8.823 22 12 22s6.91-1.936 7.977-5.595c1.082-3.71-.738-8.59-7.331-14.168" clip-rule="evenodd" opacity=".28" /> <path d="M19.257 14c.218 4.446-3.807 7-7.257 7s-7.475-2.554-7.257-7" />
  </svg>
</template>

<script>
/**
 * PiWaterDropletDuoSolid icon from the duo-solid style in weather category.
 */
export default {
  name: 'PiWaterDropletDuoSolid',
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
      default: 'water-droplet icon'
    }
  }
}
</script>
