import { FC, useState } from 'react'
import Button from '../common/Button.tsx'
import axiosInstance from '../../services/axiosInstance.ts'

const Data: FC = () => {
  const [image, setImage] = useState<File | null>(null)
  const [size, setSize] = useState<string | null>(null)
  const [productName, setProductName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState<number>(0)
  const [category, setCategory] = useState('ACCESSORIES')
  const [quantity, setQuantity] = useState<number>(0)
  const [savedMessage, setSavedMessage] = useState<string | null>(null)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      setImage(files[0])
    }
  }

  const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSize(e.target.value)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData()

    formData.append('file', image as Blob)
    formData.append('size', size as string)
    formData.append('name', productName)
    formData.append('description', description)
    formData.append('price', price.toString())
    formData.append('category', category)
    formData.append('stockQty', quantity.toString())

    try {
      const response = await axiosInstance.post('/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      console.log('Product added successfully!', response.data)
      setSavedMessage('Saved!')
    } catch (error) {
      console.error('Error adding product:', error)
      setSavedMessage(null)
    }
  }

  const isSummittable = () => {
    return image && productName && description && price && category && quantity
  }

  return (
    <>
      <span className="text-2xl">ADD PRODUCT</span>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center gap-16">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-64 h-80">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-full border-2 border-tvsm-orange rounded-lg cursor-pointer"
              >
                {image ? (
                  <img src={URL.createObjectURL(image)} alt="Selected" className="object-contain w-full h-full" />
                ) : (
                  <>
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" onChange={handleImageChange} />
                  </>
                )}
              </label>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <label>
                <input
                  type="radio"
                  name="size"
                  value="SMALL"
                  checked={size === 'SMALL'}
                  onChange={handleSizeChange}
                  className="hidden"
                />
                <div
                  className={`w-14 h-10 text-2xl rounded cursor-pointer text-center ${
                    size === 'SMALL' ? 'bg-tvsm-orange text-tvsm-white' : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  S
                </div>
              </label>
              <label>
                <input
                  type="radio"
                  name="size"
                  value="MEDIUM"
                  checked={size === 'MEDIUM'}
                  onChange={handleSizeChange}
                  className="hidden"
                />
                <div
                  className={`w-14 h-10 text-2xl rounded cursor-pointer text-center ${
                    size === 'MEDIUM' ? 'bg-tvsm-orange text-tvsm-white' : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  M
                </div>
              </label>
              <label>
                <input
                  type="radio"
                  name="size"
                  value="LARGE"
                  checked={size === 'LARGE'}
                  onChange={handleSizeChange}
                  className="hidden"
                />
                <div
                  className={`w-14 h-10 text-2xl rounded cursor-pointer text-center ${
                    size === 'LARGE' ? 'bg-tvsm-orange text-tvsm-white' : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  L
                </div>
              </label>
              <label>
                <input
                  type="radio"
                  name="size"
                  value="XLARGE"
                  checked={size === 'XLARGE'}
                  onChange={handleSizeChange}
                  className="hidden"
                />
                <div
                  className={`w-14 h-10 text-2xl rounded cursor-pointer text-center ${
                    size === 'XLARGE' ? 'bg-tvsm-orange text-tvsm-white' : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  XL
                </div>
              </label>
            </div>

            <label className="flex items-start gap-2 font-bold">
              Product Name:
              <input
                type="text"
                className="border-tvsm-orange border-2 bg-amber-100 rounded p-1"
                value={productName}
                onChange={e => setProductName(e.target.value)}
              />
            </label>

            <label className="flex items-start gap-2 font-bold">
              Description:
              <textarea
                className="border-tvsm-orange border-2 bg-amber-100 rounded p-1"
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
            </label>

            <label className="flex items-start gap-2 font-bold">
              Price:
              <input
                type="number"
                className="border-tvsm-orange border-2 bg-amber-100 rounded p-1 text-center"
                value={price}
                onChange={e => setPrice(parseInt(e.target.value))}
              />
            </label>

            <label className="flex items-start gap-2 font-bold">
              Category:
              <select
                className="border-tvsm-orange border-2 bg-amber-100 rounded font-normal p-1"
                value={category}
                onChange={e => setCategory(e.target.value)}
              >
                <option value="ACCESSORIES">GAMES/GAMING ACCESSORIES</option>
                <option value="TSHIRT">T-SHIRTS</option>
                <option value="KEYCAHIN">KEYCHAINS</option>
                <option value="OTHER">OTHER</option>
              </select>
            </label>

            <label className="flex flex-col items-start gap-2 font-bold">
              QTY
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  className="border-tvsm-orange border-2 bg-amber-100 rounded p-1 text-center"
                  value={quantity}
                  onChange={e => setQuantity(parseInt(e.target.value))}
                />
              </div>
            </label>

            <div className="flex justify-center">
              <Button text={'SUBMIT'} className="w-32 h-10 bg-tvsm-orange" disabled={!isSummittable()} />
            </div>
          </div>
        </div>
      </form>
      {savedMessage && <div className="mt-4 text-green-500 text-2xl">{savedMessage}</div>}
    </>
  )
}

export default Data
