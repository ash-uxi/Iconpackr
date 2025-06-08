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
    <path fill="currentColor" d="M15.4 3H8.6c-.558 0-.837 0-1.067.055a2 2 0 0 0-1.478 1.478 2.3 2.3 0 0 0-.05.467C6 5.158 6 5.351 6 5.6V10a5.998 5.998 0 0 0 6 6 6 6 0 0 0 6-6V5.6c0-.249 0-.442-.005-.6a2.3 2.3 0 0 0-.05-.467 2 2 0 0 0-1.478-1.478C16.237 3 15.957 3 15.4 3" opacity=".28"/>
  <path d="M8 21h4m0 0h4m-4 0v-5m5.2-3.004A5 5 0 0 0 22 8V6.6A1.6 1.6 0 0 0 20.4 5h-2.405m-.795 7.996c.509-.882.8-1.905.8-2.996V5.6c0-.249 0-.442-.005-.6m-.795 7.996A6 6 0 0 1 12 16m0 0a6 6 0 0 1-5.2-3.004M17.995 5a2.3 2.3 0 0 0-.05-.467 2 2 0 0 0-1.478-1.478C16.237 3 15.957 3 15.4 3H8.6c-.558 0-.837 0-1.067.055a2 2 0 0 0-1.478 1.478 2.3 2.3 0 0 0-.05.467m0 0H3.6A1.6 1.6 0 0 0 2 6.6V8a5 5 0 0 0 4.8 4.996M6.005 5C6 5.158 6 5.351 6 5.6V10c0 1.091.291 2.114.8 2.996"/>
  </svg>
</template>

<script>
/**
 * PiTrophyContrast icon from the contrast style in sports category.
 */
export default {
  name: 'PiTrophyContrast',
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
      default: 'trophy icon'
    }
  }
}
</script>
