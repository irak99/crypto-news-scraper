const axios = require("axios");
const cheerio = require("cheerio");

const page_url =
  "https://www.forbes.com/advisor/investing/why-is-bitcoins-price-falling/";
//   "https://www.investopedia.com/articles/investing/031416/bitcoin-vs-ethereum-driven-different-purposes.asp";

async function getData() {
  const body = $("body");
  const { data } = await axios.get(page_url);
  const $ = cheerio.load(data);
  let niza = body.text().split(" ");
  niza = niza.filter((e) => String(e).trim());

  const badWords = ["falling", "losing", "lack", "bears", "bearish"];
  const goodWords = ["raising", "bull", "bullishs", "fomo"];
  const coins = [
    "bitcoin",
    "btc",
    "ethereum",
    "tether",
    "binance",
    "cardiano",
    "dogecoin",
    "xrp",
  ];
  const lowerCase = niza.map((name) => name.toLowerCase());
  let intersection = lowerCase.filter((value) => {
    return coins.includes(value);
  });
  console.log(intersection);
  let a = [];
  let b = [];
  let prev;
  intersection.sort();
  for (let index = 0; index < intersection.length; index++) {
    if (intersection[index] !== prev) {
      a.push(intersection[index]);
      b.push(1);
    } else {
      b[b.length - 1]++;
    }
    prev = intersection[index];
  }
  console.log(a, b);
  //   console.log(b.indexOf(Math.max(...b)), a[b.indexOf(Math.max(...b))]);
}

async function getTitle() {
  const { data } = await axios.get(page_url);
  const $ = cheerio.load(data);
  const title = $("title");
  let niza = title.text().split(" ");
  niza = niza.filter((e) => String(e).trim());
  let nia;
  niza.forEach((element) => {
    // element.toString().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    // console.log(element);
    element.filter((e) => {
      e.split("");
      console.log(e);
    });
    // nia.push(element.split(""));

    // console.log(nia[4].replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, ""));
  });
  console.log(nia);
}
getTitle();
// getData();
