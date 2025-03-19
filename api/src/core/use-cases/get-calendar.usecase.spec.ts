import { FakeCalendarStore, GetCalendarUseCase } from "./get-calendar.usecase";

describe("Get Calendar UseCase", () => {
  const fakeCalendarStore = new FakeCalendarStore();
  it("should return a list of games", () => {
    const getCalendarUseCase = new GetCalendarUseCase(fakeCalendarStore);
    const calendar = getCalendarUseCase.execute();
    expect(calendar).toEqual(fakeCalendarStore.getCalendar());
  });
  it("should return a list of games for specified league", () => {
    const getCalendarUseCase = new GetCalendarUseCase(fakeCalendarStore);
    const calendar = getCalendarUseCase.execute("Ligue 1");
    expect(calendar).toEqual(fakeCalendarStore.getCalendar("Ligue 1"));
  });
});
