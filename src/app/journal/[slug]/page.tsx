import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { articles } from "@/data/journal";
import { getWhatsAppUrl, whatsappMessages } from "@/lib/contact";
import { Footer } from "@/sections/Footer";

const baseUrl = "https://alexmotosport.com";
const sectionId = (heading: string) => heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-$/, "");
const findArticle = (slug: string) => articles.find((article) => article.slug === slug);

export function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = findArticle(params.slug);
  if (!article) return notFound();
  const title = article.seoTitle ?? `${article.title} | Alex Motosport`;
  const url = `${baseUrl}/journal/${article.slug}`;
  return {
    title,
    description: article.excerpt,
    alternates: { canonical: url },
    authors: [{ name: article.author }],
    openGraph: {
      title, description: article.excerpt, url, type: "article",
      ...(article.date ? { publishedTime: article.date, modifiedTime: article.date } : {}),
      images: [{ url: article.image, alt: article.imageAlt ?? article.title }],
    },
    twitter: { card: "summary_large_image", title, description: article.excerpt, images: [article.image] },
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = findArticle(params.slug);
  if (!article) return notFound();
  const wordCount = [article.intro, ...article.sections.flatMap((section) => [section.heading, ...section.body, ...(section.bullets ?? []), ...(section.specs?.flat() ?? [])]), ...(article.faqs?.flatMap((faq) => [faq.question, faq.answer]) ?? [])].join(" ").split(/\s+/).length;
  const readingMinutes = Math.max(1, Math.ceil(wordCount / 200));
  const url = `${baseUrl}/journal/${article.slug}`;
  const related = articles.filter((item) => article.related?.includes(item.slug));
  const schema = [
    {
      "@context": "https://schema.org", "@type": "BlogPosting", headline: article.title,
      description: article.excerpt, image: `${baseUrl}${article.image}`, mainEntityOfPage: url,
      articleSection: article.category,
      ...(article.date ? { datePublished: article.date, dateModified: article.date } : {}),
      author: { "@type": article.author === "Alex Motosport" ? "Organization" : "Person", name: article.author, url: article.author === "Alex Motosport" ? baseUrl : "https://createdbygustavo.com" },
      publisher: { "@type": "Organization", name: "Alex Motosport", url: baseUrl },
    },
    {
      "@context": "https://schema.org", "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
        { "@type": "ListItem", position: 2, name: "Journal", item: `${baseUrl}/journal` },
        { "@type": "ListItem", position: 3, name: article.title, item: url },
      ],
    },
  ];
  return (
    <>
      <main className="bg-black text-white">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
        <article>
          <header className="mx-auto max-w-6xl px-6 pt-16 md:pt-24">
            <nav aria-label="Breadcrumb" className="flex gap-3 text-sm text-white/60">
              <Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/journal">Journal</Link>
            </nav>
            <p className="mt-8 text-xs uppercase tracking-[0.22em] text-white/55">{article.category} · {readingMinutes} min read</p>
            <h1 className="mt-4 max-w-5xl text-4xl font-bold tracking-tight md:text-6xl">{article.title}</h1>
            <p className="mt-6 text-sm text-white/60">
              By {article.author}
              {article.date && <> · <time dateTime={article.date}>{new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Nicosia" }).format(new Date(article.date))}</time></>}
            </p>
            <div className="relative mt-10 aspect-[3/2] overflow-hidden rounded-3xl border border-white/10">
              <Image src={article.image} alt={article.imageAlt ?? article.title} fill priority sizes="(max-width: 1152px) 100vw, 1152px" className="object-cover" />
            </div>
          </header>
          <div className="mx-auto max-w-3xl px-6 py-14 md:py-20">
            <p className="text-xl leading-relaxed text-white/85">{article.intro}</p>
            <nav aria-label="In this article" className="my-10 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <p className="font-semibold">In this article</p>
              <ul className="mt-4 space-y-3 text-white/70">
                {article.sections.map((section) => <li key={section.heading}><a className="underline decoration-white/20 underline-offset-4 hover:text-white" href={`#${sectionId(section.heading)}`}>{section.heading}</a></li>)}
                {article.faqs && <li><a className="underline decoration-white/20 underline-offset-4 hover:text-white" href="#questions">Frequently asked questions</a></li>}
              </ul>
            </nav>
            <div className="space-y-14">
              {article.sections.map((section) => (
                <section key={section.heading} id={sectionId(section.heading)} className="scroll-mt-28 space-y-5">
                  <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{section.heading}</h2>
                  {section.body.map((paragraph) => <p key={paragraph} className="text-lg leading-relaxed text-white/75">{paragraph}</p>)}
                  {section.specs && <div className="overflow-x-auto rounded-2xl border border-white/15"><table className="w-full text-left text-sm sm:text-base"><caption className="sr-only">Kayo T4 300 supplier specifications</caption><tbody>{section.specs.map(([label, value]) => <tr key={label} className="border-b border-white/10 last:border-0"><th scope="row" className="w-1/3 bg-white/[0.04] p-4 font-medium">{label}</th><td className="p-4 text-white/75">{value}</td></tr>)}</tbody></table></div>}
                  {section.bullets && <ul className="list-disc space-y-3 pl-6 text-lg leading-relaxed text-white/75">{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}
                  {section.image && <figure className="pt-3"><div className="relative aspect-[3/2] overflow-hidden rounded-2xl"><Image src={section.image} alt={section.imageAlt ?? section.heading} fill sizes="(max-width: 768px) 100vw, 720px" className="object-cover" /></div><figcaption className="mt-3 text-sm text-white/50">{section.imageAlt}</figcaption></figure>}
                  {section.links && <ul className="space-y-3 pt-2">{section.links.map((link) => <li key={link.href}><Link href={link.href} className="text-red-200 underline decoration-red-200/40 underline-offset-4 hover:text-white">{link.label} →</Link></li>)}</ul>}
                </section>
              ))}
              {article.faqs && <section id="questions" className="scroll-mt-28 space-y-7"><h2 className="text-3xl font-semibold">Frequently asked questions</h2>{article.faqs.map((faq) => <div key={faq.question}><h3 className="text-xl font-semibold">{faq.question}</h3><p className="mt-3 text-lg leading-relaxed text-white/75">{faq.answer}</p></div>)}</section>}
            </div>
            <aside className="mt-14 rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8">
              <h2 className="text-2xl font-semibold">{article.cta ?? "Ready to get practical advice?"}</h2>
              <p className="mt-4 text-white/70">Speak with Alex Motosport about bikes, gear, parts or a visit to the Paphos shop.</p>
              <a href={getWhatsAppUrl(article.ctaMessage ?? whatsappMessages.general)} className="mt-6 inline-flex rounded-lg bg-white px-6 py-3 font-medium text-black hover:bg-red-50">Ask Alex on WhatsApp</a>
            </aside>
            {related.length > 0 && <aside className="mt-14 border-t border-white/10 pt-8"><h2 className="text-2xl font-semibold">Keep reading</h2><ul className="mt-5 space-y-4">{related.map((item) => <li key={item.slug}><Link className="text-red-200 underline underline-offset-4" href={`/journal/${item.slug}`}>{item.title}</Link></li>)}</ul></aside>}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
