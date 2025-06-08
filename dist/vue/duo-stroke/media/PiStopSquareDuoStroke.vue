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
    <path d="M6.7039 20.5433C7.80653 21 9.20435 21 12 21C14.7956 21 16.1935 21 17.2961 20.5433C18.7663 19.9343 19.9343 18.7663 20.5433 17.2961C21 16.1935 21 14.7956 21 12C21 9.20435 21 7.80653 20.5433 6.7039C19.9343 5.23373 18.7663 4.06569 17.2961 3.45672C16.1935 3 14.7956 3 12 3C9.20435 3 7.80653 3 6.7039 3.45672C5.23373 4.06569 4.06569 5.23373 3.45672 6.7039C3 7.80653 3 9.20435 3 12C3 14.7956 3 16.1935 3.45672 17.2961C4.06569 18.7663 5.23373 19.9343 6.7039 20.5433Z" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  <path d="M9 10.6C9 10.0399 9 9.75992 9.10899 9.54601C9.20487 9.35785 9.35785 9.20487 9.54601 9.10899C9.75992 9 10.0399 9 10.6 9H13.4C13.9601 9 14.2401 9 14.454 9.10899C14.6422 9.20487 14.7951 9.35785 14.891 9.54601C15 9.75992 15 10.0399 15 10.6V13.4C15 13.9601 15 14.2401 14.891 14.454C14.7951 14.6422 14.6422 14.7951 14.454 14.891C14.2401 15 13.9601 15 13.4 15H10.6C10.0399 15 9.75992 15 9.54601 14.891C9.35785 14.7951 9.20487 14.6422 9.10899 14.454C9 14.2401 9 13.9601 9 13.4V10.6Z" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiStopSquareDuoStroke icon from the duo-stroke style in media category.
 */
export default {
  name: 'PiStopSquareDuoStroke',
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
      default: 'stop-square icon'
    }
  }
}
</script>
