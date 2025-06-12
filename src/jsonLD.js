export const jsonLD = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://djtatamoto.hu/#organization',
      name: 'djtatamoto',
      url: 'https://djtatamoto.hu',
      logo: {
        '@type': 'ImageObject',
        '@id': 'https://djtatamoto.hu/#logo',
        url: 'https://djtatamoto.hu/DJTata_logo_clipped.svg',
        width: 200,
        height: 200,
        caption: 'djtatamoto',
      },
      image: {
        '@id': 'https://djtatamoto.hu/#logo',
      },
      sameAs: ['https://www.facebook.com/djtatamoto'],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://djtatamoto.hu/#website',
      url: 'https://djtatamoto.hu',
      name: 'djtatamoto',
      publisher: {
        '@id': 'https://djtatamoto.hu/#organization',
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://djtatamoto.hu/?s={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'WebPage',
      '@id': 'https://djtatamoto.hu/bemutatkozas/#webpage',
      url: 'https://djtatamoto.hu/bemutatkozas',
      name: 'Bemutatkozás',
      isPartOf: {
        '@id': 'https://djtatamoto.hu/#website',
      },
      description:
        'Bemutatkozó oldal a djtatamoto szolgáltatásairól és tapasztalatairól.',
    },
    {
      '@type': 'WebPage',
      '@id': 'https://djtatamoto.hu/szolgaltatasok/eskuvodj/#webpage',
      url: 'https://djtatamoto.hu/szolgaltatasok/eskuvodj',
      name: 'Esküvő DJ Szolgáltatás',
      isPartOf: {
        '@id': 'https://djtatamoto.hu/#website',
      },
      description: 'Esküvői DJ szolgáltatás profi hangzással és hangulattal.',
    },
    {
      '@type': 'WebPage',
      '@id': 'https://djtatamoto.hu/szolgaltatasok/rendezvenydj/#webpage',
      url: 'https://djtatamoto.hu/szolgaltatasok/rendezvenydj',
      name: 'Rendezvény DJ Szolgáltatás',
      isPartOf: {
        '@id': 'https://djtatamoto.hu/#website',
      },
      description:
        'Céges és privát rendezvények hangulatfelelőse - djtatamoto.',
    },
  ],
};
