import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

type props = {
    fullName: string,
    email: string,
    companyName: string,
    position: string,
    mostRecentPosition: string,
    skills: string,
    accomplishments: string,
    reason: string,
}

function generatePrompt(data : props) {
  const prompt = `Create a cover letter using the following information: Name: "${data.fullName}", Email: ${data.email? '"' + data.email + '"': '(not provided)'}, most recent position: ${data.mostRecentPosition ? '"' + data.mostRecentPosition + '"' : '(not provided)'}, key skills: ${data.skills ? '"' + data.skills + '"' : '(not provided)'}, accomplishments/projects: ${data.accomplishments ? '"' + data.accomplishments + '"' : '(not provided)'}, name of company applying for: "${data.companyName}", position applying for: "${data.position}", reason for applying: ${data.reason ? '"' + data.reason + '"' : '(not provided)'}`;
  console.log(prompt);
  return prompt;
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    console.log(data);

    generatePrompt(data);
    // return NextResponse.json({error: 'sd'}, { status: 401});
    // console.log(fullName, companyName)
    const completion = await openai.chat.completions.create({
      messages: [
        { role: "system", content: generatePrompt(data) },
      ],
      model: "gpt-3.5-turbo",
      temperature: 0.7,
      max_tokens: 200,
    });
    console.log("completion is ", completion);

    console.log(completion.choices[0]);
    return NextResponse.json({ result: completion.choices[0]}, { status: 201 });
  }
  catch (e : any) {
    return NextResponse.json( {error: e.error.code, desc: e.error.message}, {status: 500});
  }
}
