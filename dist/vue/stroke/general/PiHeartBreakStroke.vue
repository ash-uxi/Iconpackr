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
    <path d="M12 5.4274C8.83207 0.653479 2 3.5018 2 8.94427C2 15.9768 11 21 12 21C13 21 22 15.9768 22 8.94427C22 3.50672 15.1625 0.66165 12 5.4274ZM12 5.4274C12.9719 6.77035 13.6594 8.29689 13.9849 9.92472C13.9941 9.97027 13.9748 10.0168 13.9361 10.0426L11.0401 11.9733C11.0157 11.9895 11.0031 12.0186 11.0079 12.0475C11.26 13.5643 11.8451 14.9408 13 16" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiHeartBreakStroke icon from the stroke style in general category.
 */
export default {
  name: 'PiHeartBreakStroke',
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
      default: 'heart-break icon'
    }
  }
}
</script>
