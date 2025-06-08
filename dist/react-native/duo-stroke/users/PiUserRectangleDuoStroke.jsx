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
 * Piuserrectangleduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piuserrectangleduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "user rectangle icon",
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
      d="M4 10.2C4 7.67976 4 6.41965 4.49047 5.45704C4.9219 4.61031 5.61031 3.9219 6.45704 3.49047C7.41965 3 8.67976 3 11.2 3H12.8C15.3202 3 16.5804 3 17.543 3.49047C18.3897 3.9219 19.0781 4.61031 19.5095 5.45704C20 6.41965 20 7.67976 20 10.2V13.8C20 16.3202 20 17.5804 19.5095 18.543C19.0781 19.3897 18.3897 20.0781 17.543 20.5095C16.5804 21 15.3202 21 12.8 21H11.2C8.67976 21 7.41965 21 6.45704 20.5095C5.61031 20.0781 4.9219 19.3897 4.49047 18.543C4 17.5804 4 16.3202 4 13.8V10.2Z"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M6.0918 16.904C6.6918 16.344 7.4968 16 8.3828 16H15.6168C16.5028 16 17.3088 16.343 17.9088 16.904M14.9998 10C14.9998 11.634 13.6338 13 11.9998 13C10.3658 13 8.9998 11.634 8.9998 10C8.9998 8.366 10.3658 7 11.9998 7C13.6338 7 14.9998 8.366 14.9998 10Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piuserrectangleduostroke;
