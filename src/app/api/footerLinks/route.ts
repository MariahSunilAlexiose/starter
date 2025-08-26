const links = [
  {
    title: "Products",
    links: [
      { name: "Air Force 1", href: "/" },
      { name: "Air Max 1", href: "/" },
      { name: "Air Jordan 1", href: "/" },
      { name: "Air Force 2", href: "/" },
      { name: "Nike Waffle Racer", href: "/" },
      { name: "Nike Cortez", href: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", href: "/" },
      { name: "FAQs", href: "/" },
      { name: "How it works", href: "/" },
      { name: "Privacy policy", href: "/" },
      { name: "Payment policy", href: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@nike.com", href: "mailto:customer@nike.com" },
      { name: "+92554862354", href: "tel:+92554862354" },
    ],
  },
]

export async function GET() {
  return new Response(JSON.stringify(links), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  })
}
