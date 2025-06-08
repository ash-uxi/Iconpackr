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
 * Picommunityduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Picommunityduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "community icon",
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
      fill={color || "#000"}
      d="M16.672 12.383a3.596 3.596 0 1 0 0 7.19 3.596 3.596 0 0 0 0-7.19M16.672 2a3.596 3.596 0 1 0 0 7.191 3.596 3.596 0 0 0 0-7.191"
    />{" "}
    <path
      d="M2.656 10.618A5.7 5.7 0 0 1 7.328 8.19c1.932 0 3.639.959 4.673 2.426a5.7 5.7 0 0 1 4.672-2.426c1.93 0 3.638.959 4.672 2.426M2.656 21a5.7 5.7 0 0 1 4.672-2.426c1.932 0 3.639.958 4.673 2.426a5.7 5.7 0 0 1 4.672-2.426c1.93 0 3.638.958 4.672 2.426"
      opacity={0.28}
    />{" "}
    <path
      fill={color || "#000"}
      d="M7.328 12.383a3.596 3.596 0 1 0 0 7.19 3.596 3.596 0 0 0 0-7.19M7.328 2a3.596 3.596 0 1 0 0 7.191 3.596 3.596 0 0 0 0-7.191"
    />
  </Svg>
);

export default Picommunityduosolid;
