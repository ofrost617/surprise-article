export function getRandomArticle() {
  const articles = [
    {
     title: 'Who Owns Mars?',
     description: 'Elon Musk and the governance of space',
     thumbnail: '../public/images/mars.png',
     url: 'https://arcdigital.media/who-owns-mars-1b03190048fd'
    },
    {
      title: 'Let’s Destroy Bitcoin',
      description: 'Three ways Bitcoin could be brought down, co-opted, or made irrelevant',
      thumbnail: '../public/images/bitcoin.jpeg',
      url: 'https://medium.com/mit-technology-review/lets-destroy-bitcoin-3211861ce7a3'
     } 
  ]
  return articles[Math.floor ( Math.random() * articles.length )]
}