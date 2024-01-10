"use client";

import React from "react";
import { Textarea } from "./ui/textarea";
import { FormDescription } from "./ui/form";
// import { TextareaProps } from "./ui/textarea";
import { ControllerRenderProps } from "react-hook-form";

// type fieldProps = {
//   "aria-describedBy": string;
//   "aria-invalid": boolean;
//   id: string;
//   name: string;
//   onBlur: () => void;
//   onChange: (e: any) => void;
//   value: string;
// };

interface TextAreaWithLimitProps extends ControllerRenderProps<{
  fullName: string;
  email: string;
  companyName: string;
  positionApplyingFor: string;
  mostRecentPosition: string;
  skills: string;
  accomplishmentsOrProjects: string;
  reasonForInterest: string;
}, "accomplishmentsOrProjects" | "reasonForInterest"> {
  limit: number;
  desc: string;
  sameLine: boolean;
}

const TextAreaWithLimit = ({
  limit,
  desc,
  sameLine,
  ...field
}: TextAreaWithLimitProps) => {
  return (
    <>
      <Textarea {...field} className="max-h-[200px]" />
      <FormDescription
        className={`flex ${sameLine ? "justify-between" : "flex-col gap-2"}`}
      >
        <span>{desc}</span>
        <span
          className={`self-end ${+field.value.length > 600 ? "text-red-600" : ""}`}
        >
          {field.value.length}/{limit}
        </span>
      </FormDescription>
    </>
  );
};

export default TextAreaWithLimit;
