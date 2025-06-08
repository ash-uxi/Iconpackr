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
 * Pimedicinepillcapsulestroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimedicinepillcapsulestroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "medicine pill capsule icon",
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
      d="M8.2864 8.28652L4.22181 12.3511C2.17085 14.4021 2.17085 17.7273 4.22181 19.7783C6.27277 21.8292 9.59804 21.8292 11.649 19.7783L15.7136 15.7137M8.2864 8.28652L12.351 4.22194C14.4019 2.17098 17.7272 2.17098 19.7782 4.22194C21.8291 6.2729 21.8291 9.59816 19.7782 11.6491L15.7136 15.7137M8.2864 8.28652L15.7136 15.7137M13.4083 8.47037L15.176 6.70261C15.6378 6.24079 16.3259 6.14305 16.8834 6.40941"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pimedicinepillcapsulestroke;
