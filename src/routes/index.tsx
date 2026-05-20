import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Lightbulb,
  Rocket,
  Palette,
  Sprout,
  Briefcase,
  Phone,
  ArrowRight,
  Check,
  Leaf,
  Hammer,
  Sparkles,
  Mic,
  ShoppingBag,
  PlayCircle,
} from "lucide-react";
import logoUrl from "@/assets/skillseed-logo.svg";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const Route = createFileRoute("/")({
  component: Index,
});

const pillars = [
  { icon: Lightbulb, title: "Discover Strengths", desc: "Uncover natural talents and interests through guided exploration." },
  { icon: Palette, title: "Build Practical Skills", desc: "Creativity, teamwork, and problem-solving in every project." },
  { icon: Rocket, title: "Explore Future Careers", desc: "Early exposure to tech, STEM, and the world of work." },
  { icon: Sprout, title: "Entrepreneurial Mindset", desc: "Spot opportunities, innovate, and master business basics." },
  { icon: Briefcase, title: "Future Career Pathways", desc: "Align growing skills to real vocational opportunities." },
];

function WaitlistDialog({ trigger }: { trigger: React.ReactNode }) {
  const [submitted, setSubmitted] = useState(false);
  const [open, setOpen] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setOpen(false);
      setSubmitted(false);
    }, 2200);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">Join the waitlist</DialogTitle>
          <DialogDescription>
            Be the first to know when SkillSeed Builder Series opens for your child.
          </DialogDescription>
        </DialogHeader>
        {submitted ? (
          <div className="flex flex-col items-center gap-3 py-8 text-center">
            <div className="rounded-full bg-secondary/40 p-3">
              <Check className="h-7 w-7 text-primary" />
            </div>
            <p className="font-display text-xl">You're on the list!</p>
            <p className="text-sm text-muted-foreground">We'll reach out shortly with next steps.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="parent">Parent / guardian name</Label>
              <Input id="parent" required placeholder="Your full name" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required placeholder="you@example.com" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="grid gap-2">
                <Label htmlFor="age">Child's age</Label>
                <Select required>
                  <SelectTrigger id="age">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 8 }, (_, i) => 9 + i).map((a) => (
                      <SelectItem key={a} value={String(a)}>{a} years</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="country">Country</Label>
                <Select required>
                  <SelectTrigger id="country">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rw">Rwanda</SelectItem>
                    <SelectItem value="ke">Kenya</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">Phone (optional)</Label>
              <Input id="phone" type="tel" placeholder="+250 ..." />
            </div>
            <DialogFooter>
              <Button type="submit" size="lg" className="w-full">
                Reserve a spot
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="absolute top-0 z-20 w-full">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-2.5 text-primary-foreground">
            <img src={logoUrl} alt="SkillSeed" className="h-9 w-9 rounded-md bg-white/95 p-1 shadow-sm" />
            <span className="font-display text-xl font-semibold tracking-tight">SkillSeed</span>
          </div>
          <WaitlistDialog
            trigger={
              <Button variant="secondary" size="sm" className="font-medium">
                Join Waitlist
              </Button>
            }
          />
        </div>
      </header>

      {/* Hero */}
      <section
        className="relative overflow-hidden px-6 pb-24 pt-32 text-primary-foreground sm:pt-40"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative mx-auto max-w-5xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-secondary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-secondary">
            <Leaf className="h-3.5 w-3.5" /> Introducing the Builder Series
          </span>
          <h1 className="mt-6 text-5xl font-semibold leading-[1.05] sm:text-6xl md:text-7xl">
            Every child has a gift.
            <span className="block italic text-secondary">Let's help them discover it early.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
            A hands-on learning and discovery program for children aged{" "}
            <strong className="text-secondary">9–16</strong>. Real-world challenges that build
            confidence, creativity, and future-ready skills.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <WaitlistDialog
              trigger={
                <Button
                  size="lg"
                  className="group h-12 bg-secondary px-7 text-base font-semibold text-secondary-foreground shadow-[var(--shadow-gold)] hover:bg-secondary/90"
                >
                  Join the Waitlist
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              }
            />
            <a
              href="#program"
              className="text-sm font-medium text-primary-foreground/80 underline-offset-4 hover:underline"
            >
              Learn about the program →
            </a>
          </div>
          <p className="mt-6 text-xs text-primary-foreground/60">
            Cohort starts <strong className="text-secondary">25th May</strong> · Ages 9–16
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section id="program" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary/70">
            What your child will gain
          </p>
          <h2 className="mt-3 text-4xl font-semibold sm:text-5xl">Five seeds. One growing builder.</h2>
          <p className="mt-4 text-muted-foreground">
            Each pillar is woven through every project, every challenge, every demo day.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
          <div
            className="flex flex-col justify-between rounded-2xl p-7 text-secondary-foreground shadow-[var(--shadow-gold)]"
            style={{ background: "var(--gradient-gold)" }}
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest opacity-80">Limited cohort</p>
              <h3 className="mt-3 font-display text-2xl font-semibold">
                Spots fill fast. Reserve yours today.
              </h3>
            </div>
            <WaitlistDialog
              trigger={
                <Button variant="default" className="mt-6 w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Join the Waitlist
                </Button>
              }
            />
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="px-6 pb-24">
        <div
          className="mx-auto max-w-5xl rounded-3xl px-8 py-16 text-center text-primary-foreground"
          style={{ background: "var(--gradient-hero)" }}
        >
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
            Africa does not lack talent.
            <span className="block italic text-secondary">Too often, we simply discover it too late.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-primary-foreground/75">
            Give your child a head start with mentor-led, project-based learning designed for the
            next generation of builders.
          </p>
          <div className="mt-8 flex justify-center">
            <WaitlistDialog
              trigger={
                <Button
                  size="lg"
                  className="h-12 bg-secondary px-7 text-base font-semibold text-secondary-foreground hover:bg-secondary/90"
                >
                  Join the Waitlist
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              }
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <img src={logoUrl} alt="SkillSeed" className="h-7 w-7 rounded-md" />
              <span className="font-display text-lg font-semibold">SkillSeed</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              A program by WeKraft. Discover. Grow. Become.
            </p>
            <a
              href="https://wekraft.co"
              className="mt-3 inline-block text-sm font-semibold text-primary hover:underline"
            >
              wekraft.co
            </a>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Contact
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>Rwanda: +250 788 123 456</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>Kenya: +254 722 987 654</span>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Interested?
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Fill the form to learn more and reserve a spot for your child.
            </p>
            <WaitlistDialog
              trigger={
                <Button variant="default" className="mt-4">Join Waitlist</Button>
              }
            />
          </div>
        </div>
        <div className="border-t py-5 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} WeKraft · SkillSeed Builder Series
        </div>
      </footer>
    </div>
  );
}
