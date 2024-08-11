import { TURTLE_BACKEND_URI } from "./BACKEND_URI";


export async function runCodeApi(body: string, code: string): Promise<string> {
 let base64Image = "";


 try {
   const response = await fetch(`${TURTLE_BACKEND_URI}/run-code?code=${code}`, {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: body
   });


   if (!response.ok) {
     throw new Error(`Error ${response.status}: ${response.statusText}`);
   }

// binary large objects, stores things in binary
   const blob = await response.blob();
   base64Image = await new Promise((resolve, reject) => {
     const reader = new FileReader();
     reader.readAsDataURL(blob);
     reader.onloadend = () => resolve(reader.result as string);
     reader.onerror = reject;
   });
 } catch (error) {
   console.error(error);
 }


 return base64Image;
}





