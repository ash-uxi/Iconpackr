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
    <path d="M10.9984 4.87876V2.3042M15.8855 6.14698L17.4029 4.7401M4.87486 11.0023H2.30029M6.66833 6.6723L4.50335 4.50732M4.73619 17.4068L6.14307 15.8894" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  <path d="M9.93499 14.1396C9.47314 12.2922 9.24222 11.3685 9.49432 10.7247C9.71436 10.1628 10.1589 9.71827 10.7208 9.49823C11.3646 9.24612 12.2883 9.47705 14.1357 9.93889L17.6719 10.8229C19.2478 11.2169 20.0358 11.4139 20.3555 11.632C21.5591 12.4531 21.6243 14.2049 20.485 15.1132C20.1825 15.3544 19.4113 15.6095 17.869 16.1195C17.592 16.2111 17.4536 16.2569 17.3285 16.3169C16.8843 16.53 16.5261 16.8882 16.313 17.3324C16.253 17.4575 16.2072 17.5959 16.1156 17.8729C15.6056 19.4152 15.3505 20.1864 15.1093 20.4889C14.201 21.6282 12.4492 21.563 11.6281 20.3594C11.41 20.0397 11.213 19.2518 10.819 17.6758L9.93499 14.1396Z" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiPointerCursorClickDuoStroke icon from the duo-stroke style in media category.
 */
export default {
  name: 'PiPointerCursorClickDuoStroke',
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
      default: 'pointer-cursor-click icon'
    }
  }
}
</script>
