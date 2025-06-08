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
    <path d="M10.3333 13.6667H8.66667C7.74619 13.6667 7 14.4129 7 15.3333C7 16.2538 7.74619 17 8.66667 17C9.58714 17 10.3333 16.2538 10.3333 15.3333V13.6667ZM10.3333 13.6667H13.6667M10.3333 13.6667V10.3333M13.6667 13.6667H15.3333C16.2538 13.6667 17 14.4129 17 15.3333C17 16.2538 16.2538 17 15.3333 17C14.4129 17 13.6667 16.2538 13.6667 15.3333V13.6667ZM13.6667 13.6667V10.3333M13.6667 10.3333V8.66667C13.6667 7.74619 14.4129 7 15.3333 7C16.2538 7 17 7.74619 17 8.66667C17 9.58714 16.2538 10.3333 15.3333 10.3333H13.6667ZM13.6667 10.3333H10.3333M10.3333 10.3333H8.66667C7.74619 10.3333 7 9.58714 7 8.66667C7 7.74619 7.74619 7 8.66667 7C9.58714 7 10.3333 7.74619 10.3333 8.66667V10.3333Z" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M3 11C3 8.19974 3 6.79961 3.54497 5.73005C4.02433 4.78924 4.78924 4.02433 5.73005 3.54497C6.79961 3 8.19974 3 11 3H13C15.8003 3 17.2004 3 18.27 3.54497C19.2108 4.02433 19.9757 4.78924 20.455 5.73005C21 6.79961 21 8.19974 21 11V13C21 15.8003 21 17.2004 20.455 18.27C19.9757 19.2108 19.2108 19.9757 18.27 20.455C17.2004 21 15.8003 21 13 21H11C8.19974 21 6.79961 21 5.73005 20.455C4.78924 19.9757 4.02433 19.2108 3.54497 18.27C3 17.2004 3 15.8003 3 13V11Z" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiCommandCmdSquareDuoStroke icon from the duo-stroke style in editing category.
 */
export default {
  name: 'PiCommandCmdSquareDuoStroke',
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
      default: 'command-cmd-square icon'
    }
  }
}
</script>
