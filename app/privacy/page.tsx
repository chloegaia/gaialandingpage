import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Notice - Temple.AM",
  description:
    "Privacy Notice for Temple.AM. Learn how we collect, use, and protect your personal information.",
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
              alt="Temple.AM"
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

        {/* Privacy Notice Content */}
        <article className="mt-12 flex-1 md:mt-16">
          <h1 className="font-serif text-3xl font-light tracking-tight text-white md:text-4xl lg:text-5xl text-balance">
            Temple.AM Privacy Notice
          </h1>
          <p className="mt-4 text-sm font-light text-white/50">
            Last Updated: April 8, 2026
          </p>

          <div className="mt-10 space-y-10 text-sm leading-relaxed text-white/70 md:text-base">
            {/* Intro */}
            <section>
              <p>
                This Privacy Notice describes how Temple AI Inc. (collectively,
                &ldquo;Temple.AM,&rdquo; &ldquo;we,&rdquo; or &ldquo;us&rdquo;)
                collects, uses, discloses, and otherwise processes information
                about you. This Privacy Notice applies to information we collect
                when you access or use our websites (collectively, the
                &ldquo;Website&rdquo;), the Gaia application and any other mobile
                applications (each an &ldquo;App&rdquo; and together with the
                Website, the &ldquo;Services&rdquo;), or when you otherwise
                interact with us, such as through our customer support channels.
              </p>
              <p className="mt-4">
                This Privacy Notice is effective as of the &ldquo;Last
                Updated&rdquo; date above. We may change this Privacy Notice from
                time to time. If we make changes, we will notify you by revising
                the &ldquo;Last Updated&rdquo; date. Where required by law, we
                will notify you of changes through the Services or by other means.
              </p>
            </section>

            {/* Collection of Information */}
            <section>
              <h2 className="font-serif text-xl font-light text-white md:text-2xl">
                Collection of Information
              </h2>

              <h3 className="mt-6 text-base font-medium text-white/90">
                Information You Provide to Us
              </h3>
              <p className="mt-3">
                We collect information directly from you when you create an
                account, request customer support, or otherwise communicate with
                us. The categories of information we collect include:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>
                  <strong className="text-white/90">
                    Account Information:
                  </strong>{" "}
                  we collect your name, email address, and date of birth.
                </li>
                <li>
                  <strong className="text-white/90">User Content:</strong> we
                  collect and maintain information from the content you provide to
                  our Services, such as text-based wellness logs, photos, videos,
                  and any other content that you provide to our Services.
                </li>
                <li>
                  <strong className="text-white/90">
                    Financial Information:
                  </strong>{" "}
                  we rely on third-party payment processors to collect the
                  financial information used to pay for the Services.
                </li>
                <li>
                  <strong className="text-white/90">
                    Communication Information:
                  </strong>{" "}
                  we collect information included in your communications with us,
                  including retention of chats submitted through our Services.
                </li>
              </ul>
              <p className="mt-3">
                We may also collect any other information you choose to provide.
              </p>

              <h3 className="mt-6 text-base font-medium text-white/90">
                Information We Collect Automatically
              </h3>
              <p className="mt-3">
                We automatically collect the following categories of information:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>
                  <strong className="text-white/90">
                    Transactional Information:
                  </strong>{" "}
                  we keep a history of your transactions with us, including the
                  dates and amounts paid for the Services.
                </li>
                <li>
                  <strong className="text-white/90">
                    Internet Activity Information:
                  </strong>{" "}
                  we collect information about how you access our Services,
                  including data about the device and network you use, such as
                  your hardware model, operating system version, mobile network,
                  IP address, unique device identifiers, and browser type. We also
                  collect information about your activity on our Website, App, and
                  interaction with our communications, such as access times,
                  browsing behavior (such as pages viewed and links clicked), and
                  the page you visited before navigating to our Website.
                </li>
                <li>
                  <strong className="text-white/90">
                    Precise Geolocation Information:
                  </strong>{" "}
                  With your consent, we may collect information about the precise
                  location of your device. You can stop the collection of precise
                  location information at any time in your device settings.
                </li>
                <li>
                  <strong className="text-white/90">
                    Information Collected by Cookies and Similar Tracking
                    Technologies:
                  </strong>{" "}
                  We use tracking technologies, such as cookies and pixels, and
                  software development kits/SDKs to collect information about your
                  interactions with our Services and communications. These
                  technologies help us improve our Services and communications,
                  see which areas and features are popular, count visits, and
                  track clicks. You may be able to adjust your browser settings to
                  remove or reject browser cookies. Please note that removing or
                  rejecting cookies could affect the availability and
                  functionality of our Services.
                </li>
              </ul>

              <h3 className="mt-6 text-base font-medium text-white/90">
                Information We Collect from Other Sources
              </h3>
              <p className="mt-3">
                We may collect information from the following third-party sources:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>
                  <strong className="text-white/90">
                    Third-Party Integrations:
                  </strong>{" "}
                  If you connect third-party services to the Services, we may
                  collect information that you share with us through services. For
                  example, if you connect Apple Health, Garmin, or Oura accounts
                  to the Services, we may collect information about your sleep and
                  physical activity. If you connect your calendar, we will also
                  receive information about your meetings and appointments.
                  Additionally, if you create or log into your Temple.AM account
                  through a third-party platform (such as Apple or Google), we may
                  have access to certain information from that platform, such as
                  your name, email address, and calendar information, depending on
                  your account settings.
                </li>
                <li>
                  <strong className="text-white/90">
                    Third-Party Partners:
                  </strong>{" "}
                  We may collect information from third-party partners. For
                  example, we may collect contact information and device
                  identifiers from advertising networks and data analytics
                  providers.
                </li>
                <li>
                  <strong className="text-white/90">
                    Social Media Platforms:
                  </strong>{" "}
                  We may also collect information you share when you interact with
                  us on social media platforms, such as Facebook.
                </li>
              </ul>

              <h3 className="mt-6 text-base font-medium text-white/90">
                Derived Information
              </h3>
              <p className="mt-3">
                We may derive information or draw inferences about you based on
                the information we collect. For example, we may make inferences
                about your approximate location based on your IP address.
              </p>
            </section>

            {/* Use of Information */}
            <section>
              <h2 className="font-serif text-xl font-light text-white md:text-2xl">
                Use of Information
              </h2>
              <p className="mt-4">
                We use the categories of information we collect for the following
                business and commercial purposes:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>
                  <strong className="text-white/90">Service Delivery:</strong> we
                  use information to provide and maintain our Services, including
                  to offer personal wellness insights, process payments, and
                  authenticate your account.
                </li>
                <li>
                  <strong className="text-white/90">Communication:</strong> we
                  use information to communicate with you about Temple.AM and our
                  Services, including to respond to your questions, inform you of
                  price or Services changes, and send you other transactional or
                  relationship messages.
                </li>
                <li>
                  <strong className="text-white/90">
                    Marketing and Advertising:
                  </strong>{" "}
                  we use information for marketing and advertising, including to
                  send direct marketing messages and target advertisements to you
                  on third-party platforms and websites as described in the
                  &ldquo;Targeted Advertising and Analytics&rdquo; section below.
                  You can opt out of direct marketing messages we send by
                  following the instructions in those communications (such as by
                  clicking &ldquo;unsubscribe&rdquo; in the emails) or by
                  reaching out via the &ldquo;Contact Us&rdquo; section below.
                </li>
                <li>
                  <strong className="text-white/90">
                    Research and Development:
                  </strong>{" "}
                  we use information to monitor and analyze Website trends, usage,
                  and activities, improve our Website and Services, and generate
                  de-identified or aggregated data. We also use information to
                  develop new products and services, including to train our
                  artificial intelligence models.
                </li>
                <li>
                  <strong className="text-white/90">
                    Protection and Compliance:
                  </strong>{" "}
                  we use information to detect, investigate, and help prevent
                  security incidents and other malicious, deceptive, fraudulent,
                  or illegal activity, help protect the rights and property of
                  Temple.AM and others, and comply with our legal and financial
                  obligations.
                </li>
                <li>
                  <strong className="text-white/90">Notice/Consent:</strong> we
                  may also use information in other circumstances after giving you
                  notice and/or getting your consent.
                </li>
              </ul>
            </section>

            {/* Targeted Advertising and Analytics */}
            <section>
              <h2 className="font-serif text-xl font-light text-white md:text-2xl">
                Targeted Advertising and Analytics
              </h2>
              <p className="mt-4">
                We engage others to provide analytics services, serve
                advertisements, and perform related services across the web and in
                mobile applications. These entities may use cookies, web beacons,
                device identifiers, and other technologies to collect information
                about your use of our Website, including your IP address, web
                browser and mobile network information, pages viewed, time spent
                on pages, and links clicked. This information is used to deliver
                advertising targeted to your interests on other companies&apos;
                sites or mobile apps and to analyze and track data, determine the
                popularity of certain content, and better understand your
                activity.
              </p>
              <p className="mt-4">
                You can also learn more about interest-based ads, or opt out of
                having your web browsing information used for behavioral
                advertising purposes by companies that participate in the Digital
                Advertising Alliance, by visiting{" "}
                <a
                  href="https://www.aboutads.info/choices"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gaia-amber underline underline-offset-2 transition-colors hover:text-gaia-warm"
                >
                  www.aboutads.info/choices
                </a>
                .
              </p>
            </section>

            {/* Disclosure of Information */}
            <section>
              <h2 className="font-serif text-xl font-light text-white md:text-2xl">
                Disclosure of Information
              </h2>
              <p className="mt-4">We disclose information as follows:</p>
              <ul className="mt-2 list-disc space-y-2 pl-5">
                <li>
                  <strong className="text-white/90">Vendors:</strong> we disclose
                  information to vendors, service providers, contractors and
                  consultants that need this information to provide services to
                  us, such as companies that assist us with web hosting, payment
                  processing, fraud prevention, customer service, data
                  enrichment, analytics, and marketing and advertising.
                </li>
                <li>
                  <strong className="text-white/90">
                    Advertising Partners:
                  </strong>{" "}
                  we disclose information to third parties for the purposes
                  described in the Marketing and Advertising subsection above.
                </li>
                <li>
                  <strong className="text-white/90">
                    Professional Advisors:
                  </strong>{" "}
                  we disclose information to our lawyers and other professional
                  advisors where necessary to obtain advice or otherwise protect
                  and manage our business interests.
                </li>
                <li>
                  <strong className="text-white/90">Legal Authorities:</strong>{" "}
                  we may disclose information to legal authorities and others for
                  the purposes described in the Protection and Compliance
                  subsection above, including if we believe that disclosure is in
                  accordance with, or required by, any applicable law or legal
                  process, including lawful requests by public authorities to meet
                  national security or law enforcement requirements and if we
                  believe that your actions are inconsistent with our user
                  agreements or policies, if we believe that you have violated the
                  law, or if we believe it is necessary to protect the rights,
                  property, and safety of Temple.AM, our users, the public, or
                  others.
                </li>
                <li>
                  <strong className="text-white/90">
                    Corporate Transactions:
                  </strong>{" "}
                  we reserve the right to disclose information in connection with
                  or during negotiations of certain corporate transactions,
                  including the merger, sale of company assets, financing, or
                  acquisition of all or a portion of our business by another
                  company.
                </li>
                <li>
                  <strong className="text-white/90">Affiliates:</strong> we
                  reserve the right to disclose information between and among
                  Temple.AM and any current or future parents, affiliates,
                  subsidiaries, and other companies under common control and
                  ownership.
                </li>
                <li>
                  <strong className="text-white/90">Consent:</strong> we may
                  disclose information when we have your consent or you direct us
                  to do so.
                </li>
              </ul>
              <p className="mt-4">
                We also disclose de-identified information that cannot reasonably
                be used to identify you.
              </p>
            </section>

            {/* Transfer of Information */}
            <section>
              <h2 className="font-serif text-xl font-light text-white md:text-2xl">
                Transfer of Information
              </h2>
              <p className="mt-4">
                Temple.AM is headquartered in the United States and we have
                operations and vendors in the United States and other countries.
                Therefore, we and our vendors may transfer your personal
                information to, or store or access it in, jurisdictions that may
                not provide equivalent levels of data protection to your home
                jurisdiction.
              </p>
            </section>

            {/* Applicant Information */}
            <section>
              <h2 className="font-serif text-xl font-light text-white md:text-2xl">
                Applicant Information
              </h2>
              <p className="mt-4">
                When you apply for a position with Temple.AM, we collect the
                information that you provide in connection with your application.
                This includes name, contact information, professional credentials
                and skills, educational and work history, and other information
                that may be included in a resume or provided during interviews
                (which may be recorded). This may also include demographic or
                diversity information that you voluntarily provide. We may also
                conduct background checks and receive related information.
              </p>
              <p className="mt-4">
                We use applicants&apos; information to facilitate our recruitment
                activities and process applications, including evaluating
                candidates and monitoring recruitment and hiring statistics. We
                use successful candidates&apos; information to administer the
                employment or independent contractor relationship. We may also use
                and disclose applicants&apos; information (a) to improve our
                Website, (b) as otherwise necessary to comply with relevant laws,
                (c) to respond to subpoenas or warrants served on Temple.AM, and
                (d) to protect and defend the rights or property of Temple.AM or
                others.
              </p>
            </section>

            {/* Contact Us */}
            <section>
              <h2 className="font-serif text-xl font-light text-white md:text-2xl">
                Contact Us
              </h2>
              <p className="mt-4">
                If you have any questions about this Privacy Notice, please
                contact us at{" "}
                <a
                  href="mailto:contact@temple.am"
                  className="text-gaia-amber underline underline-offset-2 transition-colors hover:text-gaia-warm"
                >
                  contact@temple.am
                </a>
                .
              </p>
            </section>
          </div>
        </article>

        {/* Footer */}
        <footer className="mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center gap-3 md:flex-row md:justify-between">
            <p className="text-xs font-light text-white/30">
              &copy; {new Date().getFullYear()} Temple.AM. All rights reserved.
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
