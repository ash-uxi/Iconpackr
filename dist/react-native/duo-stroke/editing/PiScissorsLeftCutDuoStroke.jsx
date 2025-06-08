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
 * Piscissorsleftcutduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piscissorsleftcutduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "scissors left cut icon",
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
      d="M12.68 11.8751L5.2915 4.48657M12.68 11.8751L15.7188 14.9139M12.68 11.8751L15.7188 8.8363M12.68 11.8751L5.2915 19.2636"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M15.719 14.9138C16.3129 14.3199 17.1184 13.9863 17.9583 13.9863C18.7982 13.9863 19.6036 14.3199 20.1975 14.9138C20.7914 15.5077 21.1251 16.3132 21.1251 17.153C21.1251 17.9929 20.7914 18.7984 20.1975 19.3923C19.6036 19.9862 18.7982 20.3198 17.9583 20.3198C17.1184 20.3198 16.3129 19.9862 15.719 19.3923C15.1251 18.7984 14.7915 17.9929 14.7915 17.153C14.7915 16.3132 15.1251 15.5077 15.719 14.9138ZM15.719 8.8362C15.1251 8.24232 14.7915 7.43683 14.7915 6.59695C14.7915 5.75707 15.1251 4.95159 15.719 4.3577C16.3129 3.76382 17.1184 3.43018 17.9583 3.43018C18.7982 3.43018 19.6036 3.76382 20.1975 4.3577C20.7914 4.95159 21.1251 5.75707 21.1251 6.59695C21.1251 7.43683 20.7914 8.24232 20.1975 8.8362C19.6036 9.43009 18.7982 9.76373 17.9583 9.76373C17.1184 9.76373 16.3129 9.43009 15.719 8.8362Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M6.875 11.875H7.875M2.875 11.875H3.875"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piscissorsleftcutduostroke;
