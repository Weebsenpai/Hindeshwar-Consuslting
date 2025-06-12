import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Users, Target, Eye, Award } from "lucide-react";
import Link from "next/link";

const teamMembers = [
  {
    name: "Dr. Eleanor Vance",
    role: "Founder & CEO",
    image: "https://placehold.co/300x300.png",
    bio: "Visionary leader with 20+ years of experience in strategic consulting and business transformation.",
    aiHint: "professional portrait"
  },
  {
    name: "Marcus Chen",
    role: "Lead Strategist",
    image: "https://placehold.co/300x300.png",
    bio: "Expert in market analysis and operational excellence, driving impactful results for clients.",
    aiHint: "business person"
  },
  {
    name: "Aisha Khan",
    role: "Senior Consultant, Innovation",
    image: "https://placehold.co/300x300.png",
    bio: "Specializes in fostering innovation and guiding companies through digital transformation.",
    aiHint: "consultant photo"
  },
];

const values = [
  {
    icon: <Target className="h-8 w-8 text-accent" />,
    title: "Client-Centric",
    description: "Our clients' success is our primary focus. We build lasting partnerships based on trust and mutual respect."
  },
  {
    icon: <Award className="h-8 w-8 text-accent" />,
    title: "Excellence",
    description: "We strive for the highest standards in everything we do, delivering quality and impactful solutions."
  },
  {
    icon: <Users className="h-8 w-8 text-accent" />,
    title: "Integrity",
    description: "We operate with transparency, honesty, and ethical principles in all our engagements."
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-accent" />,
    title: "Innovation",
    description: "We embrace creative thinking and continuous learning to provide cutting-edge solutions."
  }
];

export default function AboutPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container text-center">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight text-primary sm:text-5xl">About Apex Consulting</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground sm:text-xl">
            Your trusted partner in navigating the complexities of modern business.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-last lg:order-first">
              <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">Our Story</h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Apex Consulting was founded with a singular vision: to empower businesses to reach their full potential. We recognized that in an ever-changing global market, organizations need more than just advice; they need a strategic partner who understands their unique challenges and can deliver tailored, actionable solutions.
              </p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Over the years, we've built a reputation for excellence, integrity, and a client-centric approach. Our team comprises seasoned experts from diverse industries, bringing a wealth of knowledge and practical experience to every project. We are committed to driving sustainable growth and creating lasting value for our clients.
              </p>
            </div>
            <div className="aspect-video overflow-hidden rounded-lg shadow-xl">
              <Image
                src="https://placehold.co/600x400.png"
                alt="Apex Consulting office or team"
                width={600}
                height={400}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                data-ai-hint="modern office"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-16 md:py-24 bg-muted/40">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="rounded-lg border bg-card p-8 shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <Eye className="h-10 w-10 text-primary" />
                <h3 className="font-headline text-2xl font-semibold text-primary">Our Vision</h3>
              </div>
              <p className="text-muted-foreground">To be the leading consulting firm recognized for transforming businesses and shaping a future of sustainable success and innovation.</p>
            </div>
            <div className="rounded-lg border bg-card p-8 shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <Target className="h-10 w-10 text-primary" />
                <h3 className="font-headline text-2xl font-semibold text-primary">Our Mission</h3>
              </div>
              <p className="text-muted-foreground">To provide expert, data-driven consulting services that empower our clients to overcome challenges, seize opportunities, and achieve peak performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">Our Core Values</h2>
            <p className="mt-4 text-lg text-muted-foreground">The principles that guide our work and relationships.</p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="flex flex-col items-center text-center p-6 rounded-lg border bg-card shadow-sm hover:shadow-md transition-shadow">
                {value.icon}
                <h4 className="mt-4 font-headline text-xl font-semibold text-primary">{value.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet The Team Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">Meet Our Team</h2>
            <p className="mt-4 text-lg text-muted-foreground">Experienced professionals dedicated to your success.</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div key={member.name} className="rounded-lg border bg-card p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={150}
                  height={150}
                  className="mx-auto mb-4 rounded-full object-cover"
                  data-ai-hint={member.aiHint}
                />
                <h3 className="font-headline text-xl font-semibold text-primary">{member.name}</h3>
                <p className="text-sm text-accent font-medium">{member.role}</p>
                <p className="mt-2 text-xs text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">Partner with Apex Consulting</h2>
          <p className="mt-6 max-w-xl mx-auto text-lg sm:text-xl">
            Let's build a brighter future for your business together. Reach out to our team to discuss your needs.
          </p>
          <div className="mt-10">
            <Button asChild size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
