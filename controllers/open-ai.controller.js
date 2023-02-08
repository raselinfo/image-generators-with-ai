const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPEN_AI,
});
const open_ai = new OpenAIApi(configuration);

const openAiController = async (req, res) => {
  try {
    const response = await open_ai.createImage({
      prompt: "a person name is 'Rasel Hossain Niloy' Who live in Bangladesh.He is a web developer. so now give me his picture",
      n: 1,
      size:"1024x1024"
    })
    const imageUrl=response.data.data[0].url
    console.log(response)
    res.status(201).json({ message:"Ok",data:imageUrl})

   } catch (err) {
   res.status(500).json({message:err.message})
 } 
};

module.exports = openAiController;
