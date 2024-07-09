// This file can be used to add references for global types like `vite/client`.

// Add global `vite/client` types. For more info, see: https://vitejs.dev/guide/features#client-types
/// <reference types="vite/client" />

// type definitions for the environment variables
interface ImportMetaEnv {
    readonly PUBLIC_POSTHOG_API_KEY: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}