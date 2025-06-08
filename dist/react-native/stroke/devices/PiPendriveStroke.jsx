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
 * Pipendrivestroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pipendrivestroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "pendrive icon",
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
      d="M6 11.2C6 10.0799 6 9.51984 6.21799 9.09202C6.40973 8.71569 6.71569 8.40973 7.09202 8.21799C7.51984 8 8.0799 8 9.2 8H14.8C15.9201 8 16.4802 8 16.908 8.21799C17.2843 8.40973 17.5903 8.71569 17.782 9.09202C18 9.51984 18 10.0799 18 11.2V16C18 16.929 18 17.3935 17.9384 17.7822C17.5996 19.9216 15.9216 21.5996 13.7822 21.9384C13.3935 22 12.929 22 12 22C11.071 22 10.6065 22 10.2178 21.9384C8.07837 21.5996 6.40042 19.9216 6.06156 17.7822C6 17.3935 6 16.929 6 16V11.2Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M8 4.4C8 3.55992 8 3.13988 8.16349 2.81901C8.3073 2.53677 8.53677 2.3073 8.81901 2.16349C9.13988 2 9.55992 2 10.4 2H13.6C14.4401 2 14.8601 2 15.181 2.16349C15.4632 2.3073 15.6927 2.53677 15.8365 2.81901C16 3.13988 16 3.55992 16 4.4V8H8V4.4Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pipendrivestroke;
