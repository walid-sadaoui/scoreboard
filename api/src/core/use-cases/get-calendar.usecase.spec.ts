import { GetCalendarUseCase } from "./get-calendar.usecase";

describe("Get Calendar UseCase", () => {
  it("should return a list of games", () => {
    const getCalendarUseCase = new GetCalendarUseCase();
    const calendar = getCalendarUseCase.getCalendar();
    expect(calendar).toEqual([{ homeTeam: "PSG", awayTeam: "Liverpool" }]);
  });
});
