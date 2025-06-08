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
    <path d="M12 19.5H12.01M15 4.78081C17.976 5.34537 20.6603 6.73416 22.8064 8.70076M1.19336 8.70076C3.33951 6.73411 6.02387 5.3453 9 4.78077M4.73193 12.243C5.94653 11.173 7.39908 10.3669 9 9.91406M15 9.91407C16.6009 10.3669 18.0534 11.173 19.268 12.243M15 15.3028C15.2442 15.444 15.4775 15.602 15.6983 15.7751M8.25537 15.8116C8.48985 15.6241 8.73869 15.4538 9 15.3026M12 4V16" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiWifiExclamationMarkStroke icon from the stroke style in devices category.
 */
export default {
  name: 'PiWifiExclamationMarkStroke',
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
      default: 'wifi-exclamation-mark icon'
    }
  }
}
</script>
