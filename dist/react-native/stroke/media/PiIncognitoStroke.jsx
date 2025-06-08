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
 * Piincognitostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piincognitostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "incognito icon",
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
      d="M10 17.0001H14M10 17.0001C10 19.2092 8.20914 21.0001 6 21.0001C3.79086 21.0001 2 19.2092 2 17.0001C2 14.7909 3.79086 13.0001 6 13.0001C8.20914 13.0001 10 14.7909 10 17.0001ZM14 17.0001C14 19.2092 15.7909 21.0001 18 21.0001C20.2091 21.0001 22 19.2092 22 17.0001C22 14.7909 20.2091 13.0001 18 13.0001C15.7909 13.0001 14 14.7909 14 17.0001ZM19.5828 9.71784L16.9712 4.82112C16.3863 3.72432 15.1855 3.10187 13.9521 3.25605C12.5531 3.43092 11.4469 3.43092 10.0479 3.25605C8.81449 3.10187 7.61373 3.72432 7.02877 4.82112L4.41718 9.71784M19.5828 9.71784C20.3976 9.87418 21.2036 10.0553 22 10.2602M19.5828 9.71784C14.5892 8.75962 9.41082 8.75962 4.41718 9.71784M4.41718 9.71784C3.6024 9.87418 2.7964 10.0553 2 10.2602"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piincognitostroke;
