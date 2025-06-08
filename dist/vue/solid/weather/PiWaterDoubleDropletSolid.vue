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
    <path d="M11.3539 2.23715C11.5344 2.08434 11.7633 2.00049 11.9999 2.00049C12.2364 2.00049 12.4653 2.08434 12.6459 2.23715C15.4169 4.58215 17.3459 6.80315 18.5689 8.86715C18.0501 8.66916 17.4866 8.61902 16.9411 8.7223C16.3955 8.82558 15.8893 9.07824 15.4789 9.45215C12.0349 12.5892 10.3449 16.0122 11.2239 19.2602C11.4951 20.2763 12.0198 21.2071 12.7489 21.9652C12.4999 21.9883 12.2499 22 11.9999 22.0002C8.82187 22.0002 5.08987 20.0642 4.02287 16.4052C2.94087 12.6942 4.76087 7.81515 11.3539 2.23715ZM16.8269 10.9312C17.011 10.7636 17.2509 10.6708 17.4999 10.6708C17.7488 10.6708 17.9888 10.7636 18.1729 10.9312C21.4089 13.8782 22.4309 16.5742 21.8459 18.7372C21.2689 20.8661 19.2479 22.0032 17.4999 22.0032C15.7519 22.0032 13.7309 20.8661 13.1549 18.7372C12.5689 16.5742 13.5909 13.8772 16.8269 10.9312Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" stroke="none"/>
  </svg>
</template>

<script>
/**
 * PiWaterDoubleDropletSolid icon from the solid style in weather category.
 */
export default {
  name: 'PiWaterDoubleDropletSolid',
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
      default: 'water-double-droplet icon'
    }
  }
}
</script>
