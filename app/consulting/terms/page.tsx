import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "../company";
import { LegalPage } from "../LegalPage";

export const metadata: Metadata = { title: "Terms of Service", alternates: { canonical: "/consulting/terms" } };

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      intro={`These terms apply to the software and services provided by ${COMPANY.legalName} ("we", "us"), including our hosted applications and text messaging platform. Customer agreements may add to them; where they differ, the signed agreement controls.`}
      sections={[
        {
          heading: "The services",
          body: (
            <p>
              We build, host and maintain software for schools and organizations, sold directly or through our partners. Each customer is responsible
              for how its own staff use the services and for the information it puts into them.
            </p>
          ),
        },
        {
          heading: "Text messaging program",
          body: (
            <>
              <p>
                Organizations use our platform to send text messages to people who have agreed to receive them. Messages identify the organization
                sending them.
              </p>
              <ul>
                <li><strong>Frequency:</strong> message frequency varies by sender.</li>
                <li><strong>Cost:</strong> message and data rates may apply.</li>
                <li><strong>Opt out:</strong> reply STOP to any message to stop receiving texts from that sender. You will receive one final confirmation message.</li>
                <li><strong>Help:</strong> reply HELP for help, or email <a className="underline underline-offset-4" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.</li>
                <li>Carriers are not liable for delayed or undelivered messages.</li>
              </ul>
              <p>
                How we handle mobile information is described in our <Link href="/consulting/privacy" className="underline underline-offset-4">Privacy Policy</Link>.
              </p>
            </>
          ),
        },
        {
          heading: "Acceptable use",
          body: (
            <>
              <p>Customers using the messaging platform must:</p>
              <ul>
                <li>text only people who have given consent, and keep a record of it;</li>
                <li>honor opt-outs (the platform does this automatically) and send only between 8 a.m. and 8 p.m. in the recipient&apos;s time zone;</li>
                <li>register their sender identity and campaigns with the carriers and follow carrier, CTIA and applicable law, including the TCPA;</li>
                <li>not send unlawful, deceptive, harassing or spam content, or share or sell phone numbers collected through the platform.</li>
              </ul>
              <p>We may suspend sending that breaks these rules or that a carrier flags, and will tell the customer why.</p>
            </>
          ),
        },
        {
          heading: "Accounts and security",
          body: (
            <p>
              Customers keep sign-in credentials confidential and use multi-factor authentication where offered. Tell us promptly about any unauthorized
              access at <a className="underline underline-offset-4" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.
            </p>
          ),
        },
        {
          heading: "Fees",
          body: <p>Fees are set in the customer&apos;s order or the partner&apos;s agreement. Customers buying through a partner are billed by that partner.</p>,
        },
        {
          heading: "Data",
          body: (
            <p>
              Customers own their data. We use it only to provide the services. When a customer leaves, we provide an export and then delete it, except
              for opt-out records kept so that opt-outs continue to be honored.
            </p>
          ),
        },
        {
          heading: "Warranty and liability",
          body: (
            <p>
              We work to keep the services available and secure, but they are provided as is, without warranties beyond those in a signed agreement. To
              the extent the law allows, our total liability is limited to the fees paid for the service in the twelve months before the claim, and we
              are not liable for indirect or consequential damages.
            </p>
          ),
        },
        {
          heading: "Governing law",
          body: <p>These terms are governed by the laws of the State of {COMPANY.state}, with venue in Miami-Dade County.</p>,
        },
        {
          heading: "Contact",
          body: (
            <p>
              {COMPANY.legalName}, {COMPANY.street}, {COMPANY.cityLine} ·{" "}
              <a className="underline underline-offset-4" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
            </p>
          ),
        },
      ]}
    />
  );
}
