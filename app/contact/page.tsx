import dynamic from "next/dynamic";

const ContactPageClient = dynamic(() => import("./ContactClient"), {
  ssr: false,
});

export default function Page() {
  return <ContactPageClient />;
}