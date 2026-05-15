import connectDB from "@/lib/mongodb";
import Job from "@/models/Job";
import { NextResponse } from "next/server";


export async function PUT(request, context) {
  try {
    await connectDB();
    const body = await request.json();
    const params = await context.params;
    const updatedJob = await Job.findByIdAndUpdate(
      params.id,
      body,
      {
        returnDocument: "after",
        runValidators: true,
      }
    );
    if (!updatedJob) {
      return NextResponse.json(
        { message: "Job not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(updatedJob, {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to update job" },
      { status: 500 }
    );
  }
}


export async function DELETE(_request, context) {
  try {
    await connectDB();
    const params = await context.params;
    const deletedJob = await Job.findByIdAndDelete(
      params.id
    );
    if (!deletedJob) {
      return NextResponse.json(
        { message: "Job not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { message: "Job deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to delete job" },
      { status: 500 }
    );
  }
}