const logos = [
  { image: "facebook.svg", alt: "Facebook Logo" },
  { image: "x.svg", alt: "X Logo" },
  { image: "instagram.svg", alt: "Instagram Logo" },
  { image: "youtube.svg", alt: "YouTube Logo" },
  { image: "wordpress.svg", alt: "Wordpress Logo" },
  { image: "linkedin.svg", alt: "Linkedin Logo" },
]

export async function GET() {
  return new Response(JSON.stringify(logos), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  })
}
