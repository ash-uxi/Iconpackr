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
    <path d="M9.00008 9C9.00008 6.79086 10.7909 5 13.0001 5C15.2092 5 17.0001 6.79086 17.0001 9V12C17.0001 12.5523 17.4478 13 18.0001 13C18.5524 13 19.0001 12.5523 19.0001 12V9C19.0001 5.68629 16.3138 3 13.0001 3C9.68638 3 7.00008 5.68629 7.00008 9L7.00008 15.1832C6.76986 15.1732 6.53975 15.1597 6.30983 15.1427L3.99024 14.9718C3.60181 14.9432 3.23211 15.1427 3.04281 15.4831C2.85351 15.8235 2.87906 16.2428 3.10829 16.5577C4.21735 18.0811 5.51355 19.4502 6.96447 20.6308C7.26401 20.8745 7.63054 21 8.00008 21C8.36963 21 8.73616 20.8745 9.0357 20.6308C10.4866 19.4502 11.7828 18.0811 12.8919 16.5577C13.1211 16.2428 13.1467 15.8235 12.9574 15.4831C12.7681 15.1427 12.3984 14.9432 12.0099 14.9718L9.69034 15.1427C9.46042 15.1597 9.23031 15.1732 9.00008 15.1832L9.00008 9Z" fill="currentColor" stroke="none"/>
  </svg>
</template>

<script>
/**
 * PiUturnDownSolid icon from the solid style in arrows-&-chevrons category.
 */
export default {
  name: 'PiUturnDownSolid',
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
      default: 'uturn-down icon'
    }
  }
}
</script>
