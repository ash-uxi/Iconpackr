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
    <path d="M15.7682 7.17144L18.5966 4.34302L20.7179 6.46434M15.7682 7.17144L10.1113 12.8283M15.7682 7.17144L17.1824 8.58566" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  <path d="M4.4538 18.4854C6.0159 20.0475 8.54856 20.0475 10.1107 18.4854C11.6727 16.9233 11.6727 14.3907 10.1107 12.8286C8.54856 11.2665 6.0159 11.2665 4.4538 12.8286C2.8917 14.3907 2.8917 16.9233 4.4538 18.4854Z" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiKeySlantDuoStroke icon from the duo-stroke style in security category.
 */
export default {
  name: 'PiKeySlantDuoStroke',
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
      default: 'key-slant icon'
    }
  }
}
</script>
