import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    { source: "/shop", destination: "/", permanent: false },
    { source: "/product/signature-adewunmi", destination: "/product/sapphire-adewunmi", permanent: true },
    { source: "/product/signature-argentine-bob", destination: "/product/sapphire-argentine-bob", permanent: true },
    { source: "/product/signature-caramel-wave-24", destination: "/product/sapphire-caramel-wave-24", permanent: true },
    { source: "/product/signature-velmorea-24", destination: "/product/sapphire-velmorea-24", permanent: true },
    { source: "/product/signature-adunni-26", destination: "/product/sapphire-adunni-26", permanent: true },
    { source: "/product/signature-aurelia-barrel-curl-24", destination: "/product/sapphire-aurelia-barrel-curl-24", permanent: true },
    { source: "/product/signature-honey-ash-bronzed-wave-24", destination: "/product/sapphire-honey-ash-bronzed-wave-24", permanent: true },
    { source: "/product/signature-the-essential", destination: "/product/sapphire-the-essential", permanent: true },
    { source: "/product/signature-precision-bob", destination: "/product/sapphire-precision-bob", permanent: true },
    { source: "/product/signature-bundles-trio", destination: "/product/sapphire-bundles-trio", permanent: true },
    { source: "/product/signature-tapeins", destination: "/product/sapphire-tapeins", permanent: true },
    { source: "/product/signature-hd-frontal", destination: "/", permanent: true },
    { source: "/product/signature-bespoke-atelier", destination: "/product/atelier-bespoke", permanent: true },
    { source: "/collections/signature", destination: "/collections/sapphire", permanent: true },
  ];
  },
};

export default nextConfig;
