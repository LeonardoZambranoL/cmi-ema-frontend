import axios from "axios";
import { NextResponse } from "next/server";
import { beAdress } from "@/static";


export async function GET(request: Request, context: any) {
    const id = context.params.id;
    const countries = await axios.get(`${beAdress}/countries/${id}/`).then(response => response.data).catch(() => {console.error("Error fetching schools");});;
    return NextResponse.json(countries);
    
}