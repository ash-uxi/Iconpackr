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
 * Pinotebookcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pinotebookcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "notebook icon",
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
    <path d="M12 21.5V5.066M12 21.5c2.937-1.335 6.803-2.304 10-.934v-15.5c-2.995-1.71-6.975-1.1-10 0M12 21.5c-2.937-1.335-6.803-2.304-10-.934v-15.5c2.995-1.71 6.975-1.1 10 0" />
    <path
      fill={color}
      d="M2 20.566v-15.5c2.995-1.71 6.975-1.1 10 0 3.025-1.1 7.005-1.71 10 0v15.5c-3.197-1.37-7.063-.401-10 .934-2.937-1.335-6.803-2.304-10-.934"
      opacity={0.28}
    />
  </Svg>
);

export default Pinotebookcontrast;
