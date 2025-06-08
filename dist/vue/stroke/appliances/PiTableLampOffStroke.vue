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
    <path d="M12 18V12M9 21H15M20 12L17.2729 4.32998C16.9894 3.53262 16.2347 3 15.3885 3H8.61155C7.76529 3 7.01062 3.53262 6.72712 4.32998L4 12H20ZM16 21V20C16 18.8954 15.1046 18 14 18H10C8.89543 18 8 18.8954 8 20V21H16Z" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiTableLampOffStroke icon from the stroke style in appliances category.
 */
export default {
  name: 'PiTableLampOffStroke',
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
