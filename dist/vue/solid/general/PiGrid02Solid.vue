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
    <path d="M10 14L10 10H14L14 14H10Z" fill="currentColor" stroke="none"/>
  <path d="M10 22H14V16H10V22Z" fill="currentColor" stroke="none"/>
  <path d="M14 2H10V8H14V2Z" fill="currentColor" stroke="none"/>
  <path d="M16 21.9945C16.49 21.988 16.9239 21.9736 17.3086 21.9422C18.0375 21.8826 18.6777 21.7568 19.27 21.455C20.2108 20.9757 20.9757 20.2108 21.455 19.27C21.7568 18.6777 21.8826 18.0375 21.9422 17.3086C21.9736 16.9239 21.988 16.49 21.9945 16L16 16V21.9945Z" fill="currentColor" stroke="none"/>
  <path d="M2 10V14L8 14V10L2 10Z" fill="currentColor" stroke="none"/>
  <path d="M2.00549 16C2.01203 16.49 2.02638 16.9239 2.05782 17.3086C2.11737 18.0375 2.24318 18.6777 2.54497 19.27C3.02433 20.2108 3.78924 20.9757 4.73005 21.455C5.32234 21.7568 5.96253 21.8826 6.69138 21.9422C7.07614 21.9736 7.51003 21.988 8 21.9945L8 16L2.00549 16Z" fill="currentColor" stroke="none"/>
  <path d="M21.9945 8C21.988 7.51003 21.9736 7.07614 21.9422 6.69138C21.8826 5.96253 21.7568 5.32234 21.455 4.73005C20.9757 3.78924 20.2108 3.02433 19.27 2.54497C18.6777 2.24318 18.0375 2.11737 17.3086 2.05782C16.9239 2.02638 16.49 2.01203 16 2.00549V8L21.9945 8Z" fill="currentColor" stroke="none"/>
  <path d="M22 14V10L16 10L16 14L22 14Z" fill="currentColor" stroke="none"/>
  <path d="M8 2.00549C7.51003 2.01203 7.07614 2.02638 6.69138 2.05782C5.96253 2.11737 5.32234 2.24318 4.73005 2.54497C3.78924 3.02433 3.02433 3.78924 2.54497 4.73005C2.24318 5.32234 2.11737 5.96253 2.05782 6.69138C2.02638 7.07614 2.01203 7.51003 2.00549 8H8V2.00549Z" fill="currentColor" stroke="none"/>
  </svg>
</template>

<script>
/**
 * PiGrid02Solid icon from the solid style in general category.
 */
export default {
  name: 'PiGrid02Solid',
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
      default: 'grid-02 icon'
    }
  }
}
</script>
