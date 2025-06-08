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
    <path d="M12.0003 3.83621C10.1467 1.92966 7.61236 1.60481 5.45831 2.41938C2.99559 3.35068 1 5.77583 1 8.94432C1 12.8877 3.50811 16.1523 5.9565 18.3531C7.19833 19.4694 8.47187 20.3555 9.50747 20.9666C10.0249 21.2718 10.4936 21.5148 10.8789 21.6851C11.2283 21.8396 11.6116 22 12 22C12.3884 22 12.7717 21.8396 13.1211 21.6851C13.5064 21.5148 13.9751 21.2718 14.4925 20.9665C15.5281 20.3555 16.8017 19.4694 18.0435 18.3531C20.4919 16.1523 23 12.8877 23 8.94432C23 5.77726 21.002 3.35467 18.5394 2.42419C16.3863 1.61066 13.8524 1.93336 12.0003 3.83621Z" fill="currentColor" stroke="none"/>
  </svg>
</template>

<script>
/**
 * PiHeartSolid icon from the solid style in general category.
 */
export default {
  name: 'PiHeartSolid',
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
      default: 'heart icon'
    }
  }
}
</script>
