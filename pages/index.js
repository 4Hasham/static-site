import axios from 'axios'
import styles from '../styles/Home.module.css'

export const getStaticProps = async() => {
  const res = await fetch("http://uat.emiratesfinancial.co.uk/wp-json/wp/v2/posts/");
  const data = await res.json();
  return {
    props: {
      posts: data
    }
  }
}

const Home = ({posts}) => {
  return (
    <div className={styles.container}>
      <h1>Data</h1>
      {posts.length > 0 && (
      <div className='grid'>
        {posts.map(post => {
          return (
          <div className='card' key={post.id}>
            <h3>{post.title.rendered}</h3>
            <p><b>Date:</b> {post.date}</p>
          </div>
          );
        })}
      </div>
      )}
    </div>
  )
}

export default Home;