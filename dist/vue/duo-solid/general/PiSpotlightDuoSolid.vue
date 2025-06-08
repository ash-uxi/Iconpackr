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
    <path :fill="color || 'currentColor'" d="M16 17.5c-2.025 0-3.877.306-5.248.735-.68.213-1.284.469-1.74.76a2.8 2.8 0 0 0-.636.539c-.177.211-.376.54-.376.966s.199.755.376.966c.181.216.41.394.636.539.456.291 1.06.547 1.74.76 1.371.429 3.223.735 5.248.735s3.878-.306 5.249-.735c.68-.213 1.284-.469 1.74-.76.226-.145.454-.323.636-.54.177-.21.375-.54.375-.965s-.198-.755-.375-.966a2.8 2.8 0 0 0-.636-.539c-.456-.291-1.06-.547-1.74-.76-1.371-.43-3.223-.735-5.249-.735" /> <path d="M4.718 10 9 20.5M9.328 7l12.834 12.673" opacity=".28" /> <path :fill="color || 'currentColor'" d="M6.286 2.108a3 3 0 0 0-4.915 3.441L2.52 7.187a1 1 0 0 0 1.392.246l3.277-2.294a1 1 0 0 0 .245-1.393zm-3.03.901a1 1 0 0 1 1.392.246l.574.819-1.639 1.147-.573-.819a1 1 0 0 1 .245-1.393" /> <rect width="24" height="24" :fill="color || 'currentColor'" />
  </svg>
</template>

<script>
/**
 * PiSpotlightDuoSolid icon from the duo-solid style in general category.
 */
export default {
  name: 'PiSpotlightDuoSolid',
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
      default: 'spotlight icon'
    }
  }
}
</script>
