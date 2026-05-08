declare module 'vanilla-masker' {
  export interface ToMoneyOptions {
    precision?: number;
    separator?: string;
    delimiter?: string;
    unit?: string;
    suffixUnit?: string;
    zeroCents?: boolean;
    showSignal?: boolean;
    lastOutput?: string;
  }

  export interface ToPatternOptions {
    placeholder?: string;
  }

  interface VanillaMaskerStatic {
    toMoney(value: string | number, opts?: ToMoneyOptions): string;
    toNumber(value: string | number): string;
    toAlphaNumeric(value: string): string;
    toPattern(value: string | number, pattern: string | ToPatternOptions): string;
  }

  const VMasker: ((el: HTMLElement | HTMLInputElement | HTMLElement[]) => {
    maskMoney(opts?: ToMoneyOptions): void;
    maskNumber(): void;
    maskAlphaNum(): void;
    maskPattern(pattern: string): void;
    unMask(): void;
    unbindElementToMask(): void;
  }) &
    VanillaMaskerStatic;

  export default VMasker;
}
