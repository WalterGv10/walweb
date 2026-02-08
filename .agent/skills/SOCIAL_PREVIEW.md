---
name: Social Media Preview Checklist
description: Checklist to ensure Open Graph and Twitter Card images appear correctly on social media.
---

# Social Media Preview (Open Graph) Checklist

To ensure that links shared on social media (WhatsApp, Facebook, LinkedIn, Twitter/X) display a correct preview image and description, follow this checklist.

## 1. Metadata Configuration (Next.js App Router)
- [ ] **Define `metadataBase`**: specific the base URL of the deployed site.
  ```typescript
  // src/app/layout.tsx
  export const metadata: Metadata = {
    metadataBase: new URL("https://tudominio.vercel.app"), // IMPORTANT
    // ...
  };
  ```

## 2. Open Graph Strategy
- [ ] **`openGraph` Object**:
  ```typescript
  openGraph: {
    title: "Project Title",
    description: "Compelling description.",
    url: "https://tudominio.vercel.app",
    siteName: "Site Name",
    images: [
      {
        url: "/og-image.jpg", // Relative path works if metadataBase is set
        width: 1200,
        height: 630,
        alt: "Description of the image",
      },
    ],
    locale: "es_GT",
    type: "website",
  },
  ```

## 3. Platform Specifics (WhatsApp, Instagram, TikTok)
- [ ] **WhatsApp**:
  - Uses `og:image`.
  - **Critical**: Image size must be **< 300KB** and ideally **square (1:1)** or **1.91:1**.
  - If the image is too heavy, WhatsApp will NOT show it.
- [ ] **Instagram**:
  - Automatically fetches `og:image` for DMs.
  - Unlike Facebook/Twitter, Instagram posts do not generate link previews with large images, but stories and DMs do.
- [ ] **TikTok**:
  - Uses `og:image` and `og:description` for internal messages.
  - Ensure the title is short and catchy.

## 4. Twitter/X Card
- [ ] **`twitter` Object**:
  ```typescript
  twitter: {
    card: "summary_large_image",
    title: "Project Title",
    description: "Short description.",
    images: ["/og-image.jpg"], // Matches Open Graph
  },
  ```

## 4. Assets Verification
- [ ] **File Location**: Ensure the image file (e.g., `walter_v2.jpg`) actually exists in the `public/` folder.
- [ ] **Image Dimensions**: Recommended size is **1200x630 pixels** for best display on all platforms.
- [ ] **File Accessibility**: Verify you can access the image directly via browser (e.g., `localhost:3000/walter_v2.jpg`).

## 5. Deployment Domain
- [ ] If the domain in `metadataBase` is not active (e.g., a custom domain not yet linked), fallback to the Vercel default domain (`.vercel.app`) to ensure previews work immediately.

## 6. Validation Tools
- [ ] **Facebook Debugger**: https://developers.facebook.com/tools/debug/
- [ ] **Twitter Card Validator**: https://cards-dev.twitter.com/validator
- [ ] **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/
