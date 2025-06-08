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
    <path d="M13 17C13 16.0681 13 15.6022 13.1522 15.2346C13.3552 14.7446 13.7446 14.3552 14.2346 14.1522C14.6022 14 15.0681 14 16 14H18C18.9319 14 19.3978 14 19.7654 14.1522C20.2554 14.3552 20.6448 14.7446 20.8478 15.2346C21 15.6022 21 16.0681 21 17C21 17.9319 21 18.3978 20.8478 18.7654C20.6448 19.2554 20.2554 19.6448 19.7654 19.8478C19.3978 20 18.9319 20 18 20H16C15.0681 20 14.6022 20 14.2346 19.8478C13.7446 19.6448 13.3552 19.2554 13.1522 18.7654C13 18.3978 13 17.9319 13 17Z" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M3 7C3 6.06812 3 5.60218 3.15224 5.23463C3.35523 4.74458 3.74458 4.35523 4.23463 4.15224C4.60218 4 5.06812 4 6 4H18C18.9319 4 19.3978 4 19.7654 4.15224C20.2554 4.35523 20.6448 4.74458 20.8478 5.23463C21 5.60218 21 6.06812 21 7C21 7.93188 21 8.39782 20.8478 8.76537C20.6448 9.25542 20.2554 9.64477 19.7654 9.84776C19.3978 10 18.9319 10 18 10H6C5.06812 10 4.60218 10 4.23463 9.84776C3.74458 9.64477 3.35523 9.25542 3.15224 8.76537C3 8.39782 3 7.93188 3 7Z" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M6 10V12C6 14.7614 8.23858 17 11 17H13" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiSubtaskDuoStroke icon from the duo-stroke style in general category.
 */
export default {
  name: 'PiSubtaskDuoStroke',
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
      default: 'subtask icon'
    }
  }
}
</script>
