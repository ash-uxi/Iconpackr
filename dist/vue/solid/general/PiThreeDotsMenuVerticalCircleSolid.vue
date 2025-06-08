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
    <path d="M12.0001 1.84961C17.6058 1.84961 22.1501 6.39392 22.1501 11.9996C22.1501 17.6053 17.6058 22.1496 12.0001 22.1496C6.39441 22.1496 1.8501 17.6053 1.8501 11.9996C1.8501 6.39392 6.39441 1.84961 12.0001 1.84961ZM13.0997 7.99951C13.0997 7.392 12.6072 6.89951 11.9997 6.89951C11.3922 6.89951 10.8997 7.392 10.8997 7.99951V8.00951C10.8997 8.61703 11.3922 9.10951 11.9997 9.10951C12.6072 9.10951 13.0997 8.61703 13.0997 8.00951V7.99951ZM13.0997 11.9995C13.0997 11.392 12.6072 10.8995 11.9997 10.8995C11.3922 10.8995 10.8997 11.392 10.8997 11.9995V12.0095C10.8997 12.617 11.3922 13.1095 11.9997 13.1095C12.6072 13.1095 13.0997 12.617 13.0997 12.0095V11.9995ZM13.0997 15.9995C13.0997 15.392 12.6072 14.8995 11.9997 14.8995C11.3922 14.8995 10.8997 15.392 10.8997 15.9995V16.0095C10.8997 16.617 11.3922 17.1095 11.9997 17.1095C12.6072 17.1095 13.0997 16.617 13.0997 16.0095V15.9995Z" fill="currentColor" stroke="none"/>
  </svg>
</template>

<script>
/**
 * PiThreeDotsMenuVerticalCircleSolid icon from the solid style in general category.
 */
export default {
  name: 'PiThreeDotsMenuVerticalCircleSolid',
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
      default: 'three-dots-menu-vertical-circle icon'
    }
  }
}
</script>
