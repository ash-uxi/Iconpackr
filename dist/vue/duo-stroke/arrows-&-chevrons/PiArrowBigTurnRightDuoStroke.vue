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
    <path d="M14.2012 5C14.3554 6.33024 14.4656 7.6643 14.5316 9C6.99658 9 2.99658 11 2.99658 19C5.99658 15 9.99658 15 14.5316 15C14.4656 16.3357 14.3554 17.6698 14.2012 19" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  <path d="M14.2012 5C16.6551 6.81482 18.8592 8.93491 20.7589 11.3066C20.9218 11.5101 21.0033 11.755 21.0033 12C21.0033 12.245 20.9218 12.4899 20.7589 12.6934C18.8592 15.0651 16.6551 17.1852 14.2012 19" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiArrowBigTurnRightDuoStroke icon from the duo-stroke style in arrows-&-chevrons category.
 */
export default {
  name: 'PiArrowBigTurnRightDuoStroke',
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
      default: 'arrow-big-turn-right icon'
    }
  }
}
</script>
