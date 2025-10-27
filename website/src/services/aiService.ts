export async function askAI(message: string) {
  try {
    const response = await fetch("http://localhost:5000/api/ai/ask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      throw new Error("Failed to get a response from AI");
    }

    const data = await response.json();
    return data.reply;
  } catch (error) {
    console.error("AI request failed:", error);
    return "Something went wrong talking to the AI.";
  }
}
