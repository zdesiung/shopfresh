import { NextRequest, NextResponse } from "next/server";
import Culqi from "culqi-node";

export async function POST(req: NextRequest) {
  try {
    const { token, amount, email } = await req.json() as {
      token: string;
      amount: number;
      email: string;
    };

    const culqi = new Culqi({
      privateKey: process.env.CULQI_SECRET_KEY || "",
    });

    // 💳 Crear cargo
    const charge = await culqi.charges.create({
      amount, // centavos
      currency_code: "PEN",
      email,
      source_id: token,
    });

    return NextResponse.json({ success: true, charge });
  } catch (error) {
    console.error("Error Culqi:", error);
    return NextResponse.json(
      { success: false, message: (error as any)?.user_message || "Error al procesar pago" },
      { status: 400 }
    );
  }
}

