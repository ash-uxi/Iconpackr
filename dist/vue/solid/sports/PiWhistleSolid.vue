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
    <path d="M11 2C11.5523 2 12 2.44772 12 3V6C12 6.55228 11.5523 7 11 7C10.4477 7 10 6.55228 10 6V3C10 2.44772 10.4477 2 11 2Z" fill="currentColor" stroke="none"/>
  <path d="M16.7071 4.29289C17.0976 4.68342 17.0976 5.31658 16.7071 5.70711L15.7071 6.70711C15.3166 7.09763 14.6834 7.09763 14.2929 6.70711C13.9024 6.31658 13.9024 5.68342 14.2929 5.29289L15.2929 4.29289C15.6834 3.90237 16.3166 3.90237 16.7071 4.29289Z" fill="currentColor" stroke="none"/>
  <path d="M2 15.5C2 11.9101 4.91015 9 8.5 9H9.9V11.5C9.9 12.1075 10.3925 12.6 11 12.6C11.6075 12.6 12.1 12.1075 12.1 11.5V9H20C21.1046 9 22 9.89543 22 11V12.6869C22 13.6342 21.3353 14.4516 20.4079 14.6448L14.9944 15.7726C14.8515 19.236 11.9985 22 8.5 22C4.91015 22 2 19.0899 2 15.5Z" fill="currentColor" stroke="none"/>
  <path d="M5.29289 4.29289C5.68342 3.90237 6.31658 3.90237 6.70711 4.29289L7.70711 5.29289C8.09763 5.68342 8.09763 6.31658 7.70711 6.70711C7.31658 7.09763 6.68342 7.09763 6.29289 6.70711L5.29289 5.70711C4.90237 5.31658 4.90237 4.68342 5.29289 4.29289Z" fill="currentColor" stroke="none"/>
  </svg>
</template>

<script>
/**
 * PiWhistleSolid icon from the solid style in sports category.
 */
export default {
  name: 'PiWhistleSolid',
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
      default: 'whistle icon'
    }
  }
}
</script>
