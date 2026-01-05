import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, Linkedin, Facebook } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "reazulislam732@gmail.com",
      href: "mailto:reazulislam732@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+880 1641-696822",
      href: "tel:+8801641696822",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Adarsha Sadar, Cumilla, Chittagong, Bangladesh",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-24 gradient-hero relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full gradient-glow opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wider uppercase mb-4">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Interested in discussing opportunities, collaborations, or just want 
            to say hello? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="font-heading font-semibold text-foreground text-2xl">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-5 p-4 rounded-xl gradient-card border border-border/50 hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="text-primary" size={22} />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">{item.label}</p>
                    <p className="text-foreground font-medium">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <p className="text-muted-foreground mb-4">Follow me on:</p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 rounded-xl bg-secondary/50 border border-border/50 flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 transition-all duration-300"
                >
                  <Linkedin className="text-foreground" size={20} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-xl bg-secondary/50 border border-border/50 flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 transition-all duration-300"
                >
                  <Facebook className="text-foreground" size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="gradient-card rounded-2xl p-8 border border-border/50 flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <Send className="text-primary" size={32} />
            </div>
            
            <h3 className="font-heading font-semibold text-foreground text-2xl mb-4">
              Send a Message
            </h3>
            
            <p className="text-muted-foreground mb-8 max-w-sm">
              Have a question or want to work together? Fill out the form and I'll get back to you as soon as possible.
            </p>
            
            <Button 
              variant="hero" 
              size="xl" 
              className="w-full max-w-xs"
              asChild
            >
              <a 
                href="https://forms.gle/syv6dWxNMkC7spbk6" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Open Contact Form
                <Send size={18} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
