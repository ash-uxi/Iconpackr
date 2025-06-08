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
    <path d="M14 14.5C13.5065 15.158 12.934 15.7522 12.2957 16.2694C12.2094 16.3394 12.1047 16.3744 12 16.3744C11.8953 16.3744 11.7906 16.3394 11.7043 16.2694C11.066 15.7522 10.4935 15.158 10 14.5M14 9.5C13.5065 8.842 12.934 8.24779 12.2957 7.73057C12.2094 7.66062 12.1047 7.62564 12 7.62564C11.8953 7.62564 11.7906 7.66062 11.7043 7.73057C11.066 8.24779 10.4935 8.842 10 9.5M19 10V14C19 17.866 15.866 21 12 21C8.13401 21 5 17.866 5 14V10C5 6.13401 8.13401 3 12 3C15.866 3 19 6.13401 19 10Z" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiMouseScrollStroke icon from the stroke style in devices category.
 */
export default {
  name: 'PiMouseScrollStroke',
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
      default: 'mouse-scroll icon'
    }
  }
}
</script>
