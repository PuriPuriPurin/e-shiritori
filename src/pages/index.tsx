import type { NextPage } from 'next';
import Head from 'next/head';
import { useDispatch } from 'react-redux';
import CommonHead from '../components/commonHead';
import { decrement, increment, slice } from '../slices/demo';
import { useSelector } from '../store';

const Home: NextPage = () => {
  const { count } = useSelector((state) => ({
    count: state.demo.count,
  }));
  const dispatch = useDispatch();

  return (
    <>
      <CommonHead />
      <Head>
        <title>NEXT.JS app template</title>
      </Head>
      <p>Counter Demo</p>
      <button type='button' onClick={() => dispatch(slice.actions.decrement(3))}>-3</button>
      <button type='button' onClick={() => dispatch(decrement(1))}>-1</button>
      <button type='button' onClick={() => dispatch(increment(1))}>1</button>
      <button type='button' onClick={() => dispatch(increment(3))}>3</button>
      <span>{count}</span>
    </>
  );
};

export default Home;
