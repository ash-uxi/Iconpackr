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
    <path d="M15 16C16.4619 14.9379 17.7713 13.6929 18.8942 12.2979C19.0353 12.1226 19.0353 11.8774 18.8942 11.7021C17.7713 10.3071 16.4619 9.06206 15 8M9 8C7.53812 9.06206 6.22872 10.3071 5.1058 11.7021C4.96473 11.8774 4.96473 12.1226 5.1058 12.2979C6.22872 13.6929 7.53812 14.9379 9 16" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiChevronSortHorizontalStroke icon from the stroke style in arrows-&-chevrons category.
 */
export default {
  name: 'PiChevronSortHorizontalStroke',
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
      default: 'chevron-sort-horizontal icon'
    }
  }
}
</script>
