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
 * Piincognitocontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piincognitocontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "incognito icon",
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
    <g fill={color} opacity={0.28}>
      <path d="M10 17a4 4 0 1 1-8 0 4 4 0 0 1 8 0M22 17a4 4 0 1 1-8 0 4 4 0 0 1 8 0M13.952 3.256a3 3 0 0 1 3.02 1.565l2.61 4.897a40.4 40.4 0 0 0-15.165 0L7.03 4.821a3 3 0 0 1 3.019-1.565c1.399.175 2.505.175 3.904 0" />
    </g>
    <path d="M10 17h4m-4 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0m4 0a4 4 0 1 0 8 0 4 4 0 0 0-8 0m5.583-7.282L16.97 4.82a3 3 0 0 0-3.019-1.565 14.6 14.6 0 0 1-3.904 0 3 3 0 0 0-3.02 1.565l-2.61 4.897m15.165 0A40 40 0 0 1 22 10.26m-2.417-.542a40.4 40.4 0 0 0-15.166 0m0 0Q3.195 9.952 2 10.26" />
  </Svg>
);

export default Piincognitocontrast;
