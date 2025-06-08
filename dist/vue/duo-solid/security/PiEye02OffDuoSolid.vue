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
    <g :fill="color || 'currentColor'" opacity=".28"> <path d="M4 14c0-.77.524-2.28 1.848-3.617C7.131 9.088 9.128 8 12 8c1.489 0 2.736.292 3.765.746a1 1 0 1 0 .807-1.83C15.28 6.346 13.758 6 12 6 8.572 6 6.07 7.318 4.427 8.976 2.826 10.593 2 12.583 2 14a1 1 0 1 0 2 0M20.163 9.63a1 1 0 1 0-1.544 1.27C19.611 12.106 20 13.338 20 14a1 1 0 1 0 2 0c0-1.242-.634-2.909-1.837-4.37" /> <path d="M12 10a4 4 0 0 0-3.828 5.162 1 1 0 0 0 1.664.417l3.743-3.743a1 1 0 0 0-.418-1.665A4 4 0 0 0 12 10M15.874 15a1 1 0 0 0-1.676-.956l-2.154 2.154A1 1 0 0 0 13 17.874 4 4 0 0 0 15.874 15" /> </g> <path d="M22 2 2 22" />
  </svg>
</template>

<script>
/**
 * PiEye02OffDuoSolid icon from the duo-solid style in security category.
 */
export default {
  name: 'PiEye02OffDuoSolid',
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
      default: 'eye-02-off icon'
    }
  }
}
</script>
