import { InternalServerErrorException } from "@nestjs/common";
import { FAKE_EVENTS } from "@scoreboard/types";
import { CalendarStore } from "../stores/calendar.store";
import { FakeCalendarStore } from "../stores/fake-calendar.store";
import { GetCalendarUseCase } from "./get-calendar.usecase";

describe("Get Calendar UseCase", () => {
  const fakeCalendarStore = new FakeCalendarStore();
  it("should return the list of all games", async () => {
    const getCalendarUseCase = new GetCalendarUseCase(fakeCalendarStore);
    const calendar = await getCalendarUseCase.execute();
    expect(calendar).toEqual(FAKE_EVENTS);
  });
  it.each`
    league
    ${"Ligue 1"}
    ${"Champions League"}
  `(
    "should return the list of games for league $league",
    async ({ league }: { league: string }) => {
      const getCalendarUseCase = new GetCalendarUseCase(fakeCalendarStore);
      const calendar = await getCalendarUseCase.execute(league);
      expect(calendar).toEqual(
        FAKE_EVENTS.filter((event) => event.league === league)
      );
    }
  );

  it("should return all games when league is empty string", async () => {
    const getCalendarUseCase = new GetCalendarUseCase(fakeCalendarStore);
    const calendar = await getCalendarUseCase.execute("");
    expect(calendar).toEqual(FAKE_EVENTS);
  });

  it("should return all games when league is whitespace-only", async () => {
    const getCalendarUseCase = new GetCalendarUseCase(fakeCalendarStore);
    const calendar = await getCalendarUseCase.execute("   ");
    expect(calendar).toEqual(FAKE_EVENTS);
  });

  it("should trim league parameter before filtering", async () => {
    const getCalendarUseCase = new GetCalendarUseCase(fakeCalendarStore);
    const calendar = await getCalendarUseCase.execute("  Ligue 1  ");
    expect(calendar).toEqual(
      FAKE_EVENTS.filter((event) => event.league === "Ligue 1")
    );
  });

  it("should return empty array when league does not exist", async () => {
    const getCalendarUseCase = new GetCalendarUseCase(fakeCalendarStore);
    const calendar = await getCalendarUseCase.execute("NonExistentLeague");
    expect(calendar).toEqual([]);
  });

  it("should throw InternalServerErrorException when store fails", async () => {
    const mockStore: CalendarStore = {
      getCalendar: jest.fn().mockRejectedValue(new Error("Database error")),
    };
    const getCalendarUseCase = new GetCalendarUseCase(mockStore);

    await expect(getCalendarUseCase.execute()).rejects.toThrow(
      new InternalServerErrorException("Failed to retrieve calendar events")
    );
  });
});
