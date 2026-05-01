import Link from "next/link";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-3xl rounded-[32px] border border-white/10 bg-white/[0.04] p-8">
        <p className="text-xs uppercase tracking-[0.28em] text-white/50">
          Enquiry sent
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight">
          Thanks — Alex Motosport has received your enquiry.
        </h1>

        <p className="mt-5 text-white/70">
          We’ll get back to you as soon as possible. For the fastest reply, you can also
          message Alex directly on WhatsApp.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex rounded-lg bg-white px-6 py-3 font-medium text-black hover:bg-[#fff1f1]"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
