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
    <path d="M20.9999 9C21 9.12925 21 9.26251 21 9.4V14.6C21 14.7375 21 14.8708 20.9999 15M20.9999 9C20.9984 7.0233 20.9732 5.98717 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C17.9603 3 16.8402 3 14.6 3H9.4C7.15979 3 6.03968 3 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.02676 5.98717 3.00164 7.0233 3.0001 9M20.9999 9H15M20.9999 15C20.9984 16.9767 20.9732 18.0128 20.564 18.816C20.1805 19.5686 19.5686 20.1805 18.816 20.564C18.0128 20.9732 16.9767 20.9984 15 20.9999M20.9999 15H15M15 15V9M15 15H9M15 15L15 20.9999M15 9H9M9 9L9 15M9 9H3.0001M9 15L9 20.9999M9 15H3.0001M9 20.9999C9.12925 21 9.26251 21 9.4 21H14.6C14.7375 21 14.8708 21 15 20.9999M9 20.9999C7.0233 20.9984 5.98717 20.9732 5.18404 20.564C4.43139 20.1805 3.81947 19.5686 3.43597 18.816C3.02676 18.0128 3.00164 16.9767 3.0001 15M3.0001 15C3 14.8708 3 14.7375 3 14.6V9.4C3 9.26251 3 9.12925 3.0001 9" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiSpreadsheetDefaultStroke icon from the stroke style in general category.
 */
export default {
  name: 'PiSpreadsheetDefaultStroke',
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
      default: 'spreadsheet-default icon'
    }
  }
}
</script>
