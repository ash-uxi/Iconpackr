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
    <path d="M14.8095 9.57209C15.1728 9.57209 18.4431 7.88548 18.4431 5.52418C18.4431 4.34354 17.353 3.51486 16.2629 3.50022C15.7179 3.4929 15.1728 3.66889 14.8095 4.17488C14.4461 3.66889 13.8916 3.50022 13.356 3.50022C12.2659 3.50022 11.1758 4.34354 11.1758 5.52418C11.1758 7.88548 14.4461 9.57209 14.8095 9.57209Z" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M15.4234 14.0003H19.8945C21.2581 14.0003 23.3623 15.6874 21.8448 16.9972C17.4998 21.0003 10.4998 21.0003 5.99985 16.9136M15.4234 14.0003C15.5518 14.1566 15.664 14.3285 15.7568 14.5141C16.0982 15.1969 15.6016 16.0003 14.8382 16.0003H9.99985M15.4234 14.0003C14.9099 13.3753 14.1371 13.0003 13.3074 13.0003H12.1851C12.0633 13.0003 11.9431 12.9719 11.8341 12.9174C10.0283 12.0145 8.00072 11.6536 5.99609 11.8767C5.99858 11.9176 5.99985 11.9588 5.99985 12.0003V16.9136M5.99985 16.9136V17.0003" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  <path d="M2 12C2 10.8954 2.89543 10 4 10C5.10457 10 6 10.8954 6 12V17C6 18.1046 5.10457 19 4 19C2.89543 19 2 18.1046 2 17V12Z" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiSupportHeartDuoStroke icon from the duo-stroke style in general category.
 */
export default {
  name: 'PiSupportHeartDuoStroke',
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
      default: 'support-heart icon'
    }
  }
}
</script>
