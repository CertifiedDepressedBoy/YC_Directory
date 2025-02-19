import SearchForm from "../../components/SearchForm";
import * as querystring from "node:querystring";
import {promises} from "node:dns";

    export default async function Home({searchParams} : {searchParams : Promise<{query?: string}>}){
        const query = (await searchParams).query
  return (
    <>
    <section className="pink_container">
    <h1 className="heading">
        Pitch your Startup, <br/>
        Connect with Entrepreneurs
    </h1>

    <p className="sub-heading !max-w-3xl">
        Submit ideas, Vote on Pitches , and Get Noticed iin Virtual Competitions.
    </p>

    <SearchForm query={query} />

    </section>
    </>
  );
}
