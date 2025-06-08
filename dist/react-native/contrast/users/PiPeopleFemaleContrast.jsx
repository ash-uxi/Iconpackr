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
 * Pipeoplefemalecontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pipeoplefemalecontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "people female icon",
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
      fill={color}
      fillRule="evenodd"
      d="M12 7.034a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M11.998 10a3.74 3.74 0 0 0-3.648 2.926L7 19h2.115l.756 1.638a2.345 2.345 0 0 0 4.258 0L14.885 19h2.1l-1.338-6.068A3.74 3.74 0 0 0 11.997 10z"
      clipRule="evenodd"
      opacity={0.28}
    />
    <path d="M14.5 4.535a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0M8.35 12.926a3.737 3.737 0 0 1 7.297.006L16.986 19h-2.1l-.757 1.638a2.345 2.345 0 0 1-4.258 0L9.115 19H7z" />
  </Svg>
);

export default Pipeoplefemalecontrast;
