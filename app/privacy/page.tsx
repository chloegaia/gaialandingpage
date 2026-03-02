import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy - Gaia",
  description:
    "Privacy Policy for Gaia. Learn how we collect, use, and protect your personal data.",
}

export default function PrivacyPage() {
  return (
    <main className="relative min-h-screen w-full">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/bg.jpg"
          alt=""
          fill
          priority
          className="object-cover"
          quality={90}
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="mx-auto flex min-h-screen max-w-3xl flex-col px-6 py-12 md:py-16">
        {/* Header */}
        <header className="flex items-center justify-between">
          <Link href="/" aria-label="Back to home">
            <Image
              src="/logo.png"
              alt="Gaia"
              width={120}
              height={40}
              className="h-7 w-auto md:h-9"
              priority
            />
          </Link>
          <Link
            href="/"
            className="text-xs font-light tracking-wide text-white/50 transition-colors duration-300 hover:text-white/80"
          >
            Back to home
          </Link>
        </header>

        {/* Privacy Policy Content */}
        <article className="mt-12 flex-1 md:mt-16">
          <h1 className="font-serif text-3xl font-light tracking-tight text-white md:text-4xl lg:text-5xl text-balance">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm font-light text-white/50">
            Effective Date: March 2, 2026 &middot; Last Updated: March 2, 2026
          </p>

          <div className="mt-10 space-y-10 text-sm leading-relaxed text-white/70 md:text-base">
            {/* Section 1 */}
            <section>
              <h2 className="font-serif text-xl font-light text-white md:text-2xl">
                1. Introduction
              </h2>
              <p className="mt-4">
                Welcome to <strong className="text-white/90">Gaia</strong> (the
                &ldquo;App&rdquo;). We are committed to protecting your privacy
                and ensuring transparency about how we collect, use, and
                safeguard your personal data.
              </p>
              <p className="mt-3">This Privacy Policy explains:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>
                  What data we collect when you connect your Garmin account
                </li>
                <li>How we use, store, and protect that data</li>
                <li>Your rights and how to exercise them</li>
                <li>
                  How we comply with applicable data protection laws (GDPR,
                  CCPA, etc.)
                </li>
              </ul>
              <p className="mt-3">
                By using the App and connecting your Garmin account, you consent
                to the practices described in this Privacy Policy.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="font-serif text-xl font-light text-white md:text-2xl">
                2. Data We Collect
              </h2>

              <h3 className="mt-6 text-base font-medium text-white/90">
                2.1 Garmin Connect Data
              </h3>
              <p className="mt-3">
                When you authorize our App to access your Garmin Connect account
                via OAuth 2.0, we collect the following personal data:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>
                  <strong className="text-white/90">Activity data:</strong>{" "}
                  steps, distance, heart rate, calories burned, GPS tracks,
                  elevation gain, workout duration, activity type (running,
                  cycling, hiking, etc.), pace, cadence, training load, recovery
                  metrics.
                </li>
                <li>
                  <strong className="text-white/90">Health metrics:</strong>{" "}
                  sleep data, stress levels, Body Battery, respiration rate, VO2
                  Max, hydration, menstrual cycle data (if applicable).
                </li>
                <li>
                  <strong className="text-white/90">
                    Device &amp; account info:
                  </strong>{" "}
                  Garmin device model, firmware version, Garmin Connect user ID
                  (anonymized), time zone.
                </li>
                <li>
                  <strong className="text-white/90">
                    Routes &amp; courses:
                  </strong>{" "}
                  planned routes, saved courses, waypoints, and training plans
                  synced from Garmin Connect.
                </li>
              </ul>
              <p className="mt-3">
                We only access data you explicitly authorize via Garmin&apos;s
                OAuth consent screen.
              </p>

              <h3 className="mt-6 text-base font-medium text-white/90">
                2.2 Account Information
              </h3>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Email address</li>
                <li>Display name (if provided)</li>
                <li>Profile picture (if provided)</li>
                <li>Account preferences and settings</li>
              </ul>

              <h3 className="mt-6 text-base font-medium text-white/90">
                2.3 Usage &amp; Technical Data
              </h3>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>
                  App usage patterns (features accessed, session duration)
                </li>
                <li>
                  Device information (OS version, device type, IP address,
                  browser type)
                </li>
                <li>Crash reports and error logs (anonymized)</li>
                <li>Analytics data (via Firebase Analytics or similar)</li>
              </ul>

              <h3 className="mt-6 text-base font-medium text-white/90">
                2.4 Location Data
              </h3>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>
                  GPS coordinates from Garmin activities (only when you sync
                  activities with location data).
                </li>
                <li>
                  We do not access real-time location tracking outside of Garmin
                  activity data.
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="font-serif text-xl font-light text-white md:text-2xl">
                3. How We Use Your Data
              </h2>
              <p className="mt-4">
                We process your personal data for the following purposes:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>
                  To sync Garmin activities to our platform and provide core
                  functionality of the App (contractual necessity).
                </li>
                <li>
                  To display your activity history, routes, and metrics in the
                  App (legitimate interest).
                </li>
                <li>
                  To send routes, courses, and training plans from our App to
                  your Garmin device (based on your consent via integration
                  settings).
                </li>
                <li>
                  To analyze usage patterns and improve features and performance
                  of the App (legitimate interest, with minimal and aggregated
                  data where possible).
                </li>
                <li>
                  To provide customer support and troubleshoot issues
                  (contractual necessity).
                </li>
                <li>
                  To ensure security, prevent abuse, and detect fraud (legal
                  obligation and legitimate interest).
                </li>
                <li>To comply with legal and regulatory obligations.</li>
              </ul>
              <p className="mt-4 font-medium text-white/90">
                We do not sell your personal data. We do not use your data for
                third-party advertising.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="font-serif text-xl font-light text-white md:text-2xl">
                4. Data Sharing &amp; Transfers to Garmin
              </h2>

              <h3 className="mt-6 text-base font-medium text-white/90">
                4.1 Transfer to Garmin Connect
              </h3>
              <p className="mt-3">
                When you use our App to upload routes, workouts, or training
                plans to your Garmin Connect account, your data is transferred
                to Garmin. You expressly consent to this transfer when you
                connect your Garmin account and use the synchronization
                features.
              </p>
              <p className="mt-3">Data transferred may include:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>
                  Planned routes, courses, and workout files (e.g., GPX, FIT,
                  TCX formats).
                </li>
                <li>Training plans and structured workouts.</li>
                <li>Any user-generated content you choose to sync.</li>
              </ul>
              <p className="mt-3">
                Garmin processes your data in accordance with its own privacy
                policy, available at:{" "}
                <a
                  href="https://www.garmin.com/privacy/connect"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gaia-amber underline underline-offset-2 transition-colors hover:text-gaia-warm"
                >
                  garmin.com/privacy/connect
                </a>
              </p>

              <h3 className="mt-6 text-base font-medium text-white/90">
                4.2 Third-Party Service Providers
              </h3>
              <p className="mt-3">
                We may share your data with trusted service providers solely to
                operate and improve the App, including:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>
                  Cloud hosting providers (e.g., AWS, Google Cloud, Azure) for
                  secure data storage and infrastructure.
                </li>
                <li>
                  Analytics providers (e.g., Google Analytics, Mixpanel) for
                  aggregated usage statistics.
                </li>
                <li>
                  Customer support tools (e.g., Zendesk, Intercom) for handling
                  support requests.
                </li>
                <li>
                  Email service providers (e.g., SendGrid, Mailgun) for
                  transactional emails and notifications.
                </li>
              </ul>
              <p className="mt-3">
                These providers are contractually required to use your data only
                for the specified purposes, protect your data with appropriate
                technical and organizational measures, and comply with applicable
                data protection laws.
              </p>

              <h3 className="mt-6 text-base font-medium text-white/90">
                4.3 Legal Requirements
              </h3>
              <p className="mt-3">
                We may disclose your data when required to do so by law,
                regulation, court order, or governmental request. Where legally
                permitted, we will attempt to notify you of such disclosure.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="font-serif text-xl font-light text-white md:text-2xl">
                5. Data Security
              </h2>
              <p className="mt-4">
                We implement industry-standard security measures to protect your
                personal data, including:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Encryption in transit using TLS for all connections.</li>
                <li>
                  Encryption at rest (e.g., AES-256) for stored data where
                  applicable.
                </li>
                <li>
                  OAuth 2.0 for secure authorization with Garmin Connect.
                </li>
                <li>
                  Role-based access controls and restricted internal access to
                  production data.
                </li>
                <li>
                  Regular security reviews and vulnerability monitoring.
                </li>
              </ul>
              <p className="mt-3">
                In the event of a data breach that is likely to result in a high
                risk to your rights and freedoms, we will notify you and
                relevant authorities in accordance with applicable laws.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="font-serif text-xl font-light text-white md:text-2xl">
                6. Data Retention
              </h2>
              <p className="mt-4">
                We retain your personal data only for as long as necessary to
                fulfill the purposes described in this Privacy Policy or as
                required by law.
              </p>
              <p className="mt-3">Indicative retention periods:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>
                  <strong className="text-white/90">
                    Garmin activity and health data:
                  </strong>{" "}
                  retained for as long as your account is active, plus up to 90
                  days after account deletion (unless you request earlier
                  deletion).
                </li>
                <li>
                  <strong className="text-white/90">
                    Account information:
                  </strong>{" "}
                  retained until your account is deleted.
                </li>
                <li>
                  <strong className="text-white/90">
                    Support communications:
                  </strong>{" "}
                  typically retained for up to 3 years for support history and
                  legal purposes.
                </li>
                <li>
                  Aggregated or anonymized data that cannot be linked back to
                  you may be retained indefinitely.
                </li>
              </ul>
              <p className="mt-3">
                You can request deletion of your data at any time (see Section
                8).
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="font-serif text-xl font-light text-white md:text-2xl">
                7. International Data Transfers
              </h2>
              <p className="mt-4">
                Your information may be processed and stored in countries other
                than your country of residence, including the United States and
                the European Union.
              </p>
              <p className="mt-3">
                Where required by law, we implement safeguards such as:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>
                  Standard Contractual Clauses (SCCs) approved by the European
                  Commission.
                </li>
                <li>
                  Adequacy decisions or equivalent mechanisms for cross-border
                  transfers.
                </li>
                <li>Your explicit consent when necessary.</li>
              </ul>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="font-serif text-xl font-light text-white md:text-2xl">
                8. Your Rights
              </h2>
              <p className="mt-4">
                Depending on your jurisdiction (e.g., EU/EEA, UK, California),
                you may have the following rights regarding your personal data:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>
                  <strong className="text-white/90">Right of access:</strong>{" "}
                  Obtain confirmation and a copy of personal data we hold about
                  you.
                </li>
                <li>
                  <strong className="text-white/90">
                    Right to rectification:
                  </strong>{" "}
                  Correct incomplete or inaccurate data.
                </li>
                <li>
                  <strong className="text-white/90">Right to erasure:</strong>{" "}
                  Request deletion of your personal data, subject to legal
                  retention obligations.
                </li>
                <li>
                  <strong className="text-white/90">
                    Right to restrict processing:
                  </strong>{" "}
                  Ask us to limit processing under certain circumstances.
                </li>
                <li>
                  <strong className="text-white/90">
                    Right to data portability:
                  </strong>{" "}
                  Receive your data in a structured, commonly used,
                  machine-readable format.
                </li>
                <li>
                  <strong className="text-white/90">Right to object:</strong>{" "}
                  Object to certain processing activities, including certain
                  analytics.
                </li>
                <li>
                  <strong className="text-white/90">
                    Right to withdraw consent:
                  </strong>{" "}
                  Withdraw consent at any time, without affecting prior lawful
                  processing.
                </li>
              </ul>
              <p className="mt-4">To exercise these rights, you can:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>
                  Use in-app privacy/settings tools if available.
                </li>
                <li>
                  Or contact us at:{" "}
                  <a
                    href="mailto:contact@temple.am"
                    className="text-gaia-amber underline underline-offset-2 transition-colors hover:text-gaia-warm"
                  >
                    contact@temple.am
                  </a>
                </li>
              </ul>
              <p className="mt-3">
                We will respond to your request within the timeframe required by
                applicable law. You may also have the right to lodge a complaint
                with your local data protection authority.
              </p>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="font-serif text-xl font-light text-white md:text-2xl">
                9. Children&apos;s Privacy
              </h2>
              <p className="mt-4">
                The App is not intended for children under the age of 13 (or
                under 16 where applicable under local law). We do not knowingly
                collect personal data from children. If you believe a child has
                provided us with personal data, please contact us so we can
                delete it.
              </p>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="font-serif text-xl font-light text-white md:text-2xl">
                10. Changes to This Privacy Policy
              </h2>
              <p className="mt-4">
                We may update this Privacy Policy from time to time. Changes
                will be posted within the App and/or on our website with an
                updated &ldquo;Last Updated&rdquo; date.
              </p>
              <p className="mt-3">
                If we make material changes that affect your rights, we will
                notify you via email or in-app notification. Your continued use
                of the App after such changes means you accept the updated
                Policy.
              </p>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="font-serif text-xl font-light text-white md:text-2xl">
                11. Contact Us
              </h2>
              <p className="mt-4">
                If you have questions, concerns, or requests regarding this
                Privacy Policy or your personal data, you can contact us at:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>
                  Email:{" "}
                  <a
                    href="mailto:contact@temple.am"
                    className="text-gaia-amber underline underline-offset-2 transition-colors hover:text-gaia-warm"
                  >
                    contact@temple.am
                  </a>
                </li>
                <li>
                  Website:{" "}
                  <a
                    href="https://gaia.temple.am/privacy"
                    className="text-gaia-amber underline underline-offset-2 transition-colors hover:text-gaia-warm"
                  >
                    gaia.temple.am/privacy
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </article>

        {/* Footer */}
        <footer className="mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center gap-3 md:flex-row md:justify-between">
            <p className="text-xs font-light text-white/30">
              &copy; {new Date().getFullYear()} Gaia. All rights reserved.
            </p>
            <a
              href="mailto:contact@temple.am"
              className="text-xs font-light tracking-wide text-white/40 transition-colors duration-300 hover:text-white/70"
            >
              contact@temple.am
            </a>
          </div>
        </footer>
      </div>
    </main>
  )
}
