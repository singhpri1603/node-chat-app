var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'Priyanka';
        var text = 'Ssup';
        var message = generateMessage(from, text);

        expect(typeof message.createdAt).toBe('number');
        expect.objectContaining({from, text});
    });  
});