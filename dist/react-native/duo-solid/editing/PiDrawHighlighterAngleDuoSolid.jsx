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
 * Pidrawhighlighterangleduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pidrawhighlighterangleduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "draw highlighter angle icon",
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
      d="m17.164 15.907-1.45 1.45a1 1 0 0 1-1.414 0L8.643 11.7a1 1 0 0 1 0-1.414l1.45-1.45m7.07 7.071a2.5 2.5 0 0 0 3.148-.318l2.474-2.475m-5.621 2.793a2.5 2.5 0 0 1-.389-.318l-6.364-6.364a2.5 2.5 0 0 1-.318-.389m0 0a2.5 2.5 0 0 1 .318-3.146l2.475-2.475"
      opacity={0.28}
    />{" "}
    <path
      fill={color || "#000"}
      fillRule="evenodd"
      d="M7.364 11.223c.05.432.24.852.572 1.184l5.657 5.657c.332.332.752.523 1.185.572L13 20.416a2 2 0 0 1-1.414.584H4a2 2 0 0 1-2-2v-1.17a3 3 0 0 1 .879-2.12l4.485-4.486z"
      clipRule="evenodd"
    />
  </Svg>
);

export default Pidrawhighlighterangleduosolid;
