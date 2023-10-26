import { memo } from "react";

import AccountItem from "~/components/AccountItem";

function ListSearch({ searchResult }) {
  return (
    <>
      {searchResult.map((result) => (
        <AccountItem key={result.id} data={result} />
      ))}
    </>
  );
}

export default memo(ListSearch);
