import React from 'react';

/**
 * PiCryptoCurrencySolanaContrast icon from the contrast style in web3-&-crypto category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiCryptoCurrencySolanaContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'crypto-currency-solana icon',
  ...props 
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <path d="M17.19 9.333q0-.198.056-.39c.086-.288.311-.543.763-1.051l1.337-1.509c.669-.753 1.003-1.13 1.018-1.451a.9.9 0 0 0-.31-.726C19.817 4 19.322 4 18.333 4H8.481c-.446 0-.67 0-.878.055q-.278.073-.52.236c-.179.122-.33.292-.631.631l-2.633 2.97c-.452.508-.677.763-.763 1.051a1.4 1.4 0 0 0-.056.39m14.19 0q0 .199.056.39c.086.289.311.543.763 1.052l2.172 2.45c.452.509.677.763.763 1.052q.056.191.056.39m-3.81-5.334H3m0 0q0 .199.056.39c.086.289.311.543.762 1.052l2.174 2.45c.45.509.676.763.762 1.052q.056.191.056.39m0 0q0 .198-.056.39c-.086.288-.311.543-.762 1.051l-1.338 1.509c-.669.753-1.003 1.13-1.018 1.451a.9.9 0 0 0 .31.726c.238.206.733.206 1.722.206h9.851c.446 0 .67 0 .878-.055.184-.048.36-.128.52-.236.179-.122.33-.292.631-.631l2.634-2.97c.45-.508.676-.763.762-1.051q.056-.192.056-.39m-14.19 0H21"/>
  <path fill="currentColor" d="M18.332 4H8.481c-.446 0-.67 0-.878.055q-.278.073-.52.236c-.179.122-.33.292-.631.631l-2.633 2.97c-.452.508-.677.763-.763 1.051a1.38 1.38 0 0 0 0 .78c.086.289.311.543.762 1.052l2.174 2.45c.45.509.676.763.762 1.052.075.254.075.526 0 .78-.086.288-.311.543-.762 1.051l-1.338 1.509c-.669.753-1.003 1.13-1.018 1.451a.9.9 0 0 0 .31.726c.238.206.733.206 1.722.206h9.851c.446 0 .67 0 .878-.055.184-.048.36-.128.52-.236.179-.122.33-.292.631-.631l2.634-2.97c.45-.508.676-.763.762-1.051a1.38 1.38 0 0 0 0-.78c-.086-.289-.311-.543-.762-1.052l-2.173-2.45c-.452-.509-.677-.763-.763-1.052a1.38 1.38 0 0 1 0-.78c.086-.288.311-.543.763-1.051l1.337-1.509c.669-.753 1.003-1.13 1.018-1.451a.9.9 0 0 0-.31-.726C19.817 4 19.322 4 18.333 4" opacity=".28"/>
    </svg>
  );
}
