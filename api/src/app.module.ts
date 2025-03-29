import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CalendarController } from "./modules/calendar/controllers/calendar.controller";
import { GetCalendarUseCase } from "./modules/calendar/use-cases/get-calendar.usecase";

@Module({
  imports: [],
  controllers: [AppController, CalendarController],
  providers: [AppService, GetCalendarUseCase],
})
export class AppModule {}
