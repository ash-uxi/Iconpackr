<script>
  /**
   * PiFirstAidDuoStroke icon from the duo-stroke style in medical category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'first-aid icon';
</script>

<svg
  width={size}
  height={size}
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
  class={className}
  fill="none"
  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: {color || 'currentColor'}"
  role="img"
  aria-label={ariaLabel}
  {...$$restProps}
>
  <path d="M12 17V14M12 14V11M12 14H9M12 14H15" stroke={color || "currentColor"} stroke-width="2" fill="none"/>
  <path d="M16 7V6.2C16 5.0799 16 4.51984 15.782 4.09202C15.5903 3.71569 15.2843 3.40973 14.908 3.21799C14.4802 3 13.9201 3 12.8 3H11.2C10.0799 3 9.51984 3 9.09202 3.21799C8.71569 3.40973 8.40973 3.71569 8.21799 4.09202C8 4.51984 8 5.0799 8 6.2V7M10 7H14C15.8613 7 16.7919 7 17.5451 7.24472C19.0673 7.73931 20.2607 8.93273 20.7553 10.4549C21 11.2081 21 12.1387 21 14C21 15.8613 21 16.7919 20.7553 17.5451C20.2607 19.0673 19.0673 20.2607 17.5451 20.7553C16.7919 21 15.8613 21 14 21H10C8.13872 21 7.20808 21 6.45492 20.7553C4.93273 20.2607 3.73931 19.0673 3.24472 17.5451C3 16.7919 3 15.8613 3 14C3 12.1387 3 11.2081 3.24472 10.4549C3.73931 8.93273 4.93273 7.73931 6.45492 7.24472C7.20808 7 8.13872 7 10 7Z" stroke={color || "currentColor"} stroke-width="2" opacity="0.28" fill="none"/>
</svg>
