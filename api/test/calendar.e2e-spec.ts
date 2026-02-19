import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication } from "@nestjs/common";
import * as request from "supertest";
import { AppModule } from "./../src/app.module";
import { CalendarEvent } from "@scoreboard/types";

describe("CalendarController (e2e)", () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  describe("GET /calendar", () => {
    it("should return 200 and all events when no league filter is provided", () => {
      return request(app.getHttpServer())
        .get("/calendar")
        .expect(200)
        .expect((res) => {
          expect(Array.isArray(res.body)).toBe(true);
          expect(res.body.length).toBeGreaterThan(0);
        });
    });

    it("should return 200 and filtered events when valid league filter is provided", () => {
      return request(app.getHttpServer())
        .get("/calendar?league=Ligue 1")
        .expect(200)
        .expect((res) => {
          expect(Array.isArray(res.body)).toBe(true);
          expect(res.body.length).toBeGreaterThan(0);
          expect(
            res.body.every((event: CalendarEvent) => event.league === "Ligue 1")
          ).toBe(true);
        });
    });

    it("should return 404 when league filter results in no events", () => {
      return request(app.getHttpServer())
        .get("/calendar?league=NonExistentLeague")
        .expect(404);
    });

    it("should return 500 when use case throws an error", async () => {
      // Create a new app instance with a mocked store that throws an error
      await app.close();

      const mockCalendarStore = {
        getCalendar: jest.fn().mockRejectedValue(new Error("Database error")),
      };

      const moduleFixture: TestingModule = await Test.createTestingModule({
        imports: [AppModule],
      })
        .overrideProvider("CalendarStore")
        .useValue(mockCalendarStore)
        .compile();

      app = moduleFixture.createNestApplication();
      await app.init();

      return request(app.getHttpServer()).get("/calendar").expect(500);
    });

    it("should accept page query parameter", () => {
      return request(app.getHttpServer())
        .get("/calendar?page=1")
        .expect(200)
        .expect((res) => {
          expect(Array.isArray(res.body)).toBe(true);
        });
    });

    it("should accept limit query parameter", () => {
      return request(app.getHttpServer())
        .get("/calendar?limit=10")
        .expect(200)
        .expect((res) => {
          expect(Array.isArray(res.body)).toBe(true);
        });
    });

    it("should accept both page and limit query parameters", () => {
      return request(app.getHttpServer())
        .get("/calendar?page=2&limit=5")
        .expect(200)
        .expect((res) => {
          expect(Array.isArray(res.body)).toBe(true);
        });
    });
  });
});
