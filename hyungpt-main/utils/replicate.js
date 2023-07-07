const Replicate = require("replicate");

const replicate = new Replicate({
  auth: process.env['REPLICATE_API_TOKEN'],
});

async function recognizeImage(question, imageURL) {
  if(question == false){
    question = "describe this scene in utmost detail.";
  }
  const output = await replicate.run(
    "andreasjansson/blip-2:4b32258c42e9efd4288bb9910bc532a69727f9acd26aa08e175713a0a857a608",
    {
      input: {
        image: imageURL,
        question: question,
        temperature: 0.8
      }
    }
  );
  return output;
}

module.exports = {
  recognize: recognizeImage
}; 
