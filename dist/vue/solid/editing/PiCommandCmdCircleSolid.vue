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
    <path d="M1.8501 12.0001C1.8501 6.39441 6.39441 1.8501 12.0001 1.8501C17.6058 1.8501 22.1501 6.39441 22.1501 12.0001C22.1501 17.6058 17.6058 22.1501 12.0001 22.1501C6.39441 22.1501 1.8501 17.6058 1.8501 12.0001ZM11.3335 8.66667V9.33333H12.6668V8.66667C12.6668 7.19391 13.8607 6 15.3335 6C16.8062 6 18.0001 7.19391 18.0001 8.66667C18.0001 10.1394 16.8062 11.3333 15.3335 11.3333H14.6668V12.6667H15.3335C16.8062 12.6667 18.0001 13.8606 18.0001 15.3333C18.0001 16.8061 16.8062 18 15.3335 18C13.8607 18 12.6668 16.8061 12.6668 15.3333V14.6667H11.3335V15.3333C11.3335 16.8061 10.1395 18 8.66679 18C7.19403 18 6.00012 16.8061 6.00012 15.3333C6.00012 13.8606 7.19403 12.6667 8.66679 12.6667H9.33346V11.3333H8.66679C7.19403 11.3333 6.00012 10.1394 6.00012 8.66667C6.00012 7.19391 7.19403 6 8.66679 6C10.1395 6 11.3335 7.19391 11.3335 8.66667Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" stroke="none"/>
  <path d="M11.3335 12.6667V11.3333H12.6668V12.6667H11.3335Z" fill="currentColor" stroke="none"/>
  <path d="M14.6668 15.3333V14.6667H15.3335C15.7016 14.6667 16.0001 14.9651 16.0001 15.3333C16.0001 15.7015 15.7016 16 15.3335 16C14.9653 16 14.6668 15.7015 14.6668 15.3333Z" fill="currentColor" stroke="none"/>
  <path d="M15.3335 9.33333H14.6668V8.66667C14.6668 8.29848 14.9653 8 15.3335 8C15.7016 8 16.0001 8.29848 16.0001 8.66667C16.0001 9.03486 15.7016 9.33333 15.3335 9.33333Z" fill="currentColor" stroke="none"/>
  <path d="M8.00012 8.66667C8.00012 8.29848 8.2986 8 8.66679 8C9.03498 8 9.33346 8.29848 9.33346 8.66667V9.33333H8.66679C8.2986 9.33333 8.00012 9.03486 8.00012 8.66667Z" fill="currentColor" stroke="none"/>
  <path d="M8.66679 14.6667H9.33346V15.3333C9.33346 15.7015 9.03498 16 8.66679 16C8.2986 16 8.00012 15.7015 8.00012 15.3333C8.00012 14.9651 8.2986 14.6667 8.66679 14.6667Z" fill="currentColor" stroke="none"/>
  </svg>
</template>

<script>
/**
 * PiCommandCmdCircleSolid icon from the solid style in editing category.
 */
export default {
  name: 'PiCommandCmdCircleSolid',
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
      default: 'command-cmd-circle icon'
    }
  }
}
</script>
