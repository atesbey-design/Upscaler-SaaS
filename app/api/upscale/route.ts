import { NextRequest, NextResponse } from 'next/server';
import sharp from 'sharp';

export async function POST(request: NextRequest) {
  try {
    const { image, scaleFactor } = await request.json();

    if (!image || !scaleFactor) {
      return NextResponse.json({ message: 'Missing image or scaleFactor' }, { status: 400 });
    }

    // Görseli base64'ten buffer'a çevir
    const imageBuffer = Buffer.from(image, 'base64');
    const resizedImageBuffer = await sharp(imageBuffer)
      .resize({
        width: Math.floor((scaleFactor || 2) * 100), // Sabit bir değer yerine dinamik hale getiriliyor
      })
      .toBuffer();

    // Base64 olarak geri döndür
    const resizedImageBase64 = resizedImageBuffer.toString('base64');

    return NextResponse.json({ image: resizedImageBase64 }, { status: 200 });
  } catch (error) {
    console.error('Error during image processing:', error);
    return NextResponse.json({ message: 'Error processing image' }, { status: 500 });
  }
}
