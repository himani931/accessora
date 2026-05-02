import { useEffect } from "react";
import { Mic, MicOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

export default function VoiceNavigator() {
  const navigate = useNavigate();

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  useEffect(() => {
    if (!transcript) return;

    const text = transcript.toLowerCase().trim();

    console.log("Recognized:", text);

    if (text.includes("dashboard")) {
      console.log("Going dashboard");
      navigate("/dashboard");
      resetTranscript();
    }

    if (text.includes("home")) {
      console.log("Going home");
      navigate("/");
      resetTranscript();
    }

    if (text.includes("jobs")) {
      console.log("Going jobs");
      navigate("/jobs");
      resetTranscript();
    }
  }, [transcript, navigate, resetTranscript]);

  if (!browserSupportsSpeechRecognition) return null;

  const toggleMic = () => {
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      resetTranscript();
      SpeechRecognition.startListening({
        continuous: true,
        language: "en-US",
      });
    }
  };

  return (
    <button
      onClick={toggleMic}
      className="fixed bottom-8 right-8 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-500 rounded-full"
    >
      {listening ? <Mic /> : <MicOff />}
    </button>
  );
}
