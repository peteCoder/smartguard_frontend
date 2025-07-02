// External Libraries
import { useState } from "react"
import { QrCode, X } from "lucide-react"
import { useDropzone } from "react-dropzone"
import { DomainAnalysisType } from "@/config.types" 
import { useForm } from "react-hook-form"

import { FadeInWhenVisible } from "@/components/main/FadeInWhenVisible"

// Loader
import { BeatLoader } from "react-spinners";

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
import { BACKEND_API_BASE_URL } from "@/config"
import { WebsiteDetails } from "@/components/main/WebsiteDetails"

const BASE_API_URL = BACKEND_API_BASE_URL;


type DataType = DomainAnalysisType | { extracted_text: string };

const Checker = () => {
  const [domain, setDomain] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [websiteData, setWebsiteData] = useState<DomainAnalysisType>()

  const [errorMessageForUpload, setErrorMessageForUpload] = useState({error: false, errorMessage: ""});

  const [isLoading, setIsLoading] = useState(false);

  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])

 

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<{ domain: string }>()

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

  // Submit Text Domain
  const submitDomain = async (data: { domain: string }) => {
    console.log("Submitted domain:", data.domain)
    // Make your API request here
    const domain = data.domain;

    setIsLoading(true);

    fetch(`${BASE_API_URL}/api/check-domain?domain=${domain}`)
    .then(res => res.json())
    .then((data) => {
      setIsLoading(false);
      console.log(data);
      setWebsiteData(data);
    }).catch((error) => {
      console.log(error);
    })

  }

  
   // Submit QR Code
  const submitQRCode = async function(){

    if (uploadedFiles.length < 1) {
      setErrorMessageForUpload({error: true, errorMessage: "Please upload an image here."});
      return;
    }
    setErrorMessageForUpload({error: false, errorMessage: ""});
    console.log("Thank you for uploading a file. Please wait... ");


    const formData = new FormData();
    formData.append("file", uploadedFiles[0]);

    console.log(uploadedFiles[0]);
    
   

    setIsLoading(true);
    
    fetch(`${BASE_API_URL}/api/extract-qr`, {
      method: "POST",
      body: formData
    })
    .then(res => res.json())
    .then((data) => {
      setIsLoading(false);
      console.log(data);
      
      if ("domain" in data) {
        setIsDialogOpen(false);
      }
      if ("extracted_text" in data) {
        setErrorMessageForUpload({error: true, errorMessage: data.extracted_text});
        return
      }

      setWebsiteData(data);
    }).catch((error) => {
      setIsLoading(false);
      console.log(error);
    })



  }

  return (
    <>
    <form onSubmit={handleSubmit(submitDomain)} className="  px-4 py-10 max-w-4xl mx-auto">
      {/* min-h-screen */}
      {/* Title */}
      <FadeInWhenVisible>
      <h1 className="font-bold text-center mb-2  text-2xl md:text-3xl text-[#0093b9]">CHECKER TOOL</h1>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
      <p className="text-center text-white mb-8 text-sm md:text-base">
        Use this tool to check if a specific domain name is available or to receive suggestions for alternative domain names that match your input. 
        Simply type your desired domain in the input field below. Additionally, if you have a QR Code image that contains domain information, 
        you can upload it using the "Upload QR Code" button. After uploading, you can preview the image and remove it if needed before submitting.
      </p>
      </FadeInWhenVisible>

      {/* Form */}
      <FadeInWhenVisible>
      <Card className="bg-[#0d4154de] shadow-md border-0">
        <CardContent className="p-6 flex flex-col items-center gap-4">
          <div className="flex-1 w-full">
            <Label htmlFor="domain" className="block text-white mb-4 font-bold">Domain Name</Label>
            <div className="flex items-center md:flex-row flex-col gap-2">
              <Input
                id="domain"
                placeholder="Enter domain name..."
                {...register("domain", {
                  required: "Domain name is required",
                  pattern: {
                    value: /^(https?:\/\/)?([\w\-]+\.)+[\w]{2,}(\/.*)?$/,
                    message: "Enter a valid domain URL"
                  }
                })}
                // value={domain}
                // onChange={(e) => setDomain(e.target.value)}
                className="w-full h-[50px] text-white rounded-none placeholder:text-white"
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

                  <div className="">
                    {errorMessageForUpload.error && (
                      <div className="text-red-700">
                        {errorMessageForUpload.errorMessage}
                      </div>
                    )}
                  </div>

                  <DialogFooter className="mt-4">
                    <Button disabled={isLoading} onClick={() => submitQRCode()} className="h-[50px] w-full" type="submit">
                      {!isLoading ? <span>Submit</span>  : <BeatLoader color="#fff" />}
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>

            {errors.domain && (
              <span className="text-red-500 text-sm">{errors.domain.message}</span>
            )}
          </div>

          {/* Main Submit Button */}
          <Button type="submit" disabled={isLoading} className="h-[50px] w-full">
          {!isLoading ? <span>Submit</span>  : <BeatLoader color="#fff" />}
          </Button>
        </CardContent>
      </Card>
      </FadeInWhenVisible>
    </form>
    <div>
      {/* Here the details will desplay */}
      {isLoading ? (
        <div className="min-h-[40vh] flex items-center justify-center">
          <BeatLoader color="#fff" size={20} />
        </div>
      ) : (
        <div className="min-h-[40vh]">
          {/* Here the details of the website will be here... */}
          {websiteData && <WebsiteDetails data={websiteData} />}
        </div>
      )}
      
    </div>
    </>
  )
}

export default Checker
