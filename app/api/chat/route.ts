import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content:
              "Eres Eva, la asistente virtual de la marca de moda Lutex VTop. Responde siempre con amabilidad, estilo profesional y un tono humano y cálido.",
          },
          { role: "user", content: message },
        ],
        temperature: 0.8,
        max_tokens: 350,
      }),
    });

    const data = await res.json();
    const reply = data?.choices?.[0]?.message?.content ?? "Lo siento, hubo un error.";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Error en /api/chat:", error);
    return NextResponse.json(
      { reply: "⚠️ Error en el servidor. Intenta nuevamente." },
      { status: 500 }
    );
  }
}
