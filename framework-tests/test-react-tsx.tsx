import React from 'react';

// Test icons from each style
// Stroke Style Icons
import PiCurrencySignRupeesStroke from '../test-output/react-tsx/stroke/money-&-payments/PiCurrencySignRupeesStroke';
import PiSafeStroke from '../test-output/react-tsx/stroke/money-&-payments/PiSafeStroke';
import PiCreditCardLockedStroke from '../test-output/react-tsx/stroke/money-&-payments/PiCreditCardLockedStroke';

// Contrast Style Icons
import PiPiggyBankContrast from '../test-output/react-tsx/contrast/money-&-payments/PiPiggyBankContrast';
import PiCreditCardArrowRepeatContrast from '../test-output/react-tsx/contrast/money-&-payments/PiCreditCardArrowRepeatContrast';
import PiCreditCardArrowLeftContrast from '../test-output/react-tsx/contrast/money-&-payments/PiCreditCardArrowLeftContrast';

// Duo-Stroke Style Icons
import PiCurrencySignYuanDuoStroke from '../test-output/react-tsx/duo-stroke/money-&-payments/PiCurrencySignYuanDuoStroke';
import PiCreditCardPlusDuoStroke from '../test-output/react-tsx/duo-stroke/money-&-payments/PiCreditCardPlusDuoStroke';
import PiCreditCardArrowRepeatDuoStroke from '../test-output/react-tsx/duo-stroke/money-&-payments/PiCreditCardArrowRepeatDuoStroke';

interface TestProps {
  title?: string;
}

const ReactTSXTest: React.FC<TestProps> = ({ title = 'React TypeScript Framework Test' }) => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>{title}</h1>
      
      {/* Stroke Style Tests */}
      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ color: '#2563eb' }}>Stroke Style Icons (TypeScript)</h2>
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
        <h2 style={{ color: '#dc2626' }}>Contrast Style Icons (TypeScript)</h2>
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
        <h2 style={{ color: '#059669' }}>Duo-Stroke Style Icons (TypeScript)</h2>
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

      {/* TypeScript Props Testing */}
      <section>
        <h2 style={{ color: '#7c3aed' }}>TypeScript Props Testing</h2>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <PiSafeStroke size={32} color="#7c3aed" className="test-icon" />
          <PiSafeStroke size={32} color="#7c3aed" style={{ transform: 'rotate(45deg)' }} />
          <PiSafeStroke size={32} color="#7c3aed" onClick={() => console.log('Icon clicked!')} />
        </div>
        <p>Testing: className, style, onClick props</p>
      </section>
    </div>
  );
};

export default ReactTSXTest; 