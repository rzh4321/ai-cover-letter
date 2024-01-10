"use client";

import React, { useState } from "react";
import { Textarea } from "./ui/textarea";
import { FormDescription } from "./ui/form";

type fieldProps = {
  "aria-describedBy" : string;
  "aria-invalid": boolean;
  id: string;
  name: string;
  onBlur: () => void;
  onChange: (e: any) => void;
  value: string;
}

interface TextAreaWithLimitProps extends fieldProps {
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
          className={`self-end ${
            +field.value.length > 600 ? "text-red-600" : null
          }`}
        >
          {field.value.length}/{limit}
        </span>
      </FormDescription>
    </>
  );
};

export default TextAreaWithLimit;
