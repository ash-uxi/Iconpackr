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
 * Pifile02settingscontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pifile02settingscontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "file02 settings icon",
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
    <path d="M11.344 22H8a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h3m0 0h1a8 8 0 0 1 8 8v.5h-.041A3 3 0 0 0 17 8h-.6c-.372 0-.557 0-.713-.025a2 2 0 0 1-1.662-1.662C14 6.157 14 5.972 14 5.6V5a3 3 0 0 0-3-3m7 16h.01M18 14l1.179 1.155 1.65.017.017 1.65L22 18l-1.154 1.179-.018 1.65-1.65.017L18 22l-1.179-1.154-1.65-.018-.016-1.65L14 18l1.155-1.179.017-1.65 1.65-.016z" />
    <path
      fill={color}
      d="M19.447 11.371H20V10a8 8 0 0 0-8-8H8a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h4.305v-.285a3 3 0 0 1-.133-.855l-.005-.444-.31-.317a3 3 0 0 1 0-4.198l.31-.317.005-.444a3 3 0 0 1 2.968-2.968l.444-.005.317-.31a3 3 0 0 1 3.546-.486"
      opacity={0.28}
    />
  </Svg>
);

export default Pifile02settingscontrast;
