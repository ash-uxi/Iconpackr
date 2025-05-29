import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Slider, TouchableOpacity } from 'react-native';

// Test icons from each style
// Stroke Style Icons
import PiCurrencySignRupeesStroke from '../test-output/react-native/stroke/money-&-payments/PiCurrencySignRupeesStroke.jsx';
import PiSafeStroke from '../test-output/react-native/stroke/money-&-payments/PiSafeStroke.jsx';
import PiCreditCardLockedStroke from '../test-output/react-native/stroke/money-&-payments/PiCreditCardLockedStroke.jsx';

// Contrast Style Icons
import PiPiggyBankContrast from '../test-output/react-native/contrast/money-&-payments/PiPiggyBankContrast.jsx';
import PiCreditCardArrowRepeatContrast from '../test-output/react-native/contrast/money-&-payments/PiCreditCardArrowRepeatContrast.jsx';
import PiCreditCardArrowLeftContrast from '../test-output/react-native/contrast/money-&-payments/PiCreditCardArrowLeftContrast.jsx';

// Duo-Stroke Style Icons
import PiCurrencySignYuanDuoStroke from '../test-output/react-native/duo-stroke/money-&-payments/PiCurrencySignYuanDuoStroke.jsx';
import PiCreditCardPlusDuoStroke from '../test-output/react-native/duo-stroke/money-&-payments/PiCreditCardPlusDuoStroke.jsx';
import PiCreditCardArrowRepeatDuoStroke from '../test-output/react-native/duo-stroke/money-&-payments/PiCreditCardArrowRepeatDuoStroke.jsx';

const ReactNativeTest = () => {
  const [iconSize, setIconSize] = useState(48);
  const [iconColor, setIconColor] = useState('#7c3aed');
  
  const colors = ['#2563eb', '#dc2626', '#059669', '#7c3aed', '#ea580c', '#0891b2'];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>React Native Framework Test</Text>
      
      {/* Stroke Style Tests */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: '#2563eb' }]}>
          Stroke Style Icons (React Native)
        </Text>
        <View style={styles.iconRow}>
          <View style={styles.iconContainer}>
            <PiCurrencySignRupeesStroke size={48} color="#2563eb" />
            <Text style={styles.iconLabel}>Currency Rupees</Text>
          </View>
          <View style={styles.iconContainer}>
            <PiSafeStroke size={48} color="#2563eb" />
            <Text style={styles.iconLabel}>Safe</Text>
          </View>
          <View style={styles.iconContainer}>
            <PiCreditCardLockedStroke size={48} color="#2563eb" />
            <Text style={styles.iconLabel}>Credit Card Locked</Text>
          </View>
        </View>
      </View>

      {/* Contrast Style Tests */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: '#dc2626' }]}>
          Contrast Style Icons (React Native)
        </Text>
        <View style={styles.iconRow}>
          <View style={styles.iconContainer}>
            <PiPiggyBankContrast size={48} color="#dc2626" />
            <Text style={styles.iconLabel}>Piggy Bank</Text>
          </View>
          <View style={styles.iconContainer}>
            <PiCreditCardArrowRepeatContrast size={48} color="#dc2626" />
            <Text style={styles.iconLabel}>Credit Card Repeat</Text>
          </View>
          <View style={styles.iconContainer}>
            <PiCreditCardArrowLeftContrast size={48} color="#dc2626" />
            <Text style={styles.iconLabel}>Credit Card Left</Text>
          </View>
        </View>
      </View>

      {/* Duo-Stroke Style Tests */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: '#059669' }]}>
          Duo-Stroke Style Icons (React Native)
        </Text>
        <View style={styles.iconRow}>
          <View style={styles.iconContainer}>
            <PiCurrencySignYuanDuoStroke size={48} color="#059669" />
            <Text style={styles.iconLabel}>Currency Yuan</Text>
          </View>
          <View style={styles.iconContainer}>
            <PiCreditCardPlusDuoStroke size={48} color="#059669" />
            <Text style={styles.iconLabel}>Credit Card Plus</Text>
          </View>
          <View style={styles.iconContainer}>
            <PiCreditCardArrowRepeatDuoStroke size={48} color="#059669" />
            <Text style={styles.iconLabel}>Credit Card Repeat</Text>
          </View>
        </View>
      </View>

      {/* React Native Interactive Testing */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: '#7c3aed' }]}>
          React Native Interactive Testing
        </Text>
        
        <Text style={styles.controlLabel}>
          Icon Size: {Math.round(iconSize)}px
        </Text>
        <Slider
          style={styles.slider}
          minimumValue={16}
          maximumValue={64}
          value={iconSize}
          onValueChange={setIconSize}
          minimumTrackTintColor="#7c3aed"
          maximumTrackTintColor="#e5e7eb"
          thumbTintColor="#7c3aed"
        />
        
        <Text style={styles.controlLabel}>Color Picker:</Text>
        <View style={styles.colorPicker}>
          {colors.map((color) => (
            <TouchableOpacity
              key={color}
              style={[
                styles.colorButton,
                { backgroundColor: color },
                iconColor === color && styles.selectedColor
              ]}
              onPress={() => setIconColor(color)}
            />
          ))}
        </View>
        
        <View style={styles.iconRow}>
          <PiSafeStroke size={iconSize} color={iconColor} />
          <PiPiggyBankContrast size={iconSize} color={iconColor} />
          <PiCurrencySignYuanDuoStroke size={iconSize} color={iconColor} />
        </View>
        <Text style={styles.description}>
          Interactive React Native icons with dynamic size and color
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  iconContainer: {
    alignItems: 'center',
    margin: 10,
  },
  iconLabel: {
    marginTop: 8,
    fontSize: 12,
    textAlign: 'center',
    maxWidth: 80,
  },
  controlLabel: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10,
    color: '#374151',
  },
  slider: {
    width: '100%',
    height: 40,
    marginBottom: 20,
  },
  colorPicker: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  colorButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedColor: {
    borderColor: '#374151',
    borderWidth: 3,
  },
  description: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default ReactNativeTest; 