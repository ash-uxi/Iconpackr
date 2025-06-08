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
 * Pisendplaneslantduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pisendplaneslantduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "send plane slant icon",
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
      fill={color || "#000"}
      d="M18.526 2.01c.83-.054 1.773.105 2.566.898s.952 1.736.898 2.566c-.036.566-.188 1.187-.308 1.675q-.057.234-.099.418a52.4 52.4 0 0 1-4.594 12.802c-1.114 2.167-4.185 2.166-5.342.046L9.66 16.77a1 1 0 0 1 .171-1.186l3.725-3.725a1 1 0 0 0-1.414-1.414L8.416 14.17a1 1 0 0 1-1.186.17l-3.645-1.988c-2.12-1.156-2.121-4.227.046-5.34a52.4 52.4 0 0 1 12.802-4.595q.184-.042.418-.1c.488-.119 1.11-.27 1.675-.308"
      opacity={0.28}
    />{" "}
    <path d="M19.034 13a52 52 0 0 0 1.572-5.646c.274-1.254.83-2.687-.221-3.739-1.052-1.052-2.485-.495-3.74-.221A52 52 0 0 0 11 4.966" />
  </Svg>
);

export default Pisendplaneslantduosolid;
