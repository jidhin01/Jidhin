import { useState } from "react";
import {
  PopoverForm,
  PopoverFormButton,
  PopoverFormCutOutLeftIcon,
  PopoverFormCutOutRightIcon,
  PopoverFormSeparator,
  PopoverFormSuccess,
} from "./Popover";

export function ContactFormExample() {
  const [formState, setFormState] = useState("idle");
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

function submit() {
  setFormState("loading");

  // Show success after 1.5s
  setTimeout(() => {
    setFormState("success");
  }, 1500);

  // After 5s, reset form + redirect to mail
  setTimeout(() => {
    // Reset form
    setOpen(false);
    setFormState("idle");
    setName("");
    setEmail("");
    setMessage("");

    // Redirect to mail
    window.location.href = "mailto:hinjit86@gmail.com";
  }, 5000);
}

  const formBgColor = formState === "success" ? "bg-green-900" : "bg-red-600";

  return (
    <div className={`flex w-full ${formBgColor} max-w-5xl mx-auto rounded-2xl mt-10 mb-10 items-center justify-center transition-colors duration-500`}>
      <PopoverForm
        title="Email Me"
        open={open}
        setOpen={setOpen}
        width="364px"
        height="372px"
        showCloseButton={formState !== "success"}
        showSuccess={formState === "success"}
        openChild={
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if ("") return;
              submit();
            }}
            className="space-y-4"
          >
            <div className="px-4 pt-4">
              <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
               
                className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-white"
                
              />
            </div>
            <div className="px-4">
              <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
            
                className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-white"
                

              />
            </div>
            <div className="px-4">
              <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">
                Message
              </label>
              <textarea
                id="message"
             
                className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-white"
                rows={3}
                placeholder="Don t fill it in—just click Submit to email me. I will redirect you."
              />
            </div>
            <div className="relative flex h-12 items-center px-[10px]">
              <PopoverFormSeparator />
              <div className="absolute left-0 top-0 -translate-x-[1.5px] -translate-y-1/2">
                <PopoverFormCutOutLeftIcon />
              </div>
              <div className="absolute right-0 top-0 translate-x-[1.5px] -translate-y-1/2 rotate-180">
                <PopoverFormCutOutRightIcon />
              </div>
              <PopoverFormButton loading={formState === "loading"} text="Submit" />
            </div>
          </form>
        }
        successChild={
          <div className="bg-green-900 rounded-2xl p-6 text-white">
            <PopoverFormSuccess
              title="Message Sent"
              description="Yeah, thats just for showcase. Feel free to email me or contact me through any of my social media handles.-->"
            />
          </div>
        }
      />
    </div>
  );
}