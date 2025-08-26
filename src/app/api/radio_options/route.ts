const options = [
  { title: "Default", value: "r1" },
  { title: "Comfortable", value: "r2" },
  { title: "Compact", value: "r3" },
]

export async function GET() {
  return new Response(JSON.stringify(options), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  })
}
