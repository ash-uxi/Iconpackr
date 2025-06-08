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
    <path d="M12.1324 14.9998V11.9998M12.1324 11.9998V8.99984M12.1324 11.9998L9.13242 11.9998M12.1324 11.9998H15.1324M10.8827 2.36779L5.49513 4.31331C4.34594 4.7283 3.56323 5.79876 3.51627 7.01967L3.38902 10.3283C3.23134 14.4279 5.36831 18.2747 8.93239 20.3068L10.4531 21.1739C11.3539 21.6875 12.4561 21.6995 13.3679 21.2056L14.8565 20.3993C18.6739 18.3316 20.918 14.212 20.585 9.88342L20.358 6.93292C20.2675 5.75636 19.4957 4.74214 18.3858 4.34135L12.9206 2.36779C12.2621 2.13001 11.5412 2.13001 10.8827 2.36779Z" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiShieldPlusStroke icon from the stroke style in security category.
 */
export default {
  name: 'PiShieldPlusStroke',
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
      default: 'shield-plus icon'
    }
  }
}
</script>
