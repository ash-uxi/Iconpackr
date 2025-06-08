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
    <path d="M16.9998 12H6.99985C6.53548 12 6.30329 12 6.10797 12.022C4.77188 12.1725 3.6677 13.0674 3.21729 14.2845C3.52396 13.0225 4.11337 11.1192 4.71325 9.02089C5.26128 7.10395 5.53529 6.14548 6.02056 5.52811C6.47213 4.95361 6.97663 4.57314 7.65312 4.29688C8.3801 4 9.31471 4 11.1839 4H13.1055C14.8581 4 15.7345 4 16.468 4.30299C17.1153 4.57038 17.6811 5.00306 18.1087 5.55773C18.5933 6.18625 18.8228 7.03198 19.282 8.72345L20.8227 14.3997C20.4008 13.124 19.2696 12.1773 17.8917 12.022C17.6964 12 17.4642 12 16.9998 12Z" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  <path d="M17 16H13M7 12H17C17.4644 12 17.6966 12 17.8919 12.022C19.5145 12.2048 20.7952 13.4855 20.978 15.1081C21 15.3034 21 15.5356 21 16C21 16.4644 21 16.6966 20.978 16.8919C20.7952 18.5145 19.5145 19.7952 17.8919 19.978C17.6966 20 17.4644 20 17 20H7C6.53563 20 6.30344 20 6.10812 19.978C4.48545 19.7952 3.20484 18.5145 3.02201 16.8919C3 16.6966 3 16.4644 3 16C3 15.5356 3 15.3034 3.02201 15.1081C3.20484 13.4855 4.48545 12.2048 6.10812 12.022C6.30344 12 6.53563 12 7 12Z" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiHardriveDuoStroke icon from the duo-stroke style in devices category.
 */
export default {
  name: 'PiHardriveDuoStroke',
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
      default: 'hardrive icon'
    }
  }
}
</script>
