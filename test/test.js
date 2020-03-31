// Chai is a commonly used library for creating unit test suites. It is easily extended with plugins.
const chai = require('chai');
var chaiAsPromised = require("chai-as-promised");
chai.should();
chai.use(chaiAsPromised);

const assert = chai.assert;
const expect = chai.expect;

// Sinon is a library used for mocking or verifying function calls in JavaScript.
const sinon = require('sinon');


const theModule = require('../');

describe('from-string parser', () => {
    describe('parse', () => {
        beforeEach(() => {            
        });
        afterEach(() => {
        });                
        it('Integer parse', () => {
            return expect(theModule.parse("2")).eq(2);
        })
        it('Float parse', () => {
            return expect(theModule.parse("2.2")).eq(2.2);
        })
        it('Float parse (2)', () => {
            return expect(theModule.parse(".2")).eq(0.2);
        })
        it('String parse', () => {
            return expect(theModule.parse("testing one two three")).eq("testing one two three");
        })
        it('Undefined parse', () => {
            return expect(theModule.parse(undefined)).is.undefined;
        })
        it('Null parse', () => {
            return expect(theModule.parse(null)).is.undefined;
        })
        it('Array parse', () => {
            return expect(theModule.parse('[1,2,3]').length).eq(3);
        })
        it('Array parse 2', () => {
            return expect(theModule.parse('[1,2,3]')[1]).eq(2);
        })

        
    })        
})
