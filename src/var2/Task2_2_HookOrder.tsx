import { useLayoutEffect, useEffect } from "react";


export  function Child() {
  useLayoutEffect(() => {
    console.log("Child: useLayoutEffect");
    return () => console.log("Child: useLayoutEffect cleanup");
  }, []);
  useEffect(() => {
    console.log("Child: useEffect");
    return () => console.log("Child: useEffect cleanup");
  }, []);
  console.log("Child: render");
  return <div>Child</div>;
}
export default function Parent() {
  useLayoutEffect(() => {
    console.log("Parent: useLayoutEffect");
  }, []);
  useEffect(() => {
    console.log("Parent: useEffect");
  }, []);
  console.log("Parent: render");
  return <Child />;
}
