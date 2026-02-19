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

  it("should return filtered events when league query parameter is provided", async () => {
    const expectedEvents = FAKE_EVENTS.filter(
      (event) => event.league === "Ligue 1"
    );
    return request(app.getHttpServer())
      .get("/calendar?league=Ligue 1")
      .expect(200)
      .expect(expectedEvents);
  });

  it("should pass page parameter to use case", async () => {
    // Get the use case instance from the DI container
    const getCalendarUseCase = app.get("GetCalendarUseCase");

    // Spy on the execute method
    const executeSpy = jest
      .spyOn(getCalendarUseCase, "execute")
      .mockResolvedValue(FAKE_EVENTS);

    await request(app.getHttpServer()).get("/calendar?page=1").expect(200);

    // Verify the use case was called with league=undefined, page=1, and limit=undefined
    expect(executeSpy).toHaveBeenCalledWith(undefined, 1, undefined);

    executeSpy.mockRestore();
  });

  it("should pass limit parameter to use case", async () => {
    // Get the use case instance from the DI container
    const getCalendarUseCase = app.get("GetCalendarUseCase");

    // Spy on the execute method
    const executeSpy = jest
      .spyOn(getCalendarUseCase, "execute")
      .mockResolvedValue(FAKE_EVENTS);

    await request(app.getHttpServer()).get("/calendar?limit=10").expect(200);

    // Verify the use case was called with league=undefined, page=undefined, and limit=10
    expect(executeSpy).toHaveBeenCalledWith(undefined, undefined, 10);

    executeSpy.mockRestore();
  });
});
