import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "@/components/layout/Layout";
import { 
  Activity, 
  Shield, 
  Brain, 
  Heart, 
  ArrowRight, 
  Scan, 
  FileText, 
  CheckCircle2,
  Sparkles
} from "lucide-react";

const features = [
  {
    icon: Scan,
    title: "Early Detection",
    description: "Identify potential health risks before symptoms appear through comprehensive risk analysis.",
  },
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description: "Advanced algorithms analyze multiple health factors to generate accurate risk assessments.",
  },
  {
    icon: Shield,
    title: "Preventive Care",
    description: "Receive personalized recommendations to help prevent silent diseases from developing.",
  },
];

const steps = [
  {
    number: "01",
    title: "Enter Your Data",
    description: "Provide basic health metrics like age, BMI, blood pressure, and lifestyle factors.",
  },
  {
    number: "02",
    title: "AI Analysis",
    description: "Our algorithm processes your data to calculate risk probabilities across multiple conditions.",
  },
  {
    number: "03",
    title: "Get Recommendations",
    description: "Receive a detailed risk score with personalized preventive care suggestions.",
  },
];

const conditions = [
  "Type 2 Diabetes",
  "Hypertension",
  "Cardiac Risk",
  "Liver Disorders",
  "Mental Health",
];

export default function Landing() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
        
        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1.5s" }} />
        
        <div className="container relative py-24 md:py-32 lg:py-40">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/50 backdrop-blur-sm px-4 py-1.5 text-sm text-muted-foreground mb-8 animate-fade-in">
              <Sparkles className="h-4 w-4 text-primary" />
              AI-Powered Health Risk Assessment
            </div>
            
            <h1 className="text-4xl font-display font-bold tracking-tight md:text-5xl lg:text-6xl animate-slide-up">
              Detect What Patients
              <br />
              <span className="gradient-text">Don't Even Know They Have</span>
            </h1>
            
            <p className="mt-6 text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Early detection saves lives. Our AI engine analyzes your health data to identify 
              potential risks for silent diseases like diabetes, hypertension, and cardiac conditions 
              before symptoms appear.
            </p>
            
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Link to="/assess">
                <Button size="lg" className="gradient-primary text-primary-foreground hover:opacity-90 transition-all group px-8">
                  Assess Health Risk
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="px-8">
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Condition Tags */}
            <div className="mt-12 flex flex-wrap justify-center gap-2 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              {conditions.map((condition) => (
                <span 
                  key={condition}
                  className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-sm text-accent-foreground"
                >
                  <Heart className="h-3 w-3" />
                  {condition}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-display font-bold tracking-tight md:text-4xl">
              Why Choose Our Detection Engine?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Advanced technology combined with medical research to provide accurate risk assessments.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <Card 
                key={feature.title} 
                className="group relative overflow-hidden border-border/50 bg-card hover:shadow-lg transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 gradient-hero opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardContent className="relative p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg gradient-primary">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-display font-bold tracking-tight md:text-4xl">
              How It Works
            </h2>
            <p className="mt-4 text-muted-foreground">
              Three simple steps to understand your health risk profile.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <div 
                key={step.number} 
                className="relative animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                )}
                <div className="relative flex flex-col items-center text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full gradient-primary text-primary-foreground font-display font-bold text-xl shadow-glow">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <Card className="border-border/50 bg-accent/30">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Important Disclaimer</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    This application generates probability-based risk scores and preventive recommendations. 
                    It <strong className="text-foreground">does NOT diagnose diseases</strong>. The results 
                    should be used for informational purposes only and are not a substitute for professional 
                    medical advice, diagnosis, or treatment. Always consult qualified healthcare providers 
                    with any questions regarding your health.
                  </p>
                  <div className="flex flex-wrap gap-4 pt-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-success" />
                      Risk Assessment Only
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-success" />
                      Preventive Recommendations
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-success" />
                      Consult Healthcare Professionals
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <Activity className="mx-auto h-12 w-12 text-primary mb-6" />
            <h2 className="text-3xl font-display font-bold tracking-tight md:text-4xl mb-4">
              Ready to Assess Your Health Risk?
            </h2>
            <p className="text-muted-foreground mb-8">
              Take the first step towards preventive healthcare. Our assessment takes just a few minutes.
            </p>
            <Link to="/assess">
              <Button size="lg" className="gradient-primary text-primary-foreground hover:opacity-90 transition-all group px-8">
                Start Free Assessment
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
