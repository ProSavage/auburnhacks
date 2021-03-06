import Head from 'next/head';
import styled from 'styled-components';
import dynamic from 'next/dynamic';

// server side rendering misses up the map :(
const MapWithNoSSR = dynamic(() => import('../components/map/map'), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Auburn Hacks</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <MainContainer>
      <SubContainer>
          <BigFont>What</BigFont>
          <WordContainer>
            <p>
              We are Auburn University’s programming event organized by
              students, for students. With this hackathon, Auburn University's
              Computer Science & Software Engineering comunity strives to
              promote technological innovation while highlighting our students
              abilities. Partnering with Major League Hacking (MLH), we aim to
              bring out the best and brightest students, not just from Auburn
              University but from other universities all over the United States.
            </p>
          </WordContainer>
        </SubContainer>
        <SubContainer>
          <BigFont>When</BigFont>
          <WordContainer>
          <p>
          AuburnHacks is currently planned for February 11th-12th in person.
          These dates are subject to change due to COVID-19</p>
          </WordContainer>
        </SubContainer>
        <SubContainer>
          <BigFont>Where</BigFont>
          <p>Auburn University Brown-Kopel</p>

          <MapContainer>
            <MapWithNoSSR />
          </MapContainer>

        </SubContainer>
       
      </MainContainer>
    </>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;
  padding: 1em 0;
  padding-top: 4em;
  flex-wrap: wrap;
`;
const SubContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  margin: 1rem;
  box-shadow: 0px 10px 35px rgba(52, 52, 52, 0.25);
  border-radius: 25px;
  
`;
const WordContainer = styled.div`
  text-align: left;
  padding: 1rem;
`;
const BigFont = styled.h3`
  font-weight: 600;
  font-size: 2em;
  line-height: 90px;
`;
const MapContainer = styled.div`
  height: 70vh;
  width: 100%;
`;
