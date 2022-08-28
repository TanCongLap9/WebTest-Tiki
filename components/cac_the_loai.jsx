import * as React from 'react';
import axios from "axios"
import * as ReactQuery from 'react-query';
const fetcher = url => fetch(url).then(response => response.json());
const queryClient = new ReactQuery.QueryClient;

const Data = () => {
  const {data: cacTheLoai} = ReactQuery.useQuery([], fetcher.bind(undefined, "https://62ecdb67818ab252b603f9f3.mockapi.io/data/cacTheLoai"))
  if (cacTheLoai === undefined) return <p>Loading</p>
  return cacTheLoai?.data.map(v => <button className="cactheloai__content-button">{v}</button>);
}


const CacTheLoai = () => (
  <ReactQuery.QueryClientProvider client={queryClient}>
    <div className="cactheloai">
      <button className="cactheloai__left">&lt;</button>
      <button className="cactheloai__right">&gt;</button>
      <div className="cactheloai__content widthlimit">
        <Data/>
      </div>
    </div>
  </ReactQuery.QueryClientProvider>
);
export default CacTheLoai;
