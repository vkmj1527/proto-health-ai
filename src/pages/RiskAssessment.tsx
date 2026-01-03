import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { 
  User, 
  Heart, 
  Activity, 
  Moon, 
  Footprints, 
  Brain, 
  Users,
  ArrowRight,
  Info
} from "lucide-react";
import { HealthData, calculateRisk } from "@/lib/riskCalculator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const initialData: HealthData = {
  age: 35,
  bmi: 24,
  bloodPressure: 120,
  hba1c: 5.5,
  cholesterol: 180,
  sleepHours: 7,
  dailySteps: 6000,
  stressLevel: 5,
  familyHistory: false,
};

export default function RiskAssessment() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<HealthData>(initialData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNumberChange = (field: keyof HealthData, value: string) => {
    const numValue = parseFloat(value) || 0;
    setFormData((prev) => ({ ...prev, [field]: numValue }));
  };

  const handleSliderChange = (field: keyof HealthData, value: number[]) => {
    setFormData((prev) => ({ ...prev, [field]: value[0] }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    const result = calculateRisk(formData);
    
    // Navigate to results with state
    navigate("/results", { state: { result, formData } });
  };

  return (
    <Layout>
      <div className="container py-12 md:py-20">
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <div className="text-center mb-10 animate-fade-in">
            <h1 className="text-3xl font-display font-bold tracking-tight md:text-4xl">
              Health Risk Assessment
            </h1>
            <p className="mt-4 text-muted-foreground">
              Enter your health metrics below to receive a personalized risk assessment.
              All data is processed locally and not stored.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <Card className="border-border/50 animate-slide-up">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-primary">
                    <User className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Basic Information</CardTitle>
                    <CardDescription>Your age and body metrics</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="age" className="flex items-center gap-2">
                    Age (years)
                    <InfoTooltip content="Your current age in years" />
                  </Label>
                  <Input
                    id="age"
                    type="number"
                    min="18"
                    max="100"
                    value={formData.age}
                    onChange={(e) => handleNumberChange("age", e.target.value)}
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bmi" className="flex items-center gap-2">
                    BMI (kg/m²)
                    <InfoTooltip content="Body Mass Index. Normal range: 18.5-24.9" />
                  </Label>
                  <Input
                    id="bmi"
                    type="number"
                    min="10"
                    max="60"
                    step="0.1"
                    value={formData.bmi}
                    onChange={(e) => handleNumberChange("bmi", e.target.value)}
                    className="bg-background"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Vital Signs */}
            <Card className="border-border/50 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-primary">
                    <Heart className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Vital Signs</CardTitle>
                    <CardDescription>Blood pressure and metabolic markers</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label className="flex items-center gap-2">
                      Blood Pressure (Systolic mmHg)
                      <InfoTooltip content="Normal: <120, Elevated: 120-129, High: ≥130" />
                    </Label>
                    <span className="text-sm font-medium text-primary">{formData.bloodPressure} mmHg</span>
                  </div>
                  <Slider
                    value={[formData.bloodPressure]}
                    onValueChange={(value) => handleSliderChange("bloodPressure", value)}
                    min={90}
                    max={180}
                    step={1}
                    className="py-2"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>90</span>
                    <span>Normal (&lt;120)</span>
                    <span>High (&gt;140)</span>
                    <span>180</span>
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="hba1c" className="flex items-center gap-2">
                      HbA1c (%)
                      <InfoTooltip content="Normal: <5.7%, Prediabetes: 5.7-6.4%, Diabetes: ≥6.5%" />
                    </Label>
                    <Input
                      id="hba1c"
                      type="number"
                      min="4"
                      max="14"
                      step="0.1"
                      value={formData.hba1c}
                      onChange={(e) => handleNumberChange("hba1c", e.target.value)}
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cholesterol" className="flex items-center gap-2">
                      Total Cholesterol (mg/dL)
                      <InfoTooltip content="Desirable: <200, Borderline: 200-239, High: ≥240" />
                    </Label>
                    <Input
                      id="cholesterol"
                      type="number"
                      min="100"
                      max="400"
                      value={formData.cholesterol}
                      onChange={(e) => handleNumberChange("cholesterol", e.target.value)}
                      className="bg-background"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Lifestyle Factors */}
            <Card className="border-border/50 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-primary">
                    <Activity className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Lifestyle Factors</CardTitle>
                    <CardDescription>Sleep, activity, and stress levels</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label className="flex items-center gap-2">
                      <Moon className="h-4 w-4 text-muted-foreground" />
                      Sleep Hours (per night)
                      <InfoTooltip content="Recommended: 7-9 hours for adults" />
                    </Label>
                    <span className="text-sm font-medium text-primary">{formData.sleepHours} hours</span>
                  </div>
                  <Slider
                    value={[formData.sleepHours]}
                    onValueChange={(value) => handleSliderChange("sleepHours", value)}
                    min={3}
                    max={12}
                    step={0.5}
                    className="py-2"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dailySteps" className="flex items-center gap-2">
                    <Footprints className="h-4 w-4 text-muted-foreground" />
                    Daily Steps (average)
                    <InfoTooltip content="Goal: 10,000 steps per day" />
                  </Label>
                  <Input
                    id="dailySteps"
                    type="number"
                    min="0"
                    max="30000"
                    step="500"
                    value={formData.dailySteps}
                    onChange={(e) => handleNumberChange("dailySteps", e.target.value)}
                    className="bg-background"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label className="flex items-center gap-2">
                      <Brain className="h-4 w-4 text-muted-foreground" />
                      Stress Level (1-10)
                      <InfoTooltip content="1 = Very low stress, 10 = Extremely high stress" />
                    </Label>
                    <span className="text-sm font-medium text-primary">{formData.stressLevel}/10</span>
                  </div>
                  <Slider
                    value={[formData.stressLevel]}
                    onValueChange={(value) => handleSliderChange("stressLevel", value)}
                    min={1}
                    max={10}
                    step={1}
                    className="py-2"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Low</span>
                    <span>Moderate</span>
                    <span>High</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Family History */}
            <Card className="border-border/50 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-primary">
                    <Users className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Family History</CardTitle>
                    <CardDescription>Genetic risk factors</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between rounded-lg border border-border p-4">
                  <div className="space-y-1">
                    <Label htmlFor="familyHistory" className="text-base">
                      Family history of chronic diseases?
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Diabetes, heart disease, hypertension, or stroke in immediate family
                    </p>
                  </div>
                  <Switch
                    id="familyHistory"
                    checked={formData.familyHistory}
                    onCheckedChange={(checked) =>
                      setFormData((prev) => ({ ...prev, familyHistory: checked }))
                    }
                  />
                </div>
              </CardContent>
            </Card>

            {/* Submit Button */}
            <div className="pt-4 animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <Button
                type="submit"
                size="lg"
                className="w-full gradient-primary text-primary-foreground hover:opacity-90 transition-all group"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Activity className="mr-2 h-4 w-4 animate-spin" />
                    Calculating Risk...
                  </>
                ) : (
                  <>
                    Calculate Risk
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

function InfoTooltip({ content }: { content: string }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Info className="h-3.5 w-3.5 text-muted-foreground cursor-help" />
      </TooltipTrigger>
      <TooltipContent>
        <p className="max-w-xs text-xs">{content}</p>
      </TooltipContent>
    </Tooltip>
  );
}
