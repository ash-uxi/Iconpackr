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
    <path d="M16 4.03837C16 4.02576 16 4.01297 16 4C16 3.53501 16 3.30252 15.9489 3.11177C15.8102 2.59413 15.4059 2.18981 14.8882 2.05111C14.6975 2 14.465 2 14 2H10C9.53501 2 9.30252 2 9.11177 2.05111C8.59413 2.18981 8.18981 2.59413 8.05111 3.11177C8 3.30252 8 3.53501 8 4C8 4.01297 8 4.02576 8 4.03838M16 4.03837C16 4.47792 15.9986 4.7028 15.9489 4.88823C15.8102 5.40587 15.4059 5.81019 14.8882 5.94889C14.6975 6 14.465 6 14 6H10C9.53501 6 9.30252 6 9.11177 5.94889C8.59413 5.81019 8.18981 5.40587 8.05111 4.88823C8.00143 4.7028 8.00004 4.47793 8 4.03838M16 4.03837C16.7844 4.08627 17.3409 4.19394 17.816 4.43597C18.5686 4.81947 19.1805 5.43139 19.564 6.18404C20 7.03969 20 8.15979 20 10.4V15.6C20 16.1244 20 16.5874 19.9944 17M8 4.03838C7.21558 4.08627 6.65905 4.19394 6.18404 4.43597C5.43139 4.81947 4.81947 5.43139 4.43597 6.18404C4 7.03969 4 8.15979 4 10.4V15.6C4 17.8402 4 18.9603 4.43597 19.816C4.81947 20.5686 5.43139 21.1805 6.18404 21.564C6.98717 21.9732 8.0233 21.9984 10 21.9999M15.9435 19C15.2423 19.5185 14.6126 20.1243 14.0698 20.8019C14.0233 20.86 14 20.93 14 21M14 21C14 21.07 14.0233 21.14 14.0698 21.1981C14.6126 21.8757 15.2423 22.4815 15.9435 23M14 21H20" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiClipboardArrowDownLeftStroke icon from the stroke style in files-&-folders category.
 */
export default {
  name: 'PiClipboardArrowDownLeftStroke',
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
      default: 'clipboard-arrow-down-left icon'
    }
  }
}
</script>
