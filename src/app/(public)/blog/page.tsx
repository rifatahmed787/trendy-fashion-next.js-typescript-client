import Heading from "@/components/UI/Heading/Heading";
import Blog from "@/components/UI/Pages/Blog/Blog/Blog";
import React from "react";

const BlogPost = () => {
  return (
    <div>
      <div className="text-center py-10"><Heading Heading="Blog's"/></div>
      <Blog />
    </div>
  );
};

export default BlogPost;
