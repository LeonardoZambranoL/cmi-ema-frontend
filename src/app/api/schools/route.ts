import { CountryType } from "@/types";
import axios from "axios";
import { NextResponse } from "next/server";
import { beAdress } from "@/static";

export async function GET() {
    const schools = await axios.get(`${beAdress}/schools`).then(response => response.data).catch(() => {console.error("Error fetching countries q  ");});;
    return NextResponse.json(schools);
    
}