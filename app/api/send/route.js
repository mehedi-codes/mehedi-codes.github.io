import PortfolioMessage from "@/components/emails/PortfolioMessage";
import ThankYouMessage from "@/components/emails/ThankYouMessage";
import {NextResponse} from "next/server";
import {Resend} from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const audience = resend.audiences.get(process.env.RESEND_AUD_ID);

export async function POST(request) {
  const body = await request.json();
  const {name, email, message} = body;
  console.log("audience", typeof audience, "isArray =>", Array.isArray(audience), audience);
  try {
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string"
    ) {
      return NextResponse.json({success: false});
    }
    const {data} = await resend.batch.send([
      {
        from: "Mehedi Hasan <no-reply@thecodermehedi.me>",
        to: [`${email}`],
        subject: "New Message from Mehedi",
        reply_to: "iammehedihasan@protonmail.com",
        react: ThankYouMessage({name}),
      },
      {
        from: "Portfolio <no-reply@thecodermehedi.me>",
        to: ["iammehedihasan@protonmail.com"],
        subject: `New Message from ${name}`,
        react: PortfolioMessage({
          name,
          email,
          message,
        }),
      },
    ]);
    if (data.length === 0) return NextResponse.json({success: false});
    return NextResponse.json({success: true});
  } catch (error) {
    return NextResponse.json({error});
  }
}
