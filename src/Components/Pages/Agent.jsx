import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from "../ui/Button"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card"
import { Input } from "../ui/Input"
import { Label } from "../ui/Label"
import { Mic, MicOff, Video, VideoOff, Upload, Phone } from 'lucide-react'

export default function Agent() {
  const navigate = useNavigate()
  const [audioEnabled, setAudioEnabled] = useState(true)
  const [videoEnabled, setVideoEnabled] = useState(true)

  const handleEndCall = () => {
    navigate('/support/feedback')
  }

  return (
    <div className="container mx-auto max-w-4xl py-12">
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Live Support Session</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                {/* This would be replaced with actual video stream */}
                <p className="text-muted-foreground">Video Stream</p>
              </div>
              
              <div className="flex justify-center gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setAudioEnabled(!audioEnabled)}
                >
                  {audioEnabled ? (
                    <Mic className="h-4 w-4" />
                  ) : (
                    <MicOff className="h-4 w-4" />
                  )}
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setVideoEnabled(!videoEnabled)}
                >
                  {videoEnabled ? (
                    <Video className="h-4 w-4" />
                  ) : (
                    <VideoOff className="h-4 w-4" />
                  )}
                </Button>
                <Button variant="outline" size="icon">
                  <Upload className="h-4 w-4" />
                </Button>
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={handleEndCall}
                >
                  <Phone className="h-4 w-4" />
                </Button>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="file">Upload File</Label>
                <Input id="file" type="file" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
