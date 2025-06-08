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
    <path d="M20.9594 10L3.04004 10M8.00974 14H7.99974M8.00974 18H7.99974M12.0097 14H11.9997M12.0097 18H11.9997M16.0097 14H15.9997M16.0097 18H15.9997M7.99974 2V6M15.9997 2V6" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M3 13C3 11.7554 3 10.7878 3.0403 10C3.09052 9.01824 3.20333 8.31564 3.45672 7.7039C4.06569 6.23373 5.23373 5.06569 6.7039 4.45672C7.08538 4.29871 7.50219 4.19536 8 4.12777C8.94106 4 10.1716 4 12 4C13.8284 4 15.0589 4 16 4.12777C16.4978 4.19536 16.9146 4.29871 17.2961 4.45672C18.7663 5.06569 19.9343 6.23373 20.5433 7.7039C20.7967 8.31564 20.9095 9.01824 20.9597 10C21 10.7878 21 11.7554 21 13C21 15.7956 21 17.1935 20.5433 18.2961C19.9343 19.7663 18.7663 20.9343 17.2961 21.5433C16.1935 22 14.7956 22 12 22C9.20435 22 7.80653 22 6.7039 21.5433C5.23373 20.9343 4.06569 19.7663 3.45672 18.2961C3 17.1935 3 15.7956 3 13Z" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiCalendarFilledDuoStroke icon from the duo-stroke style in time category.
 */
export default {
  name: 'PiCalendarFilledDuoStroke',
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
      default: 'calendar-filled icon'
    }
  }
}
</script>
