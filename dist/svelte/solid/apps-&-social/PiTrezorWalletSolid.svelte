<script>
  /**
   * PiTrezorWalletSolid icon from the solid style in apps-&-social category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'trezor-wallet icon';
</script>

<svg
  width={size}
  height={size}
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
  class={className}
  
   style="color: {color || 'currentColor'}"
  role="img"
  aria-label={ariaLabel}
  {...$$restProps}
>
  <path d="M17 7V8.05001C18.1411 8.28164 19 9.29052 19 10.5V17.1004C19 18.0233 18.4915 18.8712 17.6774 19.3058L13.1774 21.7082C12.4416 22.101 11.5584 22.101 10.8226 21.7082L6.32261 19.3058C5.50846 18.8712 5 18.0233 5 17.1004V10.5C5 9.29052 5.85888 8.28164 7 8.05001V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7ZM9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7V8H9V7Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" stroke="none"/>
</svg>
