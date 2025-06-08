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
 * Pispatialscreenduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pispatialscreenduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "spatial screen icon",
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
    <path d="M16 21h-5m-9-7V7" />{" "}
    <path
      fill={color || "#000"}
      d="M6.568 3c-.252 0-.498 0-.706.017a2 2 0 0 0-.77.201 2 2 0 0 0-.874.874 2 2 0 0 0-.201.77C4 5.07 4 5.316 4 5.568v9.864c0 .252 0 .498.017.706.019.229.063.499.201.77a2 2 0 0 0 .874.874c.271.138.541.182.77.201.208.017.454.017.706.017h12.864c.252 0 .498 0 .706-.017.229-.019.499-.063.77-.201a2 2 0 0 0 .874-.874c.138-.271.182-.541.201-.77.017-.208.017-.454.017-.706V5.568c0-.252 0-.498-.017-.706a2 2 0 0 0-.201-.77 2 2 0 0 0-.874-.874 2 2 0 0 0-.77-.201C19.93 3 19.684 3 19.432 3z"
      opacity={0.28}
    />
  </Svg>
);

export default Pispatialscreenduosolid;
