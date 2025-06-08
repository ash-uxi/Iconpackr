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
 * Piscaleduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piscaleduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "scale icon",
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
      d="M16.463 1.369a3 3 0 0 0-1.854 0c-.404.13-.732.358-1.035.615-.286.243-.608.565-.98.938l-9.672 9.67c-.373.373-.694.695-.937.982-.257.302-.485.63-.616 1.034a3 3 0 0 0 0 1.854c.131.404.359.733.616 1.035.243.287.564.608.937.98l2.6 2.601c.373.373.695.694.981.938.302.256.63.484 1.035.615a3 3 0 0 0 1.854 0c.404-.131.732-.359 1.035-.615.286-.244.608-.565.98-.938l9.672-9.671c.372-.373.694-.694.937-.98.257-.303.485-.632.616-1.036a3 3 0 0 0 0-1.854c-.132-.404-.36-.732-.616-1.034a18 18 0 0 0-.937-.981l-2.6-2.6c-.373-.373-.695-.695-.981-.938-.303-.257-.631-.484-1.035-.615"
      opacity={0.28}
    />{" "}
    <path d="m3.722 12.707 3.535 3.536M9.38 7.05l3.536 3.536m-.708-6.364 2.121 2.121M6.55 9.88 8.67 12" />
  </Svg>
);

export default Piscaleduosolid;
