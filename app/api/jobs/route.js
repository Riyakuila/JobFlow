import connectDB from "@/lib/mongodb";
import Job from "@/models/Job";
import { NextResponse } from "next/server";



export async function GET() {
  try {
    await connectDB();
    const jobs = await Job.find().sort({ createdAt: -1 });
    return NextResponse.json(jobs, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to fetch jobs" },
      { status: 500 }
    );
  }
}


export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    const newJob = await Job.create(body);
    return NextResponse.json(newJob, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to create job" },
      { status: 500 }
    );
  }
}