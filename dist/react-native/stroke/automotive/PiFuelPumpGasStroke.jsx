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
 * Pifuelpumpgasstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pifuelpumpgasstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "fuel pump gas icon",
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
      d="M11.5 6H6.5C6.22386 6 6 6.22386 6 6.5V9.5C6 9.77614 6.22386 10 6.5 10H11.5C11.7761 10 12 9.77614 12 9.5V6.5C12 6.22386 11.7761 6 11.5 6Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M13 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H13C14.1046 21 15 20.1046 15 19V5C15 3.89543 14.1046 3 13 3Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M18 4L20.4142 6.41421C20.7893 6.78929 21 7.29799 21 7.82843V18.5C21 19.3284 20.3284 20 19.5 20C18.6716 20 18 19.3284 18 18.5V17C18 15.3431 16.6569 14 15 14"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M19.5 10C20.3284 10 21 9.32843 21 8.5C21 7.67157 20.3284 7 19.5 7C18.6716 7 18 7.67157 18 8.5C18 9.32843 18.6716 10 19.5 10Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pifuelpumpgasstroke;
