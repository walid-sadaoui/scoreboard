import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CalendarController } from "./modules/calendar/controllers/calendar.controller";

@Module({
  imports: [],
  controllers: [AppController, CalendarController],
  providers: [AppService],
})
export class AppModule {}
