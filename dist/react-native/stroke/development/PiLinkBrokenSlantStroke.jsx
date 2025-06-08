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
 * Pilinkbrokenslantstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pilinkbrokenslantstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "link broken slant icon",
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
      d="M4.91113 7.42167L1.91113 7.42167M7.73954 4.59326L7.73954 1.59326M16.1391 18.6496V21.6496M18.9675 15.8212H21.9675M5.44667 10.9572L4.73956 11.6643C2.78694 13.6169 2.78694 16.7828 4.73956 18.7354C6.69218 20.688 9.85801 20.688 11.8106 18.7354L12.5177 18.0283M10.3964 6.00746L11.1035 5.30035C13.0561 3.34773 16.222 3.34773 18.1746 5.30035C20.1272 7.25297 20.1272 10.4188 18.1746 12.3714L17.4675 13.0785"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pilinkbrokenslantstroke;
