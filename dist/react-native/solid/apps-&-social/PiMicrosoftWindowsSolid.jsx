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
 * Pimicrosoftwindowssolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimicrosoftwindowssolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "microsoft windows icon",
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
      d="M10 3.98189L4.66871 4.57426C3.14941 4.74307 2 6.02726 2 7.55591V10.7658H10V3.98189Z"
      fill={color}
      stroke="none"
    />
    <path
      d="M11.9933 19.7712L18.6687 20.5129C20.4458 20.7104 22 19.3193 22 17.5313V12.7658H12V19.6547C12 19.6941 11.9977 19.733 11.9933 19.7712Z"
      fill={color}
      stroke="none"
    />
    <path
      d="M2 12.7658V15.9757C2 17.5044 3.1494 18.7886 4.6687 18.9574L10 19.5498V12.7658H2Z"
      fill={color}
      stroke="none"
    />
    <path
      d="M22 10.7658V6.00036C22 4.21232 20.4458 2.82125 18.6687 3.0187L11.9933 3.76042C11.9977 3.79865 12 3.83753 12 3.87695V10.7658L22 10.7658Z"
      fill={color}
      stroke="none"
    />
  </Svg>
);

export default Pimicrosoftwindowssolid;
