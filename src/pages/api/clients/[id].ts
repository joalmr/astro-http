import type { APIRoute } from "astro";
import { Clients, db, eq } from "astro:db";

export const prerender = false;

export const GET: APIRoute = async ({params, request}) => {
    const id = params.id??''; 

    const clients = await db.select().from(Clients).where(eq(Clients.id, +id));

    if(clients.length>0){
        return new Response(JSON.stringify(clients.at(0)), { 
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    else{
        return new Response(JSON.stringify({
            msg: `Client with ${id} not found`
        }), { 
            status: 404,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
};

export const DELETE: APIRoute = async ({params, request}) => {
    const id = params.id??''; 

    const {rowsAffected} = await db.delete(Clients).where(eq(Clients.id, +id));

    if(rowsAffected>0){
        return new Response(JSON.stringify({
            msg: 'Deleted'
        }), { 
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    else{
        return new Response(JSON.stringify({
            msg: `Client with ${id} not found`
        }), { 
            status: 404,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
};

export const PATCH: APIRoute = async ({params, request}) => {
    const id = params.id??'';

    try {
        const {id, ...body} = await request.json();

        const results = await db.update(Clients).set(body).where(eq(Clients.id, +id));
        const updateCLient = await db.select().from(Clients).where(eq(Clients.id, +id));

        return new Response(JSON.stringify({
            ...updateCLient,
        }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        console.log(error);
        
        return new Response(JSON.stringify({ msg: 'No body found' }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    
};