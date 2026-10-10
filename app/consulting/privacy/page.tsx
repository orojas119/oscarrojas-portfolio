import type { Metadata } from "next";
import { COMPANY } from "../company";
import { LegalPage } from "../LegalPage";

export const metadata: Metadata = { title: "Privacy Policy", alternates: { canonical: "/consulting/privacy" } };

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro={`This policy explains what information ${COMPANY.legalName} ("we", "us") collects, how we use it, and the choices you have. It covers this website, our business dealings with customers and partners, and the software we host for our customers, including our text messaging platform.`}
      sections={[
        {
          heading: "Who we are",
          body: (
            <p>
              {COMPANY.legalName} is a {COMPANY.state} limited liability company at {COMPANY.street}, {COMPANY.cityLine}. You can reach us at{" "}
              <a className="underline underline-offset-4" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.
            </p>
          ),
        },
        {
          heading: "Information we collect",
          body: (
            <ul>
              <li><strong>Business contacts:</strong> names, work email addresses and phone numbers of the customers and partners we work with.</li>
              <li><strong>Account information:</strong> for people who sign in to software we host, their name, work email and sign-in activity.</li>
              <li><strong>Customer content:</strong> information our customers store in the software we host for them, such as contact lists, messages and school records. We process it on our customers&apos; behalf and only to provide the service.</li>
              <li><strong>Technical data:</strong> standard server logs (IP address, browser type, pages requested) used for security and troubleshooting.</li>
            </ul>
          ),
        },
        {
          heading: "Text messaging and mobile information",
          body: (
            <>
              <p>
                Our messaging platform lets our customers send text messages to people who have given them consent. When you text or are texted through
                the platform, the sending organization and we process your mobile number, the messages exchanged, delivery status and your opt-in or
                opt-out status.
              </p>
              <p>
                <strong>
                  No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Text messaging originator
                  opt-in data and consent will not be shared with any third parties.
                </strong>{" "}
                Mobile information is shared only with the service providers that deliver messages (such as Twilio and the mobile carriers) and only to
                deliver them.
              </p>
              <p>Reply STOP to any message to opt out; we record the opt-out and stop all further messages from that sender to your number.</p>
            </>
          ),
        },
        {
          heading: "How we use information",
          body: (
            <ul>
              <li>To provide, secure, support and improve the services our customers pay for.</li>
              <li>To communicate with customers and partners about their accounts, invoices and support requests.</li>
              <li>To meet legal obligations, including honoring opt-outs and responding to lawful requests.</li>
            </ul>
          ),
        },
        {
          heading: "Sharing",
          body: (
            <>
              <p>We do not sell personal information. We share it only:</p>
              <ul>
                <li>with service providers that host or run our services (for example Microsoft Azure for hosting and Twilio for messaging), under contracts that limit their use of it;</li>
                <li>with the partner that resells a service to a customer, limited to account and billing information, never message content or contact lists;</li>
                <li>when required by law, or to protect the rights and safety of people and our services.</li>
              </ul>
            </>
          ),
        },
        {
          heading: "Security and retention",
          body: (
            <p>
              Each customer&apos;s data is kept in its own database, encrypted in transit and at rest, and access is limited to authorized people using
              multi-factor sign-in. We keep information only as long as needed to provide the service or as our customers configure; when a customer
              leaves, we export their data to them and then delete it. Opt-out records are kept so that opt-outs keep being honored.
            </p>
          ),
        },
        {
          heading: "Your choices",
          body: (
            <p>
              If an organization texts you through our platform, contact that organization or reply STOP to opt out, and HELP for help. For information
              a customer stores about you, contact that customer; we will assist them in responding. For anything else, email{" "}
              <a className="underline underline-offset-4" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.
            </p>
          ),
        },
        {
          heading: "Children",
          body: (
            <p>
              Our services are used by schools and organizations, not marketed to children. Student information held in school software is processed on
              the school&apos;s behalf and under its instructions.
            </p>
          ),
        },
        {
          heading: "Changes",
          body: <p>We will post any changes to this policy on this page and update the date above.</p>,
        },
      ]}
    />
  );
}
