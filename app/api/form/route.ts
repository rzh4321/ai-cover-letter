import { NextRequest } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY});

function generatePrompt(data) {
    return `Create a cover letter using the following information: Name: ${data.fullName}, Name of company applying for: ${data.companyName}`;
}

export async function POST(req: Request) {
    const data = await req.formData();
    const arr = Array.from(data.entries());
    const fullName = arr[0][1];
    const companyName = arr[1][1];
    // console.log(fullName, companyName)
    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: generatePrompt({fullName, companyName}) }],
        model: "gpt-3.5-turbo",
        temperature: 0.7,
        max_tokens: 200,
      });
    console.log('completion is ', completion);
    
    console.log(completion.choices[0]);
    
}