export const formatInput = (num: string) => {
  const intDigits = parseFloat(num.split('.')[0]);
  const decDigits = num.split('.')[1];
  let displayedNumber;

  if (isNaN(intDigits)) {
    displayedNumber = '';
  } else {
    displayedNumber = intDigits.toLocaleString('en', {
      maximumFractionDigits: 0,
    });
  }
  if (decDigits != null) {
    return `${displayedNumber}.${decDigits}`;
  } else {
    return displayedNumber;
  }
};
