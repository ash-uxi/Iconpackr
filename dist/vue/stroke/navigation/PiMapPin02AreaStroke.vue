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
    <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11ZM12 11V17M7 15.1644C4.01099 15.7263 2 16.7766 2 17.9796C2 19.7745 6.47715 21.2296 12 21.2296C17.5228 21.2296 22 19.7745 22 17.9796C22 16.7766 19.989 15.7263 17 15.1644" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiMapPin02AreaStroke icon from the stroke style in navigation category.
 */
export default {
  name: 'PiMapPin02AreaStroke',
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
      default: 'map-pin-02-area icon'
    }
  }
}
</script>
