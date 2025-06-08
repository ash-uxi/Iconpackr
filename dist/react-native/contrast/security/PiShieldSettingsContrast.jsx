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
 * Pishieldsettingscontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pishieldsettingscontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "shield settings icon",
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
      fill={color}
      d="M10.884 2.368 5.496 4.314A3 3 0 0 0 3.517 7.02l-.127 3.309a11 11 0 0 0 5.543 9.978l1.521.867a3 3 0 0 0 1.757.382v-.24a3 3 0 0 1-.04-.456l-.004-.444-.31-.317a3 3 0 0 1 0-4.198l.31-.317.005-.444a3 3 0 0 1 2.968-2.968l.444-.005.317-.31a3 3 0 0 1 4.038-.146h.636q.081-.903.011-1.827l-.227-2.95a3 3 0 0 0-1.972-2.592l-5.465-1.974a3 3 0 0 0-2.038 0"
      opacity={0.28}
    />
    <path d="M18 18h.01m2.606-7.031a11 11 0 0 0-.03-1.085l-.227-2.95a3 3 0 0 0-1.972-2.592l-5.465-1.974a3 3 0 0 0-2.038 0L5.496 4.314A3 3 0 0 0 3.517 7.02l-.127 3.309a11 11 0 0 0 5.543 9.978l1.521.867c.243.139.502.241.767.306M18 14l1.178 1.155 1.65.017.017 1.65L22 18l-1.154 1.179-.017 1.65-1.65.017L18 22l-1.178-1.154-1.65-.018-.017-1.65L14 18l1.155-1.179.017-1.65 1.65-.016z" />
  </Svg>
);

export default Pishieldsettingscontrast;
