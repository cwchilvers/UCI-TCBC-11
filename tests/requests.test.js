const requests = require('../src/helpers/dbUtils');     // Import dbUtils.js

// Test requests
describe("Requests", () => {
    test("submitting a note should fail" , () => {
        expect(requests.submitNote('', '')).toEqual("failure");
    })
});