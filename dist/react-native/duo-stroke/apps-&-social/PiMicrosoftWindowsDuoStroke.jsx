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
 * Pimicrosoftwindowsduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimicrosoftwindowsduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "microsoft windows icon",
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
      d="m18.78 4.012-14 1.556A2 2 0 0 0 3 7.556v8.42a2 2 0 0 0 1.78 1.987l14 1.556A2 2 0 0 0 21 17.53V6.001a2 2 0 0 0-2.22-1.989"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M2 12.766v-2h8V3.982l1.993-.222q.007.057.007.117v6.889h10v2H12v6.889q0 .059-.007.116L10 19.55v-6.784z"
      fill="none"
    />
  </Svg>
);

export default Pimicrosoftwindowsduostroke;
