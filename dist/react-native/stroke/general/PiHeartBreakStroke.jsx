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
 * Piheartbreakstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piheartbreakstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "heart break icon",
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
      d="M12 5.4274C8.83207 0.653479 2 3.5018 2 8.94427C2 15.9768 11 21 12 21C13 21 22 15.9768 22 8.94427C22 3.50672 15.1625 0.66165 12 5.4274ZM12 5.4274C12.9719 6.77035 13.6594 8.29689 13.9849 9.92472C13.9941 9.97027 13.9748 10.0168 13.9361 10.0426L11.0401 11.9733C11.0157 11.9895 11.0031 12.0186 11.0079 12.0475C11.26 13.5643 11.8451 14.9408 13 16"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piheartbreakstroke;
