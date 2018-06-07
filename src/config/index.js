import { ENV } from 'Constants';

export default (function () {
    switch (process.env.NODE_ENV) {
        case ENV.LOCAL:
            return {
                domain: 'http://localhost:8080/',
                api: 'http://localhost:4004/',
            };

        case ENV.DEVELOPMENT:
            return {
                domain: 'http://localhost:8080/',
                api: 'http://localhost:4004/',
            };

        case ENV.PRODUCTION:
            return {
                domain: 'http://localhost:8080/',
                api: 'http://localhost:4004/',
            };

        default:
            throw new Error('Invalid NODE_ENV !');
    }
}());

