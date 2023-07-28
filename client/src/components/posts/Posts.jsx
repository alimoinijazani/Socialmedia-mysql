import './posts.scss';
import Post from './../post/Post';

const Posts = () => {
  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: 'John Doe',
      userId: 1,
      profilePic: 'register.jpeg',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
      img: 'register.jpeg',
    },
    {
      id: 2,
      name: 'Jane Doe',
      userId: 2,
      profilePic: 'register.jpeg',
      desc: 'Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.',
    },
  ];

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
