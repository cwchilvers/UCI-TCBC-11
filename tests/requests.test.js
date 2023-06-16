const requests = require('../src/helpers/dbUtils');     // Import dbUtils.js

// Test requests
describe("Requests", () => {
    test("submitting a note should fail" , () => {
        expect(requests.submitNote('', '')).toEqual("failure");
    })
    test("deleting a note should fail" , () => {
        expect(requests.deleteNote('', '')).toEqual("failure");
    })
});