import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://walweb.com.gt',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
    ]
}
