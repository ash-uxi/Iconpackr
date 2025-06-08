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
 * Piplaylistcheckstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piplaylistcheckstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "playlist check icon",
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
      d="M5 6H19M7 2.00127L17 2M7 22H17C18.4001 22 19.1002 22 19.635 21.7275C20.1054 21.4878 20.4878 21.1054 20.7275 20.635C21 20.1002 21 19.4001 21 18V14C21 12.5999 21 11.8998 20.7275 11.365C20.4878 10.8946 20.1054 10.5122 19.635 10.2725C19.1002 10 18.4001 10 17 10H7C5.59987 10 4.8998 10 4.36502 10.2725C3.89462 10.5122 3.51217 10.8946 3.27248 11.365C3 11.8998 3 12.5999 3 14V18C3 19.4001 3 20.1002 3.27248 20.635C3.51217 21.1054 3.89462 21.4878 4.36502 21.7275C4.8998 22 5.59987 22 7 22Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M8.5 16.1408L10.8412 18.4795C11.9893 16.4718 13.5934 14.7771 15.5 13.4746"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piplaylistcheckstroke;
