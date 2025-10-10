import 'dotenv/config';
import { readFileSync } from 'fs';
import { join } from 'path'; 
import { db } from "@/db";
import { addressesTable } from "@/db/schema";

const path = join(process.cwd(), 'data', 'ofac.csv');
const content = readFileSync(path, 'utf-8');
const lines = content.split('\n').slice(1).filter(line => line.trim());
const addresses = lines.map(line => ({ address: line.trim() }));



await db.delete(addressesTable);
await db.insert(addressesTable).values(addresses);
console.log(`Inserted ${addresses.length} addresses from OFAC list.`);