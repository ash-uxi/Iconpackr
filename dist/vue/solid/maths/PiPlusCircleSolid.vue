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
    <path d="M1.8501 12.0001C1.8501 6.39441 6.39441 1.8501 12.0001 1.8501C17.6058 1.8501 22.1501 6.39441 22.1501 12.0001C22.1501 17.6058 17.6058 22.1501 12.0001 22.1501C6.39441 22.1501 1.8501 17.6058 1.8501 12.0001ZM12.9999 8.90002C12.9999 8.34774 12.5522 7.90002 11.9999 7.90002C11.4476 7.90002 10.9999 8.34774 10.9999 8.90002V11H8.8999C8.34762 11 7.8999 11.4477 7.8999 12C7.8999 12.5523 8.34762 13 8.8999 13H10.9999V15.1C10.9999 15.6523 11.4476 16.1 11.9999 16.1C12.5522 16.1 12.9999 15.6523 12.9999 15.1V13H15.0999C15.6522 13 16.0999 12.5523 16.0999 12C16.0999 11.4477 15.6522 11 15.0999 11H12.9999V8.90002Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" stroke="none"/>
  </svg>
</template>

<script>
/**
 * PiPlusCircleSolid icon from the solid style in maths category.
 */
export default {
  name: 'PiPlusCircleSolid',
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
      default: 'plus-circle icon'
    }
  }
}
</script>
