import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  AlertTriangle, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  RotateCcw,
  Shield,
  Heart,
  Activity,
  Users,
  Info
} from "lucide-react";
import { RiskResult, HealthData } from "@/lib/riskCalculator";

interface LocationState {
  result: RiskResult;
  formData: HealthData;
}

export default function Results() {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as LocationState | null;

  useEffect(() => {
    if (!state?.result) {
      navigate("/assess");
    }
  }, [state, navigate]);

  if (!state?.result) {
    return null;
  }

  const { result } = state;

  const getRiskConfig = (category: "low" | "medium" | "high") => {
    switch (category) {
      case "low":
        return {
          icon: CheckCircle2,
          color: "text-risk-low",
          bgColor: "bg-risk-low/10",
          borderColor: "border-risk-low/30",
          label: "Low Risk",
          description: "Your health indicators are within normal ranges.",
        };
      case "medium":
        return {
          icon: AlertCircle,
          color: "text-risk-medium",
          bgColor: "bg-risk-medium/10",
          borderColor: "border-risk-medium/30",
          label: "Medium Risk",
          description: "Some health indicators require attention.",
        };
      case "high":
        return {
          icon: AlertTriangle,
          color: "text-risk-high",
          bgColor: "bg-risk-high/10",
          borderColor: "border-risk-high/30",
          label: "High Risk",
          description: "Several health indicators need immediate attention.",
        };
    }
  };

  const config = getRiskConfig(result.category);
  const IconComponent = config.icon;

  const breakdownItems = [
    { label: "Metabolic", value: result.breakdown.metabolic, icon: Activity },
    { label: "Cardiovascular", value: result.breakdown.cardiovascular, icon: Heart },
    { label: "Lifestyle", value: result.breakdown.lifestyle, icon: Shield },
    { label: "Genetic", value: result.breakdown.genetic, icon: Users },
  ];

  return (
    <Layout>
      <div className="container py-12 md:py-20">
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <div className="text-center mb-10 animate-fade-in">
            <h1 className="text-3xl font-display font-bold tracking-tight md:text-4xl">
              Your Risk Assessment Results
            </h1>
            <p className="mt-4 text-muted-foreground">
              Based on the health data you provided
            </p>
          </div>

          {/* Main Score Card */}
          <Card className={`border-2 ${config.borderColor} ${config.bgColor} mb-8 animate-scale-in`}>
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col items-center text-center">
                {/* Progress Ring */}
                <div className="relative mb-6">
                  <svg className="w-40 h-40 transform -rotate-90">
                    <circle
                      cx="80"
                      cy="80"
                      r="70"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      className="text-muted/30"
                    />
                    <circle
                      cx="80"
                      cy="80"
                      r="70"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      strokeLinecap="round"
                      className={config.color}
                      strokeDasharray="440"
                      strokeDashoffset={440 - (440 * result.score) / 100}
                      style={{
                        transition: "stroke-dashoffset 1.5s ease-out",
                      }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className={`text-4xl font-bold ${config.color}`}>
                      {result.score}%
                    </span>
                    <span className="text-sm text-muted-foreground">Risk Score</span>
                  </div>
                </div>

                {/* Risk Category */}
                <div className={`inline-flex items-center gap-2 rounded-full px-4 py-2 ${config.bgColor} border ${config.borderColor}`}>
                  <IconComponent className={`h-5 w-5 ${config.color}`} />
                  <span className={`font-semibold ${config.color}`}>{config.label}</span>
                </div>
                <p className="mt-4 text-muted-foreground">{config.description}</p>
              </div>
            </CardContent>
          </Card>

          {/* Disclaimer */}
          <Card className="border-destructive/30 bg-destructive/5 mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <CardContent className="p-6">
              <div className="flex gap-4">
                <Info className="h-6 w-6 text-destructive shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-destructive mb-1">Important Disclaimer</h3>
                  <p className="text-sm text-muted-foreground">
                    This is <strong className="text-foreground">not a medical diagnosis</strong>. 
                    The risk score is based on a simulated algorithm using the data you provided. 
                    Please consult a qualified healthcare professional for proper medical advice and diagnosis.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Risk Breakdown */}
          <Card className="border-border/50 mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <CardHeader>
              <CardTitle className="text-lg">Risk Breakdown by Category</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {breakdownItems.map((item) => (
                <div key={item.label} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <item.icon className="h-4 w-4 text-primary" />
                      <span className="font-medium">{item.label}</span>
                    </div>
                    <span className={`font-medium ${
                      item.value < 30 ? "text-risk-low" : 
                      item.value < 60 ? "text-risk-medium" : "text-risk-high"
                    }`}>
                      {item.value}%
                    </span>
                  </div>
                  <Progress value={item.value} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recommendations */}
          <Card className="border-border/50 mb-8 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Preventive Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {result.recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1.5 h-2 w-2 rounded-full gradient-primary shrink-0" />
                    <span className="text-muted-foreground">{rec}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex flex-col gap-4 sm:flex-row animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <Link to="/assess" className="flex-1">
              <Button variant="outline" size="lg" className="w-full group">
                <RotateCcw className="mr-2 h-4 w-4 transition-transform group-hover:-rotate-45" />
                Assess Again
              </Button>
            </Link>
            <Link to="/about" className="flex-1">
              <Button size="lg" className="w-full gradient-primary text-primary-foreground hover:opacity-90 transition-all group">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
