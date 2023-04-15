import { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s | AmehSwap',
  defaultTitle: 'AmehSwap',
  description:
    'We are Uniswap’s fiat-to-crypto on-ramp service best alternative. Uniswap’s fiat-to-crypto on-ramp service requires KYC, AmehSwap does not.',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@AmehSwap',
    site: '@AmehSwap',
  },
  openGraph: {
    title: '🥞 AmehSwap - Where Fiat Meets Crypto with Ease.',
    description:
      'AmehSwap provides the most seamless fiat-to-crypto on-ramp service for users to easily convert their fiat currency into cryptocurrencies on a decentralized exchange.',
    images: [{ url: 'https://amehswap.com/images/ameh-hero.png' }],
  },
}
