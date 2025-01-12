import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "../ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";
import { Input } from "../ui/Input";
import { Label } from "../ui/Label";
import { Mic, MicOff, Video, VideoOff, Phone, UploadCloud, CheckCircle } from 'lucide-react';

export default function Agent() {
  const navigate = useNavigate();
  
  const [userAudioEnabled, setUserAudioEnabled] = useState(true);
  const [userVideoEnabled, setUserVideoEnabled] = useState(true);
  const [userStream, setUserStream] = useState(null);
  const userVideoRef = useRef(null);

  const [agentAudioEnabled, setAgentAudioEnabled] = useState(true);
  const [agentVideoEnabled, setAgentVideoEnabled] = useState(false);
  const [agentStream, setAgentStream] = useState(null);
  const agentVideoRef = useRef(null);

  const [fileUploaded, setFileUploaded] = useState(false);

  const toggleStream = async (setStream, videoRef, videoEnabled, audioEnabled) => {
    if (videoEnabled || audioEnabled) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: videoEnabled,
          audio: audioEnabled
        });
        setStream(stream);
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Error accessing media devices.', error);
      }
    } else {
      if (videoRef.current && videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach(track => track.stop());
      }
      setStream(null);
    }
  };

  useEffect(() => {
    toggleStream(setUserStream, userVideoRef, userVideoEnabled, userAudioEnabled);
    return () => userStream?.getTracks().forEach(track => track.stop());
  }, [userVideoEnabled, userAudioEnabled]);

  useEffect(() => {
    toggleStream(setAgentStream, agentVideoRef, agentVideoEnabled, agentAudioEnabled);
    return () => agentStream?.getTracks().forEach(track => track.stop());
  }, [agentVideoEnabled, agentAudioEnabled]);

  const handleEndCall = () => {
    navigate('/support/feedback');
  };

  const handleFileUpload = () => {
    setFileUploaded(false);
    setTimeout(() => setFileUploaded(true), 3000);
  };

  return (
    <div className="container mx-auto max-w-4xl py-12 px-6 flex flex-col items-center">
      <Card className="shadow-2xl rounded-xl bg-white p-8 border border-gray-200 w-full max-w-3xl">
        <CardHeader className="border-b border-gray-300 pb-4">
          <CardTitle className="text-center text-3xl font-bold text-gray-900">
            Live Support Session
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-6 w-full">
            <div className="flex flex-col items-center gap-4">
              <h3 className="text-xl font-semibold">You</h3>
              <div className="h-64 w-72 bg-gray-300 rounded-lg flex items-center justify-center overflow-hidden">
                {userVideoEnabled ? (
                  <video ref={userVideoRef} autoPlay muted className="w-full h-full object-cover" />
                ) : (
                  <p className="text-gray-600">Your Video</p>
                )}
              </div>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" onClick={() => setUserAudioEnabled(!userAudioEnabled)}>
                  {userAudioEnabled ? <Mic className="h-6 w-6 text-green-600" /> : <MicOff className="h-6 w-6 text-red-600" />}
                </Button>
                <Button variant="outline" size="icon" onClick={() => setUserVideoEnabled(!userVideoEnabled)}>
                  {userVideoEnabled ? <Video className="h-6 w-6 text-blue-600" /> : <VideoOff className="h-6 w-6 text-red-600" />}
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <h3 className="text-xl font-semibold">Agent</h3>
              <div className="h-64 w-72 bg-gray-300 rounded-lg flex items-center justify-center overflow-hidden">
                {agentVideoEnabled ? (
                  <video ref={agentVideoRef} autoPlay muted className="w-full h-full object-cover" />
                ) : (
                  <p className="text-gray-600">Agent's Video</p>
                )}
              </div>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" onClick={() => setAgentAudioEnabled(!agentAudioEnabled)}>
                  {agentAudioEnabled ? <Mic className="h-6 w-6 text-green-600" /> : <MicOff className="h-6 w-6 text-red-600" />}
                </Button>
                <Button variant="outline" size="icon" onClick={() => setAgentVideoEnabled(!agentVideoEnabled)}>
                  {agentVideoEnabled ? <Video className="h-6 w-6 text-blue-600" /> : <VideoOff className="h-6 w-6 text-red-600" />}
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center mt-6">
            <Button variant="destructive" size="lg" onClick={handleEndCall} className="bg-red-600 hover:bg-red-700 flex items-center gap-2">
              <Phone className="h-6 w-6 text-white" /> End Call
            </Button>
            <div className="grid gap-4 mt-6 w-full max-w-md text-center">
              <Label htmlFor="file" className="text-gray-700  font-medium">Upload File</Label>
              <Input id="file" type="file" className="border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 rounded-lg p-3" onChange={handleFileUpload} />
              {fileUploaded && (
                <div className="text-green-600 flex items-center justify-center gap-2 font-medium mt-2">
                  <CheckCircle className="h-5 w-5" /> File Uploaded Successfully
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
