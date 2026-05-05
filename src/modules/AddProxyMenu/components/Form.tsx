import { useState, FormEvent, ChangeEvent } from "react";
import { DefaultInput } from "@/shared/ui/Inputs/defaultInput";
import "../styles/styles.css";
import NavButton from "@/shared/ui/Buttons/NavButton/NavButton";
import toast from "react-hot-toast";
import { ProxyFormData } from "../types";
import { addProxy } from "../api/addProxy";

interface FormProps {}

export default function Form({}: FormProps) {
  const [formData, setFormData] = useState<ProxyFormData>({
    name: "",
    url: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange =
    (field: keyof ProxyFormData) => (event: ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await addProxy({
        name: formData.name,
        url: formData.url,
      });

      toast.success("Success");
      
    } catch (err) {
      toast.error("Error");
      console.error("Submit error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="proxy_form_cont" onSubmit={handleSubmit}>
      <DefaultInput
        placeholder="name"
        required
        value={formData.name}
        onChange={handleInputChange("name")}
        disabled={isLoading}
      />

      <DefaultInput
        placeholder="http://127.0.0.1:1080"
        required
        value={formData.url}
        onChange={handleInputChange("url")}
        disabled={isLoading}
        type="url"
      />

      <NavButton
        text={isLoading ? "Saving..." : "Save"}
        onClick={() => {}}
        isActive={!isLoading && !!formData.name && !!formData.url}
        disabled={isLoading}
      />
    </form>
  );
}
