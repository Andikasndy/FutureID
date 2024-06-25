import { Link } from "@inertiajs/react";

const Pluginator =({meta}) =>{
    const prev = meta.links[0].url;
    const next = meta.links[meta.links.length - 1].url;
    const current = meta.current_page;    

    return(
        <div className="join flex justify-center items-center">
            { prev &&<Link href={prev} className="join-item btn">«</Link>}
            <Link className="join-item btn">{current}</Link>
            { next &&<Link  href={next} className="join-item btn">»</Link>}   
        </div>
    );
}

export default Pluginator;