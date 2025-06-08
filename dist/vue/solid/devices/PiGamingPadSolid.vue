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
    <path d="M1 11.6667C1 7.43248 4.43248 4 8.66667 4H15.3333C19.5675 4 23 7.43248 23 11.6667V16.9098C23 19.1688 21.1688 21 18.9098 21C17.3606 21 15.9443 20.1247 15.2515 18.739L15.1056 18.4472C14.6621 17.5603 13.7556 17 12.7639 17H11.2361C10.2444 17 9.3379 17.5603 8.89443 18.4472L8.74853 18.739C8.05569 20.1247 6.63941 21 5.09017 21C2.83123 21 1 19.1688 1 16.9098V11.6667ZM15.9817 9.19061C16.0869 8.64846 15.7328 8.12361 15.1906 8.01833C14.6485 7.91306 14.1236 8.26723 14.0183 8.80939L14.0181 8.81037C13.9129 9.35253 14.267 9.87737 14.8092 9.98265C15.3514 10.0879 15.8762 9.73376 15.9815 9.1916L15.9817 9.19061ZM9 9.00002C9 8.44773 8.55228 8.00002 8 8.00002C7.44772 8.00002 7 8.44773 7 9.00002V10H6C5.44772 10 5 10.4477 5 11C5 11.5523 5.44772 12 6 12H7V13C7 13.5523 7.44772 14 8 14C8.55228 14 9 13.5523 9 13V12H10C10.5523 12 11 11.5523 11 11C11 10.4477 10.5523 10 10 10H9V9.00002ZM18.9818 12.1907C19.0871 11.6486 18.733 11.1237 18.1909 11.0184C17.6487 10.913 17.1238 11.2672 17.0185 11.8093L17.0183 11.8103C16.913 12.3524 17.2671 12.8773 17.8093 12.9826C18.3514 13.088 18.8763 12.7338 18.9816 12.1917L18.9818 12.1907Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" stroke="none"/>
  </svg>
</template>

<script>
/**
 * PiGamingPadSolid icon from the solid style in devices category.
 */
export default {
  name: 'PiGamingPadSolid',
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
      default: 'gaming-pad icon'
    }
  }
}
</script>
