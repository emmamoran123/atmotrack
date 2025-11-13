export type BowelMovementType = 'Normal' | 'Constipated' | 'Diarrhea' | 'None Today';

export interface SymptomLog {
  id: string;
  date: string;
  // Sliders (1-5)
  appetite: number;
  energy: number;
  // Radio buttons (0=None, 1=Mild, 2=Moderate, 3=Severe)
  nausea: number;
  bloating: number; 
  cramps: number; // Renamed from abdominalPain
  // Bowel Movements
  bowelMovement: BowelMovementType; // Replaces stoolType
  // Notes
  notes: string;
}

export type Medication =
  | 'Zepbound (Tirzepatide)'
  | 'Mounjaro (Tirzepatide)'
  | 'Wegovy (Semaglutide)'
  | 'Ozempic (Semaglutide)'
  | 'Rybelsus (Semaglutide)'
  | 'Victoza (Liraglutide)'
  | 'Saxenda (Liraglutide)'
  | 'Trulicity (Dulaglutide)'
  | 'Byetta (Exenatide)'
  | 'Bydureon (Exenatide)';

export interface DoseLog {
    id: string;
    date: string;
    medication: Medication;
    dose: number;
}

export interface Meal {
  description: string;
  calories: number;
}

export interface DayPlan {
  breakfast: Meal;
  lunch: Meal;
  dinner: Meal;
  snack: Meal;
}

export interface MealPlan {
  day1: DayPlan;
  day2: DayPlan;
  groceryList: {
    [category: string]: string[];
  };
  adjustmentReasoning: string;
}