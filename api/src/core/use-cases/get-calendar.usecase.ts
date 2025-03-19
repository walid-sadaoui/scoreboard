export class GetCalendarUseCase {
  constructor(private readonly calendarStore: CalendarStore) {}

  execute(league?: string) {
    return this.calendarStore.getCalendar(league);
  }
}

export class FakeCalendarStore implements CalendarStore {
  constructor() {}

  getCalendar(league?: string) {
    if (league === "Ligue 1")
      return [{ homeTeam: "PSG", awayTeam: "Olympique de Marseille" }];
    return [{ homeTeam: "PSG", awayTeam: "Liverpool" }];
  }
}

interface CalendarStore {
  getCalendar(league?: string): void;
}
