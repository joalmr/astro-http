import { Clients, db } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	// TODO
	console.log('Seed excuted');

	await db.insert(Clients).values([
		{ id: 1, name: "Kasim",age: 35, isActive: true },
		{ id: 2, name: "Alonso",age: 33, isActive: true },
		{ id: 3, name: "Jose",age: 25, isActive: true },
		{ id: 4, name: "Maria",age: 29, isActive: true },
	  ]);
	
}
