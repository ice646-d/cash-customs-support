/// <reference types="vite/client" />

declare global {
  interface Window {
    chaport?: {
      q: (action: string) => void;
    };
  }
}

export {};
