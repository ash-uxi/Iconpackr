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
 * Piinboxdefaultduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piinboxdefaultduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "inbox default icon",
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
      d="M2.072 10a1 1 0 0 0-.964.734q-.045.165-.072.332c-.036.233-.036.466-.036.73v.248c0 1.363 0 2.447.071 3.321.074.896.227 1.66.583 2.359a6 6 0 0 0 2.622 2.622c.7.356 1.463.51 2.359.583C7.509 21 8.593 21 9.956 21h4.088c1.363 0 2.447 0 3.322-.071.895-.074 1.659-.227 2.358-.583a6 6 0 0 0 2.622-2.622c.356-.7.51-1.463.583-2.359.071-.874.071-1.958.071-3.321v-.248c0-.264 0-.497-.036-.73a3 3 0 0 0-.072-.332 1 1 0 0 0-.964-.734h-5.005A1.923 1.923 0 0 0 15 11.923C15 13.07 14.07 14 12.923 14h-1.846A2.077 2.077 0 0 1 9 11.923 1.923 1.923 0 0 0 7.077 10z"
    />{" "}
    <path
      d="M21.87 10.82c-.056-.146-.134-.283-.291-.558l-1.736-3.037c-.671-1.175-1.007-1.762-1.478-2.19a4 4 0 0 0-1.445-.838C16.315 4 15.64 4 14.286 4H9.714c-1.352 0-2.029 0-2.634.197a4 4 0 0 0-1.444.839c-.472.427-.807 1.014-1.478 2.189l-1.736 3.037c-.157.275-.236.412-.291.558"
      opacity={0.28}
    />
  </Svg>
);

export default Piinboxdefaultduosolid;
