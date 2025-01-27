import React from 'react'
import BlogCard from './BlogCard';

const data = [
  {
    img: "public/images/post__1.webp",
    title: "Healthy Food Healthy Life",
    date: "Aug 27, 2023",
    comment: 8,
  },
  {
    img: "public/images/post__2.webp",
    title: "Healthy Food Healthy Life",
    date: "Aug 25, 2023",
    comment: 1,
  },
  {
    img: "public/images/post__3.webp",
    title: "Healthy Food Healthy Life",
    date: "Aug 30, 2023",
    comment: 6,
  },
];

const BlogSection = () => {
  return (
    <div className='container pt-16'>
      <h2 className='font-bold text-2xl'>Latest News</h2>
      <p className='text-gray-500'>Present post in a best way to highlight interesting moments of your blog</p>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-5 pt-8'>
        {
        data.map((el) => (
          <BlogCard
          key={el.date}
          img={el.img}
          title={el.title}
          date={el.date}
          comment={el.comment} />
        ))
        }
      </div>

      
    </div>
  )
}

export default BlogSection
