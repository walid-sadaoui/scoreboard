import { CalendarStore } from "../stores/calendar.store";

export class GetCalendarUseCase {
  constructor(private readonly calendarStore: CalendarStore) {}

  async execute(league?: string) {
    const events = await this.calendarStore.getCalendar();
    // Trim and treat empty string or whitespace-only as no filter
    const trimmedLeague = league?.trim();
    if (!trimmedLeague) {
      return events;
    }
    return events.filter((event) => event.league === trimmedLeague);
  }
}
