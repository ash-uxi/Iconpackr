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
 * Pifile02pdfformatcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pifile02pdfformatcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "file02 pdf format icon",
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
    <path d="M11 2h1a8 8 0 0 1 8 8h-.17A3 3 0 0 0 17 8h-.6c-.372 0-.557 0-.713-.025a2 2 0 0 1-1.662-1.662C14 6.157 14 5.972 14 5.6V5a3 3 0 0 0-3-3m0 0H8a4 4 0 0 0-4 4v4m-1 9v-5h1.5a2.5 2.5 0 0 1 0 5zm0 0v2m14-3v-4h4m-4 4v3m0-3h4m-11-4v7h.5a3.5 3.5 0 1 0 0-7z" />
    <path
      fill={color}
      d="M4 11V6a4 4 0 0 1 4-4h4a8 8 0 0 1 8 8v1z"
      opacity={0.28}
    />
  </Svg>
);

export default Pifile02pdfformatcontrast;
