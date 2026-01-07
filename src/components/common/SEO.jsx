import React from 'react';
import { Helmet } from 'react-helmet-async';
import { portfolioData } from '../../data/portfolio';

const SEO = ({
    title,
    description,
    keywords,
    image,
    path = '',
    article = false,
    publishedTime,
    modifiedTime,
    schema
}) => {
    const { seo, personal } = portfolioData;

    // Build full title
    const siteTitle = title
        ? `${title} | ${personal.name}`
        : seo.title;

    // Meta content with fallbacks
    const metaDescription = description || seo.description;
    const metaKeywords = keywords || seo.keywords;
    const metaImage = image || seo.image;
    const pageUrl = path ? `${seo.url}${path}` : seo.url;

    // Breadcrumb schema for navigation
    const breadcrumbSchema = path ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": seo.url
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": title || "Page",
                "item": pageUrl
            }
        ]
    } : null;

    // WebPage schema
    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": article ? "Article" : "WebPage",
        "name": siteTitle,
        "description": metaDescription,
        "url": pageUrl,
        "image": metaImage,
        "author": {
            "@type": "Person",
            "name": personal.name,
            "url": seo.url
        },
        "publisher": {
            "@type": "Person",
            "name": personal.name
        },
        ...(publishedTime && { "datePublished": publishedTime }),
        ...(modifiedTime && { "dateModified": modifiedTime })
    };

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{siteTitle}</title>
            <meta name="title" content={siteTitle} />
            <meta name="description" content={metaDescription} />
            <meta name="keywords" content={metaKeywords} />
            <meta name="author" content={personal.name} />
            <link rel="canonical" href={pageUrl} />

            {/* Robots */}
            <meta name="robots" content="index, follow" />
            <meta name="googlebot" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={article ? "article" : seo.type} />
            <meta property="og:url" content={pageUrl} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={metaImage} />
            <meta property="og:image:alt" content={`${personal.name} - ${title || 'Portfolio'}`} />
            <meta property="og:site_name" content={`${personal.name} Portfolio`} />
            <meta property="og:locale" content="en_US" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={pageUrl} />
            <meta name="twitter:title" content={siteTitle} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={metaImage} />
            <meta name="twitter:creator" content={seo.twitterHandle} />
            <meta name="twitter:site" content={seo.twitterHandle} />

            {/* Article specific tags */}
            {article && publishedTime && (
                <meta property="article:published_time" content={publishedTime} />
            )}
            {article && modifiedTime && (
                <meta property="article:modified_time" content={modifiedTime} />
            )}
            {article && (
                <meta property="article:author" content={personal.name} />
            )}

            {/* WebPage Schema */}
            <script type="application/ld+json">
                {JSON.stringify(webPageSchema)}
            </script>

            {/* Breadcrumb Schema */}
            {breadcrumbSchema && (
                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbSchema)}
                </script>
            )}

            {/* Custom Schema if provided */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;

