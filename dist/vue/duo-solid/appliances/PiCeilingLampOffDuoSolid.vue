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
    <path d="M13 4C13 3.44772 12.5522 3 12 3C11.4477 3 11 3.44772 11 4V6.04938C11.3289 6.01672 11.6625 6 12 6C12.3375 6 12.6711 6.01672 13 6.04938V4Z" :fill="color || 'currentColor'" /> <path d="M3 17H21C21.5523 17 22 16.5523 22 16C22 10.4772 17.5228 6 12 6C6.47715 6 2 10.4772 2 16C2 16.5523 2.44772 17 3 17Z" :fill="color || 'currentColor'" opacity="0.28" /> <path d="M8.12598 17C8.57002 18.7252 10.1361 20 12 20C13.8638 20 15.4299 18.7252 15.8739 17H13.7324C13.3866 17.5978 12.7402 18 12 18C11.2597 18 10.6133 17.5978 10.2675 17L8.12598 17Z" :fill="color || 'currentColor'" />
  </svg>
</template>

<script>
/**
 * PiCeilingLampOffDuoSolid icon from the duo-solid style in appliances category.
 */
export default {
  name: 'PiCeilingLampOffDuoSolid',
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
      default: 'ceiling-lamp-off icon'
    }
  }
}
</script>
