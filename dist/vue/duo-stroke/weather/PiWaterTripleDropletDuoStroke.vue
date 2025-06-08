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
    <path d="M12 2.05615C18.262 7.75915 14.752 11.3892 12 11.3892C9.24803 11.3892 5.73803 7.75915 12 2.05615Z" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  <path d="M6.00003 12.2661C12.262 17.9691 8.75203 21.5991 6.00003 21.5991C3.24803 21.5991 -0.261971 17.9691 6.00003 12.2661ZM18 12.2661C24.262 17.9691 20.752 21.5991 18 21.5991C15.248 21.5991 11.738 17.9691 18 12.2661Z" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiWaterTripleDropletDuoStroke icon from the duo-stroke style in weather category.
 */
export default {
  name: 'PiWaterTripleDropletDuoStroke',
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
      default: 'water-triple-droplet icon'
    }
  }
}
</script>
