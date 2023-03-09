import { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s | AmehSwap',
  defaultTitle: 'AmehSwap',
  description:
    'Experience the freedom and security of buying cryptocurrencies without the hassle of KYC!',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@AmehSwap',
    site: '@AmehSwap',
  },
  openGraph: {
    title: '🥞 AmehSwap - The best fiat to crypto DEX',
    description:
      'Experience the freedom and security of buying cryptocurrencies without the hassle of KYC! With AmehSwap, you easily purchase your favorite coins and tokens anonymously. No more waiting for credit checks or dealing with government regulations. Join the decentralized revolution and take control of your financial future today!',
    images: [{ url: 'https://amehswap.com/images/ameh-hero.png' }],
  },
}
