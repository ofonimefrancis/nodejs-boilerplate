class TokenGenerator {
    
    generate(length, options) {
        const token_length = length || 100;
        const digits = '23456789';
        const alphabets = 'abcdefghjklmnpqrstuvwxyz';
        const upperCase = alphabets.toUpperCase();
        const specialChars = '#!&@';
        const generateOptions = options || {};

        generateOptions.digits = generateOptions.hasOwnProperty('digits') ? options.digits : true;
        generateOptions.alphabets = generateOptions.hasOwnProperty('alphabets') ? options.alphabets : false;
        generateOptions.upperCase = generateOptions.hasOwnProperty('upperCase') ? options.upperCase : true;
        generateOptions.specialChars = generateOptions.hasOwnProperty('specialChars') ? options.specialChars : true;

        let allowsChars = ((generateOptions.digits || '') && digits) +
            ((generateOptions.alphabets || '') && alphabets) +
            ((generateOptions.upperCase || '') && upperCase) +
            ((generateOptions.specialChars || '') && specialChars);
        let password = '';

        for (let index = 0; index < token_length; ++index) {
            let charIndex = this.rand(0, allowsChars.length - 1);
            password += allowsChars[charIndex];
        }
        return password;
    }

    rand(min, max) {
        let random = Math.random();
        return Math.floor(random * (max - min) + min);
    }

};

export default TokenGenerator;