function countFlavors(flavorsOrdered) {
  const flavorCounts = {};
  for (const flavor of flavorsOrdered) {
    if (flavorCounts[flavor]) {
      flavorCounts[flavor]++;
    } else {
      flavorCounts[flavor] = 1;
    }
  }
  return flavorCounts;
}

function flavorsAndCounts() {
  const userInputFlavors = prompt(
    `Enter a list of flavors you would like, seperated by a comma only.`,
    `vanilla,vanilla,vanilla,strawberry,coffee,coffee`
  );
  const flavorsOrdered = userInputFlavors.split(`,`);
  const counts = countFlavors(flavorsOrdered);
  console.log(counts);
}

flavorsAndCounts();
