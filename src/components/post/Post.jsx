import "./post.css"
import React from 'react'

export default function Post() {
  return (
    <div className="post">
      <img 
      className="postImg"
      src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
      alt="" 
      /> 
      <div className="postInfo">
          <div className="postCats">
              <span className="postCats">Music</span>
              <span className="postCats">Life</span>
          </div>
          <span className="postTitle">
              Lorem ipsum dolor sit am
          </span>
          <hr />
          <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit iusto maxime quibusdam voluptas saepe accusantium ipsum, nobis similique alias, facere, reprehenderit consequatur? Necessitatibus excepturi minus temporibus exercitationem possimus molestias esse.

          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi totam exercitationem voluptatum impedit aperiam, repellat tempora dolorum commodi dolorem dolor. Sint, nesciunt ullam quidem itaque amet quo est blanditiis sequi?

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dolor! Suscipit officiis nostrum dolorum porro libero nihil ratione voluptas est molestiae aliquam, cupiditate nemo ipsum? A debitis placeat nemo ad.
      </p>
    </div>
  )
}
