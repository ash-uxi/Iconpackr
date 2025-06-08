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
    <path d="M2 16V8C2 6.34315 3.34315 5 5 5H19C20.6569 5 22 6.34315 22 8V16C22 17.6569 20.6569 19 19 19H5C3.34315 19 2 17.6569 2 16Z" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  <path d="M2 9H4C5.10457 9 6 9.89543 6 11V13C6 14.1046 5.10457 15 4 15H2M22 9H20C18.8954 9 18 9.89543 18 11V13C18 14.1046 18.8954 15 20 15H22M12 15V19M12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9M12 9V5" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiPlaygroundDuoStroke icon from the duo-stroke style in sports category.
 */
export default {
  name: 'PiPlaygroundDuoStroke',
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
      default: 'playground icon'
    }
  }
}
</script>
