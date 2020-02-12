import Prismic from 'prismic-javascript'
const apiEndpoint = "https://jiafitness.cdn.prismic.io/api/v2/documents/search?ref=XjhnPhIAACYAdHAL&q=%5B%5Bat(document.type%2C%22about%22)%5D%5D";
const accessToken = '';

const Client = Prismic.client(apiEndpoint, { accessToken })

export default Client;



