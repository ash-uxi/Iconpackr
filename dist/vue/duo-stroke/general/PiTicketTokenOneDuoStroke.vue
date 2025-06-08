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
    <path d="M12 14.9994V9.37695C11.3236 9.54258 10.8067 10.0084 10.5 10.6218M12 14.9994H10M12 14.9994H14" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M18 4H6C3.79086 4 2 5.79086 2 8V8.4C2 8.73137 2.26863 9 2.6 9C3.92548 9 5 10.0745 5 11.4V12.6C5 13.9255 3.92548 15 2.6 15C2.26863 15 2 15.2686 2 15.6V16C2 18.2091 3.79086 20 6 20H18C20.2091 20 22 18.2091 22 16V15.6C22 15.2686 21.7314 15 21.4 15C20.0745 15 19 13.9255 19 12.6V11.4C19 10.0745 20.0745 9 21.4 9C21.7314 9 22 8.73137 22 8.4V8C22 5.79086 20.2091 4 18 4Z" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiTicketTokenOneDuoStroke icon from the duo-stroke style in general category.
 */
export default {
  name: 'PiTicketTokenOneDuoStroke',
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
      default: 'ticket-token-one icon'
    }
  }
}
</script>
