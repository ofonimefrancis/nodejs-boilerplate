import _ from "lodash";

class Response {
  constructor(domain) {
    this.domain = domain;
  }

  success(path, data, http_status, http_method) {
    const current_url = `${path}`;

    if (_.isEmpty(data))
      return new Error("Error: Object (data) is required!");

    data.current_url = current_url;
    return { data, http_status, http_method };
  }
  error(message, error_code, error_message, http_status, http_method) {
    const data = { message: message || `ERROR`, error_code, error_message, http_status, http_method }
    return data;
  }
}

export default Response;