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
 * Pistoredefaultduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pistoredefaultduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "store default icon",
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
      d="M20 13.749v4.857c0 .84 0 1.26-.163 1.58a1.5 1.5 0 0 1-.656.656c-.32.164-.74.164-1.581.164H6.4c-.84 0-1.26 0-1.581-.164a1.5 1.5 0 0 1-.656-.655C4 19.866 4 19.446 4 18.606v-4.86"
      opacity={0.28}
    />{" "}
    <path
      fill={color || "#000"}
      fillRule="evenodd"
      d="m7.344 2.006-.361-.003c-.513-.006-1.126-.012-1.7.063-.755.1-1.574.35-2.275.995-.69.635-1.01 1.42-1.178 2.15-.127.554-.18 1.152-.224 1.653l-.033.365a40 40 0 0 1-.118 1c-.105.832-.22 1.747-.22 2.622a4.256 4.256 0 0 0 7.511 2.74 4.25 4.25 0 0 0 3.256 1.516 4.25 4.25 0 0 0 3.256-1.515 4.25 4.25 0 0 0 3.256 1.515 4.256 4.256 0 0 0 4.256-4.256c0-.87-.117-1.782-.223-2.613a41 41 0 0 1-.12-1.01l-.033-.364c-.044-.5-.097-1.1-.224-1.653-.168-.73-.488-1.515-1.178-2.15-.701-.645-1.52-.895-2.275-.995-.574-.075-1.187-.069-1.7-.063l-.36.003z"
      clipRule="evenodd"
    />
  </Svg>
);

export default Pistoredefaultduosolid;
