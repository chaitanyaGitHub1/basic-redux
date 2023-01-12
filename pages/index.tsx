import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../sices/counterSlice";
import { RootState } from "../store";

const Home: NextPage = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <button
        className="w-full h-10 bg-green-50"
        onClick={() => dispatch(increment())}
      >
        {" "}
        {count}
      </button>
    </div>
  );
};

export default Home;
