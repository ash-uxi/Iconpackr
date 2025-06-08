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
    <path d="M11 8.15C11 5.30573 13.3057 3 16.15 3C18.9943 3 21.3 5.30573 21.3 8.15C21.3 10.9943 18.9943 13.3 16.15 13.3C13.3057 13.3 11 10.9943 11 8.15Z" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M5 4.5C5 4.03406 5 3.80109 5.07612 3.61732C5.17761 3.37229 5.37229 3.17761 5.61732 3.07612C5.80109 3 6.03406 3 6.5 3C6.96594 3 7.19891 3 7.38268 3.07612C7.62771 3.17761 7.82239 3.37229 7.92388 3.61732C8 3.80109 8 4.03406 8 4.5V19.5C8 19.9659 8 20.1989 7.92388 20.3827C7.82239 20.6277 7.62771 20.8224 7.38268 20.9239C7.19891 21 6.96594 21 6.5 21C6.03406 21 5.80109 21 5.61732 20.9239C5.37229 20.8224 5.17761 20.6277 5.07612 20.3827C5 20.1989 5 19.9659 5 19.5V4.5Z" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiPatreonOldLogoDuoStroke icon from the duo-stroke style in apps-&-social category.
 */
export default {
  name: 'PiPatreonOldLogoDuoStroke',
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
      default: 'patreon-old-logo icon'
    }
  }
}
</script>
