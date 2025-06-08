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
    <path d="M8.61155 2C7.34216 2 6.21017 2.79893 5.78491 3.99497L3.05779 11.665C2.94893 11.9712 2.99562 12.3111 3.183 12.5766C3.37037 12.8421 3.67506 13 4.00001 13H11V17H10C8.34315 17 7.00001 18.3431 7.00001 20V21C7.00001 21.5523 7.44772 22 8.00001 22H16C16.5523 22 17 21.5523 17 21V20C17 18.3431 15.6569 17 14 17H13V13H20C20.325 13 20.6296 12.8421 20.817 12.5766C21.0044 12.3111 21.0511 11.9712 20.9422 11.665L18.2151 3.99497C17.7898 2.79893 16.6579 2 15.3885 2H8.61155Z" fill="currentColor" stroke="none"/>
  </svg>
</template>

<script>
/**
 * PiTableLampOffSolid icon from the solid style in appliances category.
 */
export default {
  name: 'PiTableLampOffSolid',
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
      default: 'table-lamp-off icon'
    }
  }
}
</script>
