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
 * Pifolderlockduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pifolderlockduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "folder lock icon",
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
    <path d="M13.92 13.042C13.712 13 13.43 13 12.938 13h-1.877c-.49 0-.774 0-.981.042m3.84 0c.64.128 1.12.73 1.156 1.372.03.529-.167 1.283-.407 1.76a1.5 1.5 0 0 1-1.011.79c-.163.036-.348.036-.72.036h-1.877c-.37 0-.556 0-.719-.036a1.5 1.5 0 0 1-1.011-.79c-.24-.477-.438-1.231-.407-1.76.037-.642.515-1.244 1.156-1.372m3.84 0c-.051-.617-.03-1.29-.176-1.895a1.5 1.5 0 0 0-1.227-1.129c-.323-.05-.71-.05-1.034 0a1.5 1.5 0 0 0-1.228 1.13c-.146.604-.124 1.277-.175 1.894" />{" "}
    <path
      fill={color || "#000"}
      d="M9.924 2.108C9.564 1.998 9.184 2 8.806 2h-.449C7.273 2 6.4 2 5.691 2.058c-.728.06-1.369.185-1.961.487A5 5 0 0 0 1.545 4.73c-.302.593-.428 1.233-.487 1.962C1 7.399 1 8.274 1 9.357v5.286c0 1.084 0 1.958.058 2.666.06.729.185 1.369.487 1.961a5 5 0 0 0 2.185 2.185c.592.302 1.233.428 1.961.487C6.4 22 7.273 22 8.357 22h7.286c1.084 0 1.958 0 2.666-.058.729-.06 1.369-.185 1.961-.487a5 5 0 0 0 2.185-2.185c.302-.592.428-1.232.487-1.961C23 16.6 23 15.727 23 14.643v-2.286c0-1.083 0-1.958-.058-2.665-.06-.73-.185-1.37-.487-1.962a5 5 0 0 0-2.185-2.185c-.592-.302-1.232-.427-1.961-.487C17.6 5 16.727 5 15.643 5h-2.359c-.531 0-.589-.01-.626-.021a.5.5 0 0 1-.173-.093c-.03-.024-.07-.067-.365-.51l-.575-.862-.05-.075c-.21-.314-.42-.631-.71-.87a2.5 2.5 0 0 0-.861-.46"
      opacity={0.28}
    />
  </Svg>
);

export default Pifolderlockduosolid;
