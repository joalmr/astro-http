import type { APIRoute } from "astro";
import { getEntry } from "astro:content";

export const prerender = false;

//si  deseo puedo poner las cookies entre los datos
export const GET: APIRoute = async ({ params, request }) => {
    const { slug } = params;
    //slug -> toma el nombre de la carpeta como parametro
    const post = await getEntry('blog', slug as any);

    if (!post) {
        return new Response(
            JSON.stringify({ msg: `No se encuentra ${slug}` }),
            { status: 404 }
        );
    }

    return new Response(
        JSON.stringify(post),
        {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );
};

export const POST: APIRoute = async ({ params, request }) => {
    const body = await request.json();

    return new Response(JSON.stringify(body), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export const PUT: APIRoute = async ({ params, request }) => {
    const body = await request.json();

    return new Response(JSON.stringify(({
        method: 'PUT',
        ...body,
    })), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export const PATCH: APIRoute = async ({ params, request }) => {
    const body = await request.json();

    return new Response(JSON.stringify(({
        method: 'PATCH',
        ...body,
    })), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export const DELETE: APIRoute = async ({ params, request }) => {
    const { slug } = params;

    return new Response(JSON.stringify(({
        method: 'DELETE',
        slug: slug
    })), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}