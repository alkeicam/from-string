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
            // fallback
            // lets try to change all ' to " just in case this is an array of form ['a','b'] instead of ["a","b"]
            var changed = stringValue.replace(/'/g,'"');
            try{
                result = JSON.parse(changed);
            } catch(e2){
                // if we cant parse with json then we assume that this is a string  
            }            
        }
        // before turning to numbers check if maybe the value is a boolean true/false
        var isTrue = (typeof stringValue =='string' && stringValue.toLowerCase() === 'true');
        var isFalse = (typeof stringValue =='string' && stringValue.toLowerCase() === 'false');
        if(isFalse||isTrue){
            return isTrue ? true : false;
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