"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

type Props = {
  calLink: string;
  namespace?: string;
};

export function CalInline({ calLink, namespace = "intro" }: Props) {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace });
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: {
          light: { "cal-brand": "#d63a2f" },
          dark: { "cal-brand": "#d63a2f" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, [namespace]);

  return (
    <Cal
      namespace={namespace}
      calLink={calLink}
      style={{ width: "100%", height: "100%", minHeight: "640px", overflow: "auto" }}
      config={{ layout: "month_view", theme: "light" }}
    />
  );
}
