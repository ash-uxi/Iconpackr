import React from 'react';

// Test icons from each style
// Stroke Style Icons
import PiCurrencySignRupeesStroke from '../test-output/react-jsx/stroke/money-&-payments/PiCurrencySignRupeesStroke.jsx';
import PiSafeStroke from '../test-output/react-jsx/stroke/money-&-payments/PiSafeStroke.jsx';
import PiCreditCardLockedStroke from '../test-output/react-jsx/stroke/money-&-payments/PiCreditCardLockedStroke.jsx';

// Contrast Style Icons
import PiPiggyBankContrast from '../test-output/react-jsx/contrast/money-&-payments/PiPiggyBankContrast.jsx';
import PiCreditCardArrowRepeatContrast from '../test-output/react-jsx/contrast/money-&-payments/PiCreditCardArrowRepeatContrast.jsx';
import PiCreditCardArrowLeftContrast from '../test-output/react-jsx/contrast/money-&-payments/PiCreditCardArrowLeftContrast.jsx';

// Duo-Stroke Style Icons
import PiCurrencySignYuanDuoStroke from '../test-output/react-jsx/duo-stroke/money-&-payments/PiCurrencySignYuanDuoStroke.jsx';
import PiCreditCardPlusDuoStroke from '../test-output/react-jsx/duo-stroke/money-&-payments/PiCreditCardPlusDuoStroke.jsx';
import PiCreditCardArrowRepeatDuoStroke from '../test-output/react-jsx/duo-stroke/money-&-payments/PiCreditCardArrowRepeatDuoStroke.jsx';

const ReactJSXTest = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>React JSX Framework Test</h1>
      
      {/* Stroke Style Tests */}
      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ color: '#2563eb' }}>Stroke Style Icons</h2>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <PiCurrencySignRupeesStroke size={48} color="#2563eb" />
            <p>Currency Rupees</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <PiSafeStroke size={48} color="#2563eb" />
            <p>Safe</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <PiCreditCardLockedStroke size={48} color="#2563eb" />
            <p>Credit Card Locked</p>
          </div>
        </div>
      </section>

      {/* Contrast Style Tests */}
      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ color: '#dc2626' }}>Contrast Style Icons</h2>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <PiPiggyBankContrast size={48} color="#dc2626" />
            <p>Piggy Bank</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <PiCreditCardArrowRepeatContrast size={48} color="#dc2626" />
            <p>Credit Card Repeat</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <PiCreditCardArrowLeftContrast size={48} color="#dc2626" />
            <p>Credit Card Left</p>
          </div>
        </div>
      </section>

      {/* Duo-Stroke Style Tests */}
      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ color: '#059669' }}>Duo-Stroke Style Icons</h2>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <PiCurrencySignYuanDuoStroke size={48} color="#059669" />
            <p>Currency Yuan</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <PiCreditCardPlusDuoStroke size={48} color="#059669" />
            <p>Credit Card Plus</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <PiCreditCardArrowRepeatDuoStroke size={48} color="#059669" />
            <p>Credit Card Repeat</p>
          </div>
        </div>
      </section>

      {/* Test Different Sizes */}
      <section>
        <h2 style={{ color: '#7c3aed' }}>Size Variations Test</h2>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <PiSafeStroke size={16} color="#7c3aed" />
          <PiSafeStroke size={24} color="#7c3aed" />
          <PiSafeStroke size={32} color="#7c3aed" />
          <PiSafeStroke size={48} color="#7c3aed" />
          <PiSafeStroke size={64} color="#7c3aed" />
        </div>
        <p>Sizes: 16px, 24px, 32px, 48px, 64px</p>
      </section>
    </div>
  );
};

export default ReactJSXTest; 