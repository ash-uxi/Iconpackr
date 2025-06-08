import React from "react";
import Svg, {
  Path,
  Rect,
  Circle,
  Ellipse,
  Line,
  Polygon,
  Polyline,
} from "react-native-svg";

/**
 * Picryptocurrencyethereumstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Picryptocurrencyethereumstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "crypto currency ethereum icon",
  style,
  ...props
}) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    accessibilityRole="image"
    accessibilityLabel={accessibilityLabel}
    style={style}
    {...props}
  >
    <path
      d="M10.09 3.42847C10.7429 2.6349 11.0693 2.23812 11.4637 2.09447C11.8095 1.96851 12.1905 1.96851 12.5363 2.09447C12.9307 2.23812 13.2571 2.6349 13.91 3.42847L17.7721 8.11966C18.5644 9.08267 18.9605 9.56417 18.9957 10.0229C19.0265 10.4236 18.8891 10.8194 18.6149 11.1201C18.3009 11.4642 17.6857 11.6137 16.4553 11.9128L12.9887 12.7555C12.6202 12.8451 12.436 12.8899 12.2493 12.9078C12.0835 12.9236 11.9165 12.9236 11.7507 12.9078C11.564 12.8899 11.3798 12.8451 11.0113 12.7555L7.54467 11.9128C6.31426 11.6137 5.69905 11.4642 5.38514 11.1201C5.11086 10.8194 4.97346 10.4236 5.00425 10.0229C5.0395 9.56417 5.43564 9.08267 6.22793 8.11966L10.09 3.42847Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M13.8421 20.7253C13.2066 21.4315 12.8888 21.7847 12.5123 21.9145C12.1818 22.0285 11.821 22.0285 11.4904 21.9145C11.1139 21.7847 10.7961 21.4315 10.1606 20.7253L6.69334 16.5332C6.1476 15.9267 5.87473 15.6234 5.88537 15.4228C5.89456 15.2496 5.99627 15.0936 6.15352 15.0116C6.33561 14.9167 6.73405 15.0274 7.53092 15.2488L10.8873 16.1813C11.304 16.297 11.5123 16.3549 11.7242 16.3779C11.9123 16.3984 12.1022 16.3984 12.2903 16.3779C12.5022 16.3549 12.7105 16.297 13.1272 16.1813L16.4836 15.2488C17.2804 15.0274 17.6789 14.9167 17.861 15.0116C18.0182 15.0936 18.1199 15.2496 18.1291 15.4228C18.1397 15.6234 17.8669 15.9267 17.3211 16.5332L13.8421 20.7253Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Picryptocurrencyethereumstroke;
