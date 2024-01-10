"use client";

import React, { useState } from "react";
import { Textarea } from "./ui/textarea";
import { FormDescription } from "./ui/form";

const TextAreaWithLimit = ({
  limit,
  desc,
  sameLine,
  ...field
}: {
  limit: number;
  desc: string;
  sameLine: boolean;
}) => {
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
