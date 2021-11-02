import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import luffyImg from '../../images/luffy.png';
import jutsoSound from '../../sounds/jutso.mp3';
import { Quotes } from '../../components';
import { getQuote } from '../../services';

const audio = new Audio(jutsoSound);

export function App() {
  const isMounted = useRef(true);
  const [quote, setQuote] = useState({
    speaker: 'Loading speaker...',
    quote: 'Loading Quote'
  });

  const onUpdate = async () => {
    const resQuote = await getQuote();

    if (isMounted.current) {
      setQuote(resQuote);
      audio.play();
    }
  };

  useEffect(() => {
    onUpdate();

    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <Content>
      <Quotes {...quote} onUpdate={onUpdate} />
      <LuffyImg alt="Luffy Wano" src={luffyImg} />
    </Content>
  );
}

const Content = styled.div`
  height: 100vh;
  box-sizing: border-box;
  padding: 0 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const LuffyImg = styled.img`
  max-width: 40vw;
  max-height: 80vh;
  align-self: flex-end;
`;
