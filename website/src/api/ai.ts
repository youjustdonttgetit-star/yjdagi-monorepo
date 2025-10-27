export const askAI = async (message: string) => {
  try {
    const res = await fetch("http://localhost:5000/api/ai/ask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    const data = await res.json();
    return data.reply || "No response received.";
  } catch (error) {
    console.error("AI API Error:", error);
    return "Error connecting to AI.";
  }
};
