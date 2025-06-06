"use client"

import type React from "react"

import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Camera, Mic, X, Upload } from "lucide-react"
import { Card } from "@/components/ui/card"

interface StepTwoProps {
  formData: {
    photos: File[]
    voiceNote: File | null
    obstacleTags: string[]
    otherObstacle: string
    severity: number
  }
  updateFormData: (data: Partial<StepTwoProps["formData"]>) => void
}

export function StepTwo({ formData, updateFormData }: StepTwoProps) {
  const [photoPreviewUrls, setPhotoPreviewUrls] = useState<string[]>([])

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files)
      const validFiles = newFiles.slice(0, 3 - formData.photos.length)

      if (validFiles.length > 0) {
        const updatedPhotos = [...formData.photos, ...validFiles]
        updateFormData({ photos: updatedPhotos })

        // Create preview URLs
        const newPreviewUrls = validFiles.map((file) => URL.createObjectURL(file))
        setPhotoPreviewUrls((prev) => [...prev, ...newPreviewUrls])
      }
    }
  }

  const handleRemovePhoto = (index: number) => {
    const updatedPhotos = [...formData.photos]
    updatedPhotos.splice(index, 1)
    updateFormData({ photos: updatedPhotos })

    // Revoke the URL to avoid memory leaks
    URL.revokeObjectURL(photoPreviewUrls[index])
    const updatedPreviewUrls = [...photoPreviewUrls]
    updatedPreviewUrls.splice(index, 1)
    setPhotoPreviewUrls(updatedPreviewUrls)
  }

  const handleVoiceNote = () => {
    // This would be implemented with the Web Audio API
    // For now, it's just a placeholder
    alert("Funcionalidade de gravação de áudio será implementada em breve!")
  }

  const handleTagToggle = (tag: string) => {
    const currentTags = [...formData.obstacleTags]
    if (currentTags.includes(tag)) {
      updateFormData({ obstacleTags: currentTags.filter((t) => t !== tag) })
    } else {
      updateFormData({ obstacleTags: [...currentTags, tag] })
    }
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label className="text-lg font-bold">Fotos (1-3)</Label>

        <div className="grid grid-cols-3 gap-4">
          {[0, 1, 2].map((index) => (
            <Card
              key={index}
              className={`border-4 border-black shadow-neobrutalism aspect-square flex flex-col items-center justify-center relative ${
                index < photoPreviewUrls.length ? "p-0 overflow-hidden" : "p-4"
              }`}
            >
              {index < photoPreviewUrls.length ? (
                <>
                  <img
                    src={photoPreviewUrls[index] || "/placeholder.svg"}
                    alt={`Foto ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <Button
                    variant="neobrutalism"
                    size="icon"
                    className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 border-2 border-black shadow-neobrutalism h-8 w-8"
                    onClick={() => handleRemovePhoto(index)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </>
              ) : index === photoPreviewUrls.length ? (
                <label className="cursor-pointer flex flex-col items-center justify-center w-full h-full">
                  <input type="file" accept="image/*" className="hidden" onChange={handlePhotoUpload} />
                  <Camera className="h-10 w-10 mb-2" />
                  <span className="text-sm text-center">Adicionar foto</span>
                </label>
              ) : (
                <div className="flex flex-col items-center justify-center text-gray-400">
                  <Camera className="h-10 w-10 mb-2" />
                  <span className="text-sm text-center">Foto {index + 1}</span>
                </div>
              )}
            </Card>
          ))}
        </div>

        <div className="flex justify-between mt-4">
          <Button
            variant="neobrutalism"
            className="bg-purple-500 hover:bg-purple-600 border-4 border-black shadow-neobrutalism"
            onClick={handleVoiceNote}
          >
            <Mic className="mr-2 h-4 w-4" />
            Gravar Áudio
          </Button>

          <label>
            <Button
              variant="neobrutalism"
              className="bg-blue-500 hover:bg-blue-600 border-4 border-black shadow-neobrutalism"
              asChild
            >
              <div>
                <Upload className="mr-2 h-4 w-4" />
                Enviar Fotos
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  multiple
                  onChange={handlePhotoUpload}
                  disabled={formData.photos.length >= 3}
                />
              </div>
            </Button>
          </label>
        </div>
      </div>

      <div className="space-y-2">
        <Label className="text-lg font-bold">Qual o seu principal setor de atuação?</Label>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="silviculture"
              checked={formData.obstacleTags.includes("silviculture")}
              onCheckedChange={() => handleTagToggle("silviculture")}
              className="border-2 border-black data-[state=checked]:bg-green-500"
            />
            <label
              htmlFor="silviculture"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Silvicultura 
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="horticulture"
              checked={formData.obstacleTags.includes("horticulture")}
              onCheckedChange={() => handleTagToggle("horticulture")}
              className="border-2 border-black data-[state=checked]:bg-yellow-500"
            />
            <label
              htmlFor="horticulture"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Horticultura
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="grains"
              checked={formData.obstacleTags.includes("grains")}
              onCheckedChange={() => handleTagToggle("grains")}
              className="border-2 border-black data-[state=checked]:bg-blue-500"
            />
            <label
              htmlFor="grains"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Grãos
            </label>

          </div>
              <div className="flex items-center space-x-2">
            <Checkbox
              id="organics"
              checked={formData.obstacleTags.includes("organics")}
              onCheckedChange={() => handleTagToggle("organics")}
              className="border-2 border-black data-[state=checked]:bg-purple-500"
            />
            <label
              htmlFor="organics"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Orgânicos
            </label>
          </div>
          
            <div className="flex items-center space-x-2">
            <Checkbox
              id="mixed"
              checked={formData.obstacleTags.includes("mixed")}
              onCheckedChange={() => handleTagToggle("mixed")}
              className="border-2 border-black data-[state=checked]:bg-purple-500"
            />
            <label
              htmlFor="mixed"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Misto
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="other"
              checked={formData.obstacleTags.includes("other")}
              onCheckedChange={() => handleTagToggle("other")}
              className="border-2 border-black data-[state=checked]:bg-purple-500"
            />
            <label
              htmlFor="other"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Outro
            </label>
          </div>
        </div>

        {formData.obstacleTags.includes("other") && (
          <input
            type="text"
            placeholder="Especifique o obstáculo"
            className="w-full mt-2 p-2 border-4 border-black shadow-neobrutalism"
            value={formData.otherObstacle}
            onChange={(e) => updateFormData({ otherObstacle: e.target.value })}
          />
        )}
      </div>

      <div className="space-y-2">
  <Label className="text-lg font-bold">Qual o seu faturamento médio?</Label>
  <div className="space-y-4">
    <Slider
      value={[formData.severity]}
      min={1}
      max={5} // Adjust max if you want more than 3 distinct levels
      step={1}
      onValueChange={(value) => updateFormData({ severity: value[0] })}
      className="border-2 border-black"
    />
    <div className="flex justify-between text-sm">
      {/* Choose one of the sets of labels above */}
      <span>Até R$50.000</span> {/* Example from option 2 */}
      <span>R$50.001 - R$250.000</span> {/* Example from option 2 */}
      <span>Acima de R$250.000</span> {/* Example from option 2 */}
    </div>
  </div>
</div>
    </div>
  )
}
