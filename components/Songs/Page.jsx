import fetch from 'isomorphic-unfetch';

function Page({ song }) {
  <div>{props.song}
    
  </div>
  
}

Page.getInitialProps = async ({ req }) => {
  const res = await fetch('http://localhost:3210/profile');
  const json = await res.json();
  return { song: json.show }
}

export default Page