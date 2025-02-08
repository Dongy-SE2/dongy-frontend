
import * as React from "react";
import * as RadixSelect from "@radix-ui/react-select";
import { ChevronDownIcon } from "lucide-react";

interface SelectProps extends RadixSelect.SelectProps {
  children: React.ReactNode;
}

export function Select({ children, ...props }: SelectProps) {
  return (
    <RadixSelect.Root {...props}>
      <RadixSelect.Trigger className="flex items-center justify-between border p-2 rounded-md w-full">
        <RadixSelect.Value />
        <ChevronDownIcon className="h-4 w-4" />
      </RadixSelect.Trigger>
      <RadixSelect.Portal>
        <RadixSelect.Content className="bg-white border rounded-md shadow-md p-2">
          <RadixSelect.Viewport>{children}</RadixSelect.Viewport>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  );
}

interface SelectItemProps {
  value: string;
  children: React.ReactNode;
}

export function SelectItem({ children, value }: SelectItemProps) {
  return (
    <RadixSelect.Item
      value={value}
      className="p-2 cursor-pointer hover:bg-gray-100"
    >
      <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
    </RadixSelect.Item>
  );
}
