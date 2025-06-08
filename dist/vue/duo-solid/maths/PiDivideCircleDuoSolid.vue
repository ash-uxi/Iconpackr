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
    <path d="M12 14.95C11.4201 14.95 10.95 15.4201 10.95 16C10.95 16.5799 11.4201 17.05 12 17.05H12.001C12.5809 17.05 13.051 16.5799 13.051 16C13.051 15.4201 12.5809 14.95 12.001 14.95H12Z" :fill="color || 'currentColor'" /> <path d="M12 6.94995C11.4201 6.94995 10.95 7.42005 10.95 7.99995C10.95 8.57985 11.4201 9.04995 12 9.04995H12.001C12.5809 9.04995 13.051 8.57985 13.051 7.99995C13.051 7.42005 12.5809 6.94995 12.001 6.94995H12Z" :fill="color || 'currentColor'" /> <path d="M12.0001 1.8501C6.39441 1.8501 1.8501 6.39441 1.8501 12.0001C1.8501 17.6058 6.39441 22.1501 12.0001 22.1501C17.6058 22.1501 22.1501 17.6058 22.1501 12.0001C22.1501 6.39441 17.6058 1.8501 12.0001 1.8501Z" :fill="color || 'currentColor'" opacity="0.28" /> <path d="M7.8999 11C7.34762 11 6.8999 11.4477 6.8999 12C6.8999 12.5522 7.34762 13 7.8999 13H16.0999C16.6522 13 17.0999 12.5522 17.0999 12C17.0999 11.4477 16.6522 11 16.0999 11H7.8999Z" :fill="color || 'currentColor'" />
  </svg>
</template>

<script>
/**
 * PiDivideCircleDuoSolid icon from the duo-solid style in maths category.
 */
export default {
  name: 'PiDivideCircleDuoSolid',
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
      default: 'divide-circle icon'
    }
  }
}
</script>
