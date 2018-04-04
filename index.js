const Brain = require('brain.js')
const materialUiData = require('./materialui-color-data.js')
const hexToRGB = require('./utility.js')

// Make the neural network
const net = new Brain.NeuralNetwork();

// Feed it the data
net.train(materialUiData);

const hex = '#5683a0'
const convertedHex = hexToRGB(hex)
const input = { r: 1, g: 0.4, b: 0 }

console.log('Output: ', Brain.likely(input, net))
console.log('Hex output: ', Brain.likely(convertedHex, net))
