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
 * Piserverexclamationmarkcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piserverexclamationmarkcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "server exclamation mark icon",
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
    <path d="M19 19v-4m0 7zM7 12h10c.464 0 .697 0 .892-.022a3.5 3.5 0 0 0 3.086-3.086C21 8.697 21 8.464 21 8s0-.697-.022-.892a3.5 3.5 0 0 0-3.086-3.086C17.697 4 17.464 4 17 4H7c-.464 0-.697 0-.892.022a3.5 3.5 0 0 0-3.086 3.086C3 7.303 3 7.536 3 8s0 .697.022.892a3.5 3.5 0 0 0 3.086 3.086C6.303 12 6.536 12 7 12m0 0c-.464 0-.697 0-.892.022a3.5 3.5 0 0 0-3.086 3.086C3 15.303 3 15.536 3 16s0 .697.022.892a3.5 3.5 0 0 0 3.086 3.086C6.303 20 6.536 20 7 20h8.125M13 8h.01M17 8h.01M13 16h.01" />
    <path
      fill={color}
      d="M7 12c-.464 0-.697 0-.892.022a3.5 3.5 0 0 0-3.086 3.086C3 15.303 3 15.536 3 16s0 .697.022.892a3.5 3.5 0 0 0 3.086 3.086C6.303 20 6.536 20 7 20h9.17c-.11-.313-.17-.65-.17-1v-4c0-1.408.97-2.59 2.278-2.913a4 4 0 0 0-.386-.065C17.697 12 17.464 12 17 12c.464 0 .697 0 .892-.022a3.5 3.5 0 0 0 3.086-3.086C21 8.697 21 8.464 21 8s0-.697-.022-.892a3.5 3.5 0 0 0-3.086-3.086C17.697 4 17.464 4 17 4H7c-.464 0-.697 0-.892.022a3.5 3.5 0 0 0-3.086 3.086C3 7.303 3 7.536 3 8s0 .697.022.892a3.5 3.5 0 0 0 3.086 3.086C6.303 12 6.536 12 7 12"
      opacity={0.28}
    />
  </Svg>
);

export default Piserverexclamationmarkcontrast;
