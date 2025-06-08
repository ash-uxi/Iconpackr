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
    <path d="M12 8.5h4.6c.84 0 1.26 0 1.581-.163a1.5 1.5 0 0 0 .656-.656C19 7.361 19 6.941 19 6.1V4.4c0-.84 0-1.26-.163-1.581a1.5 1.5 0 0 0-.656-.656C17.861 2 17.441 2 16.6 2H6.436c-.679 0-1.018 0-1.16.129a.5.5 0 0 0-.161.441c.027.19.287.408.807.844zm0 0H7.4c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.656.656C5 9.639 5 10.059 5 10.9V15h12.594c.68 0 1.021 0 1.164-.129a.5.5 0 0 0 .16-.442c-.027-.19-.289-.408-.812-.844z" opacity=".28" fill="none"/>
  <path  d="M13 16h-2v4.339l-3.796-4.34H5a1 1 0 0 1-.749-.337l5.62 6.423c.195.223.382.437.546.595.139.133.448.421.896.477a1.5 1.5 0 0 0 1.308-.491c.3-.338.343-.758.36-.95.02-.226.02-.51.02-.807z" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiFramerDuoStroke icon from the duo-stroke style in apps-&-social category.
 */
export default {
  name: 'PiFramerDuoStroke',
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
      default: 'framer icon'
    }
  }
}
</script>
