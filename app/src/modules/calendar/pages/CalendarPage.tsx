"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FAKE_EVENTS } from "@scoreboard/types";

export const CalendarPage: React.FC = () => {
  return (
    <main className="m-auto">
      {FAKE_EVENTS.map((event) => {
        return (
          <Card>
            <CardHeader>
              <CardTitle>{event.league}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{event.homeTeam}</p>
              <p>{event.awayTeam}</p>
            </CardContent>
          </Card>
        );
      })}
    </main>
  );
};
