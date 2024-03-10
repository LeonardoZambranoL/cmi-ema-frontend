import axios from "axios";
import { NextResponse } from "next/server";
import { beAdress } from "@/static";


export async function GET() {
    const countries = await axios.get(`${beAdress}/countries`).then(response => response.data).catch((error) => {console.error("Error fetching countries" + error);});;
    return NextResponse.json(countries);
    
}