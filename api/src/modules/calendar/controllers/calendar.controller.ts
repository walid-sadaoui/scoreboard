import {
  Controller,
  Get,
  Inject,
  Query,
  NotFoundException,
  ParseIntPipe,
} from "@nestjs/common";
import { CalendarEvent } from "@scoreboard/types";
import { GetCalendarUseCase } from "../use-cases/get-calendar.usecase";

@Controller("calendar")
export class CalendarController {
  constructor(
    @Inject("GetCalendarUseCase")
    private readonly getCalendarUseCase: GetCalendarUseCase
  ) {}
  @Get()
  async findAll(
    @Query("league") league?: string,
    @Query("page", new ParseIntPipe({ optional: true })) page?: number,
    @Query("limit", new ParseIntPipe({ optional: true })) limit?: number
  ): Promise<CalendarEvent[]> {
    const events = await this.getCalendarUseCase.execute(league, page, limit);

    if (events.length === 0 && league) {
      throw new NotFoundException(
        `No calendar events found for league: ${league}`
      );
    }

    return events;
  }
}
