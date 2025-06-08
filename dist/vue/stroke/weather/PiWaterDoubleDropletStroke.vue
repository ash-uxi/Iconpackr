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
    <path d="M16.6199 7.755C15.5009 6.271 13.9869 4.682 11.9999 3C-0.0830712 13.224 5.35993 19.992 10.7749 20.896" stroke="currentColor" stroke-width="2" fill="none"/>
  <path d="M17.5 11.6699C23.762 17.3739 20.252 21.0029 17.5 21.0029C14.748 21.0029 11.238 17.3729 17.5 11.6699Z" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiWaterDoubleDropletStroke icon from the stroke style in weather category.
 */
export default {
  name: 'PiWaterDoubleDropletStroke',
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
