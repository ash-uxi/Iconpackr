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
 * Pifile02starduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pifile02starduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "file02 star icon",
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
      d="M12 11C12.0037 11.1009 12.0055 11.1514 12.0084 11.1948C12.1071 12.6967 13.3033 13.8929 14.8052 13.9916C14.8486 13.9945 14.8991 13.9963 15 14C14.8991 14.0037 14.8486 14.0055 14.8052 14.0084C13.3033 14.1071 12.1071 15.3033 12.0084 16.8052C12.0055 16.8486 12.0037 16.8991 12 17C11.9963 16.8991 11.9945 16.8486 11.9916 16.8052C11.8929 15.3033 10.6967 14.1071 9.19485 14.0084C9.15142 14.0055 9.10095 14.0037 9 14C9.10095 13.9963 9.15142 13.9945 9.19485 13.9916C10.6967 13.8929 11.8929 12.6967 11.9916 11.1948C11.9945 11.1514 11.9963 11.1009 12 11Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M12 2C16.4183 2 20 5.58172 20 10V11C20 9.34315 18.6569 8 17 8L16.4 8C16.0284 8 15.8426 8 15.6871 7.97538C14.8313 7.83983 14.1602 7.16865 14.0246 6.31287C14 6.1574 14 5.9716 14 5.6V5C14 3.34315 12.6569 2 11 2H12Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M16 22H8C5.79086 22 4 20.2091 4 18V6C4 3.79086 5.79086 2 8 2H12C16.4183 2 20 5.58172 20 10V18C20 20.2091 18.2091 22 16 22Z"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Pifile02starduostroke;
