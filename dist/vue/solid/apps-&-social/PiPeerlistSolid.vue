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
    <path d="M11.9632 2H12.0368C13.4035 2 14.4801 1.99999 15.351 2.05941C16.2387 2.11997 16.9853 2.2456 17.6788 2.53284C19.394 3.2433 20.7567 4.60602 21.4672 6.32122C21.7544 7.01469 21.88 7.76134 21.9406 8.649C22 9.51986 22 10.5965 22 11.9631V12.0369C22 13.4035 22 14.4801 21.9406 15.351C21.88 16.2387 21.7544 16.9853 21.4672 17.6788C20.7567 19.394 19.394 20.7567 17.6788 21.4672C16.9853 21.7544 16.2387 21.88 15.351 21.9406C14.4801 22 13.4035 22 12.0369 22H11.9631C10.5965 22 9.51986 22 8.649 21.9406C7.76134 21.88 7.01469 21.7544 6.32122 21.4672C4.60602 20.7567 3.2433 19.394 2.53284 17.6788C2.2456 16.9853 2.11997 16.2387 2.05941 15.351C1.99999 14.4801 2 13.4035 2 12.0369V11.9632C2 10.5965 1.99999 9.51985 2.05941 8.649C2.11997 7.76134 2.2456 7.01469 2.53284 6.32122C3.2433 4.60602 4.60602 3.2433 6.32122 2.53284C7.01469 2.2456 7.76134 2.11997 8.649 2.05941C9.51985 1.99999 10.5965 2 11.9632 2ZM10 7C9.44772 7 9 7.44772 9 8V17C9 17.5523 9.44772 18 10 18C10.5523 18 11 17.5523 11 17V14.625H12.8125C14.9181 14.625 16.625 12.9181 16.625 10.8125C16.625 8.70691 14.9181 7 12.8125 7H10Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" stroke="none"/>
  <path d="M12.8125 12.625H11V9H12.8125C13.8135 9 14.625 9.81148 14.625 10.8125C14.625 11.8135 13.8135 12.625 12.8125 12.625Z" fill="currentColor" stroke="none"/>
  </svg>
</template>

<script>
/**
 * PiPeerlistSolid icon from the solid style in apps-&-social category.
 */
export default {
  name: 'PiPeerlistSolid',
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
      default: 'peerlist icon'
    }
  }
}
</script>
