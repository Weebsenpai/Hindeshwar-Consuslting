import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Briefcase, BarChart3, Lightbulb, ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url(https://placehold.co/1920x1080.png?text=.)", backgroundSize: "cover", backgroundPosition: "center" }} data-ai-hint="abstract pattern"></div>
        <div className="container relative z-10 text-center">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl">
            Elevate Your Business with <span className="text-accent">Apex Consulting</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground sm:text-xl md:text-2xl">
            Strategic insights and expert guidance to help you achieve peak performance and sustainable growth.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link href="/services">Our Services <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary/10">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">Our Core Services</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Tailored solutions designed to address your unique challenges and opportunities.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Briefcase className="h-10 w-10 text-accent" />,
                title: "Strategic Planning",
                description: "Develop robust strategies to navigate market complexities and achieve long-term objectives.",
                href: "/services#strategic-planning"
              },
              {
                icon: <BarChart3 className="h-10 w-10 text-accent" />,
                title: "Operational Excellence",
                description: "Optimize your operations for efficiency, productivity, and cost-effectiveness.",
                href: "/services#operational-excellence"
              },
              {
                icon: <Lightbulb className="h-10 w-10 text-accent" />,
                title: "Innovation & Growth",
                description: "Foster innovation and identify new growth avenues to stay ahead of the curve.",
                href: "/services#innovation-growth"
              },
            ].map((service) => (
              <Card key={service.title} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="items-center text-center p-6 bg-primary/5">
                  {service.icon}
                  <CardTitle className="mt-4 text-2xl font-headline text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow p-6 text-center">
                  <CardDescription className="text-base text-muted-foreground">{service.description}</CardDescription>
                </CardContent>
                <div className="p-6 pt-0 text-center">
                   <Button asChild variant="link" className="text-primary hover:text-accent">
                    <Link href={service.href}>Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Snippet Section */}
      <section className="py-16 md:py-24 bg-muted/40">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">About Apex Consulting</h2>
              <p className="mt-6 text-lg text-muted-foreground">
                At Apex Consulting, we are passionate about helping businesses thrive. Our team of experienced consultants brings a wealth of knowledge and a commitment to delivering measurable results. We partner with you to understand your vision and challenges, crafting bespoke solutions that drive success.
              </p>
              <div className="mt-8">
                <Button asChild size="lg" className="text-lg">
                  <Link href="/about">Discover More About Us</Link>
                </Button>
              </div>
            </div>
            <div className="aspect-video overflow-hidden rounded-lg shadow-xl">
              <Image
                src="https://placehold.co/600x400.png"
                alt="Team working collaboratively"
                width={600}
                height={400}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                data-ai-hint="team collaboration"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">Ready to Reach New Heights?</h2>
          <p className="mt-6 max-w-xl mx-auto text-lg sm:text-xl">
            Let Apex Consulting be your partner in success. Contact us today for a consultation and let's discuss how we can help your business soar.
          </p>
          <div className="mt-10">
            <Button asChild size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6">
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
