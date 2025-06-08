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
    <path d="M18 8H16M14.8021 22L14.8424 21.8903C15.2847 20.6838 16.0952 19.647 17.1592 18.9265M22 12V6C22 4.89543 21.1046 4 20 4H4C2.89543 4 2 4.89543 2 6V12H22ZM16.6767 16.0715C15.2045 16.9215 14.6523 18.7213 15.2936 19.832C15.9348 20.9427 17.7696 21.3643 19.2418 20.5144C20.714 19.6644 22.2784 16.5397 21.9578 15.9844C21.6372 15.429 18.1489 15.2215 16.6767 16.0715Z" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiAcLeafStroke icon from the stroke style in appliances category.
 */
export default {
  name: 'PiAcLeafStroke',
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
      default: 'ac-leaf icon'
    }
  }
}
</script>
