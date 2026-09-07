import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  void request;
  return NextResponse.json({
    r: 0,
    status: "ok",
    session: "0x9f2a",
    node: "z3r0byte",
    hint: "THE FLAG IS http://t4pq9wx2d5.onion",
  });
}