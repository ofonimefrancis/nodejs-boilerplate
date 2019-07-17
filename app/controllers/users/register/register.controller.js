import async from "async";
import config from "../../../../config";
import User from "./user.controller";
import Response from "../../../utils/responses";
import RequestBodyChecker from "../../../utils/request.body.verifier";
import TokenGenerator from "../../../utils/token.generator";
import isValid from "../../../utils/password.entropy.js";

let NewUser = new User();
let tokenGenerator = new TokenGenerator();
let ResponseHandler = new Response(config.DOMAIN);

const fullUrl = (req, res) => {
    return req.protocol + "://" + req.get("host") + req.originalUrl;
};
const register = (req, res) => {};

const checkRequest = (req, callback) => {
    let Checker = new RequestBodyChecker();
    let expectedFields;
    expectedFields = []; //Add expected fields

    let errors = Checker.checkRequestBody(req.body, expectedFields);
    errors ? callback({ message: errors }) : callback(null, req.body);
};

export default register;