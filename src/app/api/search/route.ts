import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');
  const apiKey = process.env.SONGKICK_API_KEY;

  if (!query) {
    return NextResponse.json({ error: 'Query parameter is required' }, { status: 400 });
  }

  try {
    const response = await axios.get(`https://api.songkick.com/api/3.0/search/artists.json?apikey=${apiKey}&query=${query}`);
    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error fetching data from Songkick API:', error);
    return NextResponse.json({ error: 'Failed to fetch data from Songkick API' }, { status: 500 });
  }
}