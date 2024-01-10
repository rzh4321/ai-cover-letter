import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { formTypes } from "@/types";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

type SubsetOf<T> = {
  [K in keyof T]?: T[K];
};

type dataType = SubsetOf<formTypes>;


function generatePrompt(data : dataType) {
  const objString = Object.entries(data)
  .map(([key, value]) => `${key}: "${value}"`)
  .join(', ');
  let prompt = `Create a cover letter using the following information. Start with "Dear Hiring Manager,". *Do not assume anything. Only use the information provided*: `;
  prompt += objString;
  console.log(prompt);
  return prompt;
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    // console.log('DATA IS ', data);

    generatePrompt(data);
    // return NextResponse.json({error: 'sd'}, { status: 401});
    // const completion = await openai.chat.completions.create({
    //   messages: [
    //     { role: "system", content: generatePrompt(data) },
    //   ],
    //   model: "gpt-3.5-turbo",
    //   temperature: 0.7,
    //   max_tokens: 200,
    // });
    const completion = {
      "id": "chatcmpl-123",
      "object": "chat.completion",
      "created": 1677652288,
      "model": "gpt-3.5-turbo-0613",
      "system_fingerprint": "fp_44709d6fcb",
      "choices": [{
        "index": 0,
        "message": {
          "role": "assistant",
          "content": "\n\nHello there, how may I assist you today?",
        },
        "logprobs": null,
        "finish_reason": "stop"
      }],
      "usage": {
        "prompt_tokens": 9,
        "completion_tokens": 12,
        "total_tokens": 21
      }
    }
   // console.log("completion is ", completion);

   // console.log(completion.choices[0]);
    return NextResponse.json({ result: completion.choices[0].message.content}, { status: 201 });
  }
  catch (e : any) {
    return NextResponse.json( {error: e.error.code, desc: e.error.message}, {status: 500});
  }
}
