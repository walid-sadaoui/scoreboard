import { Controller, Get, Inject } from "@nestjs/common";
import { CalendarEvent } from "@scoreboard/types";
import { GetCalendarUseCase } from "../use-cases/get-calendar.usecase";

@Controller("calendar")
export class CalendarController {
  constructor(
    @Inject("GetCalendarUseCase")
    private readonly getCalendarUseCase: GetCalendarUseCase
  ) {}
  @Get()
  findAll(): CalendarEvent[] {
    return this.getCalendarUseCase.execute();
  }
}
