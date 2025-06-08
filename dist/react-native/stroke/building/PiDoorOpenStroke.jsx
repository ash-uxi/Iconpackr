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
 * Pidooropenstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pidooropenstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "door open icon",
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
      d="M11 20.7137V3.30889C11 2.53316 11 2.14529 11.1629 1.89601C11.3054 1.67794 11.5274 1.52409 11.7817 1.46721C12.0723 1.4022 12.4355 1.53839 13.1618 1.81076L16.4045 3.02678C17.3403 3.37768 17.8081 3.55314 18.1529 3.857C18.4575 4.12544 18.6922 4.46402 18.8365 4.84347C19 5.27301 19 5.7727 19 6.77209V17.2842C19 18.2928 19 18.797 18.8341 19.2295C18.6876 19.6114 18.4495 19.9516 18.1409 20.2201C17.7914 20.524 17.3176 20.6968 16.3701 21.0422L13.148 22.2169C12.4254 22.4804 12.0642 22.6121 11.7754 22.5456C11.5228 22.4874 11.3027 22.3333 11.1614 22.1159C11 21.8674 11 21.4829 11 20.7137Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M14.9473 11.6179H14.0293"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
    <path d="M2 20H11M19 20H22" stroke={color} strokeWidth="2" fill="none" />
    <path
      d="M5 20V7.98047C5 6.58034 5 5.88027 5.27248 5.34549C5.51217 4.87509 5.89462 4.49264 6.36502 4.25295C6.8998 3.98047 7.59987 3.98047 9 3.98047H11"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pidooropenstroke;
