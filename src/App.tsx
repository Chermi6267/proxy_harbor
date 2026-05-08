import Background from "@/shared/ui/Background/Background";
import Main from "@/pages/Main/Main";
import { Toaster } from "react-hot-toast";
import { toastConfig } from "./shared/hotToast/config";

function App() {
  return (
    <Background>
      <Main />
      <Toaster position="bottom-center" toastOptions={toastConfig} />
    </Background>
  );
}

export default App;
