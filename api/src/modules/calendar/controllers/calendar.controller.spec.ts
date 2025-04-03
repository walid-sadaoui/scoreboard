import * as request from "supertest";
import { FAKE_EVENTS } from "@scoreboard/types";
import { Test } from "@nestjs/testing";
import { NestApplication } from "@nestjs/core";
import { AppModule } from "../../../app.module";

describe("Calendar Controller", () => {
  let app: NestApplication;

  beforeEach(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  it("should return the list of all games", async () => {
    return request(app.getHttpServer())
      .get("/calendar")
      .expect(200)
      .expect(FAKE_EVENTS);
  });
});
