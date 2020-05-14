const supertest = require("supertest")
//our server wont actually start when its required in,
//due to the if statement in index.js
const server = require("../index")

test("GET /", async () => {
    // we start by ARRANGing the test data we need
    const endpoint = "/"
    const status = 200

    // then we ACT on whatever we're testing
    const res = await supertest(server).get(endpoint)

    //then we ASSERT the response data
    expect(res.statusCode).toBe(status)
    //res.type is shorthand for res.headers["content-type"]
    expect(res.type).toBe("application/json")
    expect(res.body.message).toBe("Welcome to our API")
})

