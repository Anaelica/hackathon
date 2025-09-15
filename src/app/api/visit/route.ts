import { NextResponse } from "next/server";
import Redis from "ioredis";

const redis = new Redis(process.env.UPSTASH_REDIS_URL!, {
  password: process.env.UPSTASH_REDIS_TOKEN!,
  tls: { rejectUnauthorized: false },
});

export async function GET() {
  try {
    // incrementa contador
    const count = await redis.incr("visits");
    return NextResponse.json({ count });
  } catch (err) {
    return NextResponse.json({ error: "Redis error" }, { status: 500 });
  }
}
