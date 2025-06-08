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
 * Pinotebookduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pinotebookduosolid = ({
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
    <path
      fill={color || "#000"}
      d="M1.504 4.198C4.772 2.331 8.929 2.95 12 4.006c3.071-1.056 7.228-1.675 10.496.192a1 1 0 0 1 .504.869v15.5a1 1 0 0 1-1.394.919c-2.795-1.198-6.322-.38-9.192.924a1 1 0 0 1-.828 0c-2.87-1.304-6.398-2.122-9.192-.924A1 1 0 0 1 1 20.566v-15.5a1 1 0 0 1 .504-.868"
      opacity={0.28}
    />{" "}
    <path d="M12 21.504V5" />
  </Svg>
);

export default Pinotebookduosolid;
