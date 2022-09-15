import * as React from 'react';
import axios from "axios"
import * as ReactQuery from 'react-query';
const fetcher = url => fetch(url).then(response => response.json());
const queryClient = new ReactQuery.QueryClient;

const Data = () => {
  const {data: banner14Items} = ReactQuery.useQuery([], fetcher.bind(undefined, "https://62ecdb67818ab252b603f9f3.mockapi.io/data/banner14Items"))
  const {data: hoan50kxu} = ReactQuery.useQuery([], fetcher.bind(undefined, "https://62ecdb67818ab252b603f9f3.mockapi.io/data/hoan50kxu"))
  if (banner14Items === undefined | hoan50kxu === undefined) return <p>Loading</p>
  return <div className="banners_row_1">
    <div className="banners_row_1__14_items">
      {banner14Items?.data.map(({src: imageUrl}, index) => <img className="banners_row_1__item" src={imageUrl} key={`banners_row_1_item${index}`}/>)}
    </div>
    <img src={hoan50kxu.src}/>
  </div>;
}


const BannersRow1 = () => (
  <ReactQuery.QueryClientProvider client={queryClient}>
    <Data/>
  </ReactQuery.QueryClientProvider>
);
exports.default = BannersRow1;
