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
 * Picakecontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Picakecontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "cake icon",
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
    <path d="M12 5v3m0 0H7.8q-.434 0-.8.002M12 8h4.2q.434 0 .8.002M7 2v.01M12 2v.01M17 2v.01M21 20H3m18 0h1m-1 0v-5M3 20H2m1 0v-5m4-6.998c-1.165.008-1.831.055-2.362.325a3 3 0 0 0-1.311 1.311C3 10.28 3 11.12 3 12.8V15m4-6.998V5m10 3.002c1.165.008 1.831.055 2.362.325a3 3 0 0 1 1.311 1.311C21 10.28 21 11.12 21 12.8V15m-4-6.998V5m4 10a1.21 1.21 0 0 1-1.157-.726c-.434-.967-1.808-.967-2.241 0-.434.968-1.807.968-2.24 0-.434-.967-1.808-.967-2.242 0-.433.968-1.807.968-2.24 0-.434-.967-1.808-.967-2.241 0-.434.968-1.807.968-2.24 0-.434-.967-1.808-.967-2.242 0A1.21 1.21 0 0 1 3 15" />
    <path
      fill={color}
      d="M20.673 9.638C21 10.28 21 11.12 21 12.8V15a1.21 1.21 0 0 1-1.157-.726c-.434-.967-1.808-.967-2.241 0-.434.968-1.807.968-2.24 0-.434-.967-1.808-.967-2.242 0-.433.968-1.807.968-2.24 0-.434-.967-1.808-.967-2.241 0-.434.968-1.807.968-2.24 0-.434-.967-1.808-.967-2.242 0A1.21 1.21 0 0 1 3 15v-2.2c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311c.53-.27 1.197-.317 2.362-.325q.365-.003.8-.002h8.4q.434 0 .8.002c1.165.008 1.831.055 2.362.325a3 3 0 0 1 1.311 1.311"
      opacity={0.28}
    />
  </Svg>
);

export default Picakecontrast;
