const request = require("supertest");
const app = require("../../../app");

describe("Test untuk API Login", () => {
    it("should response with 200 as status code and user success login", async () => {
        const user = {
            username: 'imamtaufiq133@gmail.com',
            password: 'admin123'            
        }

        return request(app)
            .post("/api/v1/login")
            .set("Content-Type", "application/json")
            .send(user)
            .then((res) => {
                expect(res.statusCode).toBe(200);
                expect(res.body).toEqual(                    
                    console.log(res.body),
                    expect.objectContaining({
                        ...res.body,
                        user,
                        prompt,
                    })
                );
            });
    });

    it("should response with 422 as status code", async () => {
        const name = [];
        const prompt = {};

        return request(app)
            .post("/v1/tasks")
            .set("Content-Type", "application/json")
            .send({ name, prompt })
            .then((res) => {
                expect(res.statusCode).toBe(422);
                expect(res.body).toEqual(
                    expect.objectContaining({
                        error: {
                            name: expect.any(String),
                            message: expect.any(String),
                        },
                    })
                );
            });
    });
});
