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
    <path d="M15 3C16.9768 3.00154 18.0129 3.02675 18.8161 3.43597C19.5687 3.81947 20.1806 4.43139 20.5641 5.18404C20.9733 5.98717 20.9985 7.0233 21 9M15 21C16.9768 20.9985 18.0129 20.9732 18.8161 20.564C19.5687 20.1805 20.1806 19.5686 20.5641 18.816C20.9733 18.0128 20.9985 16.9767 21 15M9 21C7.02324 20.9985 5.98709 20.9732 5.18394 20.564C4.43129 20.1805 3.81937 19.5686 3.43588 18.816C3.02666 18.0128 3.00154 16.9767 3 15M3 9C3.00154 7.0233 3.02593 5.98717 3.43514 5.18404C3.81864 4.43139 4.43056 3.81947 5.18321 3.43597C5.98645 3.0267 7.02276 3.00164 9 3.0001" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  <path d="M7.5 8V9.5M16.5 8V9.5M10.5 12.6001C11.3 12.6001 12 11.9001 12 11.1001V8.29296M15.209 17.3671C13.409 15.5671 10.509 15.5671 8.70896 17.3671" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiFaceIdSadDuoStroke icon from the duo-stroke style in security category.
 */
export default {
  name: 'PiFaceIdSadDuoStroke',
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
      default: 'face-id-sad icon'
    }
  }
}
</script>
