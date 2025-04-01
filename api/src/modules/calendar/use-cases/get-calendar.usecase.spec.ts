import { FAKE_EVENTS } from "@scoreboard/types";
import { FakeCalendarStore } from "../stores/fake-calendar.store";
import { GetCalendarUseCase } from "./get-calendar.usecase";

describe("Get Calendar UseCase", () => {
  const fakeCalendarStore = new FakeCalendarStore();
  it("should return the list of all games", () => {
    const getCalendarUseCase = new GetCalendarUseCase(fakeCalendarStore);
    const calendar = getCalendarUseCase.execute();
    expect(calendar).toEqual(FAKE_EVENTS);
  });
  it.each`
    league
    ${"Ligue 1"}
    ${"Champions League"}
  `(
    "should return the list of games for league $league",
    ({ league }: { league: string }) => {
      const getCalendarUseCase = new GetCalendarUseCase(fakeCalendarStore);
      const calendar = getCalendarUseCase.execute(league);
      expect(calendar).toEqual(
        FAKE_EVENTS.filter((event) => event.league === league)
      );
    }
  );
});
