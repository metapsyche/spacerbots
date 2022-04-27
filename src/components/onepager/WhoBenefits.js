import React, { Component } from 'react';

function Benefits() {
  return (
    <>
   <p className="exo2" style={{ fontWeight: "bold", fontSize: "40px", color: "white" }}>
    Who Benefits from MASH
    </p>
<div className="relative items-center justify-center">
    
    <div className="lg:flex items-center container mx-auto my-auto">

      <div className="lg:m-4 shadow-md hover:shadow-lg hover:bg-gray-100 rounded-lg bg-white my-12 mx-8">
          
          <img src="https://picsum.photos/id/29/2106/1404" alt=""className="overflow-hidden" />
          
          <div className="p-4">
            <h3 className="font-medium text-gray-600 text-lg my-2 uppercase">Content Creators</h3>
            <p className="text-justify">Uniting visual and audio creators through collaboration to engage and expand their reach, engage new fans, and accumulate new ongoing revenue streams.</p>
          </div>
        </div>

   
      
      <div className="lg:m-4 shadow-md hover:shadow-lg hover:bg-gray-100 rounded-lg bg-white my-12 mx-8">
       
        <img src="https://picsum.photos/id/247/2106/1404" alt=""className="overflow-hidden" />
       
        <div className="p-4">
          <h3 className="font-medium text-gray-600 text-lg my-2 uppercase">Collectors</h3>
          <p className="text-justify">Empowering artistic fans by engaging with audio and video artists of all levels and the freedom to create personalized NFTs representing how music and video speaks to them.</p>
        </div>
      </div>
     
      <div className="lg:m-4 shadow-md hover:shadow-lg hover:bg-gray-100 rounded-lg bg-white my-12 mx-8">
       
        <img src="https://picsum.photos/id/342/2106/1404" alt=""className="overflow-hidden" />
       
        <div className="p-4">
          <h3 className="font-medium text-gray-600 text-lg my-2 uppercase">Markets &amp; Investors</h3>
          <p className="text-justify">Music, videos, animation, poetry, and other forms of art get picked up for ads, movie ideas, and talent discovery via platforms like YouTube all the time. Now you can join in the success.</p>
        </div>
      </div> 

    </div>
   
  </div>

</>

  );
}

export default Benefits;
