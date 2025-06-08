<script>
  /**
   * PiMapPinUserStroke icon from the stroke style in navigation category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'map-pin-user icon';
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
  <path d="M17.1406 18.0963C16.611 17.4387 15.7993 17.018 14.8893 17.018H9.11152C8.20151 17.018 7.38978 17.4387 6.86025 18.0963M17.1406 18.0963C18.6135 16.3427 19.7899 13.9894 19.7899 11.2222C19.7899 5.05556 14.9215 3 12.0004 3C9.07936 3 4.21094 5.05556 4.21094 11.2222C4.21094 13.9894 5.38731 16.3427 6.86025 18.0963M17.1406 18.0963C15.3311 20.2506 13.0739 21.5 12.0004 21.5C10.9269 21.5 8.66977 20.2506 6.86025 18.0963M14.9215 10.7895C14.9215 12.4027 13.6137 13.7105 12.0004 13.7105C10.3872 13.7105 9.07936 12.4027 9.07936 10.7895C9.07936 9.17622 10.3872 7.86842 12.0004 7.86842C13.6137 7.86842 14.9215 9.17622 14.9215 10.7895Z" stroke="currentColor" stroke-width="2" fill="none"/>
</svg>
