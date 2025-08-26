const options = [
  {
    title: "Audi",
    value: "audi",
  },
  {
    title: "BMW",
    value: "bmw",
  },
  {
    title: "Citroen",
    value: "citroen",
  },
]

export async function GET() {
  return new Response(JSON.stringify(options), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  })
}
