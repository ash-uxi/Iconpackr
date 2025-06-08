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
 * Pibulboffduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pibulboffduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "bulb off icon",
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
    <path d="M10.379 21h3.242" />{" "}
    <path
      fill={color || "#000"}
      d="M12 3.994c-3.657 0-6.687 2.863-6.687 6.474 0 1.975.913 3.735 2.335 4.915q.646.537.787 1.075l.227.876a2.22 2.22 0 0 0 2.148 1.66h2.38c1.01 0 1.894-.683 2.148-1.66l.227-.876c.093-.358.358-.718.787-1.075 1.422-1.18 2.335-2.94 2.335-4.915 0-3.611-3.03-6.474-6.687-6.474"
      opacity={0.28}
    />
  </Svg>
);

export default Pibulboffduosolid;
