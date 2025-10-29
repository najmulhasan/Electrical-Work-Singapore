import { NextResponse } from 'next/server';
import { readdir, stat } from 'fs/promises';
import { join } from 'path';

export async function GET() {
  try {
    const mediaItems = [];
    const uploadsDir = join(process.cwd(), 'public', 'uploads');
    
    // Get all image files
    try {
      const imageDir = join(uploadsDir, 'image');
      const imageFiles = await readdir(imageDir);
      
      for (const file of imageFiles) {
        const filePath = join(imageDir, file);
        const stats = await stat(filePath);
        
        mediaItems.push({
          id: file.split('.')[0], // Use filename without extension as ID
          type: 'image',
          url: `/uploads/image/${file}`,
          name: file,
          uploadedAt: stats.birthtime,
          size: stats.size
        });
      }
    } catch (error) {
      console.log('No image directory found');
    }
    
    // Get all video files
    try {
      const videoDir = join(uploadsDir, 'video');
      const videoFiles = await readdir(videoDir);
      
      for (const file of videoFiles) {
        const filePath = join(videoDir, file);
        const stats = await stat(filePath);
        
        mediaItems.push({
          id: file.split('.')[0], // Use filename without extension as ID
          type: 'video',
          url: `/uploads/video/${file}`,
          name: file,
          uploadedAt: stats.birthtime,
          size: stats.size
        });
      }
    } catch (error) {
      console.log('No video directory found');
    }
    
    // Sort by upload date (newest first)
    mediaItems.sort((a, b) => new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime());
    
    return NextResponse.json({
      success: true,
      media: mediaItems
    });
    
  } catch (error) {
    console.error('Error fetching media:', error);
    return NextResponse.json(
      { error: 'Failed to fetch media files' }, 
      { status: 500 }
    );
  }
}

