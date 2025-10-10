import { db } from "@/db";
import { addressesTable } from "@/db/schema";
import { NextResponse, NextRequest } from "next/server";
import { eq } from "drizzle-orm";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ address: string }> },
) {
  const addr = (await params).address.toLowerCase();
  const resp = await db
    .select()
    .from(addressesTable)
    .where(eq(addressesTable.address, addr));
  return NextResponse.json(resp);
}
