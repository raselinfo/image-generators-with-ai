

const imageForm = document.querySelector("#image-form")
imageForm.addEventListener("submit", handleImageFormSubmit)


function handleImageFormSubmit(e) {
  e.preventDefault()
  const prompt = document.querySelector("#prompt")?.value
  const size = document.querySelector('#size')?.value;
  if (!prompt || !size) {
 return  alert("Please Provide Prompt and Size")
 }

  generateImage({prompt,size})
  
}


const generateImage =async ({ prompt, size }) => {
  try {
    spinnerControl({ show: true });
    const response = await fetch(
      'http://localhost:4000/api/v1/generate-image',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt, size }),
      }
    );
    const data=await response.json()
    if (data?.data) {
     document.querySelector("#image").src=data.data
   }
   spinnerControl({ show: false });
  } catch (err) {
    console.log("error",err)
     spinnerControl({ show: false });
 }
  
}

const spinnerControl = ({show=false}) => {
  if (show) {
    document.querySelector(".spinner").classList.add("show")
  } else {
     document.querySelector('.spinner').classList.remove('show');
  }
  
}