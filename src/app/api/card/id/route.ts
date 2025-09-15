import { NextResponse } from "next/server";
import Redis from "ioredis";

const redis = new Redis(process.env.UPSTASH_REDIS_URL!);

export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const cardId = params.id;
    const key = `card:${cardId}:clicks`;

    // incrementa contador do card
    const count = await redis.incr(key);

    return NextResponse.json({ id: cardId, count });
  } catch (err) {
    return NextResponse.json({ error: "Redis error" }, { status: 500 });
  }
}

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const cardId = params.id;
    const key = `card:${cardId}:clicks`;

    const count = await redis.get(key);
    return NextResponse.json({ id: cardId, count: count ? Number(count) : 0 });
  } catch (err) {
    return NextResponse.json({ error: "Redis error" }, { status: 500 });
  }
}
