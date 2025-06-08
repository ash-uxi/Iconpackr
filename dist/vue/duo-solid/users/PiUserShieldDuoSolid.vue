<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    :class="className"
    
     :style="{color: color || 'currentColor'}"
    role="img"
    :aria-label="ariaLabel"
    v-bind="$attrs"
  >
    <path d="M12.9831 22C11.6678 20.5567 10.9173 18.6423 11.0072 16.5951L11.0343 15.9774C11.0664 15.2445 11.2908 14.5723 11.6528 14H8C5.23858 14 3 16.2386 3 19C3 20.6569 4.34315 22 6 22H12.9831Z" :fill="color || 'currentColor'" opacity="0.28" /> <path d="M20.472 14.1922C21.2644 14.443 21.8642 15.1351 21.9394 15.992L21.9791 16.4443C22.1849 18.7887 20.8641 20.9806 18.7072 22.0045L18.4228 22.1396C17.818 22.4267 17.1088 22.4199 16.5096 22.1205L16.1834 21.9574C14.1664 20.9495 12.9079 18.907 13.0053 16.6876L13.0324 16.07C13.0716 15.1767 13.6834 14.4421 14.5056 14.1819L16.8115 13.4521C17.2411 13.3161 17.704 13.3161 18.1336 13.4521L20.472 14.1922Z" :fill="color || 'currentColor'" /> <path d="M7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7C17 9.76142 14.7614 12 12 12C9.23858 12 7 9.76142 7 7Z" :fill="color || 'currentColor'" />
  </svg>
</template>

<script>
/**
 * PiUserShieldDuoSolid icon from the duo-solid style in users category.
 */
export default {
  name: 'PiUserShieldDuoSolid',
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
      default: 'user-shield icon'
    }
  }
}
</script>
