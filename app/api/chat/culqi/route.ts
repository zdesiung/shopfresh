import { NextRequest, NextResponse } from "next/server";
import Culqi from "culqi-node";

export async function POST(req: NextRequest) {
  try {
    const { token, amount, email } = (await req.json()) as {
      token: string;
      amount: number;
      email: string;
    };

    const culqi = new Culqi({
      privateKey: process.env.CULQI_SECRET_KEY || "",
    });

    // 💳 Crear cargo en Culqi
    const charge = await culqi.charges.create({
      amount, // centavos
      currency_code: "PEN",
      email,
      source_id: token,
    });

    return NextResponse.json({ success: true, charge });
  } catch (error) {
    console.error("Error Culqi:", error);

    // 🔐 Tipo seguro de error
    const typedError = error as { user_message?: string };

    return NextResponse.json(
      {
        success: false,
        message: typedError.user_message || "Error al procesar pago",
      },
      { status: 400 }
    );
  }
}
