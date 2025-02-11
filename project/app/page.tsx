"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, ExternalLink, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

const projects = [
  {
    title: "Project One",
    description: "A full-stack web application built with Next.js and Supabase",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "Project Two",
    description: "Mobile-first e-commerce platform using React Native",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2372&auto=format&fit=crop",
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "Project Three",
    description: "AI-powered data visualization dashboard",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2376&auto=format&fit=crop",
    github: "https://github.com",
    demo: "https://demo.com"
  }
];

const skills = [
  "React", "Next.js", "TypeScript", "Node.js", "Python",
  "TailwindCSS", "PostgreSQL", "AWS", "Docker", "Git"
];

export default function Home() {
  useEffect(() => {
    // Reset scroll position when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center p-4 relative">
        <div className="max-w-3xl text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Suzan Mansuri
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground">
            Full Stack Developer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I build exceptional and accessible digital experiences for the web.
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="outline" size="icon" asChild>
              <Link href="https://github.com/lilblackboot" target="_blank">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href="mailto:suzanmansuri0000@gmail.com?subject=here%20from%20the%20portfolio%20website!!!" target="_blank">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href="mailto:suzanmansuri0000@gmail.com">
                <Mail className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="absolute bottom-8 animate-bounce"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <ChevronDown className="h-6 w-6" />
        </Button>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4" id="projects">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.github} target="_blank">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.demo} target="_blank">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-background px-4 py-2 rounded-full border hover:border-primary transition-colors"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
          <p className="text-muted-foreground mb-8">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
            I'll try my best to get back to you!
          </p>
          <Button asChild>
            <Link href="mailto:hello@example.com">
              Say Hello
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-muted-foreground">
        <p>Designed & Built by John Doe</p>
      </footer>
    </main>
  );
}