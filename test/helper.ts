import { before } from 'mocha';
import request from 'supertest';

import get_app from '@app/app';

import { test_bindings } from '@test/mock.inversify.config';


// Construct application once, globally
before(async function() {
    const build_app_res = get_app(test_bindings);

    // Init the database before running tests
    this.app = request(build_app_res.app);
});
