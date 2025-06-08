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
 * Piufostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piufostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "ufo icon",
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
      d="M16.5609 7.43931C15.7777 5.41156 14.0301 4 12 4C9.96987 4 8.22234 5.41156 7.43913 7.43931M16.5609 7.43931C19.7904 8.10251 22 9.44804 22 11C22 13.2091 17.5228 15 12 15C6.47715 15 2 13.2091 2 11C2 9.44804 4.20962 8.10251 7.43913 7.43931M16.5609 7.43931C16.94 8.42085 17.0719 9.49351 16.9638 10.5391C15.5011 10.8323 13.8065 11 12 11C10.1935 11 8.49887 10.8323 7.03622 10.5391C6.92815 9.49351 7.06001 8.42085 7.43913 7.43931M4 17L3 19M12 18V21M20 17L21 19"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piufostroke;
