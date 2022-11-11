import * as React from 'react';
import axios from 'axios';
import * as ReactQuery from 'react-query';
const fetcher = (url) => fetch(url).then((response) => response.json());
const queryClient = new ReactQuery.QueryClient();

const BannersRow1 = () => {
  let [currentItem, setCurrentItem] = React.useState(0);
  const { data: banner14Items } = ReactQuery.useQuery(
      ['banners14Items'],
      fetcher.bind(
        undefined,
        'https://62ecdb67818ab252b603f9f3.mockapi.io/data/banner14Items'
      )
    ),
    { data: hoan50kxu } = ReactQuery.useQuery(
      ['hoan50kXu'],
      fetcher.bind(
        undefined,
        'https://62ecdb67818ab252b603f9f3.mockapi.io/data/hoan50kxu'
      )
    );
  if ([banner14Items, hoan50kxu].some((v) => v === undefined))
    return <p>Loading</p>;
  return (
    <div className="banners_row_1 widthlimit">
      <div className="banners_row_1__14_items">
        <button className="banners_row_1__prev" onClick={() => {
          if (!currentItem) return;
          setCurrentItem(currentItem - 1);
          console.log(`Item: ${currentItem}`);
        }}>&lt;</button>
        <button className="banners_row_1__next" onClick={() => {
          if (currentItem >= 13) return;
          setCurrentItem(currentItem + 1);
          document.getElementsByClassName("banners_row_1__14_items").style
          console.log(`Item: ${currentItem}`);
        }}>&gt;</button>
        {banner14Items?.data.map(({ src: imageUrl }, index) => (
          <img
            className="banners_row_1__item"
            src={imageUrl}
            key={`banners_row_1_item${index}`}
          />
        ))}
      </div>
      <img className="banners_row_1__hoan50kxu" src={hoan50kxu.src} />
    </div>
  );
};
const BannersRow2 = () => {
  const { data: giaSocHomNay } = ReactQuery.useQuery(
      ['giaSocHomNay'],
      fetcher.bind(
        undefined,
        'https://62ecdb67818ab252b603f9f3.mockapi.io/data/giaSocHomNay'
      )
    ),
    { data: banner5Items } = ReactQuery.useQuery(
      ['banner5Items'],
      fetcher.bind(
        undefined,
        'https://62ecdb67818ab252b603f9f3.mockapi.io/data/banner5Items'
      )
    );
  if ([giaSocHomNay, banner5Items].some((v) => v === undefined))
    return <p>Loading</p>;
  return (
    <div className="banners_row_2 widthlimit">
      <div className="banners_row_2__giasochomnay">
        <table><tr>
          {banner5Items?.data.map(({ src: imageUrl }, index) => (
            <img
              className="banners_row_2__mathang"
              src={imageUrl}
              key={`banners_row_2_item${index}`}
            />
          ))}
        </tr></table>
      </div>
      <div className="banners_row_2__banner5items">
        <table><tr>
          {banner5Items?.data.map(({ image: imageUrl, video: videoUrl }, index) => (
            <td
              className="banners_row_2__item"
              key={`banners_row_2_item${index}`}
            >{videoUrl?
              <video src={videoUrl} poster={imageUrl || ""} height="275px" width="auto" controls={true}></video>
            : <img src={imageUrl} height="275px" width="auto"/>}</td>
          ))}
        </tr></table>
      </div>
    </div>
  );
};

const BannersRows123 = () => (
  <ReactQuery.QueryClientProvider client={queryClient}>
    <BannersRow1 />
    <BannersRow2 />
    
  </ReactQuery.QueryClientProvider>
);
exports.default = BannersRows123;
