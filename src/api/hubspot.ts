import { NextRequest, NextResponse } from 'next/server';

interface ContactProperties {
  firstname: string;
  email: string;
  phone?: string;
  llamada: string;
}

export async function POST(request: NextRequest) {
  const properties: ContactProperties = await request.json();
  
  const API_URL = "https://api.hubapi.com/crm/v3/objects/contacts";
  const TOKEN = process.env.HUBSPOT_API_TOKEN;

  if (!TOKEN) {
    return NextResponse.json(
      { error: "Falta el token de HubSpot" },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify({ properties }),
    });

    if (response.status === 409) {
      return NextResponse.json(
        { success: false, message: "Ya hemos recibido tu mensaje." },
        { status: 409 }
      );
    }

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error al crear contacto en HubSpot:", error);
    return NextResponse.json(
      { error: "Error al crear contacto" },
      { status: 500 }
    );
  }
}