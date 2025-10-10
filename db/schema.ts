import { pgTable, serial, text, index } from "drizzle-orm/pg-core";

export const addressesTable = pgTable('addresses', {
    id: serial('id').primaryKey(),
    address: text('address').notNull(),
}, (table) => [
    index('id_idx').on(table.id),
    index('address_idx').on(table.address)
]);