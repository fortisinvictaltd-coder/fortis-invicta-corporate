import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    console.log('New inquiry:', body);

    return NextResponse.json({ 
      success: true, 
      message: 'Inquiry submitted. We will contact you soon.' 
    });
  } catch (error) {
    console.error('Inquiry error:', error);
    return NextResponse.json({ error: 'Failed to submit inquiry' }, { status: 500 });
  }
}