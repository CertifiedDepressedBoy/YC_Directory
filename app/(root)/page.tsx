import SearchForm from "../../components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({searchParams}: { searchParams: Promise<{ query?: string }> }) {
    const query = (await searchParams).query;

    const posts = [
        {
            _createdAt : new Date() ,
            view : 55 ,
            author : { _id : 1 , name : 'Anonymous'} ,
            _id : 1 ,
            description : 'This is description.' ,
            image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKPmyDJE6Js6DUGFELNb0wxQnYioizuQVvIA&s" ,
            category : "Masks" ,
            title : "Mask" ,
        },{
            _createdAt : new Date() ,
            view : 55 ,
            author : { _id : 1 , name : 'Anonymous'} ,
            _id : 2 ,
            description : 'This is description.' ,
            image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKPmyDJE6Js6DUGFELNb0wxQnYioizuQVvIA&s" ,
            category : "Masks" ,
            title : "Mask" ,
        },{
            _createdAt : new Date() ,
            view : 55 ,
            author : { _id : 1 , name : 'Anonymous'} ,
            _id : 3 ,
            description : 'This is description.' ,
            image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKPmyDJE6Js6DUGFELNb0wxQnYioizuQVvIA&s" ,
            category : "Masks" ,
            title : "Mask" ,
        },{
            _createdAt : new Date() ,
            view : 55 ,
            author : { _id : 1 , name : 'Anonymous'} ,
            _id : 4 ,
            description : 'This is description.' ,
            image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKPmyDJE6Js6DUGFELNb0wxQnYioizuQVvIA&s" ,
            category : "Masks" ,
            title : "Mask" ,
        },
    ];
    return (
        <>
            <section className="pink_container">
                <h1 className="heading">
                    Pitch your Startup, <br/>
                    Connect with Entrepreneurs
                </h1>

                <p className="sub-heading !max-w-3xl">
                    Submit ideas, Vote on Pitches , and Get Noticed in Virtual Competitions.
                </p>
                <SearchForm query={query}/>
            </section>

            <section className={`section_container`}>
                <p className={`text-30-semibold text-center`}>
                    {query ? `Search result for "${query}"` : 'All startups'}
                </p>

                <ul className={`mt-7 card_grid`}>
                    {posts?.length > 0 ? (
                        posts.map((post : StartupCardType) => (
                            <StartupCard key={post?._id} post={post} />
                        ))
                    ):(
                        <p className='no-results'>No startups found.</p>
                    )}
                </ul>
            </section>
        </>
    );
}
