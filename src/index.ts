import * as dotenv from "dotenv";
import { OpenAI } from "langchain";

dotenv.config();

const model = new OpenAI({
  modelName: "gpt-3.5-turbo",
  openAIApiKey: process.env.OPENAI_API_KEY,
});

const res = await model.call("什么是chatgpt");

console.log(res);
