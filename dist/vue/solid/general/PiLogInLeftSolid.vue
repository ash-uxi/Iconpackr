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
    <path d="M13.7885 8.2C13.471 7.96187 13.0427 7.93404 12.697 8.12909C12.3514 8.32413 12.1538 8.70512 12.1935 9.10001C12.2244 9.40799 12.2587 9.70099 12.2919 9.98432C12.3328 10.3342 12.372 10.6696 12.4011 11H3C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H12.4011C12.372 13.3304 12.3328 13.6656 12.2919 14.0155C12.2587 14.2989 12.2244 14.592 12.1935 14.9C12.1538 15.2949 12.3514 15.6759 12.697 15.8709C13.0427 16.066 13.471 16.0381 13.7885 15.8C14.8413 15.0104 15.792 14.0944 16.6195 13.0731C16.8726 12.7608 17 12.3801 17 12C17 11.6199 16.8727 11.2392 16.6196 10.9269C15.792 9.90559 14.8413 8.98959 13.7885 8.2Z" fill="currentColor" stroke="none"/>
  <path d="M15 2C13.2078 2 11.5709 2.67482 10.3331 3.78265C9.92156 4.15098 9.88654 4.78317 10.2549 5.1947C10.6232 5.60623 11.2554 5.64125 11.6669 5.27292C12.5522 4.48059 13.7188 4 15 4C17.7614 4 20 6.23858 20 9V15C20 17.7614 17.7614 20 15 20C13.7188 20 12.5522 19.5194 11.6669 18.7271C11.2554 18.3588 10.6232 18.3938 10.2549 18.8053C9.88654 19.2168 9.92156 19.849 10.3331 20.2173C11.5709 21.3252 13.2078 22 15 22C18.866 22 22 18.866 22 15V9C22 5.13401 18.866 2 15 2Z" fill="currentColor" stroke="none"/>
  </svg>
</template>

<script>
/**
 * PiLogInLeftSolid icon from the solid style in general category.
 */
export default {
  name: 'PiLogInLeftSolid',
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
      default: 'log-in-left icon'
    }
  }
}
</script>
