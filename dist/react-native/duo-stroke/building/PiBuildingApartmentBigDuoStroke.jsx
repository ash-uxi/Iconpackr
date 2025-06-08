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
 * Pibuildingapartmentbigduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pibuildingapartmentbigduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "building apartment big icon",
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
      d="M14 13a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zM14 5a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zM14 9a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zM14.432 17H9.568c-.252 0-.498 0-.706.017a2 2 0 0 0-.77.201 2 2 0 0 0-.874.874 2 2 0 0 0-.201.77C7 19.07 7 19.316 7 19.568V21h2v-1.4c0-.308.001-.48.011-.588.109-.01.28-.012.589-.012h4.8c.308 0 .48.002.589.012.01.108.011.28.011.588V21h2v-1.432c0-.252 0-.498-.017-.706a2 2 0 0 0-.201-.77 2 2 0 0 0-.874-.874 2 2 0 0 0-.77-.201C14.93 17 14.684 17 14.432 17"
      fill="none"
    />
    <path
      d="M15.8 2H8.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C5 3.52 5 4.08 5 5.2v15.2c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C5.76 22 6.04 22 6.6 22h10.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C19 21.24 19 20.96 19 20.4V5.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C17.48 2 16.92 2 15.8 2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M8 13a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zM8 5a1 1 0 0 0 0 2h2a1 1 0 1 0 0-2zM8 9a1 1 0 0 0 0 2h2a1 1 0 1 0 0-2z"
      fill="none"
    />
  </Svg>
);

export default Pibuildingapartmentbigduostroke;
