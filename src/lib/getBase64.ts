import { getPlaiceholder } from 'plaiceholder';

async function getBase64(imageUrl: string) {
  // https://plaiceholder.co/docs/usage#base64
  try {
    const res = await fetch(imageUrl);

    if (!res.ok) {
      throw new Error(`Failed to fetch image: ${res.status} ${res.statusText}`);
    }

    const buffer = await res.arrayBuffer();
    const { base64 } = await getPlaiceholder(Buffer.from(buffer));
    console.log(base64);

    return base64;
  } catch (e) {
    if (e instanceof Error) console.log(e.stack);
  }
}
