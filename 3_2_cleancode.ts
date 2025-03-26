/* 
function calculateDiscount(price: number, isPremium: boolean): number {
  if (isPremium) {
    // if (price > 100) {
    //   return price * 0.8;
    // } 
      else {
      return price * 0.9;
    }
  } else {
    // if (price > 100) {
    //   return price * 0.9;
    // } 
      else {
      return price;
    }
  }
}
*/

const DISCOUNT_EIGHTY_PERCENT = 0.8;
const DISCOUNT_NINETY_PERCENT = 0.9;

function premiumDiscountCalculeCall(price: number): number {
  const priceWithNinetyPercent = price * DISCOUNT_NINETY_PERCENT;
  const priceWithEightyPercent = price * DISCOUNT_EIGHTY_PERCENT;

  return (price > 100) ? priceWithEightyPercent : priceWithNinetyPercent;
}

function defaultDiscountCalculeCall(price: number): number {
  return (price > 100) ? price * DISCOUNT_NINETY_PERCENT : price;
}

function calculateDiscount(price: number, isPremium: boolean) {
  if (isPremium)
    return premiumDiscountCalculeCall(price);
  
  return defaultDiscountCalculeCall(price);
}