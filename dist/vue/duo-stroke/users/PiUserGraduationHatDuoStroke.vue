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
    <path d="M16 15H8C5.79086 15 4 16.7909 4 19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19C20 16.7909 18.2091 15 16 15Z" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  <path d="M5 4L12 2L19 4L15.4698 5.00862M5 4L8.53016 5.00862M5 4V7M15.4698 5.00862L12 6L8.53016 5.00862M15.4698 5.00862C15.8071 5.59501 16 6.27498 16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 6.27498 8.19289 5.59501 8.53016 5.00862" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiUserGraduationHatDuoStroke icon from the duo-stroke style in users category.
 */
export default {
  name: 'PiUserGraduationHatDuoStroke',
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
      default: 'user-graduation-hat icon'
    }
  }
}
</script>
