"use server";
export default async function fetchObjects(numObjects:number) {
    const ART_API_KEY = process.env.ART_API_KEY;

    const res = await fetch(`https://api.harvardartmuseums.org/object?apikey=${ART_API_KEY}&size=${numObjects}&hasimage=1&sort=random`);
    return await res.json();
}