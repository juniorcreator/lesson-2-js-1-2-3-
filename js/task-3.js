const banknotes = [1, 2, 5, 10, 20, 50, 100];
const priceInput = 349;

const getBanknotes = (currencyArray, price, banknotesResult) => {
  const sortCurrency = (arr) => arr.sort((a, b) => b - a);
  let currency = [...currencyArray];
  let sortedCurrency = sortCurrency(currency);
  for (const banknote of sortedCurrency) {
    if (parseInt(price / banknote, 10) > 0) {
      banknotesResult.push(banknote);
      return getBanknotes(currencyArray,price - banknote, banknotesResult);
    }
  }
  return banknotesResult;
};
// how to call getBanknotes( banknotes, priceInput, [])
