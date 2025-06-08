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
 * Pifitnessrunstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pifitnessrunstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "fitness run icon",
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
      d="M14 20L16.0783 17.229C16.5121 16.6506 16.2076 15.8171 15.5031 15.6546L12.7435 15.0177C11.5588 14.7443 10.8901 13.4858 11.3265 12.351L13 8H10.4721C8.95705 8 7.572 8.85601 6.89443 10.2111L6 12"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M14 4C14 3.44772 14.4477 3 15 3C15.5523 3 16 3.44772 16 4C16 4.55228 15.5523 5 15 5C14.4477 5 14 4.55228 14 4Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M16 9.5L16.0206 9.53096C16.5801 10.3702 17.677 10.6615 18.5792 10.2104L19 10"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M9.5 17L8.59382 18.8124C8.20468 19.5906 7.61918 20.2539 6.89519 20.7365L5 22"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pifitnessrunstroke;
