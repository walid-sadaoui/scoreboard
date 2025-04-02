import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CalendarController } from "./modules/calendar/controllers/calendar.controller";
import { GetCalendarUseCase } from "./modules/calendar/use-cases/get-calendar.usecase";
import { FakeCalendarStore } from "./modules/calendar/stores/fake-calendar.store";
import { CalendarStore } from "./modules/calendar/stores/calendar.store";

@Module({
  imports: [],
  controllers: [AppController, CalendarController],
  providers: [
    AppService,
    GetCalendarUseCase,
    {
      provide: "GetCalendarUseCase",
      useFactory: (calendarStore: CalendarStore) => {
        return new GetCalendarUseCase(calendarStore);
      },
      inject: ["CalendarStore"],
    },
    {
      provide: "CalendarStore",
      useClass: FakeCalendarStore,
    },
  ],
})
export class AppModule {}
