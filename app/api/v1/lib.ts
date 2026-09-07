import { NextResponse } from "next/server";

export function decoy(body: Record<string, unknown>) {
  return NextResponse.json({ r: 0, ...body });
}

export function isAutomated(request: Request) {
  const ref = request.headers.get("referer") || "";
  const secFetchSite = request.headers.get("sec-fetch-site") || "";
  return !ref || secFetchSite !== "same-origin";
}