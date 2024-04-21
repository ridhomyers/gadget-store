"use client";

import { useEffect, useState } from "react";

const formatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
});

interface CurrencyProps {
  value?: string | number;
}

const Currency: React.FC<CurrencyProps> = ({ value = 0 }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const price = formatter.format(Number(value)).replace(/\,00$/, "");

  return <div className="font-semibold">{price}</div>;
};

export default Currency;
