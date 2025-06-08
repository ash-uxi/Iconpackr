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
 * Piceilinglamponstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piceilinglamponstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "ceiling lamp on icon",
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
      d="M12 5C7.02944 5 3 9.02944 3 14H21C21 9.02944 16.9706 5 12 5ZM12 5V2M12 21V20M16.5 19.866L16 19M7.5 19.866L8 19M15 14C15 15.6569 13.6569 17 12 17C10.3431 17 9 15.6569 9 14L15 14Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piceilinglamponstroke;
