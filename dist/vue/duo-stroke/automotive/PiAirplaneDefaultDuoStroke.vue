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
    <path d="M7.00018 22C8.60483 21.6791 12 21.4684 12 21.4684C12 21.4684 15.3952 21.6791 16.9998 22V21.4684C16.9998 21.1716 16.868 20.8901 16.64 20.7002L13.9998 18.5L14.4996 15L22 17V16.5C22 15.5557 21.5554 14.6666 20.8 14.1L13.9998 9V3.99982C13.9998 2.89535 12.5 2 12 2C11.5 2 10.0002 2.89535 10.0002 3.99982L10.0002 9L3.20003 14.1C2.44459 14.6666 2 15.5557 2 16.5V17L9.50037 15L10.0002 18.5L7.36 20.7002C7.13201 20.8901 7.00018 21.1716 7.00018 21.4684L7.00018 22Z" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  <path d="M9.50037 15L2 17V16.5C2 15.5557 2.44459 14.6666 3.20003 14.1L10.0002 9M14.4996 15L22 17V16.5C22 15.5557 21.5554 14.6666 20.8 14.1L13.9998 9" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiAirplaneDefaultDuoStroke icon from the duo-stroke style in automotive category.
 */
export default {
  name: 'PiAirplaneDefaultDuoStroke',
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
      default: 'airplane-default icon'
    }
  }
}
</script>
