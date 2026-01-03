import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Activity, 
  Brain, 
  Shield, 
  AlertTriangle, 
  Users, 
  ArrowRight,
  Heart,
  Eye,
  Lock,
  Target,
  Lightbulb,
  CheckCircle2
} from "lucide-react";

const problems = [
  {
    icon: Eye,
    title: "Silent Onset",
    description: "Many chronic diseases develop without obvious symptoms, making early detection challenging.",
  },
  {
    icon: AlertTriangle,
    title: "Late Diagnosis",
    description: "By the time symptoms appear, diseases may have progressed significantly, limiting treatment options.",
  },
  {
    icon: Target,
    title: "Prevention Gap",
    description: "Without risk awareness, individuals miss opportunities for lifestyle interventions that could prevent disease.",
  },
];

const solutions = [
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description: "Our machine learning algorithms analyze multiple health indicators simultaneously to identify risk patterns that might be missed in traditional assessments.",
  },
  {
    icon: Activity,
    title: "Multi-Factor Scoring",
    description: "We consider metabolic markers, cardiovascular indicators, lifestyle factors, and genetic predisposition to generate comprehensive risk profiles.",
  },
  {
    icon: Lightbulb,
    title: "Actionable Insights",
    description: "Beyond risk scores, we provide personalized recommendations that users can implement immediately to improve their health outcomes.",
  },
];

const ethicalPrinciples = [
  "This tool provides risk assessment only, not medical diagnosis",
  "Results should be discussed with healthcare professionals",
  "Data is processed locally and not stored on any server",
  "We encourage preventive healthcare, not self-treatment",
  "Our algorithm is based on established medical research",
  "Regular updates ensure accuracy with latest medical knowledge",
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 gradient-hero" />
        <div className="container relative">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/50 backdrop-blur-sm px-4 py-1.5 text-sm text-muted-foreground mb-8 animate-fade-in">
              <Activity className="h-4 w-4 text-primary" />
              About The Project
            </div>
            <h1 className="text-4xl font-display font-bold tracking-tight md:text-5xl animate-slide-up">
              Silent Disease <span className="gradient-text">Early Detection Engine</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground animate-slide-up" style={{ animationDelay: "0.1s" }}>
              An AI-powered tool designed to identify health risks before they become 
              serious conditions, enabling preventive care and better health outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-display font-bold tracking-tight md:text-4xl">
              The Problem We're Solving
            </h2>
            <p className="mt-4 text-muted-foreground">
              Silent diseases affect millions worldwide, often going undetected until critical stages.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {problems.map((problem, index) => (
              <Card 
                key={problem.title} 
                className="border-border/50 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-destructive/10">
                    <problem.icon className="h-6 w-6 text-destructive" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{problem.title}</h3>
                  <p className="text-muted-foreground">{problem.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 mx-auto max-w-3xl">
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full gradient-primary">
                    <Heart className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">400+ Million</h3>
                    <p className="text-muted-foreground">
                      People worldwide live with undiagnosed diabetes alone. Early detection 
                      could prevent complications in the majority of these cases.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-display font-bold tracking-tight md:text-4xl">
              How AI Helps Early Detection
            </h2>
            <p className="mt-4 text-muted-foreground">
              Our technology bridges the gap between routine health data and actionable risk awareness.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {solutions.map((solution, index) => (
              <Card 
                key={solution.title} 
                className="border-border/50 bg-card animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg gradient-primary">
                    <solution.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                  <p className="text-muted-foreground">{solution.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ethical Disclaimer Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <Card className="border-border/50">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-start gap-4 mb-8">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Lock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-display font-bold mb-2">
                      Ethical Commitment & Disclaimer
                    </h2>
                    <p className="text-muted-foreground">
                      We are committed to responsible AI use in healthcare applications.
                    </p>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {ethicalPrinciples.map((principle, index) => (
                    <div 
                      key={index} 
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="h-5 w-5 text-success shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{principle}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 rounded-lg border border-warning/30 bg-warning/5">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-warning shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Important:</strong> This application 
                      generates probability-based risk scores only. It is not intended to replace 
                      professional medical evaluation, diagnosis, or treatment. Always consult 
                      qualified healthcare providers for medical decisions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/50 backdrop-blur-sm px-4 py-1.5 text-sm text-muted-foreground mb-8 animate-fade-in">
              <Users className="h-4 w-4 text-primary" />
              The Team
            </div>
            <h2 className="text-3xl font-display font-bold tracking-tight md:text-4xl mb-4">
              Built by <span className="gradient-text">Team Alpha Male</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Dedicated to leveraging technology for better health outcomes and preventive care.
            </p>

            <Card className="border-primary/20 gradient-hero">
              <CardContent className="p-8">
                <div className="flex flex-col items-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full gradient-primary mb-4">
                    <Shield className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Team Alpha Male</h3>
                  <p className="text-muted-foreground max-w-md">
                    A passionate team combining expertise in AI, healthcare technology, 
                    and user experience to create meaningful health solutions.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <Activity className="mx-auto h-12 w-12 text-primary mb-6" />
            <h2 className="text-3xl font-display font-bold tracking-tight md:text-4xl mb-4">
              Ready to Check Your Health Risk?
            </h2>
            <p className="text-muted-foreground mb-8">
              Take a proactive step towards understanding your health profile.
            </p>
            <Link to="/assess">
              <Button size="lg" className="gradient-primary text-primary-foreground hover:opacity-90 transition-all group px-8">
                Start Assessment
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
