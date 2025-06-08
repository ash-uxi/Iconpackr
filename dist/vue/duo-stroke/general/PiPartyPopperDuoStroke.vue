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
    <path d="M14.1249 17.9657C13 19 4.32338 22.5935 2.88128 21.087C1.43424 19.5753 5.00001 11 6.03426 9.8751M15.9998 12H16.0098M22 16.9999C20.9037 15.1727 18.9659 14.719 17 14.9999M10.5 7.5C11.1286 5.61426 10.7154 3.53504 9.46729 2" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  <path d="M22.0006 4.34919C18.6215 5.36326 15.6458 7.13867 13.4998 9.99997M18 19H18.01M6 5H6.01M13.9998 4H14.0098M21 10H21.01M6.26439 9.25024C7.04544 8.46919 9.5781 9.73552 11.9212 12.0787C14.2644 14.4218 15.5307 16.9545 14.7497 17.7355C14.6007 17.8845 14.3879 17.959 14.1248 17.9657C13.0091 17.9942 10.9889 16.8032 9.09282 14.9071C7.19673 13.011 6.00575 10.9908 6.03418 9.8751C6.04088 9.61204 6.11537 9.39926 6.26439 9.25024Z" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiPartyPopperDuoStroke icon from the duo-stroke style in general category.
 */
export default {
  name: 'PiPartyPopperDuoStroke',
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
      default: 'party-popper icon'
    }
  }
}
</script>
