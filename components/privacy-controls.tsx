import { useState } from "react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"

export default function PrivacyControls() {
  const [privacySettings, setPrivacySettings] = useState({
    socialMedia: {
      youtube: false,
      tiktok: false,
      instagram: false,
      facebook: false,
      twitter: false,
    },
    finance: false,
    ecommerce: false,
    receipts: false,
    healthcare: false,
    location: false,
    browsing: false,
  });
  const [anonymizationLevel, setAnonymizationLevel] = useState(50)

  const handleSave = () => {
    console.log("Saving privacy settings:", { privacySettings, anonymizationLevel });
    // Here you would typically send the settings to your backend
  }

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Social Media</h3>
        {Object.entries(privacySettings.socialMedia).map(([platform, enabled]) => (
          <div key={platform} className="flex items-center justify-between">
            <Label htmlFor={`${platform}-sharing`} className="text-base capitalize">
              {platform}
            </Label>
            <Switch
              id={`${platform}-sharing`}
              checked={enabled}
              onCheckedChange={(checked) =>
                setPrivacySettings((prev) => ({
                  ...prev,
                  socialMedia: { ...prev.socialMedia, [platform]: checked },
                }))
              }
            />
          </div>
        ))}
      </div>

      {['finance', 'ecommerce', 'receipts', 'healthcare', 'location', 'browsing'].map((category) => (
        <div key={category} className="flex items-center justify-between">
          <Label htmlFor={`${category}-sharing`} className="text-base capitalize">
            {category.replace(/([A-Z])/g, ' $1').trim()} Data
          </Label>
          <Switch
            id={`${category}-sharing`}
            checked={privacySettings[category]}
            onCheckedChange={(checked) =>
              setPrivacySettings((prev) => ({ ...prev, [category]: checked }))
            }
          />
        </div>
      ))}

      <div className="space-y-2">
        <Label htmlFor="anonymization-level" className="text-base">
          Overall Anonymization Level
        </Label>
        <Slider
          id="anonymization-level"
          min={0}
          max={100}
          step={1}
          value={[anonymizationLevel]}
          onValueChange={(value) => setAnonymizationLevel(value[0])}
        />
        <p className="text-sm text-muted-foreground">
          Current level: {anonymizationLevel}%
        </p>
      </div>

      <Button onClick={handleSave} className="mt-4">
        Save Privacy Settings
      </Button>
    </div>
  )
}

