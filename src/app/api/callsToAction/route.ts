const callsToAction = [
  { name: "Watch demo", href: "#", icon: "play-circle.svg" },
  { name: "Contact sales", href: "#", icon: "phone.svg" },
]

export async function GET() {
  return new Response(JSON.stringify(callsToAction), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  })
}
