import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  Brain,
  Github,
  Linkedin,
  Mail,
  MapPin,
  GraduationCap,
  Code2,
  ArrowUpRight,
  Sparkles,
  Cpu,
  Database,
  TrendingUp,
  Send,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImg from "@/assets/hero-neural.png";
import portraitImg from "@/assets/profile-portrait.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        title: "Vishal Kumar Sharma — ML Engineer & AI Developer",
      },
      {
        name: "description",
        content:
          "Vishal Kumar Sharma is a Machine Learning engineer and B.Tech student at JECRC University, Jaipur, building models with TensorFlow, PyTorch, Pandas and NumPy.",
      },
      { name: "author", content: "Vishal Kumar Sharma" },
      { property: "og:title", content: "Vishal Kumar Sharma — ML Engineer & AI Developer" },
      {
        property: "og:description",
        content:
          "Machine Learning engineer and B.Tech student at JECRC University, Jaipur. Building with TensorFlow, PyTorch, Pandas and NumPy.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

const SKILLS = [
  { name: "Python (Pandas, NumPy)", level: 90, icon: Database, group: "Data" },
  { name: "TensorFlow", level: 82, icon: Brain, group: "ML" },
  { name: "PyTorch", level: 80, icon: Cpu, group: "ML" },
  { name: "Java", level: 78, icon: Code2, group: "Languages" },
  { name: "C++", level: 75, icon: Code2, group: "Languages" },
  { name: "C", level: 72, icon: Code2, group: "Languages" },
];

const TECH_CHIPS = [
  "Python", "TensorFlow", "PyTorch", "Pandas", "NumPy",
  "Scikit-learn", "Matplotlib", "Jupyter", "OpenCV", "Git",
  "C++", "Java", "C", "SQL",
];

const PROJECTS = [
  {
    title: "Handwritten Digit Recognition",
    blurb:
      "A CNN-based classifier trained on the MNIST dataset achieving 99.2% accuracy, with a live inference demo and a real-time canvas for user input.",
    tags: ["TensorFlow", "CNN", "MNIST"],
    icon: Brain,
    metric: "99.2% accuracy",
  },
  {
    title: "Movie Recommendation Engine",
    blurb:
      "Collaborative-filtering recommender using matrix factorization on the MovieLens 100k dataset, serving personalized top-N suggestions per user.",
    tags: ["PyTorch", "SVD", "Pandas"],
    icon: Sparkles,
    metric: "RMSE 0.93",
  },
  {
    title: "Sentiment Analysis on Social Media",
    blurb:
      "NLP pipeline fine-tuning a transformer on 50k tweets to classify sentiment, with TF-IDF baselines and a lightweight LSTM variant for comparison.",
    tags: ["NLP", "LSTM", "Transformers"],
    icon: TrendingUp,
    metric: "88% F1-score",
  },
  {
    title: "Stock Price Forecasting",
    blurb:
      "Time-series forecasting of NSE stocks using an LSTM network on 10 years of historical data, with sliding-window scaling and backtesting.",
    tags: ["PyTorch", "LSTM", "Time-Series"],
    icon: TrendingUp,
    metric: "MAPE 4.1%",
  },
  {
    title: "Student Performance Predictor",
    blurb:
      "Regression model predicting final grades from study habits and demographics, with feature importance analysis and an interactive dashboard.",
    tags: ["Scikit-learn", "XGBoost", "Pandas"],
    icon: Database,
    metric: "R² 0.89",
  },
  {
    title: "Brain Tumor Image Classifier",
    blurb:
      "Transfer-learning classifier on MRI scans using a fine-tuned ResNet-50, with augmentation and Grad-CAM interpretability overlays.",
    tags: ["TensorFlow", "ResNet", "OpenCV"],
    icon: Cpu,
    metric: "96% accuracy",
  },
];

const EDUCATION = {
  institution: "JECRC University, Jaipur",
  degree: "B.Tech in Computer Science & Engineering",
  status: "2nd Year · 3rd Semester",
  period: "2024 — 2028",
  location: "Jaipur, Rajasthan, India",
};

const STATS = [
  { value: "6+", label: "ML Projects" },
  { value: "10+", label: "Tools & Frameworks" },
  { value: "3rd", label: "Semester" },
  { value: "2028", label: "Graduating" },
];

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background font-sans text-foreground">
      <BackgroundDecor />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Index;

/* ---------- Background ---------- */
function BackgroundDecor() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-60" />
      <div className="animate-blob absolute -left-32 top-10 h-96 w-96 rounded-full bg-primary/20 blur-[120px]" />
      <div
        className="animate-blob absolute right-0 top-1/3 h-[28rem] w-[28rem] rounded-full bg-accent/15 blur-[140px]"
        style={{ animationDelay: "4s" }}
      />
      <div
        className="animate-blob absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-chart-3/15 blur-[120px]"
        style={{ animationDelay: "8s" }}
      />
    </div>
  );
}

/* ---------- Nav ---------- */
function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/30">
            <Brain className="h-5 w-5" />
          </span>
          <span>
            Vishal<span className="text-primary">.</span>sh
          </span>
        </a>
        <div className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#about" className="transition-colors hover:text-foreground">About</a>
          <a href="#skills" className="transition-colors hover:text-foreground">Skills</a>
          <a href="#projects" className="transition-colors hover:text-foreground">Projects</a>
          <a href="#education" className="transition-colors hover:text-foreground">Education</a>
        </div>
        <a href="#contact">
          <Button size="sm" className="gap-2 rounded-full">
            <Mail className="h-4 w-4" /> Contact
          </Button>
        </a>
      </nav>
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section id="top" className="relative mx-auto max-w-6xl px-6 pt-16 pb-12 md:pt-24">
      <div className="grid items-center gap-10 md:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Badge variant="secondary" className="mb-5 gap-2 rounded-full border-primary/30 bg-primary/10 px-3 py-1 text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Available for internships & collaborations
          </Badge>

          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
            Vishal Kumar
            <br />
            <span className="gradient-text text-glow">Sharma</span>
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Machine Learning engineer in the making. I design, train and ship
            models that learn from data — turning raw numbers into decisions
            with <span className="text-foreground">TensorFlow</span>,{" "}
            <span className="text-foreground">PyTorch</span>, and a healthy
            obsession with clean data.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects">
              <Button size="lg" className="gap-2 rounded-full">
                View my work <ArrowUpRight className="h-4 w-4" />
              </Button>
            </a>
            <a href="#contact">
              <Button size="lg" variant="outline" className="gap-2 rounded-full border-primary/40">
                Get in touch <Send className="h-4 w-4" />
              </Button>
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-6">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="font-display text-2xl font-bold text-primary md:text-3xl">{s.value}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="relative"
        >
          <div className="animate-float relative mx-auto aspect-square w-full max-w-sm">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary/30 via-accent/20 to-transparent blur-2xl" />
            <img
              src={portraitImg}
              alt="Portrait of Vishal Kumar Sharma, ML engineer"
              width={1024}
              height={1024}
              className="relative z-10 aspect-square w-full rounded-[2rem] object-cover ring-1 ring-primary/30 card-glow"
            />
            <div className="absolute -bottom-4 -left-4 z-20 flex items-center gap-3 rounded-2xl border border-border bg-card/80 px-4 py-3 backdrop-blur-xl">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/15 text-primary">
                <Brain className="h-5 w-5" />
              </span>
              <div>
                <div className="font-mono text-sm font-semibold text-foreground">model.fit()</div>
                <div className="text-xs text-muted-foreground">always learning</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- Marquee ---------- */
function Marquee() {
  const items = [...TECH_CHIPS, ...TECH_CHIPS];
  return (
    <section className="relative my-12 border-y border-border/60 bg-card/30 py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />
      <div className="flex w-max animate-marquee gap-4">
        {items.map((t, i) => (
          <span
            key={i}
            className="flex items-center gap-2 whitespace-nowrap rounded-full border border-border/70 bg-secondary/40 px-4 py-1.5 font-mono text-sm text-muted-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {t}
          </span>
        ))}
      </div>
    </section>
  );
}

/* ---------- Section header ---------- */
function SectionHeader({ kicker, title, desc }: { kicker: string; title: string; desc?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-12 max-w-2xl"
    >
      <div className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">
        <span className="h-px w-8 bg-primary" /> {kicker}
      </div>
      <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
      {desc && <p className="mt-3 text-muted-foreground">{desc}</p>}
    </motion.div>
  );
}

/* ---------- About ---------- */
function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-16">
      <SectionHeader
        kicker="01 / About"
        title="Engineering intelligence from data."
        desc="I'm a second-year Computer Science student at JECRC University, Jaipur, focused on applied machine learning and deep learning."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {[
          {
            icon: Brain,
            title: "Model Building",
            body: "Designing and training neural networks — CNNs, RNNs and transformers — for vision, NLP and tabular data problems.",
          },
          {
            icon: Database,
            title: "Data Engineering",
            body: "Cleaning, transforming and visualizing data at scale with Pandas and NumPy to find signal in the noise.",
          },
          {
            icon: TrendingUp,
            title: "Evaluation & Deployment",
            body: "Rigorous metrics, cross-validation and reproducible pipelines that take a model from notebook to real-world use.",
          },
        ].map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group rounded-2xl border border-border/70 bg-card/50 p-6 backdrop-blur-sm transition-colors hover:border-primary/40"
          >
            <span className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-primary/12 text-primary ring-1 ring-primary/25 transition-transform group-hover:scale-110">
              <c.icon className="h-6 w-6" />
            </span>
            <h3 className="font-display text-lg font-semibold">{c.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Skills ---------- */
function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-16">
      <SectionHeader
        kicker="02 / Skills"
        title="The toolkit I build with."
        desc="Languages, frameworks and libraries I use to take ideas from data to deployed models."
      />
      <div className="grid gap-x-12 gap-y-7 md:grid-cols-2">
        {SKILLS.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
          >
            <div className="mb-2 flex items-center justify-between">
              <span className="flex items-center gap-2 font-medium">
                <s.icon className="h-4 w-4 text-primary" /> {s.name}
              </span>
              <span className="font-mono text-sm text-muted-foreground">{s.level}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-secondary">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                initial={{ width: 0 }}
                whileInView={{ width: `${s.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Projects ---------- */
function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
      <SectionHeader
        kicker="03 / Projects"
        title="Things I've trained, tuned and shipped."
        desc="A selection of machine learning projects spanning computer vision, NLP, recommender systems and forecasting."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:card-glow"
          >
            <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-primary/12 px-2.5 py-1 font-mono text-[11px] text-primary">
              <TrendingUp className="h-3 w-3" /> {p.metric}
            </div>
            <span className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-primary/12 text-primary ring-1 ring-primary/25 transition-transform group-hover:scale-110">
              <p.icon className="h-5 w-5" />
            </span>
            <h3 className="font-display text-lg font-semibold leading-tight">{p.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.blurb}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-border/70 bg-secondary/40 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

/* ---------- Education ---------- */
function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-16">
      <SectionHeader kicker="04 / Education" title="Where I'm learning the craft." />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-2xl border border-border/70 bg-card/50 p-8 backdrop-blur-sm"
      >
        <img
          src={heroImg}
          alt=""
          aria-hidden="true"
          loading="lazy"
          width={1408}
          height={1008}
          className="pointer-events-none absolute -right-20 top-0 h-full w-1/2 object-cover opacity-15"
        />
        <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-4">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-primary/15 text-primary ring-1 ring-primary/30">
              <GraduationCap className="h-7 w-7" />
            </span>
            <div>
              <h3 className="font-display text-xl font-semibold">{EDUCATION.institution}</h3>
              <p className="text-muted-foreground">{EDUCATION.degree}</p>
              <p className="mt-1 font-mono text-sm text-primary">{EDUCATION.status}</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground md:text-right">
            <span className="flex items-center gap-2 md:justify-end">
              <Calendar className="h-4 w-4 text-primary" /> {EDUCATION.period}
            </span>
            <span className="flex items-center gap-2 md:justify-end">
              <MapPin className="h-4 w-4 text-primary" /> {EDUCATION.location}
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ---------- Contact ---------- */
function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
      <SectionHeader
        kicker="05 / Contact"
        title="Let's build something that learns."
        desc="Open to internships, research collaborations and interesting ML problems. My inbox is always open."
      />
      <div className="grid gap-4 md:grid-cols-3">
        {[
          { icon: Mail, label: "Email", value: "vishal.sharma@example.com", href: "mailto:vishal.sharma@example.com" },
          { icon: Linkedin, label: "LinkedIn", value: "Vishal Kumar Sharma", href: "#" },
          { icon: Github, label: "GitHub", value: "@vishalsharma", href: "#" },
        ].map((c, i) => (
          <motion.a
            key={c.label}
            href={c.href}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group flex items-center gap-4 rounded-2xl border border-border/70 bg-card/50 p-5 backdrop-blur-sm transition-all hover:border-primary/50 hover:card-glow"
          >
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/12 text-primary ring-1 ring-primary/25 transition-transform group-hover:scale-110">
              <c.icon className="h-6 w-6" />
            </span>
            <div className="flex-1">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
              <div className="font-medium">{c.value}</div>
            </div>
            <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </motion.a>
        ))}
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="relative z-10 border-t border-border/60 bg-background/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground md:flex-row">
        <p>© {new Date().getFullYear()} Vishal Kumar Sharma. Built with curiosity & gradients.</p>
        <div className="flex items-center gap-4">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground"><Github className="h-5 w-5" /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground"><Linkedin className="h-5 w-5" /></a>
          <a href="mailto:vishal.sharma@example.com" className="transition-colors hover:text-foreground"><Mail className="h-5 w-5" /></a>
        </div>
      </div>
    </footer>
  );
}
