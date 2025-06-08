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
    <path d="M9 22L9.5 17M9 22H15M9 22H8M9.5 17H4.4C3.55992 17 3.13988 17 2.81901 16.8365C2.53677 16.6927 2.3073 16.4632 2.16349 16.181C2 15.8601 2 15.4401 2 14.6V13M9.5 17H14.5M14.5 17L15 22M14.5 17H19.6C20.4401 17 20.8601 17 21.181 16.8365C21.4632 16.6927 21.6927 16.4632 21.8365 16.181C22 15.8601 22 15.4401 22 14.6V13M15 22H16M22 13V4.4C22 3.55992 22 3.13988 21.8365 2.81901C21.6927 2.53677 21.4632 2.3073 21.181 2.16349C20.8601 2 20.4401 2 19.6 2H4.4C3.55992 2 3.13988 2 2.81901 2.16349C2.53677 2.3073 2.3073 2.53677 2.16349 2.81901C2 3.13988 2 3.55992 2 4.4V13M22 13H2" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiImacStroke icon from the stroke style in devices category.
 */
export default {
  name: 'PiImacStroke',
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
      default: 'imac icon'
    }
  }
}
</script>
