const options = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: "chart-pie.svg",
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: "cursor-arrow-rays.svg",
  },
  {
    name: "Security",
    description: "Your customers data will be safe and secure",
    href: "#",
    icon: "finger-print.svg",
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: "squares-plus.svg",
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: "arrow-path.svg",
  },
]

export async function GET() {
  return new Response(JSON.stringify(options), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  })
}
