import _ from 'lodash';


class RequestBodyChecker {
    checkRequestBody(params, requiredFields) {
        this.errors = {};

        for(let i = 0; i < requiredFields.length; i++) {
            if (!params[requiredFields[i]]) this.errors[requiredFields[i]] = 'is required';
        }

        if(_.isEmpty(this.errors)) {
            return null;
        }
        return this.errors;
    }

    formatName(word) {
        return word.replace(/\w\S*/g, (text) => {
            return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
        });
    }
}

export default RequestBodyChecker;