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
    <path d="M18.9739 19.3604L18.9739 19.3568C18.9739 17.5029 17.4711 16 15.6172 16H8.38289C6.529 16 5.02612 17.5029 5.02612 19.3568L5.02613 19.3605M18.9739 19.3604C19.1805 19.1096 19.3604 18.8357 19.5095 18.543C20 17.5804 20 16.3202 20 13.8V10.2C20 7.67976 20 6.41965 19.5095 5.45704C19.0781 4.61031 18.3897 3.9219 17.543 3.49047C16.5804 3 15.3202 3 12.8 3H11.2C8.67976 3 7.41965 3 6.45704 3.49047C5.61031 3.9219 4.9219 4.61031 4.49047 5.45704C4 6.41965 4 7.67976 4 10.2V13.8C4 16.3202 4 17.5804 4.49047 18.543C4.63966 18.8357 4.81957 19.1096 5.02613 19.3605M18.9739 19.3604C18.5831 19.835 18.0969 20.2273 17.543 20.5095C16.5804 21 15.3202 21 12.8 21H11.2C8.67976 21 7.41965 21 6.45704 20.5095C5.9031 20.2273 5.41692 19.8351 5.02613 19.3605M15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10Z" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiUserRectangleStroke icon from the stroke style in users category.
 */
export default {
  name: 'PiUserRectangleStroke',
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
      default: 'user-rectangle icon'
    }
  }
}
</script>
