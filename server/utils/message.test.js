var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'Priyanka';
        var text = 'Ssup';
        var message = generateMessage(from, text);

        expect(typeof message.createdAt).toBe('number');
        expect.objectContaining({from, text});
    });  
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'Sahil';
        var lat = 26;
        var long = 45;
        var url = 'https://google.com/maps?q=26,45';

        var message = generateLocationMessage(from, lat, long);

        expect(typeof message.createdAt).toBe('number');
        expect.objectContaining({from, url});
    });
});