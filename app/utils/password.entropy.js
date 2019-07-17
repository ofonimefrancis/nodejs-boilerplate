const stepwise = (password) => {
    let delta = password.charCodeAt(1) - password.charCodeAt(0);
    for (let i = 0; i < password.length - 1; i++) {
        if (password.charCodeAt(i + 1) - password.charCodeAt(i) !== delta) {
            return false;
        }
    }
    return true;
}

const ASDF = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];


const isAsdf = (password) => {
    let reverse = password.split('').reverse().join('');
    let asdf = ASDF.join('');

    if (~asdf.indexOf(password) || ~asdf.indexOf(reverse)) {
        return true;
    }
    asdf = ASDF.reverse().join('');
    if (~asdf.indexOf(password) || ~asdf.indexOf(reverse)) {
        return true;
    }
    return false;
}


const strength = (password) => {
    if (password.length < 6) {
        return 'simple';
    }

    var types = 0;

    if (/[a-z]/.test(password)) types += 1;

    if (/[A-Z]/.test(password)) types += 1;

    if (/[0-9]/.test(password)) types += 1;

    if (/[^0-9a-zA-Z]/.test(password)) types += 1;

    if (password.length < 8 && types === 1) {
        return 'simple';
    }
    return types > 2 ? 'strong' : 'medium';
}

const isValid = (password, cb) => {
    let answer;

    if (password.length < isValid.min) {
        answer = {
            valid: false,
            strength: 'simple',
            message: 'Password is too short'
        };
    } else if (~isValid.words.indexOf(password)) {
        answer = {
            valid: false,
            strength: 'simple',
            message: 'This password is not allow, try another one'
        };
    } else if (stepwise(password) || isAsdf(password)) {
        answer = {
            valid: false,
            strength: 'simple',
            message: 'Password is too simple'
        };
    } else {
        answer = {
            valid: true,
            strength: strength(password),
            message: null
        };
    }
    cb && cb(answer);
    return answer;
}

isValid.min = 6;

isValid.words = [];

export default isValid;