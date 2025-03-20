import { getCollection } from 'astro:content';
import { Clients, db, Posts } from 'astro:db';

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
	
	  const posts = await getCollection('blog');

	  await db.insert(Posts).values(
		posts.map((post) => ({
		  id: post.id,
		  title: post.data.title,
		  likes: Math.round(Math.random() * 100),
		}))
	  );
}
