"use client"

import { useState } from "react"

import Image from "next/image"

import {
  Alert,
  AlertDescription,
  AlertTitle,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
  Label,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Progress,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components"
import { CheckCircleIcon, CheckIcon, ChevronDownIcon } from "@/icons"
import { ChocolateCookiesImg, MushroomRisottoImg } from "@/img"

const projects = [
  { id: "alpha", name: "Alpha Team" },
  { id: "beta", name: "Beta Team" },
  { id: "gamma", name: "Gamma Team" },
]

const members = [
  { name: "Mariah", role: "Lead", progress: 80 },
  { name: "Jalen", role: "Dev", progress: 60 },
  { name: "Zara", role: "Design", progress: 90 },
]

const TeamProjectTracker = () => {
  const [open, setOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState("Select project...")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredProjects = projects.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <Alert>
        <Image
          src={CheckCircleIcon}
          alt="Check Circle Icon"
          width={25}
          height={25}
          className="w-6 h-6"
        />
        <AlertTitle>Components used:</AlertTitle>
        <AlertDescription>
          Contains Combobox (which contains Popover and Command component),
          Avatar, Table, and Progress component.
        </AlertDescription>
      </Alert>
      {/* Searchable Popover */}
      <div className="flex flex-col gap-1 justify-between">
        <Label>Project</Label>
        <Popover>
          <PopoverTrigger onClick={() => setOpen(!open)}>
            <Button variant="outline" className="justify-between">
              {selectedProject}
              <Image src={ChevronDownIcon} alt="Chevron Down Icon" />
            </Button>
          </PopoverTrigger>
          <PopoverContent isOpen={open} className="w-64 p-0">
            <Command>
              <CommandInput
                placeholder="Search project..."
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <CommandList>
                {filteredProjects.length === 0 ? (
                  <CommandEmpty>No project found.</CommandEmpty>
                ) : (
                  filteredProjects.map((project) => (
                    <CommandItem
                      key={project.id}
                      value={project.name}
                      onItemSelect={(name: string) => {
                        setSelectedProject(name)
                        setSearchTerm("")
                        setOpen(false)
                      }}
                    >
                      <Image
                        src={CheckIcon}
                        alt="Check"
                        className={`${
                          selectedProject === project.name
                            ? "opacity-100"
                            : "opacity-0"
                        } size-4`}
                      />
                      {project.name}
                    </CommandItem>
                  ))
                )}
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>

      {/* Avatars */}
      <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
        <Avatar>
          <AvatarFallback>CC</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src={MushroomRisottoImg} alt="Mushroom Risotto" />
          <AvatarFallback>MR</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src={ChocolateCookiesImg} alt="Chocolate Cookies" />
          <AvatarFallback>CC</AvatarFallback>
        </Avatar>
      </div>

      {/* Table + Progress */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Progress</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {members.map((member, index) => (
            <TableRow key={index}>
              <TableCell>{member.name}</TableCell>
              <TableCell>{member.role}</TableCell>
              <TableCell>
                <Progress value={member.progress} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default TeamProjectTracker
