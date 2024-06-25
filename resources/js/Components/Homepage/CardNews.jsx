import React from "react";

const MappNews = (news) =>{
    return news.map((data, i)=>{
        return(
            <div key={i} className="card w-96 bg-base-100 shadow-xl">
            <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{data.title}</h2>
                <p className="text-sm">{data.description}</p>
                <div className="card-actions justify-end">
                <div className="badge badge-outline">{data.category}</div> 
                <div className="badge badge-inline">{data.author}</div>
                </div>
            </div>
        </div>
        );
    })
}
const NoNews = () =>{
    return (
        <div>Saat ini sedang tidak ada news</div>
    )
}
const CardNews = ({news}) => {
    return !news ? NoNews() : MappNews(news)
   
}
export default CardNews;