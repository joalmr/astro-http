import type { APIRoute } from "astro";
import { getCollection, getEntry } from "astro:content";

export const prerender = false;

export const GET: APIRoute = async ({params, request}) => {
    // const posts = await getCollection('blog');

    const url = new URL(request.url);
    const id = url.searchParams.get('id');

    if (id) {
        // const post = posts.find((post) => post.id === id);
        const post = await getEntry('blog', id);
        if (!post) {
            return new Response(JSON.stringify({msg:`No se encuentra ${id}`}), { status: 404 });
        }

        return new Response(JSON.stringify(post), { 
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    const posts = await getCollection('blog');

    return new Response(JSON.stringify(posts), { 
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    });
};