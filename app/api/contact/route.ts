import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    console.log('Contact form submission:', body);

    return NextResponse.json({ 
      success: true, 
      message: 'Message sent. We will contact you soon.' 
    });
  } catch (error) {
    console.error('Contact error:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}