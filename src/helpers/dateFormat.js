import { useEffect, useRef } from "react";

//convet date to '01/04/1993' formate
const convert = str => {
  var date = new Date(str),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
  return [day, mnth, date.getFullYear()].join("/");
};
//use previous value
const usePrevious = val => {
  const ref = useRef();
  useEffect(() => {
    ref.current = val;
  });
  return ref.current;
};

export { convert, usePrevious };
