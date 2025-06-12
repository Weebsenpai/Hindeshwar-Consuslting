
'use server';
/**
 * @fileOverview AI agent that generates images based on a prompt.
 *
 * - generateImage - A function that generates an image and returns its data URI.
 * - GenerateImageInput - The input type for the generateImage function.
 * - GenerateImageOutput - The return type for the generateImage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateImageInputSchema = z.object({
  prompt: z.string().describe('The prompt to generate an image from.'),
});
export type GenerateImageInput = z.infer<typeof GenerateImageInputSchema>;

const GenerateImageOutputSchema = z.object({
  imageDataUri: z.string().describe('The generated image as a data URI.'),
});
export type GenerateImageOutput = z.infer<typeof GenerateImageOutputSchema>;

export async function generateImage(input: GenerateImageInput): Promise<GenerateImageOutput> {
  return generateImageFlow(input);
}

const generateImageFlow = ai.defineFlow(
  {
    name: 'generateImageFlow',
    inputSchema: GenerateImageInputSchema,
    outputSchema: GenerateImageOutputSchema,
  },
  async (input: GenerateImageInput) => {
    const { media } = await ai.generate({
      model: 'googleai/gemini-2.0-flash-exp',
      prompt: `Generate a visually appealing, professional image suitable for a consulting website, based on the theme: ${input.prompt}. Ensure the image is high quality and abstract or conceptual rather than overly literal.`,
      config: {
        responseModalities: ['TEXT', 'IMAGE'],
      },
      // Add safety settings to be less restrictive for creative content, if appropriate for the prompts.
      // Example: Allow most content but block high-risk hate speech.
      // safetySettings: [
      //   {
      //     category: 'HARM_CATEGORY_HATE_SPEECH',
      //     threshold: 'BLOCK_ONLY_HIGH',
      //   },
      //   {
      //     category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
      //     threshold: 'BLOCK_NONE',
      //   },
      //   {
      //     category: 'HARM_CATEGORY_HARASSMENT',
      //     threshold: 'BLOCK_NONE',
      //   },
      //   {
      //     category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
      //     threshold: 'BLOCK_NONE',
      //   },
      // ],
    });

    if (!media?.url) {
      console.error('Image generation failed or returned no media URL for prompt:', input.prompt);
      // Fallback to a generic placeholder if generation fails
      return { imageDataUri: 'https://placehold.co/1920x1080.png?text=Image+Generation+Failed' };
    }
    return { imageDataUri: media.url };
  }
);
