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
 * Picryptoverificationcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Picryptoverificationcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "crypto verification icon",
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
      fill={color}
      d="m17.708 5.171-2.6-1.444c-1.134-.63-1.702-.946-2.302-1.07a4 4 0 0 0-1.612 0c-.6.124-1.168.44-2.302 1.07l-2.6 1.444c-1.198.666-1.797.998-2.233 1.472a4 4 0 0 0-.857 1.456C3 8.709 3 9.395 3 10.766v2.468c0 1.37 0 2.056.202 2.667a4 4 0 0 0 .857 1.456c.436.473 1.035.806 2.233 1.472l2.6 1.444c1.134.63 1.702.945 2.302 1.069.532.11 1.08.11 1.612 0 .6-.123 1.168-.439 2.302-1.069l2.6-1.444c1.198-.666 1.797-.999 2.234-1.472a4 4 0 0 0 .856-1.456C21 15.29 21 14.605 21 13.234v-2.468c0-1.37 0-2.056-.202-2.667a4 4 0 0 0-.856-1.456c-.437-.474-1.036-.806-2.234-1.472"
      opacity={0.28}
    />
    <path d="m8.5 12.666 2.341 2.339C11.99 12.997 13.593 11.302 15.5 10m-.392-6.273 2.6 1.444c1.198.666 1.797.999 2.234 1.472a4 4 0 0 1 .856 1.456c.202.61.202 1.296.202 2.667v2.468c0 1.37 0 2.056-.202 2.667a4 4 0 0 1-.856 1.456c-.437.473-1.036.806-2.234 1.472l-2.6 1.444c-1.134.63-1.702.946-2.302 1.07-.532.108-1.08.108-1.612 0-.6-.124-1.168-.44-2.302-1.07l-2.6-1.444c-1.198-.666-1.797-.999-2.233-1.472a4 4 0 0 1-.857-1.456C3 15.29 3 14.605 3 13.234v-2.468c0-1.37 0-2.056.202-2.667a4 4 0 0 1 .857-1.456c.436-.473 1.035-.806 2.233-1.472l2.6-1.444c1.134-.63 1.702-.946 2.302-1.07a4 4 0 0 1 1.612 0c.6.124 1.168.44 2.302 1.07" />
  </Svg>
);

export default Picryptoverificationcontrast;
