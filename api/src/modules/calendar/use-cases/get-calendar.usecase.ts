import { InternalServerErrorException } from "@nestjs/common";
import { CalendarStore } from "../stores/calendar.store";

export class GetCalendarUseCase {
  constructor(private readonly calendarStore: CalendarStore) {}

  async execute(league?: string, _page?: number, _limit?: number) {
    try {
      const events = await this.calendarStore.getCalendar();
      // Trim and treat empty string or whitespace-only as no filter
      const trimmedLeague = league?.trim();
      if (!trimmedLeague) {
        return events;
      }
      return events.filter((event) => event.league === trimmedLeague);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      throw new InternalServerErrorException(
        `Failed to retrieve calendar events: ${errorMessage}`
      );
    }
  }
}
