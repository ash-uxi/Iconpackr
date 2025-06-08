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
    <path d="M8 2V4.12777M8 6V4.12777M16 2V4.12777M16 6V4.12777M16 4.12777C15.0589 4 13.8284 4 12 4C10.1716 4 8.94106 4 8 4.12777M16 4.12777C16.4978 4.19536 16.9146 4.29871 17.2961 4.45672C18.7663 5.06569 19.9343 6.23373 20.5433 7.7039C21 8.80653 21 10.2044 21 13C21 15.7956 21 17.1935 20.5433 18.2961C19.9343 19.7663 18.7663 20.9343 17.2961 21.5433C16.1935 22 14.7956 22 12 22C9.20435 22 7.80653 22 6.7039 21.5433C5.23373 20.9343 4.06569 19.7663 3.45672 18.2961C3 17.1935 3 15.7956 3 13C3 10.2044 3 8.80653 3.45672 7.7039C4.06569 6.23373 5.23373 5.06569 6.7039 4.45672C7.08538 4.29871 7.50219 4.19536 8 4.12777M12 14.0001V10.0001M12 17.3751V17.3762" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiCalendarExclamationMarkStroke icon from the stroke style in time category.
 */
export default {
  name: 'PiCalendarExclamationMarkStroke',
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
      default: 'calendar-exclamation-mark icon'
    }
  }
}
</script>
