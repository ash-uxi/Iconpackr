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
 * Pigraphchartpyramidduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pigraphchartpyramidduosolid = ({
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
      d="M10.685 4.81108C10.8091 4.5692 10.9975 4.36624 11.2295 4.22452C11.4615 4.0828 11.7281 4.00781 12 4.00781C12.2719 4.00781 12.5385 4.0828 12.7705 4.22452C13.0025 4.36624 13.1909 4.5692 13.315 4.81108L16.666 11.0001H7.33401L10.684 4.81108H10.685Z"
      strokeWidth="2"
      fill={color || "#000"}
    />{" "}
    <path
      d="M19.373 16L16.666 11H7.33401L4.62701 16M19.373 16L20.8 18.635C21.373 19.694 20.645 21.008 19.485 21.008H4.51501C3.35501 21.008 2.62701 19.694 3.20001 18.635L4.62701 16M19.373 16H4.62701"
      strokeWidth="2"
      opacity={0.28}
      fill={color || "#000"}
    />
    >
  </Svg>
);

export default Pigraphchartpyramidduosolid;
