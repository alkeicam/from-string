class FromStringParser {
    constructor(options) {       
    }
    parse(stringValue) {
        // handle undefineds 
        if (stringValue == 'undefined' || stringValue == null)
            return undefined;
        // first to to parse it with JSON
        var result = stringValue;
        try {
            result = JSON.parse(stringValue);
        } catch (e) {
            // if we cant parse with json then we assume that this is a string            
        }
        // next the value might be a number so we try to convert to number
        var possiblyNumber = Number(result);
        if (!Number.isNaN(possiblyNumber)) {
            result = Number(possiblyNumber);
        }
        return result;

    }
}
module.exports = new FromStringParser({});