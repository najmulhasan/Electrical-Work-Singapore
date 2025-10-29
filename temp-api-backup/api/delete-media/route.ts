import { NextRequest, NextResponse } from 'next/server';
import { unlink } from 'fs/promises';
import { join } from 'path';

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const filename = searchParams.get('filename');
    const type = searchParams.get('type');
    
    if (!filename || !type) {
      return NextResponse.json({ error: 'Missing filename or type' }, { status: 400 });
    }
    
    const filePath = join(process.cwd(), 'public', 'uploads', type, filename);
    
    try {
      await unlink(filePath);
      return NextResponse.json({
        success: true,
        message: 'File deleted successfully'
      });
    } catch (error) {
      console.error('Error deleting file:', error);
      return NextResponse.json(
        { error: 'File not found or could not be deleted' }, 
        { status: 404 }
      );
    }
    
  } catch (error) {
    console.error('Delete error:', error);
    return NextResponse.json(
      { error: 'Failed to delete file' }, 
      { status: 500 }
    );
  }
}

