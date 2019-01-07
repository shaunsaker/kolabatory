const title = 'Kolabatory';
const description = 'Web, Mobile and Native App Development in Cape Town, South Africa';

const SEO = {
  title,
  description,
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://www.kolabatory.co.za',
    title,
    description,
    image: 'https://www.kolabatory.co.za/static/images/kolabatory.png',
    imageWidth: 1000,
    imageHeight: 1000,
    site_name: 'kolabatory.co.za',
  },
  twitter: {
    handle: '@kolabatory',
    cardType: 'summary_large_image',
  },
  richText: {
    openingHours: 'Mo,Tu,We,Th,Fr 08:00-17:00',
    streetAddress: '34 Tuscan Waters, Gie Road',
    addressLocality: 'Cape Town',
    postalCode: '7441',
    addressCountry: 'South Africa',
    priceRange: 'RRR',
  },
};

export default SEO;
