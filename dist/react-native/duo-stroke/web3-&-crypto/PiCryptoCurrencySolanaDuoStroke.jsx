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
 * Picryptocurrencysolanaduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Picryptocurrencysolanaduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "crypto currency solana icon",
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
      d="M17.19 9.33337H3M6.81004 14.6667H21"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M18.332 4H8.48062C8.03467 4 7.81169 4 7.60335 4.05468C7.41869 4.10314 7.24311 4.18297 7.08377 4.29092C6.90399 4.41271 6.75332 4.5826 6.45198 4.92238L3.8185 7.89179C3.36735 8.40048 3.14178 8.65482 3.05639 8.94341C2.9812 9.19755 2.9812 9.46912 3.05639 9.72326C3.14178 10.0118 3.36735 10.2662 3.8185 10.7749L5.99155 13.2251C6.44269 13.7338 6.66826 13.9882 6.75365 14.2767C6.82884 14.5309 6.82884 14.8024 6.75365 15.0566C6.66826 15.3452 6.44269 15.5995 5.99155 16.1082L4.65367 17.6167C3.9852 18.3705 3.65096 18.7474 3.636 19.0684C3.62301 19.3471 3.73745 19.616 3.94505 19.7945C4.18409 20 4.67872 20 5.66799 20H15.5194C15.9653 20 16.1883 20 16.3966 19.9453C16.5813 19.8969 16.7569 19.817 16.9162 19.7091C17.096 19.5873 17.2467 19.4174 17.548 19.0776L20.1815 16.1082C20.6326 15.5995 20.8582 15.3452 20.9436 15.0566C21.0188 14.8024 21.0188 14.5309 20.9436 14.2767C20.8582 13.9882 20.6326 13.7338 20.1815 13.2251L18.0085 10.7749C17.5573 10.2662 17.3317 10.0118 17.2464 9.72326C17.1712 9.46912 17.1712 9.19755 17.2464 8.94341C17.3317 8.65482 17.5573 8.40048 18.0085 7.89179L19.3463 6.38325C20.0148 5.62951 20.349 5.25264 20.364 4.93165C20.377 4.65288 20.2625 4.38398 20.0549 4.20551C19.8159 4 19.3213 4 18.332 4Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Picryptocurrencysolanaduostroke;
