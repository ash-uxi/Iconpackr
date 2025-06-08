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
 * Pigraphchartpyramidcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pigraphchartpyramidcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "graph chart pyramid icon",
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
      d="M10.685 4.811a1.478 1.478 0 0 1 2.63 0L20.8 18.635c.573 1.06-.155 2.373-1.315 2.373H4.515c-1.16 0-1.888-1.314-1.315-2.373z"
      opacity={0.28}
    />
    <path d="m19.373 16.069 1.427 2.635c.573 1.059-.155 2.373-1.315 2.373H4.515c-1.16 0-1.888-1.314-1.315-2.373l1.427-2.635m14.746 0H4.627m14.746 0-2.707-5m-12.04 5 2.708-5m9.332 0-3.35-6.19a1.478 1.478 0 0 0-2.631 0l-3.351 6.19m9.332 0H7.334" />
  </Svg>
);

export default Pigraphchartpyramidcontrast;
