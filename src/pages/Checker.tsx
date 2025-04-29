// External Libraries
import { useState } from "react"
import { QrCode, X } from "lucide-react"
import { useDropzone } from "react-dropzone"

// ShadCN UI
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

const Checker = () => {
  const [domain, setDomain] = useState("")
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])

  const onDrop = (acceptedFiles: File[]) => {
    setUploadedFiles(acceptedFiles)
  }

  const removeImage = () => {
    setUploadedFiles([])
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: false,
  })

  return (
    <div className="min-h-screen px-4 py-10 max-w-4xl mx-auto">
      {/* Title */}
      <h1 className="font-bold text-center mb-2  text-2xl md:text-3xl text-[#0093b9]">CHECKER TOOL</h1>
      <p className="text-center text-white mb-8 text-sm md:text-base">
        Use this tool to check if a specific domain name is available or to receive suggestions for alternative domain names that match your input. 
        Simply type your desired domain in the input field below. Additionally, if you have a QR Code image that contains domain information, 
        you can upload it using the "Upload QR Code" button. After uploading, you can preview the image and remove it if needed before submitting.
      </p>

      {/* Form */}
      <Card className="bg-[#0d4154de] shadow-md border-0">
        <CardContent className="p-6 flex flex-col items-center gap-4">
          <div className="flex-1 w-full">
            <Label htmlFor="domain" className="block text-white mb-4">Domain Name</Label>
            <div className="flex items-center md:flex-row flex-col gap-2">
              <Input
                id="domain"
                placeholder="Enter domain name..."
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                className="w-full h-[50px] text-white rounded-none"
              />

              {/* QR Modal Trigger */}
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="flex gap-2 h-[50px] items-center whitespace-nowrap rounded-none cursor-pointer"
                  >
                    <QrCode size={18} /> Upload QR Code
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-[#0d4154de] text-white border-0">
                  <DialogTitle className="text-lg font-semibold text-white">
                    Upload QR Code
                  </DialogTitle>

                  <div
                    {...getRootProps()}
                    className="border border-dashed border-gray-400 rounded-md p-6 mt-4 text-center cursor-pointer hover:bg-[#0b3a4c]"
                  >
                    <input {...getInputProps()} />
                    {isDragActive ? (
                      <p className="text-white">Drop the QR code here...</p>
                    ) : (
                      <p className="text-white">Click or drag a QR code image here to upload</p>
                    )}

                    {/* Image Preview with Remove Option */}
                    {uploadedFiles.length > 0 && (
                      <div className="relative mt-4 flex justify-center">
                        <img
                          src={URL.createObjectURL(uploadedFiles[0])}
                          alt="Uploaded QR Code"
                          className="max-h-48 object-contain rounded-md"
                        />
                        <button
                          onClick={removeImage}
                          className="absolute top-0 right-0 bg-black/70 rounded-full p-1 text-white hover:bg-black"
                          aria-label="Remove image"
                        >
                          <X size={18} />
                        </button>
                      </div>
                    )}
                  </div>

                  <DialogFooter className="mt-4">
                    <Button className="h-[50px] w-full" type="submit">
                      Submit
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Main Submit Button */}
          <Button className="h-[50px] w-full">Submit</Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default Checker
