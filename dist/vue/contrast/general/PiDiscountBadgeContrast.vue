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
    <path d="M9 15.364 15.364 9m-6.114.25h.01m5.854 5.864h.01m-7.497 4.282c.844-.029 1.659.31 2.236.926a2.925 2.925 0 0 0 4.274 0 2.93 2.93 0 0 1 2.236-.926 2.925 2.925 0 0 0 3.023-3.023c-.029-.844.31-1.659.926-2.236a2.925 2.925 0 0 0 0-4.274 2.93 2.93 0 0 1-.926-2.236 2.925 2.925 0 0 0-3.023-3.023 2.93 2.93 0 0 1-2.236-.926 2.925 2.925 0 0 0-4.274 0 2.93 2.93 0 0 1-2.236.926 2.925 2.925 0 0 0-3.023 3.023c.029.844-.31 1.659-.926 2.236a2.925 2.925 0 0 0 0 4.274c.617.577.955 1.392.926 2.236a2.925 2.925 0 0 0 3.023 3.023M9.5 9.25a.25.25 0 1 1-.5 0 .25.25 0 0 1 .5 0m5.864 5.864a.25.25 0 1 1-.5 0 .25.25 0 0 1 .5 0"/>
  <path fill="currentColor" d="M9.863 20.322a2.925 2.925 0 0 0 4.274 0 2.93 2.93 0 0 1 2.236-.926 2.925 2.925 0 0 0 3.023-3.023c-.029-.844.31-1.659.926-2.236a2.925 2.925 0 0 0 0-4.274 2.93 2.93 0 0 1-.926-2.236 2.925 2.925 0 0 0-3.023-3.023 2.93 2.93 0 0 1-2.236-.926 2.925 2.925 0 0 0-4.274 0 2.93 2.93 0 0 1-2.236.926 2.925 2.925 0 0 0-3.023 3.023c.029.844-.31 1.659-.926 2.236a2.925 2.925 0 0 0 0 4.274c.617.577.955 1.392.926 2.236a2.925 2.925 0 0 0 3.023 3.023c.844-.029 1.659.31 2.236.926" opacity=".28"/>
  </svg>
</template>

<script>
/**
 * PiDiscountBadgeContrast icon from the contrast style in general category.
 */
export default {
  name: 'PiDiscountBadgeContrast',
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
      default: 'discount-badge icon'
    }
  }
}
</script>
