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
 * Pieggboiledsolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pieggboiledsolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "egg boiled icon",
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
      d="M8.46744 2.98621C9.4637 2.11873 10.6599 1.5 12.0002 1.5C13.3406 1.5 14.5367 2.11873 15.533 2.98621C16.5303 3.85458 17.3932 5.02644 18.0979 6.28743C19.4974 8.79181 20.3891 11.8617 20.3891 14.1111C20.3891 18.7442 16.6333 22.5 12.0002 22.5C7.36716 22.5 3.61133 18.7442 3.61133 14.1111C3.61133 11.8617 4.503 8.79181 5.90255 6.28743C6.60724 5.02644 7.47017 3.85458 8.46744 2.98621ZM12.0002 9.5C9.51496 9.5 7.50024 11.5147 7.50024 14C7.50024 16.4853 9.51496 18.5 12.0002 18.5C14.4855 18.5 16.5002 16.4853 16.5002 14C16.5002 11.5147 14.4855 9.5 12.0002 9.5Z"
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
      stroke="none"
    />
  </Svg>
);

export default Pieggboiledsolid;
