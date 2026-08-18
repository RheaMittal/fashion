import { action } from "./_generated/server";
import { v } from "convex/values";

export const getEvents = action({
  args: { accessToken: v.string() },
  handler: async (ctx, args) => {
    const response = await fetch(
      "https://www.googleapis.com/calendar/v3/calendars/primary/events?timeMin=" + new Date().toISOString(),
      {
        headers: { Authorization: `Bearer ${args.accessToken}` },
      }
    );
    const data = await response.json();
    return data.items || [];
  },
});
