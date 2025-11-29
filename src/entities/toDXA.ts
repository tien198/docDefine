/*
  DXA,
  1 point = 1/72 inch
  1 DXA = 1/20 point = 1/1440 inch

  1 inch = 72 point = 1440 DXA
  1 cm = 567 DXA
  1 inch = 2.54 cm
*/

export class DXA {
  static fromInch(inch: number): number {
    return inch * 1440;
  }

  static fromCm(cm: number): number {
    return cm * (1440 / 2.54);
  }

  static fromMm(mm: number): number {
    return mm * (1440 / 25.4);
  }
}
