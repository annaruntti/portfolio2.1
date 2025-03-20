import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  // Debug logging
  console.log("Loaded environment variables:", {
    mode,
    env,
    cwd: process.cwd(),
    emailjsPublicKey: env.VITE_EMAILJS_PUBLIC_KEY,
    emailjsServiceId: env.VITE_EMAILJS_SERVICE_ID,
    emailjsTemplateId: env.VITE_EMAILJS_TEMPLATE_ID,
  });

  return {
    plugins: [react()],
    define: {
      "import.meta.env": JSON.stringify(env),
    },
  };
});
