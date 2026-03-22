import dynamicImport from "next/dynamic";

export const dynamic = "force-dynamic";

// 🔥 disable SSR for this component
const ContactClient = dynamicImport(() => import("./ContactClient"), {
  ssr: false,
});


export default function ContactPage() {
  return <ContactClient />;
}