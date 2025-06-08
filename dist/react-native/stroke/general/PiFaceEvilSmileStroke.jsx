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
 * Pifaceevilsmilestroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pifaceevilsmilestroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "face evil smile icon",
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
      d="M8.38591 9.14385L9.61464 10.0042M14.3854 10.0042L15.6142 9.14385M15.5707 14.4995C14.6632 15.4252 13.3987 15.9995 12 15.9995C10.6013 15.9995 9.33671 15.4252 8.42925 14.4995M12.0001 21.1496C6.94669 21.1496 2.8501 17.053 2.8501 11.9996C2.8501 6.94621 6.94669 2.84961 12.0001 2.84961C17.0535 2.84961 21.1501 6.94621 21.1501 11.9996C21.1501 17.053 17.0535 21.1496 12.0001 21.1496Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pifaceevilsmilestroke;
