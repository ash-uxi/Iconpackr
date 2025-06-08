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
 * Pilistsearchstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pilistsearchstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "list search icon",
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
      d="M4 12H10M4 18H10M4 6H20M21 18.5L19.6214 17.1214M19.6214 17.1214C20.1657 16.5771 20.5 15.8271 20.5 15C20.5 13.3414 19.1586 12 17.5 12C15.8414 12 14.5 13.3414 14.5 15C14.5 16.6586 15.8414 18 17.5 18C18.3272 18 19.0771 17.6657 19.6214 17.1214Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pilistsearchstroke;
