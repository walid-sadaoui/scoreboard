"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const CalendarPage: React.FC = () => {
  const FAKE_EVENTS = [
    {
      homeTeam: "Olympique Lyonnais",
      awayTeam: "Olympique de Marseille",
      league: "Ligue 1",
    },
    {
      homeTeam: "Paris Saint-Germain",
      awayTeam: "Liverpool FC",
      league: "Champions League",
    },
  ];

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
