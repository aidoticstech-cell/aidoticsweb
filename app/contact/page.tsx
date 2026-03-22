export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "force-no-store";
import ContactClient from "./ContactClient";
export default function ContactPage() {
  return <ContactClient />;
}