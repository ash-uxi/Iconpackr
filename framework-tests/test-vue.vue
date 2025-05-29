<template>
  <div style="padding: 20px; font-family: Arial, sans-serif;">
    <h1>Vue Framework Test</h1>
    
    <!-- Stroke Style Tests -->
    <section style="margin-bottom: 30px;">
      <h2 style="color: #2563eb;">Stroke Style Icons (Vue)</h2>
      <div style="display: flex; gap: 20px; align-items: center;">
        <div style="text-align: center;">
          <PiCurrencySignRupeesStroke :size="48" color="#2563eb" />
          <p>Currency Rupees</p>
        </div>
        <div style="text-align: center;">
          <PiSafeStroke :size="48" color="#2563eb" />
          <p>Safe</p>
        </div>
        <div style="text-align: center;">
          <PiCreditCardLockedStroke :size="48" color="#2563eb" />
          <p>Credit Card Locked</p>
        </div>
      </div>
    </section>

    <!-- Contrast Style Tests -->
    <section style="margin-bottom: 30px;">
      <h2 style="color: #dc2626;">Contrast Style Icons (Vue)</h2>
      <div style="display: flex; gap: 20px; align-items: center;">
        <div style="text-align: center;">
          <PiPiggyBankContrast :size="48" color="#dc2626" />
          <p>Piggy Bank</p>
        </div>
        <div style="text-align: center;">
          <PiCreditCardArrowRepeatContrast :size="48" color="#dc2626" />
          <p>Credit Card Repeat</p>
        </div>
        <div style="text-align: center;">
          <PiCreditCardArrowLeftContrast :size="48" color="#dc2626" />
          <p>Credit Card Left</p>
        </div>
      </div>
    </section>

    <!-- Duo-Stroke Style Tests -->
    <section style="margin-bottom: 30px;">
      <h2 style="color: #059669;">Duo-Stroke Style Icons (Vue)</h2>
      <div style="display: flex; gap: 20px; align-items: center;">
        <div style="text-align: center;">
          <PiCurrencySignYuanDuoStroke :size="48" color="#059669" />
          <p>Currency Yuan</p>
        </div>
        <div style="text-align: center;">
          <PiCreditCardPlusDuoStroke :size="48" color="#059669" />
          <p>Credit Card Plus</p>
        </div>
        <div style="text-align: center;">
          <PiCreditCardArrowRepeatDuoStroke :size="48" color="#059669" />
          <p>Credit Card Repeat</p>
        </div>
      </div>
    </section>

    <!-- Vue Reactive Testing -->
    <section>
      <h2 style="color: #7c3aed;">Vue Reactivity Testing</h2>
      <div style="margin-bottom: 20px;">
        <label>
          Icon Size: 
          <input 
            type="range" 
            min="16" 
            max="64" 
            v-model="iconSize" 
            style="margin-left: 10px;"
          />
          {{ iconSize }}px
        </label>
      </div>
      <div style="margin-bottom: 20px;">
        <label>
          Icon Color: 
          <input 
            type="color" 
            v-model="iconColor" 
            style="margin-left: 10px;"
          />
        </label>
      </div>
      <div style="display: flex; gap: 20px; align-items: center;">
        <PiSafeStroke :size="iconSize" :color="iconColor" />
        <PiPiggyBankContrast :size="iconSize" :color="iconColor" />
        <PiCurrencySignYuanDuoStroke :size="iconSize" :color="iconColor" />
      </div>
      <p>Interactive Vue icons with reactive size and color</p>
    </section>
  </div>
</template>

<script>
// Test icons from each style
// Stroke Style Icons
import PiCurrencySignRupeesStroke from '../test-output/vue/stroke/money-&-payments/PiCurrencySignRupeesStroke.vue';
import PiSafeStroke from '../test-output/vue/stroke/money-&-payments/PiSafeStroke.vue';
import PiCreditCardLockedStroke from '../test-output/vue/stroke/money-&-payments/PiCreditCardLockedStroke.vue';

// Contrast Style Icons
import PiPiggyBankContrast from '../test-output/vue/contrast/money-&-payments/PiPiggyBankContrast.vue';
import PiCreditCardArrowRepeatContrast from '../test-output/vue/contrast/money-&-payments/PiCreditCardArrowRepeatContrast.vue';
import PiCreditCardArrowLeftContrast from '../test-output/vue/contrast/money-&-payments/PiCreditCardArrowLeftContrast.vue';

// Duo-Stroke Style Icons
import PiCurrencySignYuanDuoStroke from '../test-output/vue/duo-stroke/money-&-payments/PiCurrencySignYuanDuoStroke.vue';
import PiCreditCardPlusDuoStroke from '../test-output/vue/duo-stroke/money-&-payments/PiCreditCardPlusDuoStroke.vue';
import PiCreditCardArrowRepeatDuoStroke from '../test-output/vue/duo-stroke/money-&-payments/PiCreditCardArrowRepeatDuoStroke.vue';

export default {
  name: 'VueTest',
  components: {
    // Stroke Style Icons
    PiCurrencySignRupeesStroke,
    PiSafeStroke,
    PiCreditCardLockedStroke,
    // Contrast Style Icons
    PiPiggyBankContrast,
    PiCreditCardArrowRepeatContrast,
    PiCreditCardArrowLeftContrast,
    // Duo-Stroke Style Icons
    PiCurrencySignYuanDuoStroke,
    PiCreditCardPlusDuoStroke,
    PiCreditCardArrowRepeatDuoStroke
  },
  data() {
    return {
      iconSize: 32,
      iconColor: '#7c3aed'
    };
  }
};
</script> 