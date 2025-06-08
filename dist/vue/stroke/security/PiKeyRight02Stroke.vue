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
    <path d="M20.0001 10L22.0001 12L20.0001 14H17.0001L15.8541 12.854C15.8077 12.8074 15.7525 12.7705 15.6917 12.7453C15.631 12.7201 15.5659 12.7071 15.5001 12.7071C15.4343 12.7071 15.3692 12.7201 15.3085 12.7453C15.2477 12.7705 15.1926 12.8074 15.1461 12.854L14.0001 14H10.5321C10.081 14.9092 9.33588 15.6391 8.41763 16.0714C7.49939 16.5037 6.46198 16.6129 5.47386 16.3812C4.48575 16.1496 3.60495 15.5907 2.9745 14.7954C2.34406 14 2.00098 13.0149 2.00098 12C2.00098 10.9851 2.34406 9.99999 2.9745 9.20465C3.60495 8.40931 4.48575 7.85044 5.47386 7.61879C6.46198 7.38714 7.49939 7.49632 8.41763 7.92859C9.33588 8.36086 10.081 9.09084 10.5321 10H20.0001Z" stroke="currentColor" stroke-width="2" fill="none"/>
  <path d="M5.5 13V11C5.34475 11.1164 5.21875 11.2674 5.13197 11.441C5.04518 11.6146 5 11.8059 5 12C5 12.1941 5.04518 12.3854 5.13197 12.559C5.21875 12.7326 5.34475 12.8836 5.5 13Z" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiKeyRight02Stroke icon from the stroke style in security category.
 */
export default {
  name: 'PiKeyRight02Stroke',
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
      default: 'key-right-02 icon'
    }
  }
}
</script>
