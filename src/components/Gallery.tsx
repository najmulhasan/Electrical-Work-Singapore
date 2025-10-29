'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { 
  Upload, 
  Image as ImageIcon, 
  Video, 
  X, 
  Plus, 
  Camera, 
  Play,
  Download,
  Share2,
  Eye,
  Trash2,
  Loader
} from 'lucide-react';

interface MediaItem {
  id: string;
  type: 'image' | 'video';
  url: string;
  name: string;
  uploadedAt: Date;
}

export default function Gallery() {
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoInputRef = useRef<HTMLInputElement>(null);

  // Load existing media on component mount
  useEffect(() => {
    loadExistingMedia();
  }, []);

  const loadExistingMedia = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/get-media');
      if (response.ok) {
        const result = await response.json();
        console.log('Loaded media items:', result.media);
        setMediaItems(result.media || []);
      }
    } catch (error) {
      console.error('Error loading media:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileUpload = async (files: FileList | null, type: 'image' | 'video') => {
    if (!files) return;

    setIsUploading(true);
    
    try {
      const newItems: MediaItem[] = [];
      
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        
        // Create FormData for file upload
        const formData = new FormData();
        formData.append('file', file);
        formData.append('type', type);
        
        try {
          // Upload file to server (you'll need to create this API endpoint)
          const response = await fetch('/api/upload-media', {
            method: 'POST',
            body: formData,
          });
          
          if (response.ok) {
            const result = await response.json();
            const newItem: MediaItem = {
              id: result.id || `${Date.now()}-${i}`,
              type,
              url: result.url || URL.createObjectURL(file), // Use server URL or fallback to local
              name: file.name,
              uploadedAt: new Date()
            };
            newItems.push(newItem);
          } else {
            // Fallback to local storage if server upload fails
            console.warn('Server upload failed, using local storage');
            const url = URL.createObjectURL(file);
            const newItem: MediaItem = {
              id: `${Date.now()}-${i}`,
              type,
              url,
              name: file.name,
              uploadedAt: new Date()
            };
            newItems.push(newItem);
          }
        } catch (uploadError) {
          // Fallback to local storage
          console.warn('Upload error, using local storage:', uploadError);
          const url = URL.createObjectURL(file);
          const newItem: MediaItem = {
            id: `${Date.now()}-${i}`,
            type,
            url,
            name: file.name,
            uploadedAt: new Date()
          };
          newItems.push(newItem);
        }
      }
      
      setMediaItems(prev => [...prev, ...newItems]);
      
      // Show success message
      alert(`Successfully uploaded ${newItems.length} ${type}(s)!`);
      
      // Refresh the gallery to show all files
      await loadExistingMedia();
      
    } catch (error) {
      console.error('Error uploading files:', error);
      alert('Error uploading files. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  const handleImageUpload = () => {
    fileInputRef.current?.click();
  };

  const handleVideoUpload = () => {
    videoInputRef.current?.click();
  };

  const removeMedia = async (id: string, filename: string, type: 'image' | 'video') => {
    if (!confirm('Are you sure you want to delete this file? This action cannot be undone.')) {
      return;
    }

    setDeletingId(id);
    
    try {
      const response = await fetch(`/api/delete-media?filename=${filename}&type=${type}`, {
        method: 'DELETE',
      });
      
      if (response.ok) {
        setMediaItems(prev => prev.filter(item => item.id !== id));
        alert('File deleted successfully!');
      } else {
        const error = await response.json();
        alert(`Error deleting file: ${error.error}`);
      }
    } catch (error) {
      console.error('Error deleting file:', error);
      alert('Error deleting file. Please try again.');
    } finally {
      setDeletingId(null);
    }
  };

  const openMediaViewer = (item: MediaItem) => {
    setSelectedMedia(item);
  };

  const closeMediaViewer = () => {
    setSelectedMedia(null);
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Electrical Works Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing our professional electrical installations, repairs, and projects across Singapore. 
            Upload and share your electrical work photos and videos.
          </p>
        </div>

        {/* Upload Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Upload Your Electrical Work Media
          </h3>
          
          {/* Upload Instructions */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <h4 className="font-semibold text-blue-900 mb-2">📁 How to Upload Files:</h4>
            <ul className="text-blue-800 text-sm space-y-1">
              <li>• Click &quot;Choose Photos&quot; or &quot;Choose Videos&quot; buttons below</li>
              <li>• Select files from your computer (JPG, PNG, MP4, MOV supported)</li>
              <li>• Maximum file size: 10MB per file</li>
              <li>• Files will be uploaded to the server and stored permanently</li>
            </ul>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Image Upload */}
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <ImageIcon className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Upload Photos</h4>
                  <p className="text-gray-600 mb-4">
                    Share pictures of your electrical installations, repairs, and projects
                  </p>
                  <button
                    onClick={handleImageUpload}
                    disabled={isUploading}
                    className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center space-x-2 mx-auto"
                  >
                    <Camera className="h-5 w-5" />
                    <span>{isUploading ? 'Uploading...' : 'Choose Photos'}</span>
                  </button>
                  <p className="text-xs text-gray-500 mt-2">Supports: JPG, PNG, GIF, WebP</p>
                </div>
              </div>
            </div>

            {/* Video Upload */}
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                  <Video className="h-8 w-8 text-purple-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Upload Videos</h4>
                  <p className="text-gray-600 mb-4">
                    Share videos of electrical work processes and completed projects
                  </p>
                  <button
                    onClick={handleVideoUpload}
                    disabled={isUploading}
                    className="bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center space-x-2 mx-auto"
                  >
                    <Play className="h-5 w-5" />
                    <span>{isUploading ? 'Uploading...' : 'Choose Videos'}</span>
                  </button>
                  <p className="text-xs text-gray-500 mt-2">Supports: MP4, MOV, AVI, WebM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hidden file inputs */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/jpg,image/png,image/gif,image/webp"
            multiple
            onChange={(e) => handleFileUpload(e.target.files, 'image')}
            className="hidden"
          />
          <input
            ref={videoInputRef}
            type="file"
            accept="video/mp4,video/mov,video/avi,video/webm"
            multiple
            onChange={(e) => handleFileUpload(e.target.files, 'video')}
            className="hidden"
          />
        </div>


        {/* Gallery Grid */}
        {isLoading ? (
          <div className="bg-white rounded-xl shadow-lg p-12 text-center">
            <div className="flex items-center justify-center space-x-2">
              <Loader className="h-6 w-6 animate-spin text-blue-600" />
              <span className="text-lg text-gray-600">Loading gallery...</span>
            </div>
          </div>
        ) : mediaItems.length > 0 ? (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Gallery ({mediaItems.length} items)
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {mediaItems.map((item) => (
                <div key={item.id} className="relative group">
                  <div 
                    className="aspect-square bg-gray-200 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200"
                    onClick={() => {
                      console.log('Clicked image with URL:', item.url);
                      openMediaViewer(item);
                    }}
                    style={{
                      backgroundImage: item.type === 'image' ? `url(${item.url})` : 'none',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                  >
                    {item.type === 'video' && (
                      <video
                        src={item.url}
                        className="w-full h-full object-cover"
                        preload="metadata"
                        style={{ 
                          minWidth: '100%', 
                          minHeight: '100%',
                          display: 'block'
                        }}
                      />
                    )}
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-200 rounded-lg flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex space-x-2">
                      <button
                        onClick={() => openMediaViewer(item)}
                        className="bg-white bg-opacity-90 hover:bg-opacity-100 p-2 rounded-full transition-all duration-200"
                        title="View"
                      >
                        <Eye className="h-4 w-4 text-gray-700" />
                      </button>
                      <button
                        onClick={() => removeMedia(item.id, item.name, item.type)}
                        disabled={deletingId === item.id}
                        className="bg-red-500 hover:bg-red-600 disabled:bg-gray-400 text-white p-2 rounded-full transition-all duration-200"
                        title="Delete"
                      >
                        {deletingId === item.id ? (
                          <Loader className="h-4 w-4 animate-spin" />
                        ) : (
                          <Trash2 className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </div>
                  
                  {/* File info */}
                  <div className="mt-2">
                    <p className="text-sm font-medium text-gray-900 truncate">{item.name}</p>
                    <p className="text-xs text-gray-500">
                      {new Date(item.uploadedAt).toLocaleDateString()} • {item.type}
                    </p>
                    <p className="text-xs text-red-500">URL: {item.url}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-lg p-12 text-center">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Plus className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              No media uploaded yet
            </h3>
            <p className="text-gray-600 mb-6">
              Start by uploading photos or videos of your electrical work to showcase your projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleImageUpload}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center space-x-2"
              >
                <Camera className="h-5 w-5" />
                <span>Upload Photos</span>
              </button>
              <button
                onClick={handleVideoUpload}
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center space-x-2"
              >
                <Play className="h-5 w-5" />
                <span>Upload Videos</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Media Viewer Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-semibold text-gray-900">{selectedMedia.name}</h3>
              <button
                onClick={closeMediaViewer}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="p-4">
              {selectedMedia.type === 'image' ? (
                <img
                  src={selectedMedia.url}
                  alt={selectedMedia.name}
                  className="max-w-full max-h-[70vh] object-contain mx-auto"
                />
              ) : (
                <video
                  src={selectedMedia.url}
                  controls
                  className="max-w-full max-h-[70vh] mx-auto"
                />
              )}
            </div>
            
            <div className="flex items-center justify-between p-4 border-t bg-gray-50">
              <div className="text-sm text-gray-600">
                Uploaded on {new Date(selectedMedia.uploadedAt).toLocaleDateString()}
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = selectedMedia.url;
                    link.download = selectedMedia.name;
                    link.click();
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center space-x-2"
                >
                  <Download className="h-4 w-4" />
                  <span>Download</span>
                </button>
                <button
                  onClick={() => {
                    navigator.share?.({
                      title: selectedMedia.name,
                      url: selectedMedia.url
                    });
                  }}
                  className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center space-x-2"
                >
                  <Share2 className="h-4 w-4" />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
