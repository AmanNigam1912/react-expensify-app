const address = ['40 Parker Hill Ave', 'Boston', 'Massachusetts', '02120'];

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [coffeeType, ,mediumPrice] = item;

console.log(`A medium ${coffeeType} costs ${mediumPrice}`);