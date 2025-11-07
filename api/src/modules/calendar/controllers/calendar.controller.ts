import { Controller, Get, Inject, Query } from "@nestjs/common";
import { CalendarEvent } from "@scoreboard/types";
import { GetCalendarUseCase } from "../use-cases/get-calendar.usecase";

@Controller("calendar")
export class CalendarController {
  constructor(
    @Inject("GetCalendarUseCase")
    private readonly getCalendarUseCase: GetCalendarUseCase
  ) {}
  @Get()
  async findAll(@Query("league") league?: string): Promise<CalendarEvent[]> {
    return await this.getCalendarUseCase.execute(league);
  }
}
