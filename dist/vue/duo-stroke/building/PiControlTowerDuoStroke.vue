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
    <path d="M12 3L12 2" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M15 8L14 13" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M19.1301 4H4.86993C3.91031 4 3.19748 4.88863 3.40565 5.8254L3.8889 8H20.1111L20.5944 5.8254C20.8025 4.88863 20.0897 4 19.1301 4Z" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  <path d="M7 13L6.5 22M17 13L17.5 22" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M7.00546 13H16.9946C18.1663 13 19.1809 12.1862 19.4351 11.0423L20.1111 8H3.88892L4.56499 11.0423C4.81918 12.1862 5.83371 13 7.00546 13Z" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M9 8L10 13" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiControlTowerDuoStroke icon from the duo-stroke style in building category.
 */
export default {
  name: 'PiControlTowerDuoStroke',
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
      default: 'control-tower icon'
    }
  }
}
</script>
