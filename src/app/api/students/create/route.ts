import { beAdress } from "@/static";
import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: any){
    const data  = await req.json()
    const response = await axios.post(`${beAdress}/users/students/create`, data).then((response) => response.data).catch(() => {console.error("Error creating new student!");});;
    return NextResponse.json(response);
}