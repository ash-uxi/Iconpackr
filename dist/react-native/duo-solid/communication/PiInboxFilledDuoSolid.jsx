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
 * Piinboxfilledduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piinboxfilledduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "inbox filled icon",
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
      d="M1.108 10.734A1 1 0 0 1 2.072 10h5.005C8.139 10 9 10.861 9 11.923 9 13.07 9.93 14 11.077 14h1.846C14.07 14 15 13.07 15 11.923c0-1.062.861-1.923 1.923-1.923h5.005a1 1 0 0 1 .964.734q.045.165.072.332c.036.233.036.466.036.73v.248c0 1.363 0 2.447-.071 3.321-.074.896-.227 1.66-.583 2.359a6 6 0 0 1-2.622 2.622c-.7.356-1.463.51-2.358.583-.875.071-1.96.071-3.322.071H9.956c-1.363 0-2.447 0-3.321-.071-.896-.074-1.66-.227-2.359-.583a6 6 0 0 1-2.622-2.622c-.356-.7-.51-1.463-.583-2.359C1 14.491 1 13.407 1 12.044v-.248c0-.264 0-.497.036-.73q.027-.168.072-.332"
    />{" "}
    <path fill={color || "#000"} d="M11 9a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2z" />{" "}
    <path
      d="M21.87 10.82c-.056-.146-.134-.283-.291-.558l-1.736-3.037c-.671-1.175-1.007-1.762-1.478-2.19a4 4 0 0 0-1.445-.838C16.315 4 15.64 4 14.286 4H9.714c-1.352 0-2.029 0-2.634.197a4 4 0 0 0-1.444.839c-.472.427-.807 1.014-1.478 2.189l-1.736 3.037c-.157.275-.236.412-.291.558"
      opacity={0.28}
    />{" "}
    <path fill={color || "#000"} d="M9 6a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2z" />
  </Svg>
);

export default Piinboxfilledduosolid;
