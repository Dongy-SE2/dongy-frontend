import { TextareaHTMLAttributes } from "react";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export function Textarea(props: TextareaProps) {
  return <textarea className="w-full p-2 border rounded-lg focus:ring focus:ring-green-300" {...props} />;
}