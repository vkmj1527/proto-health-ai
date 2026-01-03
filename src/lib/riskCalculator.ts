export interface HealthData {
  age: number;
  bmi: number;
  bloodPressure: number;
  hba1c: number;
  cholesterol: number;
  sleepHours: number;
  dailySteps: number;
  stressLevel: number;
  familyHistory: boolean;
}

export interface RiskResult {
  score: number;
  category: "low" | "medium" | "high";
  recommendations: string[];
  breakdown: {
    metabolic: number;
    cardiovascular: number;
    lifestyle: number;
    genetic: number;
  };
}

// Simulated risk calculation algorithm with weighted scoring
export function calculateRisk(data: HealthData): RiskResult {
  let totalScore = 0;
  const recommendations: string[] = [];
  
  // Age factor (0-15 points)
  let ageScore = 0;
  if (data.age < 30) ageScore = 0;
  else if (data.age < 40) ageScore = 5;
  else if (data.age < 50) ageScore = 8;
  else if (data.age < 60) ageScore = 12;
  else ageScore = 15;
  totalScore += ageScore;

  // BMI factor (0-15 points)
  let bmiScore = 0;
  if (data.bmi < 18.5) {
    bmiScore = 5;
    recommendations.push("Consider consulting a nutritionist to achieve a healthy weight.");
  } else if (data.bmi < 25) {
    bmiScore = 0;
  } else if (data.bmi < 30) {
    bmiScore = 8;
    recommendations.push("Aim to reduce BMI through balanced diet and regular exercise.");
  } else {
    bmiScore = 15;
    recommendations.push("A weight management program is strongly recommended.");
  }
  totalScore += bmiScore;

  // Blood Pressure factor (0-15 points)
  let bpScore = 0;
  if (data.bloodPressure < 120) {
    bpScore = 0;
  } else if (data.bloodPressure < 130) {
    bpScore = 5;
    recommendations.push("Monitor blood pressure regularly and reduce sodium intake.");
  } else if (data.bloodPressure < 140) {
    bpScore = 10;
    recommendations.push("Consult a healthcare provider about blood pressure management.");
  } else {
    bpScore = 15;
    recommendations.push("Immediate medical consultation for hypertension is recommended.");
  }
  totalScore += bpScore;

  // HbA1c factor (0-15 points)
  let hba1cScore = 0;
  if (data.hba1c < 5.7) {
    hba1cScore = 0;
  } else if (data.hba1c < 6.4) {
    hba1cScore = 8;
    recommendations.push("Pre-diabetic range detected. Focus on reducing sugar intake and increasing physical activity.");
  } else {
    hba1cScore = 15;
    recommendations.push("HbA1c levels indicate diabetes risk. Medical consultation is essential.");
  }
  totalScore += hba1cScore;

  // Cholesterol factor (0-10 points)
  let cholesterolScore = 0;
  if (data.cholesterol < 200) {
    cholesterolScore = 0;
  } else if (data.cholesterol < 240) {
    cholesterolScore = 5;
    recommendations.push("Consider dietary changes to lower cholesterol levels.");
  } else {
    cholesterolScore = 10;
    recommendations.push("High cholesterol detected. Consult a doctor about lipid management.");
  }
  totalScore += cholesterolScore;

  // Sleep factor (0-10 points)
  let sleepScore = 0;
  if (data.sleepHours >= 7 && data.sleepHours <= 9) {
    sleepScore = 0;
  } else if (data.sleepHours >= 6 && data.sleepHours <= 10) {
    sleepScore = 5;
    recommendations.push("Aim for 7-9 hours of quality sleep each night.");
  } else {
    sleepScore = 10;
    recommendations.push("Irregular sleep patterns increase health risks. Establish a consistent sleep schedule.");
  }
  totalScore += sleepScore;

  // Daily Steps factor (0-10 points)
  let stepsScore = 0;
  if (data.dailySteps >= 10000) {
    stepsScore = 0;
  } else if (data.dailySteps >= 7000) {
    stepsScore = 3;
    recommendations.push("Good activity level! Try to reach 10,000 steps daily.");
  } else if (data.dailySteps >= 5000) {
    stepsScore = 6;
    recommendations.push("Increase daily physical activity gradually.");
  } else {
    stepsScore = 10;
    recommendations.push("Sedentary lifestyle detected. Start with short walks and build up activity.");
  }
  totalScore += stepsScore;

  // Stress factor (0-10 points)
  let stressScore = 0;
  if (data.stressLevel <= 3) {
    stressScore = 0;
  } else if (data.stressLevel <= 5) {
    stressScore = 3;
  } else if (data.stressLevel <= 7) {
    stressScore = 6;
    recommendations.push("Consider stress management techniques like meditation or yoga.");
  } else {
    stressScore = 10;
    recommendations.push("High stress levels can impact health. Seek support and practice relaxation techniques.");
  }
  totalScore += stressScore;

  // Family History factor (0 or 10 points)
  let familyScore = 0;
  if (data.familyHistory) {
    familyScore = 10;
    recommendations.push("Family history of conditions increases risk. Regular health screenings are important.");
  }
  totalScore += familyScore;

  // Calculate breakdown percentages
  const metabolic = Math.round(((bmiScore + hba1cScore) / 30) * 100);
  const cardiovascular = Math.round(((bpScore + cholesterolScore) / 25) * 100);
  const lifestyle = Math.round(((sleepScore + stepsScore + stressScore) / 30) * 100);
  const genetic = familyScore > 0 ? 100 : 0;

  // Normalize to 0-100 scale
  const normalizedScore = Math.min(Math.round((totalScore / 110) * 100), 100);

  // Determine category
  let category: "low" | "medium" | "high";
  if (normalizedScore < 30) {
    category = "low";
    if (recommendations.length === 0) {
      recommendations.push("Maintain your healthy lifestyle with regular exercise and balanced nutrition.");
    }
  } else if (normalizedScore < 60) {
    category = "medium";
    recommendations.push("Schedule a preventive health check-up with your healthcare provider.");
  } else {
    category = "high";
    recommendations.unshift("Priority: Consult a healthcare professional as soon as possible.");
  }

  return {
    score: normalizedScore,
    category,
    recommendations,
    breakdown: {
      metabolic,
      cardiovascular,
      lifestyle,
      genetic,
    },
  };
}
