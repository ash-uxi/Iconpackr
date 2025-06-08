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
 * Pilabflaskconicalduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pilabflaskconicalduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "lab flask conical icon",
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
      d="M10.1698 3H14.1698M10.1698 3H9.16984M10.1698 3V8.523C10.1698 8.83361 10.0734 9.13655 9.89384 9.39L6.93384 13.569C12.5568 10.981 14.0918 16.641 18.2448 14.753L14.4458 9.39C14.2663 9.13655 14.1699 8.83361 14.1698 8.523V3M14.1698 3H15.1698"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M9.16986 15.9998H9.17986M17.8359 20.9998H6.50386C4.47586 20.9998 3.29186 18.7098 4.46386 17.0548L6.93386 13.5688C12.5569 10.9818 14.0919 16.6418 18.2449 14.7538L19.8749 17.0548C21.0479 18.7108 19.8659 20.9998 17.8359 20.9998Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pilabflaskconicalduostroke;
