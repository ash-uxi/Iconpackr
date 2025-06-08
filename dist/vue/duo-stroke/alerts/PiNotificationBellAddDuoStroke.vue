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
    <path  d="M13 8a1 1 0 1 0-2 0v2H9a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2z" fill="none"/>
  <path d="M4.818 9.609a7.207 7.207 0 0 1 14.365 0l.355 4.262c.043.515.206.993.367 1.479a1.587 1.587 0 0 1-1.33 2.077 59.5 59.5 0 0 1-13.149 0 1.587 1.587 0 0 1-1.33-2.08c.161-.485.324-.963.367-1.478z" opacity=".28" fill="none"/>
  <path  d="M9.11 18.722a61 61 0 0 1-.917-.05 3.843 3.843 0 0 0 7.616 0 60 60 0 0 1-2.07.094 1.843 1.843 0 0 1-3.478 0 61 61 0 0 1-1.15-.044" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiNotificationBellAddDuoStroke icon from the duo-stroke style in alerts category.
 */
export default {
  name: 'PiNotificationBellAddDuoStroke',
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
      default: 'notification-bell-add icon'
    }
  }
}
</script>
