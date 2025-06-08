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
    <path d="M15.969 3.91602C17.4232 4.97466 18.7293 6.21138 19.855 7.59488C19.9516 7.71356 19.9999 7.85646 19.9999 7.99935C19.9999 8.14224 19.9516 8.28513 19.855 8.40382C18.7293 9.78732 17.4232 11.024 15.969 12.0827" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M20 8H9C6.23858 8 4 10.2386 4 13C4 15.7614 6.23858 18 9 18H12" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiUturnRightDuoStroke icon from the duo-stroke style in arrows-&-chevrons category.
 */
export default {
  name: 'PiUturnRightDuoStroke',
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
      default: 'uturn-right icon'
    }
  }
}
</script>
