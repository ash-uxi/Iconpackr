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
    <path d="M5.14106 14.3738C4.53441 13.322 4.1778 12.1447 4.09881 10.9331C4.01981 9.72142 4.22054 8.50782 4.68548 7.38613C5.15041 6.26443 5.8671 5.26469 6.78012 4.46422C7.69314 3.66374 8.77803 3.08397 9.9509 2.76974C11.1238 2.4555 12.3532 2.41523 13.5441 2.65203C14.735 2.88882 15.8555 3.39635 16.819 4.13535C17.7824 4.87436 18.563 5.82505 19.1004 6.91391C19.6377 8.00277 19.9175 9.20063 19.9179 10.4149C19.9179 14.7876 16.7508 17.541 13.5836 17.541C10.6251 17.541 9.50893 15.4683 9.37471 15.1952M9.37471 15.1952L10.9443 7.77554M9.37471 15.1952L8.04101 21.5" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiPinterestStroke icon from the stroke style in apps-&-social category.
 */
export default {
  name: 'PiPinterestStroke',
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
      default: 'pinterest icon'
    }
  }
}
</script>
