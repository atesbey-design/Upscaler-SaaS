'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { Upload, RefreshCw, Image as ImageIcon } from 'lucide-react'

export default function UpscalerPage() {
  const [resolutionModel, setResolutionModel] = useState('2x')
  const [inputImage, setInputImage] = useState<string | null>(null)
  const [outputImage, setOutputImage] = useState<string | null>(null)
  const [zoomLevel, setZoomLevel] = useState(1) // Zoom level state added
  const imageRef = useRef<HTMLImageElement>(null); // Added imageRef

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => setInputImage(e.target?.result as string)
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async () => {
    if (inputImage) {
      const scaleFactor = parseInt(resolutionModel.replace('x', ''));

      const response = await fetch('http://127.0.0.1:5000/upscale', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          image: inputImage.replace(/^data:image\/\w+;base64,/, ''), // Base64'tan temizle
          scaleFactor: scaleFactor,
        }),
      });

      const data = await response.json();
      console.log(data)
      if (data.upscaled_image) {
        // Base64 görseli eklerken 'data:image/jpeg;base64,' prefiksini ekleyin
        setOutputImage(`data:image/jpeg;base64,${data.upscaled_image}`)
      }
    }
  }

  const handleClear = () => {
    setInputImage(null)
    setOutputImage(null)
    setZoomLevel(1) // Reset zoom level on clear
  }

  const handleZoom = (direction: 'in' | 'out') => {
    if (direction === 'in') {
      setZoomLevel(zoomLevel + 0.1)
    } else if (direction === 'out') {
      setZoomLevel(zoomLevel - 0.1)
    }
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = imageRef.current?.getBoundingClientRect() || { left: 0, top: 0, width: 1, height: 1 }; // Added null check and default values
    const x = (clientX - left) / width;
    const y = (clientY - top) / height;
    setZoomLevel(1 + (x + y) * 0.5); // Simple zoom calculation based on mouse position
  }

  return (
    <div className="mx-auto p-4 h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-50 to-red-100">
      <div className="mx-auto max-w-8xl bg-white rounded-lg p-8">
        <h1 className="text-2xl font-bold text-center mb-4">Resimlerinizi Yükseltin</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-2">Resim</h2>
            <div className="aspect-square bg-gray-100 flex items-center justify-center">
              {inputImage ? (
                <Image src={inputImage} alt="Input" width={400} height={400} className="max-w-full max-h-full object-contain" unoptimized style={{ transform: `scale(${zoomLevel})` }} onMouseMove={handleMouseMove} ref={imageRef} /> // Added ref
              ) : (
                <div className="text-center">
                  <Upload className="mx-auto mb-2" />
                  <p>Resmi Buraya Sürükle</p>
                  <p className="text-sm text-gray-500">- veya -</p>
                  <p>Yüklemek için Tıkla</p>
                </div>
              )}
            </div>
            <input type="file" onChange={handleImageUpload} className="hidden" id="imageUpload" accept="image/*" />
            <div className="flex justify-between mt-2">
              <label htmlFor="imageUpload" className="cursor-pointer">
                <Upload className="inline-block mr-1" size={20} />
                <span className="text-sm">Upload</span>
              </label>
              <button onClick={handleClear} className="text-sm flex items-center">
                <RefreshCw className="inline-block mr-1" size={20} />
                Clear
              </button>
              <button className="text-sm flex items-center">
                <ImageIcon className="inline-block mr-1" size={20} />
                Example
              </button>
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-2">Çıktı</h2>
            <div className="aspect-square bg-gray-100 flex items-center justify-center">
              {outputImage ? (
                <Image src={outputImage} alt="Output" width={400} height={400} className="max-w-full max-h-full object-contain" unoptimized style={{ transform: `scale(${zoomLevel})` }} onMouseMove={handleMouseMove} />
              ) : (
                <div className="text-center">
                  <ImageIcon className="mx-auto mb-2" />
                  <p>Output will appear here</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Çözünürlük Modeli</h3>
          <div className="flex space-x-4">
            {['2x', '4x', '8x'].map((model) => (
              <label key={model} className="flex items-center">
                <input
                  type="radio"
                  value={model}
                  checked={resolutionModel === model}
                  onChange={(e) => setResolutionModel(e.target.value)}
                  className="mr-2"
                />
                {model}
              </label>
            ))}
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4">
          <button onClick={handleClear} className="bg-gray-200 text-gray-800 py-2 px-4 rounded">
                    Temizle
          </button>
          <button onClick={handleSubmit} className="bg-orange-300 text-gray-800 py-2 px-4 rounded">
                Gönder
          </button>
        </div>

        <div className="mt-4 text-center text-gray-600">
          Powered by Tuncer Bytee Youtube
        </div>
      </div>
    </div>
  )
}
