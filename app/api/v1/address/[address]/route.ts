import { db } from "@/db";
import { addressesTable } from "@/db/schema";
import { NextResponse, NextRequest } from "next/server";
import { eq } from 'drizzle-orm';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ address: string}>; },
) {
  const addr = (await params).address.toLowerCase();
  const [data] = await db.select().from(addressesTable).where(eq(addressesTable.address, addr)).limit(1)

  return NextResponse.json({ sanctioned: data != null ? true : false })
}