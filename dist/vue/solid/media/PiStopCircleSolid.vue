<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    :class="className"
    
     :style="{color: color || 'currentColor'}"
    role="img"
    :aria-label="ariaLabel"
    v-bind="$attrs"
  >
    <path d="M1.8501 12.0001C1.8501 6.39441 6.39441 1.8501 12.0001 1.8501C17.6058 1.8501 22.1501 6.39441 22.1501 12.0001C22.1501 17.6058 17.6058 22.1501 12.0001 22.1501C6.39441 22.1501 1.8501 17.6058 1.8501 12.0001ZM9.10899 9.54601C9 9.75992 9 10.0399 9 10.6V13.4C9 13.9601 9 14.2401 9.10899 14.454C9.20487 14.6422 9.35785 14.7951 9.54601 14.891C9.75992 15 10.0399 15 10.6 15H13.4C13.9601 15 14.2401 15 14.454 14.891C14.6422 14.7951 14.7951 14.6422 14.891 14.454C15 14.2401 15 13.9601 15 13.4V10.6C15 10.0399 15 9.75992 14.891 9.54601C14.7951 9.35785 14.6422 9.20487 14.454 9.10899C14.2401 9 13.9601 9 13.4 9H10.6C10.0399 9 9.75992 9 9.54601 9.10899C9.35785 9.20487 9.20487 9.35785 9.10899 9.54601Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" stroke="none"/>
  </svg>
</template>

<script>
/**
 * PiStopCircleSolid icon from the solid style in media category.
 */
export default {
  name: 'PiStopCircleSolid',
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
      default: 'stop-circle icon'
    }
  }
}
</script>
