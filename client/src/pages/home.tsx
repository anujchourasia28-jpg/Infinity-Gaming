import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MonitorPlay, Gamepad2, Zap, Clock, MapPin, ChevronRight, Cpu, MessageCircle, Joystick } from "lucide-react";
import { api, type InquiryInput } from "@shared/routes";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import { CyberButton } from "@/components/ui/cyber-button";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="w-8 h-8 text-primary" />
            <span className="font-display font-bold text-2xl tracking-widest uppercase text-white">
              Infinity<span className="text-primary">Gaming</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-display text-sm uppercase tracking-wider">
            <a href="#arena" className="hover:text-primary transition-colors">The Arena</a>
            <a href="#arsenal" className="hover:text-primary transition-colors">Arsenal</a>
            <a href="#games" className="hover:text-primary transition-colors">Games</a>
            <a href="#intel" className="hover:text-primary transition-colors">Intel</a>
            <a href="https://wa.me/917067601040?text=Hi%20Infinity%20Gaming%2C%20I%20would%20like%20to%20book%20a%20gaming%20session" target="_blank" rel="noopener noreferrer">
              <CyberButton className="px-4 py-2 text-xs flex items-center gap-2">
                <MessageCircle className="w-4 h-4" /> Chat Now
              </CyberButton>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="arena" className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />
        
        {/* Abstract background glow */}
        <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 -left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-display uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Systems Online
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-black uppercase leading-[0.9] mb-6">
              Step Into <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-glow-cyan">The Dark</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
              Experience the infinite. Elevate your gameplay at Infinity Gaming Bhopal, the city's premier high-performance arena located in the heart of MP Nagar, Zone-II. Designed for the hardcore elite and the casual squad alike. Where every frame counts and the grind never stops.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#book">
                <CyberButton>
                  Secure Your Rig <ChevronRight className="w-5 h-5" />
                </CyberButton>
              </a>
              <a href="#intel">
                <CyberButton variant="outline">
                  View Coordinates
                </CyberButton>
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden border border-border/50 box-glow-cyan group">
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
              {/* gaming setup glowing dark room */}
              <img 
                src="https://images.unsplash.com/photo-1587829191301-42d9f82f0e2e?w=800&q=80&fit=crop" 
                alt="High performance gaming setup" 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-6 left-6 z-20 flex items-center gap-4">
                <div className="bg-background/80 backdrop-blur border border-border p-3 rounded-lg flex items-center gap-3">
                  <Cpu className="text-primary w-6 h-6" />
                  <div>
                    <div className="text-xs text-muted-foreground uppercase font-display">Latency</div>
                    <div className="font-bold text-white">&lt; 1ms</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Arsenal / Features Section */}
      <section id="arsenal" className="py-24 relative bg-card/50 border-y border-border/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold uppercase mb-4">
              Your <span className="text-secondary text-glow-purple">Arsenal</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Designed for the hardcore elite and the casual squad alike. Our specialized dark-themed basement sanctuary is engineered for total immersion.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <MonitorPlay className="w-10 h-10 mb-4 text-primary" />,
                title: "Pro-Grade PC Rigs",
                desc: "Tournament-ready specifications capable of pushing maximum frames on ultra settings. No compromises."
              },
              {
                icon: <Gamepad2 className="w-10 h-10 mb-4 text-secondary" />,
                title: "Next-Gen Consoles",
                desc: "Equipped with the latest hardware to ensure you experience next-generation titles exactly as intended."
              },
              {
                icon: <Zap className="w-10 h-10 mb-4 text-primary" />,
                title: "Low-Latency Environment",
                desc: "Fiber-optic backbone and zero-lag peripherals mean the only limiting factor is your reaction time."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group relative p-8 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  {feature.icon}
                  <h3 className="text-xl font-display font-bold mb-2 text-white">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consoles & Games Section */}
      <section id="games" className="py-24 relative bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold uppercase mb-4">
              Available <span className="text-accent text-glow-cyan">Hardware</span> & <span className="text-secondary">Titles</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Premium gaming rigs and the latest consoles equipped with blockbuster titles and competitive esports games.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Consoles */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-2xl overflow-hidden border border-border/50 box-glow-purple mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=500&q=80&fit=crop" 
                  alt="Gaming consoles" 
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent" />
              </div>
              <h3 className="text-2xl font-display font-bold uppercase mb-6 flex items-center gap-2">
                <Joystick className="text-secondary" /> Premium Hardware
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "PlayStation 5", specs: "4K @ 120fps, Ultimate Gaming" },
                  { name: "Xbox Series X", specs: "4K HDR, Gamepass Ready" },
                  { name: "High-End Gaming PCs", specs: "RTX 4080 Ti, i9-13900K, 32GB RAM" },
                  { name: "Nintendo Switch Pro", specs: "Portable Gaming Excellence" }
                ].map((console, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-4 rounded-lg bg-card border border-border/50 hover:border-secondary/50 transition-colors"
                  >
                    <h4 className="font-display font-bold text-white text-sm mb-1">{console.name}</h4>
                    <p className="text-xs text-muted-foreground">{console.specs}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Games */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-2xl overflow-hidden border border-border/50 box-glow-cyan mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1538481143235-405ba7fa84a6?w=500&q=80&fit=crop" 
                  alt="Gaming titles" 
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent" />
              </div>
              <h3 className="text-2xl font-display font-bold uppercase mb-6 flex items-center gap-2">
                <Zap className="text-primary" /> Featured Titles
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Call of Duty MW3", genre: "FPS • Competitive" },
                  { title: "Counter-Strike 2", genre: "Tactical Shooter" },
                  { title: "Valorant", genre: "Competitive FPS" },
                  { title: "Cyberpunk 2077", genre: "Action RPG" },
                  { title: "Elden Ring", genre: "Action RPG" },
                  { title: "Fortnite Battle Royale", genre: "BR • Esports" },
                  { title: "Palworld", genre: "Adventure • Multiplayer" },
                  { title: "Street Fighter 6", genre: "Fighting • Arcade" }
                ].map((game, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-4 rounded-lg bg-card border border-border/50 hover:border-primary/50 transition-colors"
                  >
                    <h4 className="font-display font-bold text-white text-sm mb-1">{game.title}</h4>
                    <p className="text-xs text-muted-foreground">{game.genre}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location & Booking Split */}
      <section id="intel" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          
          {/* Intel (Location/Hours) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold uppercase mb-8">
              Mission <span className="text-primary text-glow-cyan">Intel</span>
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Sector / Zone</h4>
                  <p className="text-muted-foreground mb-3">
                    Infinity Gaming Bhopal<br/>
                    Heart of MP Nagar, Zone-II<br/>
                    Specialized Basement Sanctuary<br/>
                    <span className="text-xs text-primary/70">Coordinates: 23.2329°N, 77.4364°E</span>
                  </p>
                  <a 
                    href="https://maps.google.com/?q=23.2329133,77.4364161" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 text-sm font-display uppercase tracking-wider transition-colors"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-secondary/10 border border-secondary/20 text-secondary">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Operational Hours</h4>
                  <p className="text-muted-foreground">
                    Open Daily<br/>
                    10:00 AM — 11:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 border border-border/50 rounded-xl bg-card relative overflow-hidden">
              <div className="absolute right-0 top-0 w-32 h-32 bg-primary/5 rounded-bl-full pointer-events-none" />
              <h4 className="font-display font-bold uppercase text-white mb-2">Notice</h4>
              <p className="text-sm text-muted-foreground">
                Walk-ins are accepted, but securing your rig in advance guarantees immediate deployment upon arrival.
              </p>
            </div>
          </motion.div>

          {/* Booking Form */}
          <motion.div
            id="book"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="p-8 rounded-2xl bg-card border border-border box-glow-cyan relative">
              <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                <Zap className="w-32 h-32" />
              </div>
              
              <h3 className="text-2xl font-display font-bold uppercase mb-6 flex items-center gap-2">
                <span className="w-2 h-6 bg-primary block" /> Book Your Session
              </h3>

              <InquiryForm />

              <div className="mt-6 pt-6 border-t border-border/50">
                <p className="text-xs text-muted-foreground mb-4">Prefer instant messaging?</p>
                <a 
                  href="https://wa.me/917067601040?text=Hi%20Infinity%20Gaming%2C%20I%20would%20like%20to%20know%20more%20about%20available%20slots" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition-colors text-sm font-display"
                >
                  <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/50 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-display font-bold text-white uppercase mb-3">Contact</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-primary" />
                  <a href="tel:07067601040" className="hover:text-primary transition-colors">+91 7067601040</a>
                </p>
                <p className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-primary" />
                  <a href="https://wa.me/917067601040" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">WhatsApp Message</a>
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>MP Nagar, Zone-II, Bhopal</span>
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-display font-bold text-white uppercase mb-3">Hours</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Open Daily</p>
                <p className="text-primary font-bold">10:00 AM — 11:00 PM</p>
                <p className="text-xs">Walk-ins Welcome</p>
              </div>
            </div>
            <div>
              <h4 className="font-display font-bold text-white uppercase mb-3">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <a href="#arena" className="text-muted-foreground hover:text-primary transition-colors block">The Arena</a>
                <a href="#arsenal" className="text-muted-foreground hover:text-primary transition-colors block">Arsenal</a>
                <a href="#games" className="text-muted-foreground hover:text-primary transition-colors block">Games & Hardware</a>
                <a href="#book" className="text-muted-foreground hover:text-primary transition-colors block">Book Now</a>
              </div>
            </div>
          </div>
          <div className="border-t border-border/50 pt-8 text-center">
            <p className="text-sm text-muted-foreground font-display tracking-widest uppercase">
              © {new Date().getFullYear()} Infinity Gaming Bhopal. All systems nominal.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Sub-component for the form
function InquiryForm() {
  const { mutate: submitInquiry, isPending } = useCreateInquiry();
  
  const form = useForm<InquiryInput>({
    resolver: zodResolver(api.inquiries.create.input),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      date: "",
      message: "",
    }
  });

  const onSubmit = (data: InquiryInput) => {
    submitInquiry(data, {
      onSuccess: () => form.reset()
    });
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 relative z-10">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-xs font-display uppercase tracking-wider text-muted-foreground">Callsign (Name)</label>
          <input 
            {...form.register("name")}
            className="w-full bg-background border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            placeholder="John Doe"
          />
          {form.formState.errors.name && (
            <span className="text-destructive text-xs">{form.formState.errors.name.message}</span>
          )}
        </div>
        
        <div className="space-y-2">
          <label className="text-xs font-display uppercase tracking-wider text-muted-foreground">Comms (Phone)</label>
          <input 
            {...form.register("phone")}
            className="w-full bg-background border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            placeholder="+91 98765 43210"
          />
          {form.formState.errors.phone && (
            <span className="text-destructive text-xs">{form.formState.errors.phone.message}</span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-xs font-display uppercase tracking-wider text-muted-foreground">Network (Email)</label>
          <input 
            {...form.register("email")}
            type="email"
            className="w-full bg-background border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            placeholder="player@network.com"
          />
          {form.formState.errors.email && (
            <span className="text-destructive text-xs">{form.formState.errors.email.message}</span>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-xs font-display uppercase tracking-wider text-muted-foreground">Drop Date</label>
          <input 
            {...form.register("date")}
            type="date"
            className="w-full bg-background border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all [color-scheme:dark]"
          />
          {form.formState.errors.date && (
            <span className="text-destructive text-xs">{form.formState.errors.date.message}</span>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-display uppercase tracking-wider text-muted-foreground">Directives (Message)</label>
        <textarea 
          {...form.register("message")}
          className="w-full bg-background border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all min-h-[100px] resize-y"
          placeholder="Specify rig requirements, group size, or special requests..."
        />
      </div>

      <CyberButton 
        type="submit" 
        className="w-full mt-4" 
        disabled={isPending}
      >
        {isPending ? "Transmitting..." : "Initialize Sequence"}
      </CyberButton>
    </form>
  );
}
