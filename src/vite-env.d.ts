/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GANTT_SCHEDULE_LICIENS_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
