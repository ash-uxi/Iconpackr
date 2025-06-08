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
 * Pipatreonduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pipatreonduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "patreon icon",
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
    <path d="M2.872 11.616C2.91 8.16 3.964 4.692 7.318 3.11c2.767-1.305 6.589-1.441 9.487-.504 2.333.755 4.322 2.849 4.326 5.402.004 2.942-1.914 5.163-4.728 5.86" />{" "}
    <path
      fill={color || "#000"}
      d="M6.892 2.205c3.016-1.423 7.103-1.559 10.22-.55 2.63.85 5.015 3.255 5.019 6.352.005 3.443-2.27 6.034-5.487 6.83-1.636.405-2.638.735-3.44 1.81-.345.462-.65 1.119-1.02 1.942-.239.533-.503 1.123-.803 1.664-.746 1.35-1.913 2.773-4.048 2.747-1.399-.018-2.47-.67-3.245-1.61-.748-.91-1.226-2.096-1.541-3.279-.631-2.37-.692-5.064-.675-6.506.04-3.596 1.143-7.57 5.02-9.4"
      opacity={0.28}
    />
  </Svg>
);

export default Pipatreonduosolid;
