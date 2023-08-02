import { netlifyEdgeAdapter } from "@builder.io/qwik-city/adapters/netlify-edge/vite";
import { extendConfig } from "@builder.io/qwik-city/vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { UserConfig, Plugin } from "vite";
import { join } from "path";
import baseConfig from "../../vite.config";

const modified: UserConfig = {
  ...baseConfig,
  // vite does not override plugins in it's "mergeConfig" util
  plugins: (baseConfig as UserConfig).plugins?.filter(
    (p) => (p as Plugin)?.name !== "vite-plugin-qwik"
  ),
};
export default extendConfig(modified, () => {
  const outDir = "dist/apps/bin";
  const ssrOutDir = join(outDir, ".netlify/edge-functions/entry.netlify-edge");

  return {
    build: {
      ssr: true,
      rollupOptions: {
        input: ["apps/bin/src/entry.netlify-edge.tsx", "@qwik-city-plan"],
      },
      outDir: ssrOutDir,
    },
    plugins: [
      netlifyEdgeAdapter(),
      qwikVite({
        client: {
          outDir: join("../../", outDir, "client"),
        },
        ssr: {
          outDir: join("../../", ssrOutDir),
        },
      }),
    ],
  };
});
