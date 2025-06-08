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
 * Picodependuostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Picodependuostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "codepen icon",
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
      fillRule="evenodd"
      d="M2.12 7.351 7.01 10.78l2.697-1.895c.4-.28.839-.479 1.294-.596V1.705a4 4 0 0 1 2 0v6.584c.455.117.893.316 1.294.596l2.703 1.895 4.887-3.424a4 4 0 0 1 .984 1.753L18.739 12l4.128 2.893a4 4 0 0 1-.985 1.752l-4.886-3.424-2.702 1.893c-.4.28-.84.479-1.294.596v6.584c-.656.17-1.344.17-2 0v-6.584a4 4 0 0 1-1.294-.596L7.01 13.224l-4.883 3.43a4 4 0 0 1-.991-1.747l4.133-2.905-4.135-2.9a4 4 0 0 1 .987-1.75m8.733 6.126L8.75 12l2.103-1.477a2 2 0 0 1 2.294 0L15.254 12l-2.107 1.476a2 2 0 0 1-2.294 0"
      clipRule="evenodd"
      fill="none"
    />
    <path
      d="m20.635 7.613-7-4.55a3 3 0 0 0-3.27 0l-7 4.55A3 3 0 0 0 2 10.128v3.744a3 3 0 0 0 1.365 2.515l7 4.55a3 3 0 0 0 3.27 0l7-4.55A3 3 0 0 0 22 13.872v-3.744a3 3 0 0 0-1.365-2.515"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Picodependuostroke;
