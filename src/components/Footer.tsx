"use client"

import { useEffect, useState } from "react"

import Image from "next/image"
import Link from "next/link"

import { CopyrightIcon } from "@/icons"
import { fetchData } from "@/scripts/useFetchData"
import { FooterProps, SocialMediaProps } from "@/types"

const Footer = () => {
  const [footerLinks, setFooterLinks] = useState<FooterProps[]>([])
  const [icons, setIcons] = useState<SocialMediaProps[]>([])
  useEffect(() => {
    const fetchOptions = async () => {
      const newLink = await fetchData<FooterProps[]>("footerLinks")
      setFooterLinks(newLink)
      const newIcon = await fetchData<SocialMediaProps[]>("socialMedia")
      setIcons(newIcon)
    }
    fetchOptions()
  }, [])
  return (
    <footer className="text-foreground mx-auto mt-72 max-w-[1440px] p-10">
      <div className="flex justify-between gap-20 max-lg:flex-col">
        <div className="flex flex-col md:w-1/3">
          <Link href="/">
            <Image
              src="/favicon.ico"
              alt="Vercel Icon"
              className="h-8 w-auto"
              width={10}
              height={10}
            />
          </Link>
          <p className="mt-6 text-base leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            fermentum ultrices dui, venenatis iaculis elit molestie ut. Nunc
            eget accumsan risus. Sed at leo nec nunc condimentum tincidunt ac et
            erat.
          </p>
          <div className="mt-8 flex items-center gap-5">
            {icons.map((icon) => (
              <div
                className="flex h-12 w-12 cursor-pointer items-center justify-center hover:-translate-y-1 hover:transition"
                key={icon.alt}
              >
                <Image
                  src={`/assets/icons/${icon.image}`}
                  alt={icon.alt}
                  width={10}
                  height={10}
                  className="h-8 w-auto"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 flex-wrap justify-between gap-20 md:w-2/3 lg:gap-10">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="mb-6 text-2xl leading-normal font-medium">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className="mt-3 text-base leading-normal hover:font-bold"
                    key={link.name}
                  >
                    <Link href={link.href}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-24 flex justify-between max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 cursor-pointer items-center justify-start gap-2">
          <Image
            src={CopyrightIcon}
            alt="copyright sign"
            className="-my-3 h-4 w-auto rounded-full"
            width={10}
            height={10}
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default Footer
