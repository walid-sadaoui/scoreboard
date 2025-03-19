import { GetCalendarUseCase } from "./get-calendar.usecase";

describe("Get Calendar UseCase", () => {
  it("should return a list of games", () => {
    const getCalendarUseCase = new GetCalendarUseCase();
    const calendar = getCalendarUseCase.execute();
    expect(calendar).toEqual([{ homeTeam: "PSG", awayTeam: "Liverpool" }]);
  });
  it("should return a list of games for specified league", () => {
    const getCalendarUseCase = new GetCalendarUseCase();
    const calendar = getCalendarUseCase.execute("Ligue 1");
    expect(calendar).toEqual([
      { homeTeam: "PSG", awayTeam: "Olympique de Marseille" },
    ]);
  });
});
