const convert = require('../convert')
var expect  = require("chai").expect;

describe('Conversor de Temperatura', () => {

    it('Fahrenheit para Celsius:', (done) => {

      const resultado = convert.fahrenheitCelsius(131);

      expect(resultado).to.equal(55);
      done();
  
    });

    it('Celsius para Fahrenheit:', (done) => {

      const resultado = convert.celsiusFahrenheit(55);

      expect(resultado).to.equal(131);
      done();
  
    });    
  
  });