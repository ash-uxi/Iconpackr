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
    <path d="M18.0565 23C18.7577 22.4815 19.3874 21.8757 19.9302 21.1981C19.9767 21.14 20 21.07 20 21M20 21C20 20.93 19.9767 20.86 19.9302 20.8019C19.3874 20.1243 18.7577 19.5185 18.0565 19M20 21H14M16 4.03837C16 4.02576 16 4.01297 16 4C16 3.53501 16 3.30252 15.9489 3.11177C15.8102 2.59413 15.4059 2.18981 14.8882 2.05111C14.6975 2 14.465 2 14 2H10C9.53501 2 9.30252 2 9.11177 2.05111C8.59413 2.18981 8.18981 2.59413 8.05111 3.11177C8 3.30252 8 3.53501 8 4C8 4.01297 8 4.02576 8 4.03838C8.00004 4.47793 8.00143 4.7028 8.05111 4.88823C8.18981 5.40587 8.59413 5.81019 9.11177 5.94889C9.30252 6 9.53501 6 10 6H14C14.465 6 14.6975 6 14.8882 5.94889C15.4059 5.81019 15.8102 5.40587 15.9489 4.88823C15.9986 4.7028 16 4.47792 16 4.03837Z" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M20 14.9997V10.3997C20 8.15951 20 7.03941 19.564 6.18376C19.1805 5.43111 18.5686 4.81919 17.816 4.43569C17.3409 4.19366 16.7844 4.08599 16 4.03809M8 4.0381C7.21558 4.08599 6.65905 4.19366 6.18404 4.43569C5.43139 4.81919 4.81947 5.43111 4.43597 6.18376C4 7.03941 4 8.15951 4 10.3997V15.5997C4 17.8399 4 18.96 4.43597 19.8157C4.81947 20.5683 5.43139 21.1802 6.18404 21.5637C6.98717 21.9729 8.0233 21.9981 10 21.9996" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiClipboardArrowDownRightDuoStroke icon from the duo-stroke style in files-&-folders category.
 */
export default {
  name: 'PiClipboardArrowDownRightDuoStroke',
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
      default: 'clipboard-arrow-down-right icon'
    }
  }
}
</script>
