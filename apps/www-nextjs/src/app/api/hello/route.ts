export const GET = async (_request: Request) => {
  const responseText = 'Hello, Next.js!';
  return new Response(responseText);
};
