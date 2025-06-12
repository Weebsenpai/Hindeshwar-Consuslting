import { ContactForm } from "@/components/forms/contact-form";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-background">
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container text-center">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight text-primary sm:text-5xl">Contact Us</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground sm:text-xl">
            We're here to help. Reach out to us with any questions or to discuss your project.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="rounded-lg border bg-card p-8 shadow-lg">
              <h2 className="font-headline text-2xl font-semibold text-primary mb-6">Send us a message</h2>
              <ContactForm />
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="font-headline text-2xl font-semibold text-primary mb-4">Our Contact Details</h2>
                <p className="text-muted-foreground mb-6">
                  Feel free to contact us through any of the following channels. We look forward to hearing from you!
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 rounded-md bg-accent/20 p-3 text-accent">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary">Address</h3>
                  <p className="text-muted-foreground">123 Apex Avenue, Growth City, ST 54321</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 rounded-md bg-accent/20 p-3 text-accent">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary">Phone</h3>
                  <p className="text-muted-foreground">(123) 456-7890</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 rounded-md bg-accent/20 p-3 text-accent">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary">Email</h3>
                  <p className="text-muted-foreground">info@apexconsulting.com</p>
                </div>
              </div>
              <div className="pt-4">
                 <h3 className="font-semibold text-primary mb-2">Business Hours</h3>
                 <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 5:00 PM</p>
                 <p className="text-muted-foreground">Saturday - Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="h-[400px] md:h-[500px] bg-muted/40">
        <div className="container h-full py-8">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890123456!2d-0.1234567890123456!3d51.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMDcnMjQuNCJTIDDDsDA3JzIzLjYiVw!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy"
                title="Google Maps Placeholder"
                className="rounded-lg shadow-md"
            ></iframe>
        </div>
      </section>
    </div>
  );
}
