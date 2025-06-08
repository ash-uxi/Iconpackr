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
 * Pieyeoffstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pieyeoffstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "eye off icon",
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
      d="M20.0778 9.57842C20.6787 10.5127 21 11.394 21 12C21 14 17.5 19 12 19C11.569 19 11.1502 18.9693 10.7445 18.9117M17.2929 6.70713C15.8674 5.71248 14.0762 5 12 5C6.5 5 3 10 3 12C3 13.245 4.35633 15.6526 6.70713 17.2929M17.2929 6.70713L22 2M17.2929 6.70713L14.1213 9.87868M6.70713 17.2929L2 22M6.70713 17.2929L9.87868 14.1213M9.87868 14.1213C9.33579 13.5784 9 12.8284 9 12C9 10.3431 10.3431 9 12 9C12.8284 9 13.5784 9.33579 14.1213 9.87868M9.87868 14.1213L14.1213 9.87868"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pieyeoffstroke;
