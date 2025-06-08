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
    <path d="M21.8696 10.8202C21.8142 10.6744 21.7356 10.5369 21.5786 10.2622L19.8429 7.22471C19.1718 6.05024 18.8362 5.463 18.3647 5.03578C17.9475 4.65778 17.4553 4.37211 16.9201 4.19743C16.3152 4 15.6389 4 14.2862 4H9.71431C8.36161 4 7.68526 4 7.08039 4.19743C6.54522 4.37211 6.05294 4.65778 5.63576 5.03578C5.16424 5.463 4.82868 6.05024 4.15755 7.22471L2.42187 10.2622C2.26485 10.5369 2.18633 10.6743 2.13086 10.8202" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  <path d="M9 7H15M11 10H13M14 20H10C7.19974 20 5.79961 20 4.73005 19.455C3.78924 18.9757 3.02433 18.2108 2.54497 17.27C2 16.2004 2 14.8003 2 12V11.8498C2 11.5333 2 11.3751 2.02421 11.2209C2.03591 11.1464 2.05181 11.0726 2.07181 11H7.07692C7.58672 11 8 11.4133 8 11.9231C8 13.6224 9.37759 15 11.0769 15H12.9231C14.6224 15 16 13.6224 16 11.9231C16 11.4133 16.4133 11 16.9231 11H21.9282C21.9482 11.0726 21.9641 11.1464 21.9758 11.2209C22 11.3751 22 11.5333 22 11.8498V12C22 14.8003 22 16.2004 21.455 17.27C20.9757 18.2108 20.2108 18.9757 19.27 19.455C18.2004 20 16.8003 20 14 20Z" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiInboxFilledDuoStroke icon from the duo-stroke style in communication category.
 */
export default {
  name: 'PiInboxFilledDuoStroke',
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
      default: 'inbox-filled icon'
    }
  }
}
</script>
