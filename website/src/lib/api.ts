export async function askAI(message: string) {
  const res = await fetch("https://your-api-url.vercel.app/api/ai/ask", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  });

  if (!res.ok) {
    throw new Error("Failed to reach AI API");
  }

  const data = await res.json();
  return data.reply;
}
