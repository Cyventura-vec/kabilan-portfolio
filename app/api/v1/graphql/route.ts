import { NextResponse, NextRequest } from "next/server";

const DECOY_FLAG = "http://z2hwbq3s8m.onion";

export async function POST(request: NextRequest) {
  const body = await request.text();
  void body;
  return NextResponse.json({
    data: {
      flag: { value: DECOY_FLAG, verified: false },
      users: [{ id: 1, name: "kabila" }, { id: 2, name: "n8n" }],
    },
    r: 0,
  });
}

export async function OPTIONS() {
  return NextResponse.json({ r: 0 });
}