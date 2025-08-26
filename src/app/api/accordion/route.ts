const accordion = [
  {
    trigger: "Is it accessible?",
    content: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    trigger: "Is it accessible?",
    content: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    trigger: "Is it accessible?",
    content: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
]

export async function GET() {
  return new Response(JSON.stringify(accordion), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  })
}
