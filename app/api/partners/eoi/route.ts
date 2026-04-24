import { NextRequest, NextResponse } from "next/server";
import { type EOISubmission } from "@/lib/eoi-types";

const CEO_EMAIL = "fortisinvictaprojects@gmail.com";

export async function POST(request: NextRequest) {
  try {
    const body: EOISubmission = await request.json();

    const requiredFields: (keyof EOISubmission)[] = [
      "partnerType",
      "interestAreas",
      "organizationName",
      "country",
      "fullName",
      "position",
      "email",
      "phone",
      "message",
    ];

    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    if (body.message.length < 50) {
      return NextResponse.json(
        { error: "Message must be at least 50 characters" },
        { status: 400 }
      );
    }

    const emailContent = `
=== NEW EXPRESSION OF INTEREST ===

Partner Type: ${body.partnerType}
Organization: ${body.organizationName}
${body.registrationNumber ? `Registration: ${body.registrationNumber}` : ""}
Country: ${body.country}
${body.website ? `Website: ${body.website}` : ""}

Interests: ${body.interestAreas.join(", ")}

Contact:
- Name: ${body.fullName}
- Position: ${body.position}
- Email: ${body.email}
- Phone: ${body.phone}

Message:
${body.message}

Newsletter: ${body.subscribeNewsletter ? "Subscribed" : "Not subscribed"}
    `.trim();

    console.log("=== EOI SUBMISSION ===");
    console.log(emailContent);
    console.log(`Would email to: ${CEO_EMAIL}`);

    return NextResponse.json({
      success: true,
      message: "Expression of Interest submitted successfully",
    });
  } catch (error) {
    console.error("EOI submission error:", error);
    return NextResponse.json(
      { error: "Failed to process submission" },
      { status: 500 }
    );
  }
}