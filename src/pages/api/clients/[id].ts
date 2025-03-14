import type { APIRoute } from "astro";

export const prerender = false;

export const GET: APIRoute = async ({params, request}) => {
    const {id} = params; 

    const body = {
        method:"GET",
        id: id
    }

    return new Response(JSON.stringify(body), { 
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

export const DELETE: APIRoute = async ({params, request}) => {
    const {id} = params; 

    const body = {
        method:"DELETE",
        id: id
    }

    return new Response(JSON.stringify(body), { 
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

export const PATCH: APIRoute = async ({params, request}) => {
    const {id} = params; 

    const body = {
        method:"PATCH",
        id: id
    }

    return new Response(JSON.stringify(body), { 
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    });
};